// StallSmart visual check: load dist/index.html from file:// (localhost is blocked
// by this Chromium build), click Load demo, parse the sample message, screenshot.
// Usage: node tests/shoot-stall.mjs ; env CDP_PORT (default 9227)
const port = Number(process.env.CDP_PORT || 9227);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
const page = targets.find((t) => t.type === 'page');
if (!page) throw new Error('no page target');
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const send = (m, p = {}) => new Promise((res, rej) => {
  const i = ++id; pending.set(i, { res, rej });
  ws.send(JSON.stringify({ id: i, method: m, params: p }));
});
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { res, rej } = pending.get(msg.id); pending.delete(msg.id);
    msg.error ? rej(new Error(msg.error.message)) : res(msg.result);
  }
};
const evalJs = async (expr) => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true })).result?.value;
const shot = async (name) => {
  const s = await send('Page.captureScreenshot', { format: 'png' });
  const { writeFileSync, mkdirSync } = await import('node:fs');
  mkdirSync(new URL('.', import.meta.url).pathname + 'shots', { recursive: true });
  const buf = Buffer.from(s.data, 'base64');
  writeFileSync(name, buf);
  console.log('wrote', name, buf.length, 'bytes');
};
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'file:///home/hatch/workspace/buildhybridai/app/dist/index.html' });
await sleep(3000);
await shot('tests/shots/stall-1-home.png');
await evalJs(`document.getElementById('btn-load-demo')?.click(); 'demo-clicked'`);
await sleep(1200);
await evalJs(`document.getElementById('btn-parse')?.click(); 'parse-clicked'`);
await sleep(2500);
await shot('tests/shots/stall-2-parsed.png');
const metrics = await evalJs(`JSON.stringify({scrollW: document.documentElement.scrollWidth, clientW: document.documentElement.clientWidth, demo: !!document.getElementById('demo-badge'), rows: document.querySelectorAll('#parsed-tbody tr').length, invRows: document.querySelectorAll('#inventory-tbody tr').length, revenue: document.getElementById('stat-revenue')?.textContent, profit: document.getElementById('stat-profit')?.textContent, cssLoaded: !!document.querySelector('link[rel=stylesheet]') && getComputedStyle(document.body).fontFamily.indexOf('Times') === -1, title: document.title})`);
console.log('METRICS', metrics);
ws.close();
process.exit(0);
