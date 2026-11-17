(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ot={},je={apiKey:"AIzaSyAaLRth1hUAFaRY6auL1-5zqqVZlHD5_TE",authDomain:"stallsmart-908a3.firebaseapp.com",projectId:"stallsmart-908a3",storageBucket:"stallsmart-908a3.firebasestorage.app",messagingSenderId:"732262114772",appId:"1:732262114772:web:db43bd475dac8d8087a241",measurementId:"G-P6K56EJ5M1"},Sn=typeof import.meta<"u"&&ot?ot:{},fe=Sn.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN||"00000000-0000-0000-0000-000000000000",wn="6LfwMiUuAAAAAKSCJE9S8jqythRiUNQS67WWpsLr",We={cloud_summary_max_chars:4e3};function Ke(){return je.apiKey.startsWith("PLACEHOLDER")}const Lt=[{id:"msg-001",label:"Morning delivery (rice & sugar)",text:`Hi, good morning! Here is today's delivery:
Beras 10kg x5 sacks @$12.00
Sugar 1kg x10 bags @$1.50
Cooking oil 1L x8 bottles @$2.20
Salt 500g x12 packs @$0.40
Please confirm receipt. Thanks - Pak Ahmad`},{id:"msg-002",label:"Fresh produce order",text:`Delivery note - 20 Nov
Tomatoes 1kg x6 trays @$0.90
Onions 1kg x4 bags @$0.75
Garlic 250g x8 packs @$1.10
Chili 100g x10 packs @$0.60
Cabbage whole x5 heads @$0.50`},{id:"msg-003",label:"Drinks restock",text:`Restock confirmation:
Mineral water 600ml x24 bottles @$0.25
Coconut water 330ml x12 cans @$0.80
Instant coffee sachet 20g x50 pcs @$0.15`}],Mt={id:"msg-long-001",label:"Full weekly catalog (long — cloud route)",text:`WEEKLY SUPPLIER CATALOG — Maju Jaya Trading
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
Thank you for your order!`},at=[{name:"Beras 10kg",quantity:5,unit:"sack",unitPriceUsd:12},{name:"Sugar 1kg",quantity:10,unit:"bag",unitPriceUsd:1.5},{name:"Cooking oil 1L",quantity:8,unit:"bottle",unitPriceUsd:2.2},{name:"Salt 500g",quantity:12,unit:"pack",unitPriceUsd:.4}],$t=[{id:"stock-001",name:"Beras 10kg",quantity:5,unit:"sack",unitPriceUsd:12,source:"demo",createdAt:new Date(Date.now()-2880*60*1e3).toISOString()},{id:"stock-002",name:"Sugar 1kg",quantity:10,unit:"bag",unitPriceUsd:1.5,source:"demo",createdAt:new Date(Date.now()-2880*60*1e3).toISOString()},{id:"stock-003",name:"Cooking oil 1L",quantity:8,unit:"bottle",unitPriceUsd:2.2,source:"demo",createdAt:new Date(Date.now()-1440*60*1e3).toISOString()},{id:"stock-004",name:"Salt 500g",quantity:3,unit:"pack",unitPriceUsd:.4,source:"demo",createdAt:new Date(Date.now()-1440*60*1e3).toISOString()},{id:"stock-005",name:"Mineral water 600ml",quantity:24,unit:"bottle",unitPriceUsd:.25,source:"demo",createdAt:new Date().toISOString()},{id:"stock-006",name:"Instant coffee sachet",quantity:4,unit:"pcs",unitPriceUsd:.15,source:"demo",createdAt:new Date().toISOString()}],ne=new Date;ne.setHours(0,0,0,0);const xt=[{id:"sale-001",itemId:"stock-001",itemName:"Beras 10kg",quantity:2,salePriceUsd:14.5,costPriceUsd:12,soldAt:new Date(ne.getTime()+7200*1e3).toISOString()},{id:"sale-002",itemId:"stock-002",itemName:"Sugar 1kg",quantity:3,salePriceUsd:2,costPriceUsd:1.5,soldAt:new Date(ne.getTime()+10800*1e3).toISOString()},{id:"sale-003",itemId:"stock-003",itemName:"Cooking oil 1L",quantity:2,salePriceUsd:3,costPriceUsd:2.2,soldAt:new Date(ne.getTime()+14400*1e3).toISOString()},{id:"sale-004",itemId:"stock-005",itemName:"Mineral water 600ml",quantity:6,salePriceUsd:.4,costPriceUsd:.25,soldAt:new Date(ne.getTime()+300*60*1e3).toISOString()}],On=[{keywords:["rice","beras","12","$12"],inferenceSource:"ON_DEVICE",answer:"At $12.00 per sack (10 kg) you are paying $1.20 per kg. The typical retail range in most markets is $1.30–$1.60/kg, so your supplier price gives you a healthy margin of around 10–30% depending on how you price it. This looks like a good deal — lock in the quantity if you can."},{keywords:["profit","margin","revenue","sales"],inferenceSource:"ON_DEVICE",answer:"Based on today's logged sales, your gross margin is around 25–35%. That is solid for staple goods. Focus on higher-margin items like cooking oil and packaged drinks to improve overall profitability."},{keywords:["stock","inventory","low","reorder"],inferenceSource:"ON_DEVICE",answer:"You have two items flagged as low-stock: Salt 500g (3 units) and Instant coffee sachet (4 units). Consider reordering before they run out — both are fast-moving items."}],In={inferenceSource:"ON_DEVICE",answer:"Great question! As a market vendor, the best way to improve profit is to track your costs carefully and notice which items sell fastest. StallSmart helps you do exactly that — log every sale and your profit dashboard updates instantly."},it=5,Cn={inferenceSource:"ON_DEVICE",summary:"Great day at the stall! You sold 13 units across four products and earned a gross profit of $14.60 — roughly 24% margin. Beras 10kg was your top earner at $29.00 in revenue. Keep an eye on Salt 500g stock (only 3 left) before tomorrow's market."},An={inferenceSource:"IN_CLOUD",summary:`This week you generated $218.40 in revenue at a total cost of $164.80, leaving a gross profit of $53.60 (24.5% margin).

Best-selling item: Beras 10kg (38% of revenue). Most profitable: Cooking oil 1L (margin ~36%).

Recommendation: Mineral water 600ml has high volume but thin margin. Consider bundling two bottles at a slight discount to increase basket size while moving more units during peak hours.`},Dn=()=>{};var ct={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(t,e){if(!t)throw Rn(e)},Rn=function(t){return new Error("Firebase Database ("+vn.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Tn=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],i=t[n++],l=((r&7)<<18|(o&63)<<12|(a&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ft={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,i=a?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=o>>2,f=(o&3)<<4|i>>4;let g=(i&15)<<2|c>>6,E=c&63;l||(E=64,a||(g=64)),s.push(n[d],n[f],n[g],n[E])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ut(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],i=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||i==null||c==null||f==null)throw new Nn;const g=o<<2|i>>4;if(s.push(g),c!==64){const E=i<<4&240|c>>2;if(s.push(E),f!==64){const y=c<<6&192|f;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kn=function(t){const e=Ut(t);return Ft.encodeByteArray(e,!0)},Ee=function(t){return kn(t).replace(/\./g,"")},$e=function(t){try{return Ft.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){return Bt(void 0,t)}function Bt(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pn(n)||(t[n]=Bt(t[n],e[n]));return t}function Pn(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=()=>Vt().__FIREBASE_DEFAULTS__,Mn=()=>{if(typeof process>"u"||typeof ct>"u")return;const t=ct.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$n=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$e(t[1]);return e&&JSON.parse(e)},Ce=()=>{try{return Dn()||Ln()||Mn()||$n()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xn=t=>{var e,n;return(n=(e=Ce())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Uo=t=>{const e=xn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qt=()=>{var t;return(t=Ce())==null?void 0:t.config},Fo=t=>{var e;return(e=Ce())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ee(JSON.stringify(n)),Ee(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function Gt(){var e;const t=(e=Ce())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ho(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Go(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jo(){const t=Ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wo(){return!Gt()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ko(){return!Gt()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Fn(){try{return typeof indexedDB=="object"}catch{return!1}}function Bn(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirebaseError";class K extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Vn,Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?qn(o,s):"Error",i=`${this.serviceName}: ${a} (${r}).`;return new K(r,i,s)}}function qn(t,e){try{let n=0,s="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){s+=t.substring(n);break}const o=t.indexOf("}",r+2);if(o===-1){s+=t.substring(n);break}const a=t.substring(r+2,o),i=e[a];s+=t.substring(n,r)+(i!=null?String(i):`<${a}?>`),n=o+1}return s}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return JSON.parse(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=function(t){let e={},n={},s={},r="";try{const o=t.split(".");e=lt($e(o[0])||""),n=lt($e(o[1])||""),r=o[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},zo=function(t){const e=Hn(t).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null};function Jo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xe(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],a=e[r];if(ut(o)&&ut(a)){if(!xe(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ut(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xo(t,e){const n=new Gn(t,e);return n.subscribe.bind(n)}class Gn{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jn(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=De),r.error===void 0&&(r.error=De),r.complete===void 0&&(r.complete=De);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jn(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function De(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e3,Kn=2,zn=14400*1e3,Jn=.5;function Qo(t,e=Wn,n=Kn){const s=e*Math.pow(n,t),r=Math.round(Jn*s*(Math.random()-.5)*2);return Math.min(zn,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ea(t){return(await fetch(t,{credentials:"include"})).ok}class oe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Un;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zn(e))try{this.getOrInitializeService({instanceIdentifier:V})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=V){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=V){return this.instances.has(e)}getOptions(e=V){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(o);s===i&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qn(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=V){return this.component?this.component.multipleInstances?e:V:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qn(t){return t===V?void 0:t}function Zn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const ts={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},ns=b.INFO,ss={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},rs=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ss[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wt{constructor(e){this.name=e,this._logLevel=ns,this._logHandler=rs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ts[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const os=(t,e)=>e.some(n=>t instanceof n);let dt,ft;function as(){return dt||(dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function is(){return ft||(ft=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kt=new WeakMap,Ue=new WeakMap,zt=new WeakMap,ve=new WeakMap,ze=new WeakMap;function cs(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(U(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Kt.set(n,t)}).catch(()=>{}),ze.set(e,t),e}function ls(t){if(Ue.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Ue.set(t,e)}let Fe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ue.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return U(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function us(t){Fe=t(Fe)}function ds(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Re(this),e,...n);return zt.set(s,e.sort?e.sort():[e]),U(s)}:is().includes(t)?function(...e){return t.apply(Re(this),e),U(Kt.get(this))}:function(...e){return U(t.apply(Re(this),e))}}function fs(t){return typeof t=="function"?ds(t):(t instanceof IDBTransaction&&ls(t),os(t,as())?new Proxy(t,Fe):t)}function U(t){if(t instanceof IDBRequest)return cs(t);if(ve.has(t))return ve.get(t);const e=fs(t);return e!==t&&(ve.set(t,e),ze.set(e,t)),e}const Re=t=>ze.get(t);function hs(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),i=U(a);return s&&a.addEventListener("upgradeneeded",l=>{s(U(a.result),l.oldVersion,l.newVersion,U(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),i.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),i}const ps=["get","getKey","getAll","getAllKeys","count"],ms=["put","add","delete","clear"],Te=new Map;function ht(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Te.get(e))return Te.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ms.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ps.includes(n)))return;const o=async function(a,...i){const l=this.transaction(a,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(i.shift())),(await Promise.all([c[n](...i),r&&l.done]))[0]};return Te.set(e,o),o}us(t=>({...t,get:(e,n,s)=>ht(e,n)||t.get(e,n,s),has:(e,n)=>!!ht(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ys(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ys(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Be="@firebase/app",pt="0.16.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Wt("@firebase/app"),Es="@firebase/app-compat",bs="@firebase/analytics-compat",_s="@firebase/analytics",Ss="@firebase/app-check-compat",ws="@firebase/app-check",Os="@firebase/auth",Is="@firebase/auth-compat",Cs="@firebase/crashlytics",As="@firebase/database",Ds="@firebase/data-connect",vs="@firebase/database-compat",Rs="@firebase/functions",Ts="@firebase/functions-compat",Ns="@firebase/installations",ks="@firebase/installations-compat",Ps="@firebase/messaging",Ls="@firebase/messaging-compat",Ms="@firebase/performance",$s="@firebase/performance-compat",xs="@firebase/remote-config",Us="@firebase/remote-config-compat",Fs="@firebase/storage",Bs="@firebase/storage-compat",Vs="@firebase/firestore",qs="@firebase/ai",Hs="@firebase/firestore-compat",Gs="firebase",js="13.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]",Ws={[Be]:"fire-core",[Es]:"fire-core-compat",[_s]:"fire-analytics",[bs]:"fire-analytics-compat",[ws]:"fire-app-check",[Ss]:"fire-app-check-compat",[Os]:"fire-auth",[Is]:"fire-auth-compat",[Cs]:"fire-cls",[As]:"fire-rtdb",[Ds]:"fire-data-connect",[vs]:"fire-rtdb-compat",[Rs]:"fire-fn",[Ts]:"fire-fn-compat",[Ns]:"fire-iid",[ks]:"fire-iid-compat",[Ps]:"fire-fcm",[Ls]:"fire-fcm-compat",[Ms]:"fire-perf",[$s]:"fire-perf-compat",[xs]:"fire-rc",[Us]:"fire-rc-compat",[Fs]:"fire-gcs",[Bs]:"fire-gcs-compat",[Vs]:"fire-fst",[Hs]:"fire-fst-compat",[qs]:"fire-vertex","fire-js":"fire-js",[Gs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Map,Jt=new Map,_e=new Map;function Ve(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ie(t){const e=t.name;if(_e.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;_e.set(e,t);for(const n of ae.values())Ve(n,t);for(const n of Jt.values())Ve(n,t);return!0}function Yt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},L=new jt("app","Firebase",Ks);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=js;function Je(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:be,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw L.create("bad-app-name",{appName:String(r)});if(n||(n=qt()),!n)throw L.create("no-options");const o=ae.get(r);if(o)if(xe(n,o.options)){if(xe(s,o.config))return o;throw L.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(o.config),newValue:JSON.stringify(s)})}else throw L.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(o.options),newValue:JSON.stringify(n)});const a=new es(r);for(const l of _e.values())a.addComponent(l);const i=new zs(n,s,a);return ae.set(r,i),i}function Ye(t=be){const e=ae.get(t);if(!e&&t===be&&qt())return Je();if(!e)throw L.create("no-app",{appName:t});return e}function j(t,e,n){let s=Ws[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),N.warn(a.join(" "));return}ie(new oe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="firebase-heartbeat-database",Xs=1,ce="firebase-heartbeat-store";let Ne=null;function Qt(){return Ne||(Ne=hs(Ys,Xs,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ce)}catch(n){console.warn(n)}}}}).catch(t=>{throw L.create("idb-open",{originalErrorMessage:t.message})})),Ne}async function Qs(t){try{const n=(await Qt()).transaction(ce),s=await n.objectStore(ce).get(Zt(t));return await n.done,s}catch(e){if(e instanceof K)N.warn(e.message);else{const n=L.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});N.warn(n.message)}}}async function mt(t,e){try{const s=(await Qt()).transaction(ce,"readwrite");await s.objectStore(ce).put(e,Zt(t)),await s.done}catch(n){if(n instanceof K)N.warn(n.message);else{const s=L.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});N.warn(s.message)}}}function Zt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=1024,er=30;class tr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sr(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=gt();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>er){const a=rr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){N.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gt(),{heartbeatsToSend:s,unsentEntries:r}=nr(this._heartbeatsCache.heartbeats),o=Ee(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return N.warn(n),""}}}function gt(){return new Date().toISOString().substring(0,10)}function nr(t,e=Zs){const n=[];let s=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),yt(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fn()?Bn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return mt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return mt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yt(t){return Ee(JSON.stringify({version:2,heartbeats:t})).length}function rr(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){ie(new oe("platform-logger",e=>new gs(e),"PRIVATE")),ie(new oe("heartbeat",e=>new tr(e),"PRIVATE")),j(Be,pt,t),j(Be,pt,"esm2020"),j("fire-js","")}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="firebase-js-sdk-policy",ar=["https://www.googletagmanager.com/gtag/js","https://apis.google.com/js/api.js","https://www.google.com/recaptcha/api.js","https://www.google.com/recaptcha/enterprise.js"];let he,en=!1;function tn(t){if(!ar.some(n=>t.startsWith(n)&&(t.length===n.length||t.charAt(n.length)==="?")))throw new TypeError(`Firebase: Refusing to load untrusted script URL: ${t}`);return t}function ir(){if(he===void 0){he=null;const t=typeof window<"u"?window.trustedTypes:void 0;if(t!=null&&t.createPolicy)try{he=t.createPolicy(qe,{createScriptURL:tn})}catch{en=!0}}return he}function cr(t,e){tn(e);const n=ir();if(n){t.src=n.createScriptURL(e);return}try{t.src=e}catch(s){throw en&&N.error(`Unable to load ${e} because this page requires Trusted Types for scripts but does not allow the "${qe}" Trusted Types policy. To fix this, add "${qe}" to the trusted-types directive of the page's Content-Security-Policy.`),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or("");var lr="firebase",ur="13.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */j(lr,ur,"app");const dr=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:K,SDK_VERSION:Js,_DEFAULT_ENTRY_NAME:be,_addComponent:Ve,_apps:ae,_components:_e,_getProvider:Yt,_isFirebaseServerApp:Xt,_registerComponent:ie,_serverApps:Jt,_setTrustedScriptSrc:cr,getApp:Ye,initializeApp:Je,registerVersion:j},Symbol.toStringTag,{value:"Module"}));var Et="@firebase/ai",He="3.1.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="AI",fr="global",hr="firebasevertexai.googleapis.com",Se="v1beta",bt=He,pr="gl-js",mr="hybrid",gr=180*1e3,yr="gemini-3.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends K{constructor(e,n,s){const r=X,o=`${r}/${e}`,a=`${r}: ${n} (${o})`;super(e,a),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,p),Object.setPrototypeOf(this,p.prototype),this.toString=()=>a}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=["user","model","function","system"],nn={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},O={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},A={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},R={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",ALREADY_INITIALIZED:"already-initialized",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.backendType=e}}class Xe extends sn{constructor(){super(x.GOOGLE_AI)}_getModelPath(e,n){return`/${Se}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${Se}/projects/${e}/templates/${n}`}}class rn extends sn{constructor(e){super(x.AGENT_PLATFORM),this.location=fr,e&&(this.location=e)}_getModelPath(e,n){return`/${Se}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${Se}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){if(t instanceof Xe)return`${X}/googleai`;if(t instanceof rn)return`${X}/agentplatform/${t.location}`;throw new p(h.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function br(t){const e=t.split("/");if(e[0]!==X)throw new p(h.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":const s=e[2];if(!s)throw new p(h.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new rn(s);case"googleai":return new Xe;default:throw new p(h.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Wt("@firebase/ai");var P;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(P||(P={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on={type:"text",languages:["en"]},ke=[on,{type:"image"}],Pe=[on];class v{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:ke,expectedOutputs:Pe}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=ke),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=Pe)):this.onDeviceParams.createOptions={expectedInputs:ke,expectedOutputs:Pe})}async isAvailable(e){var s;if(!this.mode)return _.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===A.ONLY_IN_CLOUD)return _.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));if(this.mode===A.ONLY_ON_DEVICE){if(n===P.UNAVAILABLE)throw new p(h.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===P.DOWNLOADABLE||n===P.DOWNLOADING){_.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(r){throw new p(h.ERROR,r.message)}return!0}return!0}return n!==P.AVAILABLE?(_.debug(`On-device inference unavailable because availability is "${n}".`),!1):v.isOnDeviceRequest(e)?!0:(_.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(v.toLanguageModelMessage)),r=await n.prompt(s,this.onDeviceParams.promptOptions);return v.toResponse(r)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(v.toLanguageModelMessage)),r=n.promptStreaming(s,this.onDeviceParams.promptOptions);return v.toStreamResponse(r)}async countTokens(e){throw new p(h.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return _.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return _.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if("inlineData"in s&&s.inlineData&&v.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return _.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var s;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return(n===P.DOWNLOADABLE||n===P.DOWNLOADING)&&this.download(e),n}download(e){var s;if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=r=>{r.addEventListener("downloadprogress",o=>{e(o.loaded)})}),this.downloadPromise=(s=this.languageModelProvider)==null?void 0:s.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(v.toLanguageModelMessageContent));return{role:v.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new p(h.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new p(h.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,r){const o=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});r.enqueue(n.encode(`data: ${o}

`))}}))}}}v.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function _r(t,e,n){const r=(e||Vt()).LanguageModel;if(r&&t)return new v(r,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,s,r,o){this.app=e,this.backend=n,this.chromeAdapterFactory=o;const a=r==null?void 0:r.getImmediate({optional:!0}),i=s==null?void 0:s.getImmediate({optional:!0});this.auth=i||null,this.appCheck=a||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,{instanceIdentifier:e}){if(!e)throw new p(h.ERROR,"AIService instance identifier is undefined.");const n=br(e),s=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Sr(s,n,r,o,_r)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){var n,s,r,o,a,i,l;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((o=(r=t.app)==null?void 0:r.options)!=null&&o.projectId){if(!((i=(a=t.app)==null?void 0:a.options)!=null&&i.appId))throw new p(h.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new p(h.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new p(h.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,backend:t.backend};if(Xt(t.app)&&t.app.settings.appCheckToken){const c=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:c})}else t.appCheck&&((l=t.options)!=null&&l.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this._apiSettings=Or(e),this.model=re.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===x.GOOGLE_AI?re.normalizeGoogleAIModelName(e):re.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="Timeout has expired.",Le="AbortError";class Cr{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${hr}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function Ar(t){const e=[];return e.push(`${pr}/${bt}`),e.push(`fire/${bt}`),(t.params.apiSettings.inferenceMode===A.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===A.PREFER_IN_CLOUD)&&e.push(mr),e.join(" ")}async function Dr(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",Ar(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&_.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function Qe(t,e){var c,d;const n=new Cr(t);let s;const r=(c=t.singleRequestOptions)==null?void 0:c.signal,o=((d=t.singleRequestOptions)==null?void 0:d.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:gr,a=new AbortController,i=setTimeout(()=>{a.abort(new DOMException(Ir,Le)),_.debug(`Aborting request to ${n} due to timeout (${o}ms)`)},o),l=AbortSignal.any(r?[r,a.signal]:[a.signal]);if(r&&r.aborted)throw clearTimeout(i),new DOMException(r.reason??"Aborted externally before fetch",Le);try{const f={method:"POST",headers:await Dr(n),signal:l,body:e};if(s=await fetch(n.toString(),f),!s.ok){let g="",E;try{const y=await s.json();g=y.error.message,y.error.details&&(g+=` ${JSON.stringify(y.error.details)}`,E=y.error.details)}catch{}throw s.status===403&&E&&E.some(y=>y.reason==="SERVICE_DISABLED")&&E.some(y=>{var I,D;return(D=(I=y.links)==null?void 0:I[0])==null?void 0:D.description.includes("Google developers console API activation")})?new p(h.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:E}):new p(h.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${g}`,{status:s.status,statusText:s.statusText,errorDetails:E})}}catch(f){let g=f;throw f.code!==h.FETCH_ERROR&&f.code!==h.API_NOT_ENABLED&&f instanceof Error&&f.name!==Le&&(g=new p(h.ERROR,`Error fetching from ${n.toString()}: ${f.message}`),g.stack=f.stack),g}finally{clearTimeout(i)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&_.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),cn(t.candidates[0]))throw new p(h.RESPONSE_ERROR,`Response error: ${q(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function k(t){return"type"in t&&t.type?t:t.text!==void 0?{...t,type:"text"}:t.inlineData!==void 0?{...t,type:"inlineData"}:t.functionCall!==void 0?{...t,type:"functionCall"}:t.functionResponse!==void 0?{...t,type:"functionResponse"}:t.fileData!==void 0?{...t,type:"fileData"}:t.executableCode!==void 0?{...t,type:"executableCode"}:t.codeExecutionResult!==void 0?{...t,type:"codeExecutionResult"}:t}function we(t,e=R.IN_CLOUD){var s,r;if((s=t.candidates)!=null&&s[0]&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),t.candidates)for(const o of t.candidates)(r=o.content)!=null&&r.parts&&(o.content.parts=o.content.parts.map(k));const n=vr(t);return n.inferenceSource=e,n}function vr(t){return t.text=()=>{if(pe(t))return St(t,e=>!("thought"in e&&e.thought));if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Text not available. ${q(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(pe(t)){const e=St(t,n=>!!("thought"in n&&n.thought));return e===""?void 0:e}else if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Thought summary not available. ${q(t)}`,{response:t})},t.inlineDataParts=()=>{if(pe(t))return Rr(t);if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Data not available. ${q(t)}`,{response:t})},t.functionCalls=()=>{if(pe(t))return an(t);if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Function call not available. ${q(t)}`,{response:t})},t}function St(t,e){var s,r,o,a;const n=[];if((r=(s=t.candidates)==null?void 0:s[0].content)!=null&&r.parts)for(const i of(a=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:a.parts){const l=k(i);l.type==="text"&&e(l)&&n.push(l.text)}return n.length>0?n.join(""):""}function an(t){var n,s,r,o;if(!t)return;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(o=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:o.parts){const i=k(a);i.type==="functionCall"&&e.push(i.functionCall)}if(e.length>0)return e}function Rr(t){var n,s,r,o;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(o=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:o.parts){const i=k(a);i.type==="inlineData"&&e.push(i)}if(e.length>0)return e}const Tr=[O.RECITATION,O.SAFETY,O.BLOCKLIST,O.PROHIBITED_CONTENT,O.SPII,O.MALFORMED_FUNCTION_CALL,O.IMAGE_SAFETY,O.IMAGE_PROHIBITED_CONTENT,O.IMAGE_OTHER,O.NO_IMAGE,O.IMAGE_RECITATION,O.LANGUAGE,O.UNEXPECTED_TOOL_CALL,O.TOO_MANY_TOOL_CALLS,O.MISSING_THOUGHT_SIGNATURE,O.MALFORMED_RESPONSE];function cn(t){return!!t.finishReason&&Tr.some(e=>e===t.finishReason)}function q(t){var n,s,r;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((r=t.candidates)!=null&&r[0]){const o=t.candidates[0];cn(o)&&(e+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(e+=`: ${o.finishMessage}`))}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{type:"text",text:t}]};if(t.type==="text"||"text"in t&&typeof t.text=="string")return{role:"system",parts:[G(k(t))]};if(t.parts){const e=t.parts.map(n=>G(k(n)));return t.role?{...t,parts:e}:{role:"system",parts:e}}}}function se(t){let e=[];if(typeof t=="string")e=[{type:"text",text:t}];else for(const n of t)typeof n=="string"?e.push({type:"text",text:n}):e.push(G(k(n)));return Nr(e)}function Nr(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const r of t)r.type==="functionResponse"||"functionResponse"in r?s=!0:n=!0,e.parts.push(r);if(n&&s)throw new p(h.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new p(h.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function Me(t){let e;if(t.contents){const n=t;e={...n,contents:n.contents.map(s=>({...s,parts:s.parts?s.parts.map(k):[]}))}}else e={contents:[se(t)]};return t.systemInstruction&&(e.systemInstruction=Ze(t.systemInstruction)),e}function kr(t){return t.parts&&Array.isArray(t.parts)?{...t,parts:t.parts.map(et)}:t}function et(t){let e;if("type"in t){const{type:n,...s}=t;e=s}else e=t;return e.functionResponse&&(e={...e,functionResponse:kr(e.functionResponse)}),e}function tt(t){return t.parts?{...t,parts:t.parts.map(et)}:t}function ln(t){return t==null||typeof t=="string"?t:"parts"in t&&Array.isArray(t.parts)?tt(t):et(t)}function un(t){const e={...t};return e.contents&&(e.contents=e.contents.map(tt)),e.systemInstruction&&(e.systemInstruction=ln(e.systemInstruction)),e}function Pr(t){const e={...t};return e.contents&&(e.contents=e.contents.map(tt)),e.systemInstruction&&(e.systemInstruction=ln(e.systemInstruction)),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new p(h.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(_.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function nt(t){return{candidates:t.candidates?Mr(t.candidates):void 0,promptFeedback:t.promptFeedback?$r(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Lr(t,e){return{generateContentRequest:{model:e,...t}}}function Mr(t){const e=[];let n;return e&&t.forEach(s=>{var a,i;let r;if(s.citationMetadata&&(r={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(l=>({...l,severity:l.severity??nn.HARM_SEVERITY_UNSUPPORTED,probabilityScore:l.probabilityScore??0,severityScore:l.severityScore??0}))),(i=(a=s.content)==null?void 0:a.parts)!=null&&i.some(l=>"videoMetadata"in l&&l.videoMetadata))throw new p(h.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const o={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:r,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(o)}),e}function $r(t){const e=[];return(t.safetyRatings??[]).forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??nn.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function xr(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=Vr(s),[o,a]=r.tee(),{response:i,firstValue:l}=await Ur(a,e,n);return{stream:Br(o,e,n),response:i,firstValue:l}}async function Ur(t,e,n){const[s,r]=t.tee(),o=s.getReader(),{value:a}=await o.read();return{firstValue:a,response:Fr(r,e,n)}}async function Fr(t,e,n){const s=[],r=t.getReader();for(;;){const{done:o,value:a}=await r.read();if(o){let i=qr(s);return e.backend.backendType===x.GOOGLE_AI&&(i=nt(i)),we(i,n)}s.push(a)}}async function*Br(t,e,n){var r,o;const s=t.getReader();for(;;){const{value:a,done:i}=await s.read();if(i)break;let l;e.backend.backendType===x.GOOGLE_AI?l=we(nt(a),n):l=we(a,n);const c=(r=l.candidates)==null?void 0:r[0];!((o=c==null?void 0:c.content)!=null&&o.parts)&&!(c!=null&&c.finishReason)&&!(c!=null&&c.citationMetadata)&&!(c!=null&&c.urlContextMetadata)||(yield l)}}function Vr(t){const e=t.getReader();return new ReadableStream({start(s){let r="";return o();function o(){return e.read().then(({value:a,done:i})=>{if(i){if(r.trim()){s.error(new p(h.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}r+=a;let l=r.match(wt),c;for(;l;){try{c=JSON.parse(l[1])}catch{s.error(new p(h.PARSE_FAILED,`Error parsing JSON response: "${l[1]}`));return}s.enqueue(c),r=r.substring(l[0].length),l=r.match(wt)}return o()})}}})}function qr(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const r of s.candidates){const o=r.index||0;n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:r.index}),n.candidates[o].citationMetadata=r.citationMetadata,n.candidates[o].finishReason=r.finishReason,n.candidates[o].finishMessage=r.finishMessage,n.candidates[o].safetyRatings=r.safetyRatings,n.candidates[o].groundingMetadata=r.groundingMetadata;const a=r.urlContextMetadata;if(typeof a=="object"&&a!==null&&Object.keys(a).length>0&&(n.candidates[o].urlContextMetadata=a),r.content){if(!r.content.parts)continue;n.candidates[o].content||(n.candidates[o].content={role:r.content.role||"user",parts:[]});for(const i of r.content.parts){if("text"in i&&i.text==="")continue;if(Object.keys(i).length===0)throw new p(h.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");const l=k({...i});Object.keys(l).length>0&&n.candidates[o].content.parts.push(l)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=[h.FETCH_ERROR,h.ERROR,h.API_NOT_ENABLED];async function fn(t,e,n,s){if(!e)return{response:await s(),inferenceSource:R.IN_CLOUD};switch(e.mode){case A.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:R.ON_DEVICE};throw new p(h.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case A.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:R.IN_CLOUD};case A.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:R.IN_CLOUD}}catch(r){if(r instanceof p&&Hr.includes(r.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:R.ON_DEVICE};throw r}case A.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:R.ON_DEVICE}:{response:await s(),inferenceSource:R.IN_CLOUD};default:throw new p(h.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n,s){return n=un(n),t.backend.backendType===x.GOOGLE_AI&&(n=dn(n)),Qe({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function hn(t,e,n,s,r){const o=await fn(n,s,()=>s.generateContentStream(n),()=>Gr(t,e,n,r));return xr(o.response,t,o.inferenceSource)}async function jr(t,e,n,s){return n=un(n),t.backend.backendType===x.GOOGLE_AI&&(n=dn(n)),Qe({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function pn(t,e,n,s,r){const o=await fn(n,s,()=>s.generateContent(n),()=>jr(t,e,n,r)),a=await Wr(o.response,t);return{response:we(a,o.inferenceSource)}}async function Wr(t,e){const n=await t.json();return e.backend.backendType===x.GOOGLE_AI?nt(n):n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="SILENT_ERROR",It=10;class Kr{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,G(this._history).map(e=>({...e,parts:e.parts?e.parts.map(k):[]}))}async _sendMessage(e,n){let s={};await this._sendPromise;const r=[];return this._sendPromise=this._sendPromise.then(async()=>{var l,c,d;let o,a=0;const i=((l=this.requestOptions)==null?void 0:l.maxSequentialFunctionCalls)??It;do{let f;if(o){a++;const y=await this._callFunctionsAsNeeded(o);f=se(y)}else f=se(e);const g=this._formatRequest(f,[...r]);r.push(f);const E=await this._callGenerateContent(g,n);if(E)if(s=E,o=this._getCallableFunctionCalls(E.response),E.response.candidates&&E.response.candidates.length>0){const y={parts:((c=E.response.candidates)==null?void 0:c[0].content.parts)||[],role:((d=E.response.candidates)==null?void 0:d[0].content.role)||"model"};r.push(G(y))}else{const y=q(E.response);y&&_.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}else o=void 0}while(o&&a<i);o&&a>=i&&_.warn(`Automatic function calling exceeded the limit of ${i} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(r),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],o=(async()=>{var d;let a,i=0;const l=((d=this.requestOptions)==null?void 0:d.maxSequentialFunctionCalls)??It;let c;do{let f;if(a){i++;const E=await this._callFunctionsAsNeeded(a);f=se(E)}else f=se(e);const g=this._formatRequest(f,[...s]);if(s.push(f),c=await this._callGenerateContentStream(g,n),a=this._getCallableFunctionCalls(c.firstValue),a&&c.firstValue&&c.firstValue.candidates&&c.firstValue.candidates.length>0){const E={...c.firstValue.candidates[0].content};E.role||(E.role="model"),s.push(E)}}while(a&&i<l);return a&&i>=l&&_.warn(`Automatic function calling exceeded the limit of ${l} function calls. Returning last model response.`),{stream:c.stream,response:c.response}})();return this._sendPromise=this._sendPromise.then(async()=>o).catch(a=>{throw new Error(Ot)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history=this._history.concat(s);const i={...a.candidates[0].content};i.role||(i.role="model"),this._history.push(G(i))}else{const i=q(a);i&&_.warn(`sendMessageStream() was unsuccessful. ${i}. Inspect response object for details.`)}}).catch(a=>{a.message!==Ot&&a.name!=="AbortError"&&_.error(a)}),o}_getCallableFunctionCalls(e){var r,o,a;const n=(o=(r=this.params)==null?void 0:r.tools)==null?void 0:o.find(i=>i.functionDeclarations);if(!(n!=null&&n.functionDeclarations))return;const s=an(e);if(s){for(const i of s)if(!((a=n.functionDeclarations)==null?void 0:a.some(c=>c.name===i.name&&typeof c.functionReference=="function")))return;return s}}async _callFunctionsAsNeeded(e){var o,a;const n=[],s=[],r=(a=(o=this.params)==null?void 0:o.tools)==null?void 0:a.find(i=>i.functionDeclarations);if(r&&r.functionDeclarations){for(const l of e){const c=r.functionDeclarations.find(d=>d.name===l.name);if(c!=null&&c.functionReference){const d=Promise.resolve(c.functionReference(l.args)).catch(f=>{const g=new p(h.ERROR,`Error in user-defined function "${c.name}": ${f.message}`);throw g.stack=f.stack,g});n.push({name:l.name,id:l.id,results:d}),s.push(d)}}await Promise.all(s);const i=[];for(const{name:l,id:c,results:d}of n){const f={name:l,response:await d};c&&(f.id=c),i.push({type:"functionResponse",functionResponse:f})}return i}else throw new p(h.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],Jr={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Ct={user:["model"],function:["model"],model:["user","function"],system:[]};function Yr(t){let e=null;for(const n of t){const{role:s,parts:r}=n;if(!e&&s!=="user")throw new p(h.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!_t.includes(s))throw new p(h.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(_t)}`);if(!Array.isArray(r))throw new p(h.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new p(h.INVALID_CONTENT,"Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const i of r){if(i.type)o[i.type]+=1;else for(const l of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])l in i&&(o[l]+=1);"thought"in i&&i.thought&&(o.thought+=1),"thoughtSignature"in i&&i.thoughtSignature&&(o.thoughtSignature+=1)}const a=Jr[s];for(const i of zr)if(!a.includes(i)&&o[i]>0)throw new p(h.INVALID_CONTENT,`Content with role '${s}' can't contain '${i}' part`);if(e&&!Ct[s].includes(e.role))throw new p(h.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Ct)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Kr{constructor(e,n,s,r,o){var a;super(e,r,o),this.model=n,this.chromeAdapter=s,this.params=r,this.requestOptions=o,r!=null&&r.history&&(Yr(r.history),this._history=G(r.history)),((a=this.params)==null?void 0:a.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:Ze(this.params.systemInstruction)})}_formatRequest(e,n){var s,r,o,a,i;return{safetySettings:(s=this.params)==null?void 0:s.safetySettings,generationConfig:(r=this.params)==null?void 0:r.generationConfig,tools:(o=this.params)==null?void 0:o.tools,toolConfig:(a=this.params)==null?void 0:a.toolConfig,systemInstruction:(i=this.params)==null?void 0:i.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return pn(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return hn(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e,n,s){n=Pr(n);let r="";if(t.backend.backendType===x.GOOGLE_AI){const a=Lr(n,e);r=JSON.stringify(a)}else r=JSON.stringify(n);return(await Qe({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},r)).json()}async function Zr(t,e,n,s,r){if((s==null?void 0:s.mode)===A.ONLY_ON_DEVICE)throw new p(h.UNSUPPORTED,"countTokens() is not supported for on-device models.");return Qr(t,e,n,r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends re{constructor(e,n,s,r){super(e,n.model),this.chromeAdapter=r,this.generationConfig=n.generationConfig||{},to(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ze(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===A.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===P.UNAVAILABLE){const s=new p(h.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===A.ONLY_ON_DEVICE)throw s;_.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=Me(e);return pn(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=Me(e),{stream:r,response:o}=await hn(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:r,response:o}}startChat(e){return new Xr(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=Me(e);return Zr(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function to(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new p(h.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new p(h.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new p(h.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){if(!e.type&&!e.anyOf)throw new p(h.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const n in e)this[n]=e[n];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){const e={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===z.OBJECT)&&(e[n]=this[n]);return e}static array(e){return new oo(e,e.items)}static object(e){return new ao(e,e.properties,e.optionalProperties)}static string(e){return new At(e)}static enumString(e){return new At(e,e.enum)}static integer(e){return new no(e)}static number(e){return new so(e)}static boolean(e){return new ro(e)}static anyOf(e){return new io(e)}}class no extends C{constructor(e){super({type:z.INTEGER,...e})}}class so extends C{constructor(e){super({type:z.NUMBER,...e})}}class ro extends C{constructor(e){super({type:z.BOOLEAN,...e})}}class At extends C{constructor(e,n){super({type:z.STRING,...e}),this.enum=n}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class oo extends C{constructor(e,n){super({type:z.ARRAY,...e}),this.items=n}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class ao extends C{constructor(e,n,s=[]){super({type:z.OBJECT,...e}),this.properties=n,this.optionalProperties=s}toJSON(){const e=super.toJSON();e.properties={...this.properties};const n=[];if(this.optionalProperties){for(const s of this.optionalProperties)if(!this.properties.hasOwnProperty(s))throw new p(h.INVALID_SCHEMA,`Property "${s}" specified in "optionalProperties" does not exist.`)}for(const s in this.properties)this.properties.hasOwnProperty(s)&&(e.properties[s]=this.properties[s].toJSON(),this.optionalProperties.includes(s)||n.push(s));return n.length>0&&(e.required=n),delete e.optionalProperties,e}}class io extends C{constructor(e){if(e.anyOf.length===0)throw new p(h.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(n=>n.toJSON())),e}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t=Ye(),e){t=Yn(t);const n=Yt(t,X),s=new Xe,r=Er(s),o=n.getImmediate({identifier:r}),a=o.options;return a?(a.useLimitedUseAppCheckTokens,o):(o.options={useLimitedUseAppCheckTokens:!1},o)}const co=["mode","onDeviceParams","inCloudParams"];function vt(t,e,n){var i;const s=e;let r;if(s.mode){for(const l of Object.keys(e))co.includes(l)||_.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${l}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);r=s.inCloudParams||{model:yr}}else r=e;if(!r.model)throw new p(h.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const o=(i=t.chromeAdapterFactory)==null?void 0:i.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),a=new eo(t,r,n,o);return a._apiSettings.inferenceMode=s.mode,a}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(){ie(new oe(X,wr,"PUBLIC").setMultipleInstances(!0)),j(Et,He),j(Et,He,"esm2020")}lo();const ee=Ke();let ue=null,le=null,Rt=!1;function de(){if(Rt||ee)return;Rt=!0;let t;try{t=Ye()}catch{t=Je(je)}const e=Dt(t);ue=vt(e,{mode:A.PREFER_ON_DEVICE,inCloudParams:{model:"gemini-2.5-flash-lite"}});const n=Dt(t);le=vt(n,{mode:A.PREFER_IN_CLOUD,inCloudParams:{model:"gemini-2.5-flash-lite"}})}const uo=C.array({items:C.object({properties:{name:C.string({description:"Product or item name"}),quantity:C.number({description:"Quantity delivered"}),unit:C.string({description:"Unit (sack, bag, bottle, pcs, etc.)"}),unitPriceUsd:C.number({description:"Unit price in USD"})},required:["name","quantity","unit","unitPriceUsd"],description:"One item from the supplier message"}),description:"List of items parsed from the supplier message"});function Ae(t){return t===R.ON_DEVICE||t==="on_device"?"ON_DEVICE":"IN_CLOUD"}function Tt(t){const e=t.trim().replace(/^```(?:json)?/,"").replace(/```$/,"").trim();try{const n=JSON.parse(e);return Array.isArray(n)?n:n&&Array.isArray(n.items)?n.items:null}catch{return null}}function M(){if(!navigator.onLine){const t=new Error("This request needs an internet connection. Please check your signal and try again.");throw t.needsInternet=!0,t}}async function fo(t){if(ee)return{_demoMode:!0};de();const e=t.trim().length>2e3,n=e?le:ue,s=e?`Long document (${t.trim().length} chars > 2 000) — sending to the cloud.`:`Short message (${t.trim().length} chars ≤ 2 000) — running on-device.`;e&&M();const r=["Extract all items from this supplier message into a JSON array.","Each element must have: name (string), quantity (number), unit (string), unitPriceUsd (number).","Return ONLY valid JSON with no markdown fences, no extra text.","","Supplier message:",t].join(`
`),o={responseMimeType:"application/json",responseSchema:uo};let a,i;try{a=await n.generateContent({contents:[{role:"user",parts:[{text:r}]}],generationConfig:o}),i=a.inferenceSource}catch(d){throw navigator.onLine||M(),d}const l=a.text();let c=Tt(l);if(c===null&&(i===R.ON_DEVICE||i==="on_device")){M();try{const d=await le.generateContent({contents:[{role:"user",parts:[{text:r}]}],generationConfig:o});i=d.inferenceSource,c=Tt(d.text())}catch(d){throw navigator.onLine||M(),d}}if(c===null){const d=new Error("Could not parse the supplier message. Please check the format and try again.");throw d.rawText=l,d}return c=c.map(d=>({name:String(d.name??"Unknown"),quantity:Number(d.quantity??0),unit:String(d.unit??"unit"),unitPriceUsd:Number(d.unitPriceUsd??0)})),{items:c,inferenceSource:Ae(i),reason:s}}async function ho(t){if(ee)return{_demoMode:!0};de();const e=t.trim().length>=500,n=e?le:ue,s=e?`Long question (${t.trim().length} chars ≥ 500) — running in the cloud.`:`Short question (${t.trim().length} chars < 500) — running on-device.`;e&&M();const r=["You are StallSmart, an AI assistant for small market vendors.","Answer the following question concisely and practically.","Focus on pricing, inventory, and profit advice relevant to market vendors.","","Question:",t].join(`
`);let o;try{o=await n.generateContent({contents:[{role:"user",parts:[{text:r}]}]})}catch(a){throw navigator.onLine||M(),a}return{answer:o.text(),inferenceSource:Ae(o.inferenceSource),reason:s}}async function po(t){if(ee)return{_demoMode:!0};de();const e="Short daily summary — running on-device for privacy.",{revenue:n,cost:s,profit:r,topItems:o=[]}=t,a=o.length?o.map(c=>`${c.name}: $${Number(c.revenue).toFixed(2)}`).join(", "):"none recorded",i=["You are StallSmart, a friendly AI bookkeeper for a small market vendor.","Write a short (2-3 sentence) end-of-day summary in plain English.","Be encouraging and practical. Include the key numbers.","","Today's figures:",`  Revenue: $${Number(n).toFixed(2)}`,`  Cost:    $${Number(s).toFixed(2)}`,`  Profit:  $${Number(r).toFixed(2)}`,`  Top sellers: ${a}`].join(`
`);let l;try{l=await ue.generateContent({contents:[{role:"user",parts:[{text:i}]}]})}catch(c){throw navigator.onLine||M(),c}return{summary:l.text(),inferenceSource:Ae(l.inferenceSource),reason:e}}async function mo(t,e=4e3){if(ee)return{_demoMode:!0};de(),M();const n="Detailed 7-day analysis — running in the cloud for deeper insights.",o=["You are StallSmart, an AI business analyst for a small market vendor.","Analyse the last 7 days of sales data below and provide:","  1. Total revenue, cost, and profit.","  2. Best-selling and most-profitable items.","  3. One concrete recommendation to improve profit next week.","Keep your response under 200 words and use plain English.","","Sales data (most recent first):",t.slice(0,200).map(i=>{const l=i.soldAt?new Date(i.soldAt).toLocaleDateString("en-US",{month:"short",day:"numeric"}):"?",c=(Number(i.salePriceUsd)*Number(i.quantity)).toFixed(2),d=(Number(i.costPriceUsd)*Number(i.quantity)).toFixed(2);return`${l}: ${i.itemName} ×${i.quantity} rev=$${c} cost=$${d}`}).join(`
`).slice(0,e)||"No sales recorded yet."].join(`
`);let a;try{a=await le.generateContent({contents:[{role:"user",parts:[{text:o}]}]})}catch(i){throw navigator.onLine||M(),i}return{summary:a.text(),inferenceSource:Ae(a.inferenceSource),reason:n}}async function go(){if(ee)return!1;try{de();const e=(await ue.generateContent({contents:[{role:"user",parts:[{text:"Reply with the single word: ready"}]}]})).inferenceSource;return e===R.ON_DEVICE||e==="on_device"}catch{return!1}}const yo="modulepreload",Eo=function(t,e){return new URL(t,e).href},Nt={},T=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=a(n.map(d=>{if(d=Eo(d,s),d in Nt)return;Nt[d]=!0;const f=d.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!s)for(let I=i.length-1;I>=0;I--){const D=i[I];if(D.href===d&&(!f||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${g}`))return;const y=document.createElement("link");if(y.rel=f?"stylesheet":yo,f||(y.as="script"),y.crossOrigin="",y.href=d,c&&y.setAttribute("nonce",c),document.head.appendChild(y),f)return new Promise((I,D)=>{y.addEventListener("load",I),y.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},te=Ke(),Ge={...We};function bo(t){return t in Ge?Ge[t]:We[t]}let F=$t.map(t=>({...t})),st=xt.map(t=>({...t}));const me=[],ge=[];function mn(){const t=F.map(e=>({...e}));me.forEach(e=>e(t))}function _o(){const t=st.map(e=>({...e}));ge.forEach(e=>e(t))}let J=null,Oe=null,rt=null,kt=!1;async function So(){var d;if(kt||(kt=!0,te))return;typeof self<"u"&&fe&&!fe.includes("PLACEHOLDER")&&fe!=="00000000-0000-0000-0000-000000000000"&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=fe);const{initializeApp:t,getApp:e}=await T(async()=>{const{initializeApp:f,getApp:g}=await Promise.resolve().then(()=>dr);return{initializeApp:f,getApp:g}},void 0,import.meta.url),{initializeFirestore:n,persistentLocalCache:s,persistentSingleTabManager:r,collection:o,getFirestore:a}=await T(async()=>{const{initializeFirestore:f,persistentLocalCache:g,persistentSingleTabManager:E,collection:y,getFirestore:I}=await import("./index.esm-CYBBl-kc.js");return{initializeFirestore:f,persistentLocalCache:g,persistentSingleTabManager:E,collection:y,getFirestore:I}},[],import.meta.url),{getAuth:i,signInAnonymously:l}=await T(async()=>{const{getAuth:f,signInAnonymously:g}=await import("./index.esm-Chxuy003.js");return{getAuth:f,signInAnonymously:g}},[],import.meta.url);let c;try{c=e()}catch{c=t(je)}try{const{initializeAppCheck:f,ReCaptchaEnterpriseProvider:g}=await T(async()=>{const{initializeAppCheck:E,ReCaptchaEnterpriseProvider:y}=await import("./index.esm-D4U-FY1M.js");return{initializeAppCheck:E,ReCaptchaEnterpriseProvider:y}},[],import.meta.url);f(c,{provider:new g(wn),isTokenAutoRefreshEnabled:!0})}catch(f){console.warn("StallSmart: App Check init skipped —",f.message)}try{J=n(c,{localCache:s({tabManager:r({forceOwnership:!1})})})}catch(f){if(f.code==="failed-precondition"||(d=f.message)!=null&&d.includes("already been started"))J=a(c);else throw f}Oe=o(J,"stock"),rt=o(J,"sales");try{const f=i(c);f.currentUser||await l(f)}catch(f){console.warn("StallSmart: anonymous auth failed —",f.message)}try{const{getRemoteConfig:f,fetchAndActivate:g,getValue:E}=await T(async()=>{const{getRemoteConfig:D,fetchAndActivate:bn,getValue:_n}=await import("./index.esm-z59nlkXj.js");return{getRemoteConfig:D,fetchAndActivate:bn,getValue:_n}},[],import.meta.url),y=f(c);y.settings.minimumFetchIntervalMillis=36e5,y.defaultConfig={...We},await g(y);const I=E(y,"cloud_summary_max_chars");if(I){const D=parseInt(I.asString(),10);isNaN(D)||(Ge.cloud_summary_max_chars=D)}}catch(f){console.warn("StallSmart: Remote Config fetch skipped —",f.message)}}async function wo(t,e="ai-parsed"){if(te){const c=new Date().toISOString();t.forEach(d=>{const f=F.findIndex(g=>g.name.toLowerCase()===d.name.toLowerCase());f>=0?F[f].quantity+=d.quantity:F.push({id:`stock-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:d.name,quantity:d.quantity,unit:d.unit,unitPriceUsd:d.unitPriceUsd,source:e,createdAt:c})}),mn();return}const{addDoc:n,getDocs:s,query:r,where:o,updateDoc:a,doc:i,serverTimestamp:l}=await T(async()=>{const{addDoc:c,getDocs:d,query:f,where:g,updateDoc:E,doc:y,serverTimestamp:I}=await import("./index.esm-CYBBl-kc.js");return{addDoc:c,getDocs:d,query:f,where:g,updateDoc:E,doc:y,serverTimestamp:I}},[],import.meta.url);for(const c of t){const d=r(Oe,o("name","==",c.name)),f=await s(d);if(f.empty)await n(Oe,{name:c.name,quantity:c.quantity,unit:c.unit,unitPriceUsd:c.unitPriceUsd,source:e,createdAt:l()});else{const g=f.docs[0];await a(i(J,"stock",g.id),{quantity:g.data().quantity+c.quantity})}}}function Oo(t){if(te)return me.push(t),t(F.map(s=>({...s}))),()=>{const s=me.indexOf(t);s>=0&&me.splice(s,1)};let e=null,n=!1;return(async()=>{const{onSnapshot:s,orderBy:r,query:o}=await T(async()=>{const{onSnapshot:i,orderBy:l,query:c}=await import("./index.esm-CYBBl-kc.js");return{onSnapshot:i,orderBy:l,query:c}},[],import.meta.url);if(n)return;const a=o(Oe,r("createdAt","desc"));e=s(a,i=>{const l=i.docs.map(c=>({id:c.id,...c.data()}));t(l)},i=>{console.error("StallSmart: stock listener error —",i)})})(),()=>{n=!0,e&&e()}}function Io(t){if(te)return ge.push(t),t(st.map(s=>({...s}))),()=>{const s=ge.indexOf(t);s>=0&&ge.splice(s,1)};let e=null,n=!1;return(async()=>{const{onSnapshot:s,orderBy:r,query:o}=await T(async()=>{const{onSnapshot:i,orderBy:l,query:c}=await import("./index.esm-CYBBl-kc.js");return{onSnapshot:i,orderBy:l,query:c}},[],import.meta.url);if(n)return;const a=o(rt,r("soldAt","desc"));e=s(a,i=>{const l=i.docs.map(c=>({id:c.id,...c.data()}));t(l)},i=>{console.error("StallSmart: sales listener error —",i)})})(),()=>{n=!0,e&&e()}}async function Co(t){const e={...t,soldAt:new Date().toISOString()};if(te){st.push({id:`sale-${Date.now()}`,...e}),_o();return}const{addDoc:n,serverTimestamp:s}=await T(async()=>{const{addDoc:r,serverTimestamp:o}=await import("./index.esm-CYBBl-kc.js");return{addDoc:r,serverTimestamp:o}},[],import.meta.url);await n(rt,{...t,soldAt:s()})}async function Ao(t,e){if(te){const l=F.findIndex(c=>c.id===t);l>=0&&(F[l].quantity=Math.max(0,F[l].quantity-e),mn());return}const{doc:n,updateDoc:s,getDoc:r,increment:o}=await T(async()=>{const{doc:l,updateDoc:c,getDoc:d,increment:f}=await import("./index.esm-CYBBl-kc.js");return{doc:l,updateDoc:c,getDoc:d,increment:f}},[],import.meta.url),a=n(J,"stock",t);(await r(a)).exists()&&await s(a,{quantity:o(-e)})}const S=Ke();let B=S?$t.map(t=>({...t})):[],Q=S?xt.map(t=>({...t})):[],w=[];const u=t=>document.getElementById(t),m=(t,e)=>t.classList.toggle("hidden",e),Y=t=>`$${Number(t).toFixed(2)}`,Do=t=>{try{return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{return"—"}};function Z(t){return t==="ON_DEVICE"?'<span class="badge badge-on-device">ON-DEVICE</span>':t==="IN_CLOUD"?'<span class="badge badge-in-cloud">IN-CLOUD</span>':'<span class="badge badge-demo">DEMO</span>'}function vo(){S&&(m(u("demo-badge"),!1),u("footer-demo-note").textContent="⚠ Running in demo mode — Firebase config not yet set. All AI results are simulated.");const t=()=>{const e=u("connection-pill");navigator.onLine?(e.textContent="● Online",e.className="pill pill-online"):(e.textContent="● Offline",e.className="pill pill-offline")};t(),window.addEventListener("online",t),window.addEventListener("offline",t)}function $({mode:t="—",lastRequest:e="None yet",reason:n="No AI call made yet.",onDevice:s=null}={}){u("status-mode").textContent=t,u("status-last").textContent=e,u("status-reason").textContent=n,u("status-ondevice").textContent=s===null?S?"Unknown (demo mode)":"Checking…":s?"✅ Available":"❌ Not available (falling back to cloud)"}function gn(t){const e=t.trim().length;return e>2e3?{mode:"PREFER_IN_CLOUD",source:"IN_CLOUD",reason:`Long document (${e} chars > 2 000) — sending to the cloud.`}:{mode:"PREFER_ON_DEVICE",source:"ON_DEVICE",reason:`Short message (${e} chars ≤ 2 000) — running on-device.`}}function Ro(t){const{source:e,reason:n}=gn(t),s=u("parse-routing");s.innerHTML=`${Z(S?"DEMO":e)}<span>${n}</span>`,m(s,!1)}function To(t){const e=[...Lt,Mt].find(o=>o.text.trim()===t.trim());if(e&&e.id==="msg-001")return at.map(o=>({...o}));const n=t.split(/\n/),s=[],r=/(.+?)\s+x?\s*(\d+(?:\.\d+)?)\s+(\w+)\s+@\$(\d+(?:\.\d+)?)/i;for(const o of n){const a=o.match(r);a&&s.push({name:a[1].trim(),quantity:parseFloat(a[2]),unit:a[3].trim(),unitPriceUsd:parseFloat(a[4])})}return s.length?s:at.map(o=>({...o}))}function yn(t){const e=u("parsed-tbody");e.innerHTML="",t.forEach((n,s)=>{const r=document.createElement("tr");r.innerHTML=`
      <td><input type="text"   class="parsed-name"  data-idx="${s}" value="${W(n.name)}" /></td>
      <td><input type="number" class="parsed-qty"   data-idx="${s}" value="${n.quantity}" min="0.01" step="0.01" style="width:80px"/></td>
      <td><input type="text"   class="parsed-unit"  data-idx="${s}" value="${W(n.unit)}" style="width:70px"/></td>
      <td><input type="number" class="parsed-price" data-idx="${s}" value="${n.unitPriceUsd}" min="0.00" step="0.01" style="width:90px"/></td>
      <td><button class="btn btn-ghost btn-remove-row" data-idx="${s}" style="padding:.25rem .5rem;font-size:.75rem;">✕</button></td>
    `,e.appendChild(r)}),e.querySelectorAll("input").forEach(n=>{n.addEventListener("change",()=>{const s=parseInt(n.dataset.idx,10),r=n.className.split(" ").find(o=>o.startsWith("parsed-"));r==="parsed-name"&&(w[s].name=n.value),r==="parsed-qty"&&(w[s].quantity=parseFloat(n.value)||0),r==="parsed-unit"&&(w[s].unit=n.value),r==="parsed-price"&&(w[s].unitPriceUsd=parseFloat(n.value)||0)})}),e.querySelectorAll(".btn-remove-row").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.idx,10);w.splice(s,1),yn(w)})})}function No(){const t=u("btn-parse"),e=u("btn-load-demo"),n=u("parse-input");let s=0;e.addEventListener("click",()=>{const r=[...Lt,Mt],o=r[s%r.length];n.value=o.text,s++,m(u("parse-routing"),!0),m(u("section-parsed-results"),!0)}),n.addEventListener("input",()=>{n.value.trim().length>10?Ro(n.value):m(u("parse-routing"),!0)}),t.addEventListener("click",async()=>{const r=n.value.trim();if(!r)return;t.disabled=!0,m(u("parse-loading"),!1),m(u("section-parsed-results"),!0),m(u("parse-error"),!0);const{source:o,mode:a,reason:i}=gn(r),l=u("parse-routing");if(l.innerHTML=`${Z(S?"DEMO":o)}<span>${i}</span>`,m(l,!1),$({mode:S?`${a} (demo)`:a,lastRequest:"Parse supplier message",reason:i}),S)await new Promise(c=>setTimeout(c,600)),w=To(r);else try{const c=await fo(r);w=c.items,l.innerHTML=`${Z(c.inferenceSource)}<span>${c.reason}</span>`,$({mode:c.inferenceSource==="ON_DEVICE"?"PREFER_ON_DEVICE":"PREFER_IN_CLOUD",lastRequest:"Parse supplier message",reason:c.reason,onDevice:c.inferenceSource==="ON_DEVICE"})}catch(c){w=[];const d=u("parse-error");d.textContent=c.needsInternet?"⚠ This request needs an internet connection. Please check your signal and try again.":`⚠ Could not parse message: ${c.message}`,m(d,!1)}m(u("parse-loading"),!0),t.disabled=!1,w.length&&(yn(w),m(u("section-parsed-results"),!1))}),u("btn-save-stock").addEventListener("click",async()=>{if(w.length){if(S){const r=new Date().toISOString();w.forEach(o=>{const a=B.findIndex(i=>i.name.toLowerCase()===o.name.toLowerCase());a>=0?B[a].quantity+=o.quantity:B.push({id:`stock-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:o.name,quantity:o.quantity,unit:o.unit,unitPriceUsd:o.unitPriceUsd,source:"demo",createdAt:r})})}else try{await wo(w,"ai-parsed")}catch(r){alert(`Could not save to inventory: ${r.message}`)}w=[],m(u("section-parsed-results"),!0),H(),Ie()}}),u("btn-clear-parsed").addEventListener("click",()=>{w=[],m(u("section-parsed-results"),!0)})}function H(t="",e=!1){const n=u("inventory-tbody"),s=u("inventory-empty");n.innerHTML="";let r=B.slice();if(t){const o=t.toLowerCase();r=r.filter(a=>a.name.toLowerCase().includes(o))}if(e&&(r=r.filter(o=>o.quantity<=it)),!r.length){m(s,!1);return}m(s,!0),r.forEach(o=>{const a=o.quantity<=it,i=document.createElement("tr");a&&i.classList.add("low-stock"),i.innerHTML=`
      <td>${W(o.name)}${a?'<span class="low-stock-flag">LOW</span>':""}</td>
      <td>${o.quantity}</td>
      <td>${W(o.unit)}</td>
      <td>${Y(o.unitPriceUsd)}</td>
      <td><span class="badge badge-${o.source==="demo"?"demo":"on-device"}">${W(o.source)}</span></td>
      <td>${Do(o.createdAt)}</td>
    `,n.appendChild(i)})}function ko(){S||Oo(t=>{B=t,H(u("inventory-search").value,u("chk-low-stock").checked),Ie()}),H(),u("inventory-search").addEventListener("input",t=>{H(t.target.value,u("chk-low-stock").checked)}),u("chk-low-stock").addEventListener("change",t=>{H(u("inventory-search").value,t.target.checked)})}function Ie(){const t=u("sale-item"),e=t.value;t.innerHTML='<option value="">— select item —</option>',B.forEach(n=>{const s=document.createElement("option");s.value=n.id,s.textContent=`${n.name} (${n.quantity} ${n.unit} @ ${Y(n.unitPriceUsd)})`,t.appendChild(s)}),e&&(t.value=e)}function ye(){const t=new Date().toDateString(),e=Q.filter(c=>new Date(c.soldAt).toDateString()===t),n=e.reduce((c,d)=>c+d.salePriceUsd*d.quantity,0),s=e.reduce((c,d)=>c+d.costPriceUsd*d.quantity,0),r=n-s;u("stat-revenue").textContent=Y(n),u("stat-cost").textContent=Y(s),u("stat-profit").textContent=Y(r);const o={};e.forEach(c=>{o[c.itemName]=(o[c.itemName]||0)+c.salePriceUsd*c.quantity});const a=Object.entries(o).sort((c,d)=>d[1]-c[1]).slice(0,5),i=u("top-items-list"),l=u("dashboard-empty");if(i.innerHTML="",!a.length){m(l,!1);return}m(l,!0),a.forEach(([c,d])=>{const f=document.createElement("li");f.innerHTML=`<span>${W(c)}</span><span>${Y(d)}</span>`,i.appendChild(f)})}function Po(){S||Io(t=>{Q=t,ye()}),Ie(),ye(),u("btn-log-sale").addEventListener("click",async()=>{const t=u("sale-item").value,e=parseFloat(u("sale-qty").value),n=parseFloat(u("sale-price").value);if(!t||!e||!n){alert("Please select an item and enter qty + sale price.");return}const s=B.find(o=>o.id===t);if(!s)return;if(s.quantity<e){alert(`Not enough stock. You have ${s.quantity} ${s.unit}(s).`);return}const r={itemId:s.id,itemName:s.name,quantity:e,salePriceUsd:n,costPriceUsd:s.unitPriceUsd};if(S)Q.push({id:`sale-${Date.now()}`,...r,soldAt:new Date().toISOString()}),s.quantity-=e;else try{await Co(r),await Ao(s.id,e)}catch(o){alert(`Could not log sale: ${o.message}`);return}u("sale-qty").value="",u("sale-price").value="",H(u("inventory-search").value,u("chk-low-stock").checked),Ie(),ye()})}function En(){const t=new Date().toDateString(),e=Q.filter(i=>new Date(i.soldAt).toDateString()===t),n=e.reduce((i,l)=>i+l.salePriceUsd*l.quantity,0),s=e.reduce((i,l)=>i+l.costPriceUsd*l.quantity,0),r=n-s,o={};e.forEach(i=>{o[i.itemName]=(o[i.itemName]||0)+i.salePriceUsd*i.quantity});const a=Object.entries(o).sort((i,l)=>l[1]-i[1]).slice(0,3).map(([i,l])=>({name:i,revenue:l}));return{revenue:n,cost:s,profit:r,topItems:a}}function Lo(){u("btn-daily-summary").addEventListener("click",async()=>{m(u("daily-summary-result"),!0),m(u("weekly-summary-result"),!0),m(u("summary-error"),!0),m(u("daily-summary-loading"),!1);let t,e,n;if(S)await new Promise(s=>setTimeout(s,700)),{summary:t,inferenceSource:e}=Cn,n="Short daily summary — running on-device for privacy. [DEMO — simulated result]",e="DEMO";else try{const s=En(),r=await po(s);t=r.summary,e=r.inferenceSource,n=r.reason,$({mode:"PREFER_ON_DEVICE",lastRequest:"Daily summary",reason:n,onDevice:e==="ON_DEVICE"})}catch(s){m(u("daily-summary-loading"),!0);const r=u("summary-error");r.textContent=s.needsInternet?"⚠ Daily summary ran on-device but cloud fallback needed internet. Please reconnect.":`⚠ Could not generate daily summary: ${s.message}`,m(r,!1);return}m(u("daily-summary-loading"),!0),u("daily-summary-badge-row").innerHTML=`${Z(e)}<span>${n}</span>`,u("daily-summary-text").textContent=t,m(u("daily-summary-result"),!1)}),u("btn-weekly-summary").addEventListener("click",async()=>{m(u("daily-summary-result"),!0),m(u("weekly-summary-result"),!0),m(u("summary-error"),!0),m(u("weekly-summary-loading"),!1);let t,e,n;if(S)await new Promise(s=>setTimeout(s,900)),{summary:t,inferenceSource:e}=An,n="Detailed 7-day analysis — running in the cloud for deeper insights. [DEMO — simulated result]",e="DEMO";else{if(!navigator.onLine){m(u("weekly-summary-loading"),!0);const s=u("summary-error");s.textContent="⚠ Weekly analysis needs an internet connection. Please check your signal.",m(s,!1);return}try{const s=Date.now()-6048e5,r=Q.filter(i=>new Date(i.soldAt).getTime()>=s),o=bo("cloud_summary_max_chars"),a=await mo(r,o);t=a.summary,e=a.inferenceSource,n=a.reason,$({mode:"PREFER_IN_CLOUD",lastRequest:"Weekly analysis",reason:n,onDevice:!1})}catch(s){m(u("weekly-summary-loading"),!0);const r=u("summary-error");r.textContent=s.needsInternet?"⚠ Weekly analysis needs an internet connection. Please check your signal.":`⚠ Could not generate weekly analysis: ${s.message}`,m(r,!1);return}}m(u("weekly-summary-loading"),!0),u("weekly-summary-badge-row").innerHTML=`${Z(e)}<span>${n}</span>`,u("weekly-summary-text").innerHTML=W(t).replace(/\n/g,"<br>"),m(u("weekly-summary-result"),!1)})}function Mo(t){const e=t.toLowerCase();return On.find(s=>s.keywords.some(r=>e.includes(r)))||In}function $o(){u("btn-ask").addEventListener("click",async()=>{const t=u("ask-input").value.trim();if(!t)return;u("btn-ask").disabled=!0,m(u("ask-loading"),!1),m(u("ask-result"),!0),m(u("ask-error"),!0);const e=t.length>=500,{source:n,mode:s,reason:r}=e?{source:"IN_CLOUD",mode:"PREFER_IN_CLOUD",reason:`Long question (${t.length} chars ≥ 500) — running in the cloud.`}:{source:"ON_DEVICE",mode:"PREFER_ON_DEVICE",reason:`Short question (${t.length} chars < 500) — running on-device.`};$({mode:S?`${s} (demo)`:s,lastRequest:"Ask StallSmart",reason:r});let o=n,a=r,i="";if(S)await new Promise(c=>setTimeout(c,700)),i=Mo(t).answer,o="DEMO";else try{const l=await ho(t);i=l.answer,o=l.inferenceSource,a=l.reason,$({mode:o==="ON_DEVICE"?"PREFER_ON_DEVICE":"PREFER_IN_CLOUD",lastRequest:"Ask StallSmart",reason:a,onDevice:o==="ON_DEVICE"})}catch(l){m(u("ask-loading"),!0),u("btn-ask").disabled=!1;const c=u("ask-error");c.textContent=l.needsInternet?"⚠ This request needs an internet connection. Please check your signal and try again.":`⚠ Error: ${l.message}`,m(c,!1);return}m(u("ask-loading"),!0),u("btn-ask").disabled=!1,u("ask-badge-row").innerHTML=`${Z(o)}<span>${a}</span>`,u("ask-answer").textContent=i,m(u("ask-result"),!1)}),u("ask-input").addEventListener("keydown",t=>{t.key==="Enter"&&u("btn-ask").click()})}function W(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function Pt(){vo(),$();try{await So()}catch(t){console.warn("StallSmart: store init failed —",t.message)}No(),ko(),Po(),Lo(),$o(),S||go().then(t=>{$({mode:t?"PREFER_ON_DEVICE":"PREFER_IN_CLOUD (fallback)",lastRequest:u("status-last").textContent,reason:t?"Gemini Nano is available on this device — short jobs will run on-device.":"On-device model not available in this browser. All requests will fall back to the cloud.",onDevice:t})}).catch(()=>{$({mode:"PREFER_IN_CLOUD (fallback)",lastRequest:u("status-last").textContent,reason:"Could not reach on-device model — all requests will use the cloud.",onDevice:!1})}),window.__stallsmart={isDemo:S,getStock:()=>B,getSales:()=>Q,getParsedItems:()=>w,renderInventory:H,renderDashboard:ye,buildSalesDataForSummary:En}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pt):Pt();export{Xo as A,cr as B,oe as C,zo as D,jt as E,K as F,Un as G,Qo as H,Ft as I,hs as J,Bn as K,Wt as L,xo as M,Js as S,Yt as _,Uo as a,Yn as b,Bo as c,xe as d,b as e,Wo as f,Ye as g,Ht as h,Zo as i,Vt as j,Fn as k,Ko as l,Xt as m,ie as n,Fo as o,ea as p,xn as q,j as r,jo as s,Jo as t,Yo as u,$e as v,Vo as w,Go as x,Ho as y,qo as z};
