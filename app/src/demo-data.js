/**
 * demo-data.js
 *
 * Built-in sample data for demo mode (no Firebase keys required).
 * This data drives the full UI — parse display, inventory, sales log,
 * dashboard, and AI response simulation — so the app looks and works like
 * a real product even with placeholder Firebase config.
 *
 * NEVER claim these represent live AI calls. All demo AI results are
 * clearly labelled with the DEMO badge.
 */

// ---------------------------------------------------------------------------
// Sample supplier messages
// ---------------------------------------------------------------------------

/** Short messages (≤2 000 chars) — routed PREFER_ON_DEVICE in demo */
export const DEMO_MESSAGES_SHORT = [
  {
    id: "msg-001",
    label: "Morning delivery (rice & sugar)",
    text: `Hi, good morning! Here is today's delivery:
Beras 10kg x5 sacks @$12.00
Sugar 1kg x10 bags @$1.50
Cooking oil 1L x8 bottles @$2.20
Salt 500g x12 packs @$0.40
Please confirm receipt. Thanks - Pak Ahmad`,
  },
  {
    id: "msg-002",
    label: "Fresh produce order",
    text: `Delivery note - 20 Nov
Tomatoes 1kg x6 trays @$0.90
Onions 1kg x4 bags @$0.75
Garlic 250g x8 packs @$1.10
Chili 100g x10 packs @$0.60
Cabbage whole x5 heads @$0.50`,
  },
  {
    id: "msg-003",
    label: "Drinks restock",
    text: `Restock confirmation:
Mineral water 600ml x24 bottles @$0.25
Coconut water 330ml x12 cans @$0.80
Instant coffee sachet 20g x50 pcs @$0.15`,
  },
];

/** Long message (>2 000 chars) — routed PREFER_IN_CLOUD in demo */
export const DEMO_MESSAGE_LONG = {
  id: "msg-long-001",
  label: "Full weekly catalog (long — cloud route)",
  text: `WEEKLY SUPPLIER CATALOG — Maju Jaya Trading
Date: 20 November 2026
Delivery window: Mon–Fri 06:00–09:00

=== DRY GOODS ===
Beras Premium 5kg x20 sacks @$7.50
Beras Medium 10kg x15 sacks @$11.00
Tepung Terigu 1kg x30 bags @$0.90
Gula Pasir 1kg x25 bags @$1.45
Gula Merah 500g x20 packs @$1.20
Minyak Goreng 1L x18 bottles @$2.10
Minyak Goreng 2L x10 bottles @$3.90
Kecap Manis 135ml x24 bottles @$0.70
Kecap Asin 135ml x20 bottles @$0.65
Saus Tomat 340g x12 bottles @$1.00
Saus Sambal 340g x12 bottles @$1.10
Garam 500g x24 packs @$0.38
Merica 50g x20 packs @$0.55
Ketumbar 50g x20 packs @$0.50
Kunyit 50g x20 packs @$0.45

=== CANNED / PACKAGED ===
Sarden Kaleng 155g x48 tins @$0.95
Kornet Sapi 198g x24 tins @$1.80
Susu Kental Manis 395g x24 tins @$1.60
Mie Instant Goreng x60 pcs @$0.22
Mie Instant Kuah x60 pcs @$0.20
Biskuit Crackers 200g x30 packs @$0.80
Wafer Coklat 100g x36 packs @$0.55

=== BEVERAGES ===
Air Mineral 600ml x48 bottles @$0.22
Air Mineral 1500ml x24 bottles @$0.38
Teh Botol 350ml x24 bottles @$0.45
Kopi Botol 250ml x24 bottles @$0.60
Jus Jeruk 250ml x24 cartons @$0.75
Susu UHT 250ml x24 cartons @$0.80
Soda Kaleng 330ml x24 cans @$0.70

=== FRESH (pre-order only, min 2 days notice) ===
Telur Ayam per 10 pcs x10 trays @$1.80
Tahu Putih 500g x20 packs @$0.55
Tempe 250g x30 packs @$0.45
Bayam 250g x15 bundles @$0.35
Kangkung 250g x15 bundles @$0.30
Wortel 1kg x10 bags @$0.90
Kentang 1kg x10 bags @$1.10
Tomat 1kg x12 trays @$0.85

=== PERSONAL CARE / HOUSEHOLD ===
Sabun Mandi 80g x36 bars @$0.40
Shampo Sachet 10ml x100 pcs @$0.12
Pasta Gigi 75g x24 tubes @$0.95
Deterjen Bubuk 1kg x20 bags @$1.30
Softener 900ml x12 bottles @$2.20
Sabun Cuci Piring 755ml x12 bottles @$1.50

Payment terms: COD or transfer 1 day before delivery.
Min order: $50. Free delivery >$100.
Contact: 0812-3456-7890 / WhatsApp only.
Thank you for your order!`,
};

// ---------------------------------------------------------------------------
// Sample parsed results (what the AI would return for DEMO_MESSAGES_SHORT[0])
// ---------------------------------------------------------------------------

export const DEMO_PARSED_ITEMS = [
  { name: "Beras 10kg",    quantity: 5,  unit: "sack",   unitPriceUsd: 12.00 },
  { name: "Sugar 1kg",     quantity: 10, unit: "bag",    unitPriceUsd: 1.50  },
  { name: "Cooking oil 1L",quantity: 8,  unit: "bottle", unitPriceUsd: 2.20  },
  { name: "Salt 500g",     quantity: 12, unit: "pack",   unitPriceUsd: 0.40  },
];

// ---------------------------------------------------------------------------
// Sample inventory (pre-loaded stock for demo mode)
// ---------------------------------------------------------------------------

export const DEMO_STOCK = [
  {
    id: "stock-001",
    name: "Beras 10kg",
    quantity: 5,
    unit: "sack",
    unitPriceUsd: 12.00,
    source: "demo",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stock-002",
    name: "Sugar 1kg",
    quantity: 10,
    unit: "bag",
    unitPriceUsd: 1.50,
    source: "demo",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stock-003",
    name: "Cooking oil 1L",
    quantity: 8,
    unit: "bottle",
    unitPriceUsd: 2.20,
    source: "demo",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stock-004",
    name: "Salt 500g",
    quantity: 3,
    unit: "pack",
    unitPriceUsd: 0.40,
    source: "demo",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    // quantity 3 ≤ LOW_STOCK_THRESHOLD (5) → triggers low-stock flag
  },
  {
    id: "stock-005",
    name: "Mineral water 600ml",
    quantity: 24,
    unit: "bottle",
    unitPriceUsd: 0.25,
    source: "demo",
    createdAt: new Date().toISOString(),
  },
  {
    id: "stock-006",
    name: "Instant coffee sachet",
    quantity: 4,
    unit: "pcs",
    unitPriceUsd: 0.15,
    source: "demo",
    createdAt: new Date().toISOString(),
    // quantity 4 ≤ LOW_STOCK_THRESHOLD (5) → triggers low-stock flag
  },
];

// ---------------------------------------------------------------------------
// Sample sales (today's sales for demo dashboard)
// ---------------------------------------------------------------------------

const todayStart = new Date();
todayStart.setHours(0, 0, 0, 0);

export const DEMO_SALES = [
  {
    id: "sale-001",
    itemId: "stock-001",
    itemName: "Beras 10kg",
    quantity: 2,
    salePriceUsd: 14.50,
    costPriceUsd: 12.00,
    soldAt: new Date(todayStart.getTime() + 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "sale-002",
    itemId: "stock-002",
    itemName: "Sugar 1kg",
    quantity: 3,
    salePriceUsd: 2.00,
    costPriceUsd: 1.50,
    soldAt: new Date(todayStart.getTime() + 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "sale-003",
    itemId: "stock-003",
    itemName: "Cooking oil 1L",
    quantity: 2,
    salePriceUsd: 3.00,
    costPriceUsd: 2.20,
    soldAt: new Date(todayStart.getTime() + 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "sale-004",
    itemId: "stock-005",
    itemName: "Mineral water 600ml",
    quantity: 6,
    salePriceUsd: 0.40,
    costPriceUsd: 0.25,
    soldAt: new Date(todayStart.getTime() + 5 * 60 * 60 * 1000).toISOString(),
  },
];

// ---------------------------------------------------------------------------
// Canned AI demo responses (simulate on-device and cloud answers)
// ---------------------------------------------------------------------------

export const DEMO_ASK_RESPONSES = [
  {
    keywords: ["rice", "beras", "12", "$12"],
    inferenceSource: "ON_DEVICE",
    answer:
      "At $12.00 per sack (10 kg) you are paying $1.20 per kg. The typical retail range in most markets is $1.30–$1.60/kg, so your supplier price gives you a healthy margin of around 10–30% depending on how you price it. This looks like a good deal — lock in the quantity if you can.",
  },
  {
    keywords: ["profit", "margin", "revenue", "sales"],
    inferenceSource: "ON_DEVICE",
    answer:
      "Based on today's logged sales, your gross margin is around 25–35%. That is solid for staple goods. Focus on higher-margin items like cooking oil and packaged drinks to improve overall profitability.",
  },
  {
    keywords: ["stock", "inventory", "low", "reorder"],
    inferenceSource: "ON_DEVICE",
    answer:
      "You have two items flagged as low-stock: Salt 500g (3 units) and Instant coffee sachet (4 units). Consider reordering before they run out — both are fast-moving items.",
  },
];

/** Default fallback demo response */
export const DEMO_ASK_FALLBACK = {
  inferenceSource: "ON_DEVICE",
  answer:
    "Great question! As a market vendor, the best way to improve profit is to track your costs carefully and notice which items sell fastest. StallSmart helps you do exactly that — log every sale and your profit dashboard updates instantly.",
};

// ---------------------------------------------------------------------------
// Low-stock threshold (shared constant)
// ---------------------------------------------------------------------------

export const LOW_STOCK_THRESHOLD = 5;

// ---------------------------------------------------------------------------
// Canned AI dashboard summaries (shown when in demo mode)
// ---------------------------------------------------------------------------

/**
 * Daily summary — labelled DEMO, displayed with an ON_DEVICE badge to show
 * that daily summaries are routed on-device in the real app.
 */
export const DEMO_DAILY_SUMMARY = {
  inferenceSource: "ON_DEVICE",
  summary:
    "Great day at the stall! You sold 13 units across four products and earned a gross profit of $14.60 — roughly 24% margin. Beras 10kg was your top earner at $29.00 in revenue. Keep an eye on Salt 500g stock (only 3 left) before tomorrow's market.",
};

/**
 * Weekly summary — labelled DEMO, displayed with an IN_CLOUD badge to show
 * that weekly analysis is routed to the cloud in the real app.
 */
export const DEMO_WEEKLY_SUMMARY = {
  inferenceSource: "IN_CLOUD",
  summary:
    "This week you generated $218.40 in revenue at a total cost of $164.80, leaving a gross profit of $53.60 (24.5% margin).\n\nBest-selling item: Beras 10kg (38% of revenue). Most profitable: Cooking oil 1L (margin ~36%).\n\nRecommendation: Mineral water 600ml has high volume but thin margin. Consider bundling two bottles at a slight discount to increase basket size while moving more units during peak hours.",
};
