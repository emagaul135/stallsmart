(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ht={},Je={apiKey:"AIzaSyAaLRth1hUAFaRY6auL1-5zqqVZlHD5_TE",authDomain:"stallsmart-908a3.firebaseapp.com",projectId:"stallsmart-908a3",storageBucket:"stallsmart-908a3.firebasestorage.app",messagingSenderId:"732262114772",appId:"1:732262114772:web:db43bd475dac8d8087a241",measurementId:"G-P6K56EJ5M1"},Nn=typeof import.meta<"u"&&ht?ht:{},he=Nn.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN||"00000000-0000-0000-0000-000000000000",kn="6LfwMiUuAAAAAKSCJE9S8jqythRiUNQS67WWpsLr",Ye={cloud_summary_max_chars:4e3};function Xe(){return Je.apiKey.startsWith("PLACEHOLDER")}const Vt=[{id:"msg-001",label:"Morning delivery (rice & sugar)",text:`Hi, good morning! Here is today's delivery:
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
Instant coffee sachet 20g x50 pcs @$0.15`}],qt={id:"msg-long-001",label:"Full weekly catalog (long — cloud route)",text:`WEEKLY SUPPLIER CATALOG — Maju Jaya Trading
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
Thank you for your order!`},pt=[{name:"Beras 10kg",quantity:5,unit:"sack",unitPriceUsd:12},{name:"Sugar 1kg",quantity:10,unit:"bag",unitPriceUsd:1.5},{name:"Cooking oil 1L",quantity:8,unit:"bottle",unitPriceUsd:2.2},{name:"Salt 500g",quantity:12,unit:"pack",unitPriceUsd:.4}],Ht=[{id:"stock-001",name:"Beras 10kg",quantity:5,unit:"sack",unitPriceUsd:12,source:"demo",createdAt:new Date(Date.now()-2880*60*1e3).toISOString()},{id:"stock-002",name:"Sugar 1kg",quantity:10,unit:"bag",unitPriceUsd:1.5,source:"demo",createdAt:new Date(Date.now()-2880*60*1e3).toISOString()},{id:"stock-003",name:"Cooking oil 1L",quantity:8,unit:"bottle",unitPriceUsd:2.2,source:"demo",createdAt:new Date(Date.now()-1440*60*1e3).toISOString()},{id:"stock-004",name:"Salt 500g",quantity:3,unit:"pack",unitPriceUsd:.4,source:"demo",createdAt:new Date(Date.now()-1440*60*1e3).toISOString()},{id:"stock-005",name:"Mineral water 600ml",quantity:24,unit:"bottle",unitPriceUsd:.25,source:"demo",createdAt:new Date().toISOString()},{id:"stock-006",name:"Instant coffee sachet",quantity:4,unit:"pcs",unitPriceUsd:.15,source:"demo",createdAt:new Date().toISOString()}],re=new Date;re.setHours(0,0,0,0);const Gt=[{id:"sale-001",itemId:"stock-001",itemName:"Beras 10kg",quantity:2,salePriceUsd:14.5,costPriceUsd:12,soldAt:new Date(re.getTime()+7200*1e3).toISOString()},{id:"sale-002",itemId:"stock-002",itemName:"Sugar 1kg",quantity:3,salePriceUsd:2,costPriceUsd:1.5,soldAt:new Date(re.getTime()+10800*1e3).toISOString()},{id:"sale-003",itemId:"stock-003",itemName:"Cooking oil 1L",quantity:2,salePriceUsd:3,costPriceUsd:2.2,soldAt:new Date(re.getTime()+14400*1e3).toISOString()},{id:"sale-004",itemId:"stock-005",itemName:"Mineral water 600ml",quantity:6,salePriceUsd:.4,costPriceUsd:.25,soldAt:new Date(re.getTime()+300*60*1e3).toISOString()}],Pn=[{keywords:["rice","beras","12","$12"],inferenceSource:"ON_DEVICE",answer:"At $12.00 per sack (10 kg) you are paying $1.20 per kg. The typical retail range in most markets is $1.30–$1.60/kg, so your supplier price gives you a healthy margin of around 10–30% depending on how you price it. This looks like a good deal — lock in the quantity if you can."},{keywords:["profit","margin","revenue","sales"],inferenceSource:"ON_DEVICE",answer:"Based on today's logged sales, your gross margin is around 25–35%. That is solid for staple goods. Focus on higher-margin items like cooking oil and packaged drinks to improve overall profitability."},{keywords:["stock","inventory","low","reorder"],inferenceSource:"ON_DEVICE",answer:"You have two items flagged as low-stock: Salt 500g (3 units) and Instant coffee sachet (4 units). Consider reordering before they run out — both are fast-moving items."}],Ln={inferenceSource:"ON_DEVICE",answer:"Great question! As a market vendor, the best way to improve profit is to track your costs carefully and notice which items sell fastest. StallSmart helps you do exactly that — log every sale and your profit dashboard updates instantly."},mt=5,Mn={inferenceSource:"ON_DEVICE",summary:"Great day at the stall! You sold 13 units across four products and earned a gross profit of $14.60 — roughly 24% margin. Beras 10kg was your top earner at $29.00 in revenue. Keep an eye on Salt 500g stock (only 3 left) before tomorrow's market."},xn={inferenceSource:"IN_CLOUD",summary:`This week you generated $218.40 in revenue at a total cost of $164.80, leaving a gross profit of $53.60 (24.5% margin).

Best-selling item: Beras 10kg (38% of revenue). Most profitable: Cooking oil 1L (margin ~36%).

Recommendation: Mineral water 600ml has high volume but thin margin. Consider bundling two bottles at a slight discount to increase basket size while moving more units during peak hours.`},$n=()=>{};var gt={};/**
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
 */const Un={SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Xo=function(t,e){if(!t)throw Fn(e)},Fn=function(t){return new Error("Firebase Database ("+Un.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const jt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Bn=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],i=t[n++],c=((r&7)<<18|(o&63)<<12|(a&63)<<6|i&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Wt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,i=a?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,d=o>>2,f=(o&3)<<4|i>>4;let g=(i&15)<<2|l>>6,E=l&63;c||(E=64,a||(g=64)),s.push(n[d],n[f],n[g],n[E])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],i=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||i==null||l==null||f==null)throw new Vn;const g=o<<2|i>>4;if(s.push(g),l!==64){const E=i<<4&240|l>>2;if(s.push(E),f!==64){const y=l<<6&192|f;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qn=function(t){const e=jt(t);return Wt.encodeByteArray(e,!0)},be=function(t){return qn(t).replace(/\./g,"")},Fe=function(t){try{return Wt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j(t){return Kt(void 0,t)}function Kt(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hn(n)||(t[n]=Kt(t[n],e[n]));return t}function Hn(t){return t!=="__proto__"}/**
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
 */function zt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gn=()=>zt().__FIREBASE_DEFAULTS__,jn=()=>{if(typeof process>"u"||typeof gt>"u")return;const t=gt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fe(t[1]);return e&&JSON.parse(e)},Ae=()=>{try{return $n()||Gn()||jn()||Wn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kn=t=>{var e,n;return(n=(e=Ae())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Qo=t=>{const e=Kn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jt=()=>{var t;return(t=Ae())==null?void 0:t.config},Zo=t=>{var e;return(e=Ae())==null?void 0:e[`_${t}`]};/**
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
 */class zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ea(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[be(JSON.stringify(n)),be(JSON.stringify(a)),""].join(".")}/**
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ta(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function Xt(){var e;const t=(e=Ae())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function na(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sa(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ra(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oa(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aa(){return!Xt()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ia(){return!Xt()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Jn(){try{return typeof indexedDB=="object"}catch{return!1}}function Yn(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Xn="FirebaseError";class z extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xn,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Qn(o,s):"Error",i=`${this.serviceName}: ${a} (${r}).`;return new z(r,i,s)}}function Qn(t,e){try{let n=0,s="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){s+=t.substring(n);break}const o=t.indexOf("}",r+2);if(o===-1){s+=t.substring(n);break}const a=t.substring(r+2,o),i=e[a];s+=t.substring(n,r)+(i!=null?String(i):`<${a}?>`),n=o+1}return s}catch{return t}}/**
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
 */function yt(t){return JSON.parse(t)}/**
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
 */const Zn=function(t){let e={},n={},s={},r="";try{const o=t.split(".");e=yt(Fe(o[0])||""),n=yt(Fe(o[1])||""),r=o[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},ca=function(t){const e=Zn(t).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null};function la(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Be(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],a=e[r];if(Et(o)&&Et(a)){if(!Be(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Et(t){return t!==null&&typeof t=="object"}/**
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
 */function ua(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function da(t,e){const n=new es(t,e);return n.subscribe.bind(n)}class es{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ts(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Re),r.error===void 0&&(r.error=Re),r.complete===void 0&&(r.complete=Re);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ts(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Re(){}/**
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
 */const ns=1e3,ss=2,rs=14400*1e3,os=.5;function fa(t,e=ns,n=ss){const s=e*Math.pow(n,t),r=Math.round(os*s*(Math.random()-.5)*2);return Math.min(rs,s+r)}/**
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
 */function as(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ha(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pa(t){return(await fetch(t,{credentials:"include"})).ok}class ie{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const q="[DEFAULT]";/**
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
 */class is{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ls(e))try{this.getOrInitializeService({instanceIdentifier:q})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=q){return this.instances.has(e)}getOptions(e=q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(o);s===i&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cs(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=q){return this.component?this.component.multipleInstances?e:q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cs(t){return t===q?void 0:t}function ls(t){return t.instantiationMode==="EAGER"}/**
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
 */class us{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new is(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const ds={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},fs=b.INFO,hs={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},ps=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=hs[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zt{constructor(e){this.name=e,this._logLevel=fs,this._logHandler=ps,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ds[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const ms=(t,e)=>e.some(n=>t instanceof n);let bt,_t;function gs(){return bt||(bt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ys(){return _t||(_t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const en=new WeakMap,Ve=new WeakMap,tn=new WeakMap,Te=new WeakMap,Qe=new WeakMap;function Es(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(U(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&en.set(n,t)}).catch(()=>{}),Qe.set(e,t),e}function bs(t){if(Ve.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Ve.set(t,e)}let qe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ve.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return U(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _s(t){qe=t(qe)}function Ss(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ne(this),e,...n);return tn.set(s,e.sort?e.sort():[e]),U(s)}:ys().includes(t)?function(...e){return t.apply(Ne(this),e),U(en.get(this))}:function(...e){return U(t.apply(Ne(this),e))}}function ws(t){return typeof t=="function"?Ss(t):(t instanceof IDBTransaction&&bs(t),ms(t,gs())?new Proxy(t,qe):t)}function U(t){if(t instanceof IDBRequest)return Es(t);if(Te.has(t))return Te.get(t);const e=ws(t);return e!==t&&(Te.set(t,e),Qe.set(e,t)),e}const Ne=t=>Qe.get(t);function Os(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),i=U(a);return s&&a.addEventListener("upgradeneeded",c=>{s(U(a.result),c.oldVersion,c.newVersion,U(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),i.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const Is=["get","getKey","getAll","getAllKeys","count"],Cs=["put","add","delete","clear"],ke=new Map;function St(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ke.get(e))return ke.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Cs.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Is.includes(n)))return;const o=async function(a,...i){const c=this.transaction(a,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),r&&c.done]))[0]};return ke.set(e,o),o}_s(t=>({...t,get:(e,n,s)=>St(e,n)||t.get(e,n,s),has:(e,n)=>!!St(e,n)||t.has(e,n)}));/**
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
 */class As{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ds(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ds(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const He="@firebase/app",wt="0.16.7";/**
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
 */const N=new Zt("@firebase/app"),vs="@firebase/app-compat",Rs="@firebase/analytics-compat",Ts="@firebase/analytics",Ns="@firebase/app-check-compat",ks="@firebase/app-check",Ps="@firebase/auth",Ls="@firebase/auth-compat",Ms="@firebase/crashlytics",xs="@firebase/database",$s="@firebase/data-connect",Us="@firebase/database-compat",Fs="@firebase/functions",Bs="@firebase/functions-compat",Vs="@firebase/installations",qs="@firebase/installations-compat",Hs="@firebase/messaging",Gs="@firebase/messaging-compat",js="@firebase/performance",Ws="@firebase/performance-compat",Ks="@firebase/remote-config",zs="@firebase/remote-config-compat",Js="@firebase/storage",Ys="@firebase/storage-compat",Xs="@firebase/firestore",Qs="@firebase/ai",Zs="@firebase/firestore-compat",er="firebase",tr="13.4.0";/**
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
 */const _e="[DEFAULT]",nr={[He]:"fire-core",[vs]:"fire-core-compat",[Ts]:"fire-analytics",[Rs]:"fire-analytics-compat",[ks]:"fire-app-check",[Ns]:"fire-app-check-compat",[Ps]:"fire-auth",[Ls]:"fire-auth-compat",[Ms]:"fire-cls",[xs]:"fire-rtdb",[$s]:"fire-data-connect",[Us]:"fire-rtdb-compat",[Fs]:"fire-fn",[Bs]:"fire-fn-compat",[Vs]:"fire-iid",[qs]:"fire-iid-compat",[Hs]:"fire-fcm",[Gs]:"fire-fcm-compat",[js]:"fire-perf",[Ws]:"fire-perf-compat",[Ks]:"fire-rc",[zs]:"fire-rc-compat",[Js]:"fire-gcs",[Ys]:"fire-gcs-compat",[Xs]:"fire-fst",[Zs]:"fire-fst-compat",[Qs]:"fire-vertex","fire-js":"fire-js",[er]:"fire-js-all"};/**
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
 */const ce=new Map,nn=new Map,Se=new Map;function Ge(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function le(t){const e=t.name;if(Se.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;Se.set(e,t);for(const n of ce.values())Ge(n,t);for(const n of nn.values())Ge(n,t);return!0}function sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const sr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},L=new Qt("app","Firebase",sr);/**
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
 */class rr{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}/**
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
 */const or=tr;function Ze(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:_e,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw L.create("bad-app-name",{appName:String(r)});if(n||(n=Jt()),!n)throw L.create("no-options");const o=ce.get(r);if(o)if(Be(n,o.options)){if(Be(s,o.config))return o;throw L.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(o.config),newValue:JSON.stringify(s)})}else throw L.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(o.options),newValue:JSON.stringify(n)});const a=new us(r);for(const c of Se.values())a.addComponent(c);const i=new rr(n,s,a);return ce.set(r,i),i}function et(t=_e){const e=ce.get(t);if(!e&&t===_e&&Jt())return Ze();if(!e)throw L.create("no-app",{appName:t});return e}function W(t,e,n){let s=nr[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),N.warn(a.join(" "));return}le(new ie(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ar="firebase-heartbeat-database",ir=1,ue="firebase-heartbeat-store";let Pe=null;function on(){return Pe||(Pe=Os(ar,ir,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ue)}catch(n){console.warn(n)}}}}).catch(t=>{throw L.create("idb-open",{originalErrorMessage:t.message})})),Pe}async function cr(t){try{const n=(await on()).transaction(ue),s=await n.objectStore(ue).get(an(t));return await n.done,s}catch(e){if(e instanceof z)N.warn(e.message);else{const n=L.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});N.warn(n.message)}}}async function Ot(t,e){try{const s=(await on()).transaction(ue,"readwrite");await s.objectStore(ue).put(e,an(t)),await s.done}catch(n){if(n instanceof z)N.warn(n.message);else{const s=L.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});N.warn(s.message)}}}function an(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lr=1024,ur=30;class dr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hr(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=It();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>ur){const a=pr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){N.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=It(),{heartbeatsToSend:s,unsentEntries:r}=fr(this._heartbeatsCache.heartbeats),o=be(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return N.warn(n),""}}}function It(){return new Date().toISOString().substring(0,10)}function fr(t,e=lr){const n=[];let s=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Ct(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ct(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jn()?Yn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ot(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ot(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ct(t){return be(JSON.stringify({version:2,heartbeats:t})).length}function pr(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function mr(t){le(new ie("platform-logger",e=>new As(e),"PRIVATE")),le(new ie("heartbeat",e=>new dr(e),"PRIVATE")),W(He,wt,t),W(He,wt,"esm2020"),W("fire-js","")}/**
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
 */const je="firebase-js-sdk-policy",gr=["https://www.googletagmanager.com/gtag/js","https://apis.google.com/js/api.js","https://www.google.com/recaptcha/api.js","https://www.google.com/recaptcha/enterprise.js"];let pe,cn=!1;function ln(t){if(!gr.some(n=>t.startsWith(n)&&(t.length===n.length||t.charAt(n.length)==="?")))throw new TypeError(`Firebase: Refusing to load untrusted script URL: ${t}`);return t}function yr(){if(pe===void 0){pe=null;const t=typeof window<"u"?window.trustedTypes:void 0;if(t!=null&&t.createPolicy)try{pe=t.createPolicy(je,{createScriptURL:ln})}catch{cn=!0}}return pe}function Er(t,e){ln(e);const n=yr();if(n){t.src=n.createScriptURL(e);return}try{t.src=e}catch(s){throw cn&&N.error(`Unable to load ${e} because this page requires Trusted Types for scripts but does not allow the "${je}" Trusted Types policy. To fix this, add "${je}" to the trusted-types directive of the page's Content-Security-Policy.`),s}}/**
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
 */mr("");var br="firebase",_r="13.4.0";/**
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
 */W(br,_r,"app");const Sr=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:z,SDK_VERSION:or,_DEFAULT_ENTRY_NAME:_e,_addComponent:Ge,_apps:ce,_components:Se,_getProvider:sn,_isFirebaseServerApp:rn,_registerComponent:le,_serverApps:nn,_setTrustedScriptSrc:Er,getApp:et,initializeApp:Ze,registerVersion:W},Symbol.toStringTag,{value:"Module"}));var At="@firebase/ai",We="3.1.0";/**
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
 */const Q="AI",wr="global",Or="firebasevertexai.googleapis.com",we="v1beta",Dt=We,Ir="gl-js",Cr="hybrid",Ar=180*1e3,Dr="gemini-3.5-flash-lite";/**
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
 */class p extends z{constructor(e,n,s){const r=Q,o=`${r}/${e}`,a=`${r}: ${n} (${o})`;super(e,a),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,p),Object.setPrototypeOf(this,p.prototype),this.toString=()=>a}}/**
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
 */const vt=["user","model","function","system"],un={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},O={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},I={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},v={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
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
 */const J={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
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
 */const $={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};/**
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
 */class dn{constructor(e){this.backendType=e}}class tt extends dn{constructor(){super($.GOOGLE_AI)}_getModelPath(e,n){return`/${we}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${we}/projects/${e}/templates/${n}`}}class fn extends dn{constructor(e){super($.AGENT_PLATFORM),this.location=wr,e&&(this.location=e)}_getModelPath(e,n){return`/${we}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${we}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
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
 */function vr(t){if(t instanceof tt)return`${Q}/googleai`;if(t instanceof fn)return`${Q}/agentplatform/${t.location}`;throw new p(h.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function Rr(t){const e=t.split("/");if(e[0]!==Q)throw new p(h.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":const s=e[2];if(!s)throw new p(h.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new fn(s);case"googleai":return new tt;default:throw new p(h.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
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
 */const _=new Zt("@firebase/ai");var P;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(P||(P={}));/**
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
 */const hn={type:"text",languages:["en"]},Le=[hn,{type:"image"}],Me=[hn];class R{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:Le,expectedOutputs:Me}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=Le),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=Me)):this.onDeviceParams.createOptions={expectedInputs:Le,expectedOutputs:Me})}async isAvailable(e){var s;if(!this.mode)return _.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===I.ONLY_IN_CLOUD)return _.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));if(this.mode===I.ONLY_ON_DEVICE){if(n===P.UNAVAILABLE)throw new p(h.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===P.DOWNLOADABLE||n===P.DOWNLOADING){_.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(r){throw new p(h.ERROR,r.message)}return!0}return!0}return n!==P.AVAILABLE?(_.debug(`On-device inference unavailable because availability is "${n}".`),!1):R.isOnDeviceRequest(e)?!0:(_.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(R.toLanguageModelMessage)),r=await n.prompt(s,this.onDeviceParams.promptOptions);return R.toResponse(r)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(R.toLanguageModelMessage)),r=n.promptStreaming(s,this.onDeviceParams.promptOptions);return R.toStreamResponse(r)}async countTokens(e){throw new p(h.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return _.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return _.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if("inlineData"in s&&s.inlineData&&R.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return _.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var s;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return(n===P.DOWNLOADABLE||n===P.DOWNLOADING)&&this.download(e),n}download(e){var s;if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=r=>{r.addEventListener("downloadprogress",o=>{e(o.loaded)})}),this.downloadPromise=(s=this.languageModelProvider)==null?void 0:s.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(R.toLanguageModelMessageContent));return{role:R.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new p(h.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new p(h.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,r){const o=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});r.enqueue(n.encode(`data: ${o}

`))}}))}}}R.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Tr(t,e,n){const r=(e||zt()).LanguageModel;if(r&&t)return new R(r,t,n)}/**
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
 */class Nr{constructor(e,n,s,r,o){this.app=e,this.backend=n,this.chromeAdapterFactory=o;const a=r==null?void 0:r.getImmediate({optional:!0}),i=s==null?void 0:s.getImmediate({optional:!0});this.auth=i||null,this.appCheck=a||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
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
 */function kr(t,{instanceIdentifier:e}){if(!e)throw new p(h.ERROR,"AIService instance identifier is undefined.");const n=Rr(e),s=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Nr(s,n,r,o,Tr)}/**
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
 */function Pr(t){var n,s,r,o,a,i,c;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((o=(r=t.app)==null?void 0:r.options)!=null&&o.projectId){if(!((i=(a=t.app)==null?void 0:a.options)!=null&&i.appId))throw new p(h.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new p(h.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new p(h.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,backend:t.backend};if(rn(t.app)&&t.app.settings.appCheckToken){const l=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:l})}else t.appCheck&&((c=t.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
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
 */class ae{constructor(e,n){this._apiSettings=Pr(e),this.model=ae.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===$.GOOGLE_AI?ae.normalizeGoogleAIModelName(e):ae.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
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
 */const Lr="Timeout has expired.",xe="AbortError";class Mr{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${Or}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function xr(t){const e=[];return e.push(`${Ir}/${Dt}`),e.push(`fire/${Dt}`),(t.params.apiSettings.inferenceMode===I.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===I.PREFER_IN_CLOUD)&&e.push(Cr),e.join(" ")}async function $r(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",xr(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&_.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function nt(t,e){var l,d;const n=new Mr(t);let s;const r=(l=t.singleRequestOptions)==null?void 0:l.signal,o=((d=t.singleRequestOptions)==null?void 0:d.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:Ar,a=new AbortController,i=setTimeout(()=>{a.abort(new DOMException(Lr,xe)),_.debug(`Aborting request to ${n} due to timeout (${o}ms)`)},o),c=AbortSignal.any(r?[r,a.signal]:[a.signal]);if(r&&r.aborted)throw clearTimeout(i),new DOMException(r.reason??"Aborted externally before fetch",xe);try{const f={method:"POST",headers:await $r(n),signal:c,body:e};if(s=await fetch(n.toString(),f),!s.ok){let g="",E;try{const y=await s.json();g=y.error.message,y.error.details&&(g+=` ${JSON.stringify(y.error.details)}`,E=y.error.details)}catch{}throw s.status===403&&E&&E.some(y=>y.reason==="SERVICE_DISABLED")&&E.some(y=>{var C,D;return(D=(C=y.links)==null?void 0:C[0])==null?void 0:D.description.includes("Google developers console API activation")})?new p(h.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:E}):new p(h.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${g}`,{status:s.status,statusText:s.statusText,errorDetails:E})}}catch(f){let g=f;throw f.code!==h.FETCH_ERROR&&f.code!==h.API_NOT_ENABLED&&f instanceof Error&&f.name!==xe&&(g=new p(h.ERROR,`Error fetching from ${n.toString()}: ${f.message}`),g.stack=f.stack),g}finally{clearTimeout(i)}return s}/**
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
 */function me(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&_.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),mn(t.candidates[0]))throw new p(h.RESPONSE_ERROR,`Response error: ${H(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function k(t){return"type"in t&&t.type?t:t.text!==void 0?{...t,type:"text"}:t.inlineData!==void 0?{...t,type:"inlineData"}:t.functionCall!==void 0?{...t,type:"functionCall"}:t.functionResponse!==void 0?{...t,type:"functionResponse"}:t.fileData!==void 0?{...t,type:"fileData"}:t.executableCode!==void 0?{...t,type:"executableCode"}:t.codeExecutionResult!==void 0?{...t,type:"codeExecutionResult"}:t}function Oe(t,e=v.IN_CLOUD){var s,r;if((s=t.candidates)!=null&&s[0]&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),t.candidates)for(const o of t.candidates)(r=o.content)!=null&&r.parts&&(o.content.parts=o.content.parts.map(k));const n=Ur(t);return n.inferenceSource=e,n}function Ur(t){return t.text=()=>{if(me(t))return Rt(t,e=>!("thought"in e&&e.thought));if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Text not available. ${H(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(me(t)){const e=Rt(t,n=>!!("thought"in n&&n.thought));return e===""?void 0:e}else if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Thought summary not available. ${H(t)}`,{response:t})},t.inlineDataParts=()=>{if(me(t))return Fr(t);if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Data not available. ${H(t)}`,{response:t})},t.functionCalls=()=>{if(me(t))return pn(t);if(t.promptFeedback)throw new p(h.RESPONSE_ERROR,`Function call not available. ${H(t)}`,{response:t})},t}function Rt(t,e){var s,r,o,a;const n=[];if((r=(s=t.candidates)==null?void 0:s[0].content)!=null&&r.parts)for(const i of(a=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:a.parts){const c=k(i);c.type==="text"&&e(c)&&n.push(c.text)}return n.length>0?n.join(""):""}function pn(t){var n,s,r,o;if(!t)return;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(o=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:o.parts){const i=k(a);i.type==="functionCall"&&e.push(i.functionCall)}if(e.length>0)return e}function Fr(t){var n,s,r,o;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(o=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:o.parts){const i=k(a);i.type==="inlineData"&&e.push(i)}if(e.length>0)return e}const Br=[O.RECITATION,O.SAFETY,O.BLOCKLIST,O.PROHIBITED_CONTENT,O.SPII,O.MALFORMED_FUNCTION_CALL,O.IMAGE_SAFETY,O.IMAGE_PROHIBITED_CONTENT,O.IMAGE_OTHER,O.NO_IMAGE,O.IMAGE_RECITATION,O.LANGUAGE,O.UNEXPECTED_TOOL_CALL,O.TOO_MANY_TOOL_CALLS,O.MISSING_THOUGHT_SIGNATURE,O.MALFORMED_RESPONSE];function mn(t){return!!t.finishReason&&Br.some(e=>e===t.finishReason)}function H(t){var n,s,r;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((r=t.candidates)!=null&&r[0]){const o=t.candidates[0];mn(o)&&(e+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(e+=`: ${o.finishMessage}`))}return e}/**
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
 */function st(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{type:"text",text:t}]};if(t.type==="text"||"text"in t&&typeof t.text=="string")return{role:"system",parts:[j(k(t))]};if(t.parts){const e=t.parts.map(n=>j(k(n)));return t.role?{...t,parts:e}:{role:"system",parts:e}}}}function oe(t){let e=[];if(typeof t=="string")e=[{type:"text",text:t}];else for(const n of t)typeof n=="string"?e.push({type:"text",text:n}):e.push(j(k(n)));return Vr(e)}function Vr(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const r of t)r.type==="functionResponse"||"functionResponse"in r?s=!0:n=!0,e.parts.push(r);if(n&&s)throw new p(h.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new p(h.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function $e(t){let e;if(t.contents){const n=t;e={...n,contents:n.contents.map(s=>({...s,parts:s.parts?s.parts.map(k):[]}))}}else e={contents:[oe(t)]};return t.systemInstruction&&(e.systemInstruction=st(t.systemInstruction)),e}function qr(t){return t.parts&&Array.isArray(t.parts)?{...t,parts:t.parts.map(rt)}:t}function rt(t){let e;if("type"in t){const{type:n,...s}=t;e=s}else e=t;return e.functionResponse&&(e={...e,functionResponse:qr(e.functionResponse)}),e}function ot(t){return t.parts?{...t,parts:t.parts.map(rt)}:t}function gn(t){return t==null||typeof t=="string"?t:"parts"in t&&Array.isArray(t.parts)?ot(t):rt(t)}function yn(t){const e={...t};return e.contents&&(e.contents=e.contents.map(ot)),e.systemInstruction&&(e.systemInstruction=gn(e.systemInstruction)),e}function Hr(t){const e={...t};return e.contents&&(e.contents=e.contents.map(ot)),e.systemInstruction&&(e.systemInstruction=gn(e.systemInstruction)),e}/**
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
 */function En(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new p(h.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(_.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function at(t){return{candidates:t.candidates?jr(t.candidates):void 0,promptFeedback:t.promptFeedback?Wr(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Gr(t,e){return{generateContentRequest:{model:e,...t}}}function jr(t){const e=[];let n;return e&&t.forEach(s=>{var a,i;let r;if(s.citationMetadata&&(r={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(c=>({...c,severity:c.severity??un.HARM_SEVERITY_UNSUPPORTED,probabilityScore:c.probabilityScore??0,severityScore:c.severityScore??0}))),(i=(a=s.content)==null?void 0:a.parts)!=null&&i.some(c=>"videoMetadata"in c&&c.videoMetadata))throw new p(h.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const o={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:r,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(o)}),e}function Wr(t){const e=[];return(t.safetyRatings??[]).forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??un.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
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
 */const Tt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function Kr(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=Xr(s),[o,a]=r.tee(),{response:i,firstValue:c}=await zr(a,e,n);return{stream:Yr(o,e,n),response:i,firstValue:c}}async function zr(t,e,n){const[s,r]=t.tee(),o=s.getReader(),{value:a}=await o.read();return{firstValue:a,response:Jr(r,e,n)}}async function Jr(t,e,n){const s=[],r=t.getReader();for(;;){const{done:o,value:a}=await r.read();if(o){let i=Qr(s);return e.backend.backendType===$.GOOGLE_AI&&(i=at(i)),Oe(i,n)}s.push(a)}}async function*Yr(t,e,n){var r,o;const s=t.getReader();for(;;){const{value:a,done:i}=await s.read();if(i)break;let c;e.backend.backendType===$.GOOGLE_AI?c=Oe(at(a),n):c=Oe(a,n);const l=(r=c.candidates)==null?void 0:r[0];!((o=l==null?void 0:l.content)!=null&&o.parts)&&!(l!=null&&l.finishReason)&&!(l!=null&&l.citationMetadata)&&!(l!=null&&l.urlContextMetadata)||(yield c)}}function Xr(t){const e=t.getReader();return new ReadableStream({start(s){let r="";return o();function o(){return e.read().then(({value:a,done:i})=>{if(i){if(r.trim()){s.error(new p(h.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}r+=a;let c=r.match(Tt),l;for(;c;){try{l=JSON.parse(c[1])}catch{s.error(new p(h.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(l),r=r.substring(c[0].length),c=r.match(Tt)}return o()})}}})}function Qr(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const r of s.candidates){const o=r.index||0;n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:r.index}),n.candidates[o].citationMetadata=r.citationMetadata,n.candidates[o].finishReason=r.finishReason,n.candidates[o].finishMessage=r.finishMessage,n.candidates[o].safetyRatings=r.safetyRatings,n.candidates[o].groundingMetadata=r.groundingMetadata;const a=r.urlContextMetadata;if(typeof a=="object"&&a!==null&&Object.keys(a).length>0&&(n.candidates[o].urlContextMetadata=a),r.content){if(!r.content.parts)continue;n.candidates[o].content||(n.candidates[o].content={role:r.content.role||"user",parts:[]});for(const i of r.content.parts){if("text"in i&&i.text==="")continue;if(Object.keys(i).length===0)throw new p(h.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");const c=k({...i});Object.keys(c).length>0&&n.candidates[o].content.parts.push(c)}}}return n}/**
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
 */const Zr=[h.FETCH_ERROR,h.ERROR,h.API_NOT_ENABLED];async function bn(t,e,n,s){if(!e)return{response:await s(),inferenceSource:v.IN_CLOUD};switch(e.mode){case I.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:v.ON_DEVICE};throw new p(h.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case I.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:v.IN_CLOUD};case I.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:v.IN_CLOUD}}catch(r){if(r instanceof p&&Zr.includes(r.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:v.ON_DEVICE};throw r}case I.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:v.ON_DEVICE}:{response:await s(),inferenceSource:v.IN_CLOUD};default:throw new p(h.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
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
 */async function eo(t,e,n,s){return n=yn(n),t.backend.backendType===$.GOOGLE_AI&&(n=En(n)),nt({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function _n(t,e,n,s,r){const o=await bn(n,s,()=>s.generateContentStream(n),()=>eo(t,e,n,r));return Kr(o.response,t,o.inferenceSource)}async function to(t,e,n,s){return n=yn(n),t.backend.backendType===$.GOOGLE_AI&&(n=En(n)),nt({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function Sn(t,e,n,s,r){const o=await bn(n,s,()=>s.generateContent(n),()=>to(t,e,n,r)),a=await no(o.response,t);return{response:Oe(a,o.inferenceSource)}}async function no(t,e){const n=await t.json();return e.backend.backendType===$.GOOGLE_AI?at(n):n}/**
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
 */const Nt="SILENT_ERROR",kt=10;class so{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,j(this._history).map(e=>({...e,parts:e.parts?e.parts.map(k):[]}))}async _sendMessage(e,n){let s={};await this._sendPromise;const r=[];return this._sendPromise=this._sendPromise.then(async()=>{var c,l,d;let o,a=0;const i=((c=this.requestOptions)==null?void 0:c.maxSequentialFunctionCalls)??kt;do{let f;if(o){a++;const y=await this._callFunctionsAsNeeded(o);f=oe(y)}else f=oe(e);const g=this._formatRequest(f,[...r]);r.push(f);const E=await this._callGenerateContent(g,n);if(E)if(s=E,o=this._getCallableFunctionCalls(E.response),E.response.candidates&&E.response.candidates.length>0){const y={parts:((l=E.response.candidates)==null?void 0:l[0].content.parts)||[],role:((d=E.response.candidates)==null?void 0:d[0].content.role)||"model"};r.push(j(y))}else{const y=H(E.response);y&&_.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}else o=void 0}while(o&&a<i);o&&a>=i&&_.warn(`Automatic function calling exceeded the limit of ${i} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(r),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],o=(async()=>{var d;let a,i=0;const c=((d=this.requestOptions)==null?void 0:d.maxSequentialFunctionCalls)??kt;let l;do{let f;if(a){i++;const E=await this._callFunctionsAsNeeded(a);f=oe(E)}else f=oe(e);const g=this._formatRequest(f,[...s]);if(s.push(f),l=await this._callGenerateContentStream(g,n),a=this._getCallableFunctionCalls(l.firstValue),a&&l.firstValue&&l.firstValue.candidates&&l.firstValue.candidates.length>0){const E={...l.firstValue.candidates[0].content};E.role||(E.role="model"),s.push(E)}}while(a&&i<c);return a&&i>=c&&_.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:l.stream,response:l.response}})();return this._sendPromise=this._sendPromise.then(async()=>o).catch(a=>{throw new Error(Nt)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history=this._history.concat(s);const i={...a.candidates[0].content};i.role||(i.role="model"),this._history.push(j(i))}else{const i=H(a);i&&_.warn(`sendMessageStream() was unsuccessful. ${i}. Inspect response object for details.`)}}).catch(a=>{a.message!==Nt&&a.name!=="AbortError"&&_.error(a)}),o}_getCallableFunctionCalls(e){var r,o,a;const n=(o=(r=this.params)==null?void 0:r.tools)==null?void 0:o.find(i=>i.functionDeclarations);if(!(n!=null&&n.functionDeclarations))return;const s=pn(e);if(s){for(const i of s)if(!((a=n.functionDeclarations)==null?void 0:a.some(l=>l.name===i.name&&typeof l.functionReference=="function")))return;return s}}async _callFunctionsAsNeeded(e){var o,a;const n=[],s=[],r=(a=(o=this.params)==null?void 0:o.tools)==null?void 0:a.find(i=>i.functionDeclarations);if(r&&r.functionDeclarations){for(const c of e){const l=r.functionDeclarations.find(d=>d.name===c.name);if(l!=null&&l.functionReference){const d=Promise.resolve(l.functionReference(c.args)).catch(f=>{const g=new p(h.ERROR,`Error in user-defined function "${l.name}": ${f.message}`);throw g.stack=f.stack,g});n.push({name:c.name,id:c.id,results:d}),s.push(d)}}await Promise.all(s);const i=[];for(const{name:c,id:l,results:d}of n){const f={name:c,response:await d};l&&(f.id=l),i.push({type:"functionResponse",functionResponse:f})}return i}else throw new p(h.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
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
 */const ro=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],oo={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Pt={user:["model"],function:["model"],model:["user","function"],system:[]};function ao(t){let e=null;for(const n of t){const{role:s,parts:r}=n;if(!e&&s!=="user")throw new p(h.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!vt.includes(s))throw new p(h.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(vt)}`);if(!Array.isArray(r))throw new p(h.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new p(h.INVALID_CONTENT,"Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const i of r){if(i.type)o[i.type]+=1;else for(const c of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])c in i&&(o[c]+=1);"thought"in i&&i.thought&&(o.thought+=1),"thoughtSignature"in i&&i.thoughtSignature&&(o.thoughtSignature+=1)}const a=oo[s];for(const i of ro)if(!a.includes(i)&&o[i]>0)throw new p(h.INVALID_CONTENT,`Content with role '${s}' can't contain '${i}' part`);if(e&&!Pt[s].includes(e.role))throw new p(h.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Pt)}`);e=n}}/**
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
 */class io extends so{constructor(e,n,s,r,o){var a;super(e,r,o),this.model=n,this.chromeAdapter=s,this.params=r,this.requestOptions=o,r!=null&&r.history&&(ao(r.history),this._history=j(r.history)),((a=this.params)==null?void 0:a.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:st(this.params.systemInstruction)})}_formatRequest(e,n){var s,r,o,a,i;return{safetySettings:(s=this.params)==null?void 0:s.safetySettings,generationConfig:(r=this.params)==null?void 0:r.generationConfig,tools:(o=this.params)==null?void 0:o.tools,toolConfig:(a=this.params)==null?void 0:a.toolConfig,systemInstruction:(i=this.params)==null?void 0:i.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return Sn(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return _n(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
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
 */async function co(t,e,n,s){n=Hr(n);let r="";if(t.backend.backendType===$.GOOGLE_AI){const a=Gr(n,e);r=JSON.stringify(a)}else r=JSON.stringify(n);return(await nt({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},r)).json()}async function lo(t,e,n,s,r){if((s==null?void 0:s.mode)===I.ONLY_ON_DEVICE)throw new p(h.UNSUPPORTED,"countTokens() is not supported for on-device models.");return co(t,e,n,r)}/**
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
 */class uo extends ae{constructor(e,n,s,r){super(e,n.model),this.chromeAdapter=r,this.generationConfig=n.generationConfig||{},fo(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=st(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===I.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===P.UNAVAILABLE){const s=new p(h.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===I.ONLY_ON_DEVICE)throw s;_.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=$e(e);return Sn(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=$e(e),{stream:r,response:o}=await _n(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:r,response:o}}startChat(e){return new io(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=$e(e);return lo(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function fo(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new p(h.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new p(h.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new p(h.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
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
 */class A{constructor(e){if(!e.type&&!e.anyOf)throw new p(h.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const n in e)this[n]=e[n];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){const e={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===J.OBJECT)&&(e[n]=this[n]);return e}static array(e){return new go(e,e.items)}static object(e){return new yo(e,e.properties,e.optionalProperties)}static string(e){return new Lt(e)}static enumString(e){return new Lt(e,e.enum)}static integer(e){return new ho(e)}static number(e){return new po(e)}static boolean(e){return new mo(e)}static anyOf(e){return new Eo(e)}}class ho extends A{constructor(e){super({type:J.INTEGER,...e})}}class po extends A{constructor(e){super({type:J.NUMBER,...e})}}class mo extends A{constructor(e){super({type:J.BOOLEAN,...e})}}class Lt extends A{constructor(e,n){super({type:J.STRING,...e}),this.enum=n}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class go extends A{constructor(e,n){super({type:J.ARRAY,...e}),this.items=n}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class yo extends A{constructor(e,n,s=[]){super({type:J.OBJECT,...e}),this.properties=n,this.optionalProperties=s}toJSON(){const e=super.toJSON();e.properties={...this.properties};const n=[];if(this.optionalProperties){for(const s of this.optionalProperties)if(!this.properties.hasOwnProperty(s))throw new p(h.INVALID_SCHEMA,`Property "${s}" specified in "optionalProperties" does not exist.`)}for(const s in this.properties)this.properties.hasOwnProperty(s)&&(e.properties[s]=this.properties[s].toJSON(),this.optionalProperties.includes(s)||n.push(s));return n.length>0&&(e.required=n),delete e.optionalProperties,e}}class Eo extends A{constructor(e){if(e.anyOf.length===0)throw new p(h.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(n=>n.toJSON())),e}}/**
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
 */function Mt(t=et(),e){t=as(t);const n=sn(t,Q),s=new tt,r=vr(s),o=n.getImmediate({identifier:r}),a=o.options;return a?(a.useLimitedUseAppCheckTokens,o):(o.options={useLimitedUseAppCheckTokens:!1},o)}const bo=["mode","onDeviceParams","inCloudParams"];function Ue(t,e,n){var i;const s=e;let r;if(s.mode){for(const c of Object.keys(e))bo.includes(c)||_.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);r=s.inCloudParams||{model:Dr}}else r=e;if(!r.model)throw new p(h.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const o=(i=t.chromeAdapterFactory)==null?void 0:i.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),a=new uo(t,r,n,o);return a._apiSettings.inferenceMode=s.mode,a}/**
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
 */function _o(){le(new ie(Q,kr,"PUBLIC").setMultipleInstances(!0)),W(At,We),W(At,We,"esm2020")}_o();const ne=Xe();let wn=null,de=null,it=null,xt=!1,Ke=null;function fe(){if(xt||ne)return;xt=!0;let t;try{t=et()}catch{t=Ze(Je)}const e=Mt(t);wn=Ue(e,{mode:I.PREFER_ON_DEVICE,inCloudParams:{model:"gemini-3.5-flash-lite"}});const n=Mt(t);de=Ue(n,{mode:I.PREFER_IN_CLOUD,inCloudParams:{model:"gemini-3.5-flash-lite"}}),it=Ue(e,{mode:I.ONLY_ON_DEVICE,inCloudParams:{model:"gemini-3.5-flash-lite"}})}const So=A.array({items:A.object({properties:{name:A.string({description:"Product or item name"}),quantity:A.number({description:"Quantity delivered"}),unit:A.string({description:"Unit (sack, bag, bottle, pcs, etc.)"}),unitPriceUsd:A.number({description:"Unit price in USD"})},required:["name","quantity","unit","unitPriceUsd"],description:"One item from the supplier message"}),description:"List of items parsed from the supplier message"});function wo(t){return t===v.ON_DEVICE||t==="on_device"?"ON_DEVICE":"IN_CLOUD"}function Z(t){var r,o,a;const e=t&&typeof t=="object"&&t.response&&typeof t.response=="object"?t.response:t;let n="";e&&typeof e.text=="function"?n=e.text():n=(((a=(o=(r=e==null?void 0:e.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)??[]).filter(c=>c&&typeof c.text=="string").map(c=>c.text).join("");const s=(e==null?void 0:e.inferenceSource)??(t==null?void 0:t.inferenceSource);return{text:n,inferenceSource:s}}function De(t,e){return wo(t??e)}function ve(t,e,n){return!e||e===n?t:e===v.ON_DEVICE||e==="on_device"?`${t} The cloud was unreachable, so this ran on-device instead.`:`${t} On-device model was unavailable, so this fell back to the cloud.`}let ct=!1;function Oo(t){ct=!!t}function Io(){return ct}function V(){return ct||!navigator.onLine}function On(){const t=new Error("This request needs an internet connection. Please check your signal and try again.");return t.needsInternet=!0,t}function Co(){return V()?"on-device-only":"on-device-prefer"}function lt(){return Co()==="on-device-only"?it:wn}function ut(){if(V()&&Ke===!1)throw On()}function $t(t){const e=t.trim().replace(/^```(?:json)?/,"").replace(/```$/,"").trim();try{const n=JSON.parse(e);return Array.isArray(n)?n:n&&Array.isArray(n.items)?n.items:null}catch{return null}}function M(){if(V())throw On()}async function Ao(t){if(ne)return{_demoMode:!0};fe();const e=t.trim().length>2e3,n=e?`Long document (${t.trim().length} chars > 2 000) — sending to the cloud.`:`Short message (${t.trim().length} chars ≤ 2 000) — running on-device.`;e?M():ut();const s=e?de:lt(),r=["Extract all items from this supplier message into a JSON array.","Each element must have: name (string), quantity (number), unit (string), unitPriceUsd (number).","Return ONLY valid JSON with no markdown fences, no extra text.","","Supplier message:",t].join(`
`),o={responseMimeType:"application/json",responseSchema:So};let a,i;try{a=await s.generateContent({contents:[{role:"user",parts:[{text:r}]}],generationConfig:o});const d=Z(a);i=d.inferenceSource,a=d}catch(d){throw V()&&M(),d}const c=a.text;let l=$t(c);if(l===null&&(i===v.ON_DEVICE||i==="on_device")){M();try{const d=await de.generateContent({contents:[{role:"user",parts:[{text:r}]}],generationConfig:o}),f=Z(d);i=f.inferenceSource,l=$t(f.text)}catch(d){throw V()&&M(),d}}if(l===null){const d=new Error("Could not parse the supplier message. Please check the format and try again.");throw d.rawText=c,d}return l=l.map(d=>({name:String(d.name??"Unknown"),quantity:Number(d.quantity??0),unit:String(d.unit??"unit"),unitPriceUsd:Number(d.unitPriceUsd??0)})),{items:l,inferenceSource:De(i,e?"in_cloud":"on_device"),reason:ve(n,i,e?"in_cloud":"on_device")}}async function Do(t){if(ne)return{_demoMode:!0};fe();const e=t.trim().length>=500,n=e?`Long question (${t.trim().length} chars ≥ 500) — running in the cloud.`:`Short question (${t.trim().length} chars < 500) — running on-device.`;e?M():ut();const s=e?de:lt(),r=["You are StallSmart, an AI assistant for small market vendors.","Answer the following question concisely and practically.","Focus on pricing, inventory, and profit advice relevant to market vendors.","","Question:",t].join(`
`);let o;try{o=await s.generateContent({contents:[{role:"user",parts:[{text:r}]}]})}catch(i){throw V()&&M(),i}const a=Z(o);return{answer:a.text,inferenceSource:De(a.inferenceSource,e?"in_cloud":"on_device"),reason:ve(n,a.inferenceSource,e?"in_cloud":"on_device")}}async function vo(t){if(ne)return{_demoMode:!0};fe();const e="Short daily summary — running on-device for privacy.",{revenue:n,cost:s,profit:r,topItems:o=[]}=t,a=o.length?o.map(d=>`${d.name}: $${Number(d.revenue).toFixed(2)}`).join(", "):"none recorded",i=["You are StallSmart, a friendly AI bookkeeper for a small market vendor.","Write a short (2-3 sentence) end-of-day summary in plain English.","Be encouraging and practical. Include the key numbers.","","Today's figures:",`  Revenue: $${Number(n).toFixed(2)}`,`  Cost:    $${Number(s).toFixed(2)}`,`  Profit:  $${Number(r).toFixed(2)}`,`  Top sellers: ${a}`].join(`
`);ut();let c;try{c=await lt().generateContent({contents:[{role:"user",parts:[{text:i}]}]})}catch(d){throw V()&&M(),d}const l=Z(c);return{summary:l.text,inferenceSource:De(l.inferenceSource,"on_device"),reason:ve(e,l.inferenceSource,"on_device")}}async function Ro(t,e=4e3){if(ne)return{_demoMode:!0};fe(),M();const n="Detailed 7-day analysis — running in the cloud for deeper insights.",o=["You are StallSmart, an AI business analyst for a small market vendor.","Analyse the last 7 days of sales data below and provide:","  1. Total revenue, cost, and profit.","  2. Best-selling and most-profitable items.","  3. One concrete recommendation to improve profit next week.","Keep your response under 200 words and use plain English.","","Sales data (most recent first):",t.slice(0,200).map(c=>{const l=c.soldAt?new Date(c.soldAt).toLocaleDateString("en-US",{month:"short",day:"numeric"}):"?",d=(Number(c.salePriceUsd)*Number(c.quantity)).toFixed(2),f=(Number(c.costPriceUsd)*Number(c.quantity)).toFixed(2);return`${l}: ${c.itemName} ×${c.quantity} rev=$${d} cost=$${f}`}).join(`
`).slice(0,e)||"No sales recorded yet."].join(`
`);let a;try{a=await de.generateContent({contents:[{role:"user",parts:[{text:o}]}]})}catch(c){throw V()&&M(),c}const i=Z(a);return{summary:i.text,inferenceSource:De(i.inferenceSource,"in_cloud"),reason:ve(n,i.inferenceSource,"in_cloud")}}async function To(){if(ne)return!1;try{fe();const t=await it.generateContent({contents:[{role:"user",parts:[{text:"Reply with the single word: ready"}]}]}),e=Z(t).inferenceSource,n=e===v.ON_DEVICE||e==="on_device";return Ke=n,n}catch{return Ke=!1,!1}}const No="modulepreload",ko=function(t,e){return new URL(t,e).href},Ut={},T=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const i=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=a(n.map(d=>{if(d=ko(d,s),d in Ut)return;Ut[d]=!0;const f=d.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!s)for(let C=i.length-1;C>=0;C--){const D=i[C];if(D.href===d&&(!f||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${g}`))return;const y=document.createElement("link");if(y.rel=f?"stylesheet":No,f||(y.as="script"),y.crossOrigin="",y.href=d,l&&y.setAttribute("nonce",l),document.head.appendChild(y),f)return new Promise((C,D)=>{y.addEventListener("load",C),y.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},se=Xe(),ze={...Ye};function Po(t){return t in ze?ze[t]:Ye[t]}function In(t){if(!t||typeof t!="object")return t;const e={...t};for(const n of["createdAt","soldAt"]){const s=e[n];if(s&&typeof s.toDate=="function")try{e[n]=s.toDate().toISOString()}catch{e[n]=null}else s instanceof Date?e[n]=isNaN(s.getTime())?null:s.toISOString():typeof s=="number"?e[n]=new Date(s).toISOString():s&&typeof s=="object"&&typeof s.seconds=="number"?e[n]=new Date(s.seconds*1e3).toISOString():typeof s=="string"||s==null||(e[n]=null)}return e}let F=Ht.map(t=>({...t})),dt=Gt.map(t=>({...t}));const ge=[],ye=[];function Cn(){const t=F.map(e=>({...e}));ge.forEach(e=>e(t))}function Lo(){const t=dt.map(e=>({...e}));ye.forEach(e=>e(t))}let Y=null,Ie=null,ft=null,Ft=!1;async function Mo(){var d;if(Ft||(Ft=!0,se))return;typeof self<"u"&&he&&!he.includes("PLACEHOLDER")&&he!=="00000000-0000-0000-0000-000000000000"&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=he);const{initializeApp:t,getApp:e}=await T(async()=>{const{initializeApp:f,getApp:g}=await Promise.resolve().then(()=>Sr);return{initializeApp:f,getApp:g}},void 0,import.meta.url),{initializeFirestore:n,persistentLocalCache:s,persistentSingleTabManager:r,collection:o,getFirestore:a}=await T(async()=>{const{initializeFirestore:f,persistentLocalCache:g,persistentSingleTabManager:E,collection:y,getFirestore:C}=await import("./index.esm-bap8gtGU.js");return{initializeFirestore:f,persistentLocalCache:g,persistentSingleTabManager:E,collection:y,getFirestore:C}},[],import.meta.url),{getAuth:i,signInAnonymously:c}=await T(async()=>{const{getAuth:f,signInAnonymously:g}=await import("./index.esm-DuKXKRTp.js");return{getAuth:f,signInAnonymously:g}},[],import.meta.url);let l;try{l=e()}catch{l=t(Je)}try{const{initializeAppCheck:f,ReCaptchaEnterpriseProvider:g}=await T(async()=>{const{initializeAppCheck:E,ReCaptchaEnterpriseProvider:y}=await import("./index.esm-DaFVa0gl.js");return{initializeAppCheck:E,ReCaptchaEnterpriseProvider:y}},[],import.meta.url);f(l,{provider:new g(kn),isTokenAutoRefreshEnabled:!0})}catch(f){console.warn("StallSmart: App Check init skipped —",f.message)}try{Y=n(l,{localCache:s({tabManager:r({forceOwnership:!1})})})}catch(f){if(f.code==="failed-precondition"||(d=f.message)!=null&&d.includes("already been started"))Y=a(l);else throw f}Ie=o(Y,"stock"),ft=o(Y,"sales");try{const f=i(l);f.currentUser||await c(f)}catch(f){console.warn("StallSmart: anonymous auth failed —",f.message)}try{const{getRemoteConfig:f,fetchAndActivate:g,getValue:E}=await T(async()=>{const{getRemoteConfig:D,fetchAndActivate:Rn,getValue:Tn}=await import("./index.esm-N7YCo2u8.js");return{getRemoteConfig:D,fetchAndActivate:Rn,getValue:Tn}},[],import.meta.url),y=f(l);y.settings.minimumFetchIntervalMillis=36e5,y.defaultConfig={...Ye},await g(y);const C=E(y,"cloud_summary_max_chars");if(C){const D=parseInt(C.asString(),10);isNaN(D)||(ze.cloud_summary_max_chars=D)}}catch(f){console.warn("StallSmart: Remote Config fetch skipped —",f.message)}}async function xo(t,e="ai-parsed"){if(se){const c=new Date().toISOString();t.forEach(l=>{const d=F.findIndex(f=>f.name.toLowerCase()===l.name.toLowerCase());d>=0?F[d].quantity+=l.quantity:F.push({id:`stock-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:l.name,quantity:l.quantity,unit:l.unit,unitPriceUsd:l.unitPriceUsd,source:e,createdAt:c})}),Cn();return}const{addDoc:n,getDocs:s,query:r,where:o,updateDoc:a,doc:i}=await T(async()=>{const{addDoc:c,getDocs:l,query:d,where:f,updateDoc:g,doc:E}=await import("./index.esm-bap8gtGU.js");return{addDoc:c,getDocs:l,query:d,where:f,updateDoc:g,doc:E}},[],import.meta.url);for(const c of t){const l=r(Ie,o("name","==",c.name)),d=await s(l);if(d.empty)await n(Ie,{name:c.name,quantity:c.quantity,unit:c.unit,unitPriceUsd:c.unitPriceUsd,source:e,createdAt:new Date().toISOString()});else{const f=d.docs[0];await a(i(Y,"stock",f.id),{quantity:f.data().quantity+c.quantity})}}}function $o(t){if(se)return ge.push(t),t(F.map(s=>({...s}))),()=>{const s=ge.indexOf(t);s>=0&&ge.splice(s,1)};let e=null,n=!1;return(async()=>{const{onSnapshot:s,orderBy:r,query:o}=await T(async()=>{const{onSnapshot:i,orderBy:c,query:l}=await import("./index.esm-bap8gtGU.js");return{onSnapshot:i,orderBy:c,query:l}},[],import.meta.url);if(n)return;const a=o(Ie,r("createdAt","desc"));e=s(a,i=>{const c=i.docs.map(l=>({id:l.id,...In(l.data())}));t(c)},i=>{console.error("StallSmart: stock listener error —",i)})})(),()=>{n=!0,e&&e()}}function Uo(t){if(se)return ye.push(t),t(dt.map(s=>({...s}))),()=>{const s=ye.indexOf(t);s>=0&&ye.splice(s,1)};let e=null,n=!1;return(async()=>{const{onSnapshot:s,orderBy:r,query:o}=await T(async()=>{const{onSnapshot:i,orderBy:c,query:l}=await import("./index.esm-bap8gtGU.js");return{onSnapshot:i,orderBy:c,query:l}},[],import.meta.url);if(n)return;const a=o(ft,r("soldAt","desc"));e=s(a,i=>{const c=i.docs.map(l=>({id:l.id,...In(l.data())}));t(c)},i=>{console.error("StallSmart: sales listener error —",i)})})(),()=>{n=!0,e&&e()}}async function Fo(t){const e={...t,soldAt:new Date().toISOString()};if(se){dt.push({id:`sale-${Date.now()}`,...e}),Lo();return}const{addDoc:n}=await T(async()=>{const{addDoc:s}=await import("./index.esm-bap8gtGU.js");return{addDoc:s}},[],import.meta.url);await n(ft,{...t,soldAt:new Date().toISOString()})}async function Bo(t,e){if(se){const c=F.findIndex(l=>l.id===t);c>=0&&(F[c].quantity=Math.max(0,F[c].quantity-e),Cn());return}const{doc:n,updateDoc:s,getDoc:r,increment:o}=await T(async()=>{const{doc:c,updateDoc:l,getDoc:d,increment:f}=await import("./index.esm-bap8gtGU.js");return{doc:c,updateDoc:l,getDoc:d,increment:f}},[],import.meta.url),a=n(Y,"stock",t);(await r(a)).exists()&&await s(a,{quantity:o(-e)})}const S=Xe();let B=S?Ht.map(t=>({...t})):[],ee=S?Gt.map(t=>({...t})):[],w=[];const u=t=>document.getElementById(t),m=(t,e)=>t.classList.toggle("hidden",e),X=t=>`$${Number(t).toFixed(2)}`,Vo=t=>{if(!t)return"—";const e=t instanceof Date?t:new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString("en-US",{month:"short",day:"numeric"})};function te(t){return t==="ON_DEVICE"?'<span class="badge badge-on-device">ON-DEVICE</span>':t==="IN_CLOUD"?'<span class="badge badge-in-cloud">IN-CLOUD</span>':'<span class="badge badge-demo">DEMO</span>'}function qo(){S&&(m(u("demo-badge"),!1),u("footer-demo-note").textContent="⚠ Running in demo mode — Firebase config not yet set. All AI results are simulated.");const t=()=>{const e=u("connection-pill");Io()?(e.textContent="● Simulated offline",e.className="pill pill-offline"):navigator.onLine?(e.textContent="● Online",e.className="pill pill-online"):(e.textContent="● Offline",e.className="pill pill-offline")};t(),window.addEventListener("online",t),window.addEventListener("offline",t),u("chk-simulate-offline").addEventListener("change",e=>{Oo(e.target.checked),t()})}function x({mode:t="—",lastRequest:e="None yet",reason:n="No AI call made yet.",onDevice:s=null}={}){u("status-mode").textContent=t,u("status-last").textContent=e,u("status-reason").textContent=n,u("status-ondevice").textContent=s===null?S?"Unknown (demo mode)":"Checking…":s?"✅ Available":"❌ Not available (falling back to cloud)"}function An(t){const e=t.trim().length;return e>2e3?{mode:"PREFER_IN_CLOUD",source:"IN_CLOUD",reason:`Long document (${e} chars > 2 000) — sending to the cloud.`}:{mode:"PREFER_ON_DEVICE",source:"ON_DEVICE",reason:`Short message (${e} chars ≤ 2 000) — running on-device.`}}function Ho(t){const{source:e,reason:n}=An(t),s=u("parse-routing");s.innerHTML=`${te(S?"DEMO":e)}<span>${n}</span>`,m(s,!1)}function Go(t){const e=[...Vt,qt].find(o=>o.text.trim()===t.trim());if(e&&e.id==="msg-001")return pt.map(o=>({...o}));const n=t.split(/\n/),s=[],r=/(.+?)\s+x?\s*(\d+(?:\.\d+)?)\s+(\w+)\s+@\$(\d+(?:\.\d+)?)/i;for(const o of n){const a=o.match(r);a&&s.push({name:a[1].trim(),quantity:parseFloat(a[2]),unit:a[3].trim(),unitPriceUsd:parseFloat(a[4])})}return s.length?s:pt.map(o=>({...o}))}function Dn(t){const e=u("parsed-tbody");e.innerHTML="",t.forEach((n,s)=>{const r=document.createElement("tr");r.innerHTML=`
      <td><input type="text"   class="parsed-name"  data-idx="${s}" value="${K(n.name)}" /></td>
      <td><input type="number" class="parsed-qty"   data-idx="${s}" value="${n.quantity}" min="0.01" step="0.01" style="width:80px"/></td>
      <td><input type="text"   class="parsed-unit"  data-idx="${s}" value="${K(n.unit)}" style="width:70px"/></td>
      <td><input type="number" class="parsed-price" data-idx="${s}" value="${n.unitPriceUsd}" min="0.00" step="0.01" style="width:90px"/></td>
      <td><button class="btn btn-ghost btn-remove-row" data-idx="${s}" style="padding:.25rem .5rem;font-size:.75rem;">✕</button></td>
    `,e.appendChild(r)}),e.querySelectorAll("input").forEach(n=>{n.addEventListener("change",()=>{const s=parseInt(n.dataset.idx,10),r=n.className.split(" ").find(o=>o.startsWith("parsed-"));r==="parsed-name"&&(w[s].name=n.value),r==="parsed-qty"&&(w[s].quantity=parseFloat(n.value)||0),r==="parsed-unit"&&(w[s].unit=n.value),r==="parsed-price"&&(w[s].unitPriceUsd=parseFloat(n.value)||0)})}),e.querySelectorAll(".btn-remove-row").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.idx,10);w.splice(s,1),Dn(w)})})}function jo(){const t=u("btn-parse"),e=u("btn-load-demo"),n=u("parse-input");let s=0;e.addEventListener("click",()=>{const r=[...Vt,qt],o=r[s%r.length];n.value=o.text,s++,m(u("parse-routing"),!0),m(u("section-parsed-results"),!0)}),n.addEventListener("input",()=>{n.value.trim().length>10?Ho(n.value):m(u("parse-routing"),!0)}),t.addEventListener("click",async()=>{const r=n.value.trim();if(!r)return;t.disabled=!0,m(u("parse-loading"),!1),m(u("section-parsed-results"),!0),m(u("parse-error"),!0);const{source:o,mode:a,reason:i}=An(r),c=u("parse-routing");if(c.innerHTML=`${te(S?"DEMO":o)}<span>${i}</span>`,m(c,!1),x({mode:S?`${a} (demo)`:a,lastRequest:"Parse supplier message",reason:i}),S)await new Promise(l=>setTimeout(l,600)),w=Go(r);else try{const l=await Ao(r);w=l.items,c.innerHTML=`${te(l.inferenceSource)}<span>${l.reason}</span>`,x({mode:l.inferenceSource==="ON_DEVICE"?"PREFER_ON_DEVICE":"PREFER_IN_CLOUD",lastRequest:"Parse supplier message",reason:l.reason,onDevice:l.inferenceSource==="ON_DEVICE"})}catch(l){w=[];const d=u("parse-error");d.textContent=l.needsInternet?"⚠ This request needs an internet connection. Please check your signal and try again.":`⚠ Could not parse message: ${l.message}`,m(d,!1)}m(u("parse-loading"),!0),t.disabled=!1,w.length&&(Dn(w),m(u("section-parsed-results"),!1))}),u("btn-save-stock").addEventListener("click",async()=>{if(w.length){if(S){const r=new Date().toISOString();w.forEach(o=>{const a=B.findIndex(i=>i.name.toLowerCase()===o.name.toLowerCase());a>=0?B[a].quantity+=o.quantity:B.push({id:`stock-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:o.name,quantity:o.quantity,unit:o.unit,unitPriceUsd:o.unitPriceUsd,source:"demo",createdAt:r})})}else try{await xo(w,"ai-parsed")}catch(r){alert(`Could not save to inventory: ${r.message}`)}w=[],m(u("section-parsed-results"),!0),G(),Ce()}}),u("btn-clear-parsed").addEventListener("click",()=>{w=[],m(u("section-parsed-results"),!0)})}function G(t="",e=!1){const n=u("inventory-tbody"),s=u("inventory-empty");n.innerHTML="";let r=B.slice();if(t){const o=t.toLowerCase();r=r.filter(a=>a.name.toLowerCase().includes(o))}if(e&&(r=r.filter(o=>o.quantity<=mt)),!r.length){m(s,!1);return}m(s,!0),r.forEach(o=>{const a=o.quantity<=mt,i=document.createElement("tr");a&&i.classList.add("low-stock"),i.innerHTML=`
      <td>${K(o.name)}${a?'<span class="low-stock-flag">LOW</span>':""}</td>
      <td>${o.quantity}</td>
      <td>${K(o.unit)}</td>
      <td>${X(o.unitPriceUsd)}</td>
      <td><span class="badge badge-${o.source==="demo"?"demo":"on-device"}">${K(o.source)}</span></td>
      <td>${Vo(o.createdAt)}</td>
    `,n.appendChild(i)})}function Wo(){S||$o(t=>{B=t,G(u("inventory-search").value,u("chk-low-stock").checked),Ce()}),G(),u("inventory-search").addEventListener("input",t=>{G(t.target.value,u("chk-low-stock").checked)}),u("chk-low-stock").addEventListener("change",t=>{G(u("inventory-search").value,t.target.checked)})}function Ce(){const t=u("sale-item"),e=t.value;t.innerHTML='<option value="">— select item —</option>',B.forEach(n=>{const s=document.createElement("option");s.value=n.id,s.textContent=`${n.name} (${n.quantity} ${n.unit} @ ${X(n.unitPriceUsd)})`,t.appendChild(s)}),e&&(t.value=e)}function Ee(){const t=new Date().toDateString(),e=ee.filter(l=>new Date(l.soldAt).toDateString()===t),n=e.reduce((l,d)=>l+d.salePriceUsd*d.quantity,0),s=e.reduce((l,d)=>l+d.costPriceUsd*d.quantity,0),r=n-s;u("stat-revenue").textContent=X(n),u("stat-cost").textContent=X(s),u("stat-profit").textContent=X(r);const o={};e.forEach(l=>{o[l.itemName]=(o[l.itemName]||0)+l.salePriceUsd*l.quantity});const a=Object.entries(o).sort((l,d)=>d[1]-l[1]).slice(0,5),i=u("top-items-list"),c=u("dashboard-empty");if(i.innerHTML="",!a.length){m(c,!1);return}m(c,!0),a.forEach(([l,d])=>{const f=document.createElement("li");f.innerHTML=`<span>${K(l)}</span><span>${X(d)}</span>`,i.appendChild(f)})}function Ko(){S||Uo(t=>{ee=t,Ee()}),Ce(),Ee(),u("btn-log-sale").addEventListener("click",async()=>{const t=u("sale-item").value,e=parseFloat(u("sale-qty").value),n=parseFloat(u("sale-price").value);if(!t||!e||!n){alert("Please select an item and enter qty + sale price.");return}const s=B.find(o=>o.id===t);if(!s)return;if(s.quantity<e){alert(`Not enough stock. You have ${s.quantity} ${s.unit}(s).`);return}const r={itemId:s.id,itemName:s.name,quantity:e,salePriceUsd:n,costPriceUsd:s.unitPriceUsd};if(S)ee.push({id:`sale-${Date.now()}`,...r,soldAt:new Date().toISOString()}),s.quantity-=e;else try{await Fo(r),await Bo(s.id,e)}catch(o){alert(`Could not log sale: ${o.message}`);return}u("sale-qty").value="",u("sale-price").value="",G(u("inventory-search").value,u("chk-low-stock").checked),Ce(),Ee()})}function vn(){const t=new Date().toDateString(),e=ee.filter(i=>new Date(i.soldAt).toDateString()===t),n=e.reduce((i,c)=>i+c.salePriceUsd*c.quantity,0),s=e.reduce((i,c)=>i+c.costPriceUsd*c.quantity,0),r=n-s,o={};e.forEach(i=>{o[i.itemName]=(o[i.itemName]||0)+i.salePriceUsd*i.quantity});const a=Object.entries(o).sort((i,c)=>c[1]-i[1]).slice(0,3).map(([i,c])=>({name:i,revenue:c}));return{revenue:n,cost:s,profit:r,topItems:a}}function zo(){u("btn-daily-summary").addEventListener("click",async()=>{m(u("daily-summary-result"),!0),m(u("weekly-summary-result"),!0),m(u("summary-error"),!0),m(u("daily-summary-loading"),!1);let t,e,n;if(S)await new Promise(s=>setTimeout(s,700)),{summary:t,inferenceSource:e}=Mn,n="Short daily summary — running on-device for privacy. [DEMO — simulated result]",e="DEMO";else try{const s=vn(),r=await vo(s);t=r.summary,e=r.inferenceSource,n=r.reason,x({mode:"PREFER_ON_DEVICE",lastRequest:"Daily summary",reason:n,onDevice:e==="ON_DEVICE"})}catch(s){m(u("daily-summary-loading"),!0);const r=u("summary-error");r.textContent=s.needsInternet?"⚠ This request needs an internet connection. Please check your signal and try again.":`⚠ Could not generate daily summary: ${s.message}`,m(r,!1);return}m(u("daily-summary-loading"),!0),u("daily-summary-badge-row").innerHTML=`${te(e)}<span>${n}</span>`,u("daily-summary-text").textContent=t,m(u("daily-summary-result"),!1)}),u("btn-weekly-summary").addEventListener("click",async()=>{m(u("daily-summary-result"),!0),m(u("weekly-summary-result"),!0),m(u("summary-error"),!0),m(u("weekly-summary-loading"),!1);let t,e,n;if(S)await new Promise(s=>setTimeout(s,900)),{summary:t,inferenceSource:e}=xn,n="Detailed 7-day analysis — running in the cloud for deeper insights. [DEMO — simulated result]",e="DEMO";else{if(!navigator.onLine){m(u("weekly-summary-loading"),!0);const s=u("summary-error");s.textContent="⚠ Weekly analysis needs an internet connection. Please check your signal.",m(s,!1);return}try{const s=Date.now()-6048e5,r=ee.filter(i=>new Date(i.soldAt).getTime()>=s),o=Po("cloud_summary_max_chars"),a=await Ro(r,o);t=a.summary,e=a.inferenceSource,n=a.reason,x({mode:"PREFER_IN_CLOUD",lastRequest:"Weekly analysis",reason:n,onDevice:!1})}catch(s){m(u("weekly-summary-loading"),!0);const r=u("summary-error");r.textContent=s.needsInternet?"⚠ Weekly analysis needs an internet connection. Please check your signal.":`⚠ Could not generate weekly analysis: ${s.message}`,m(r,!1);return}}m(u("weekly-summary-loading"),!0),u("weekly-summary-badge-row").innerHTML=`${te(e)}<span>${n}</span>`,u("weekly-summary-text").innerHTML=K(t).replace(/\n/g,"<br>"),m(u("weekly-summary-result"),!1)})}function Jo(t){const e=t.toLowerCase();return Pn.find(s=>s.keywords.some(r=>e.includes(r)))||Ln}function Yo(){u("btn-ask").addEventListener("click",async()=>{const t=u("ask-input").value.trim();if(!t)return;u("btn-ask").disabled=!0,m(u("ask-loading"),!1),m(u("ask-result"),!0),m(u("ask-error"),!0);const e=t.length>=500,{source:n,mode:s,reason:r}=e?{source:"IN_CLOUD",mode:"PREFER_IN_CLOUD",reason:`Long question (${t.length} chars ≥ 500) — running in the cloud.`}:{source:"ON_DEVICE",mode:"PREFER_ON_DEVICE",reason:`Short question (${t.length} chars < 500) — running on-device.`};x({mode:S?`${s} (demo)`:s,lastRequest:"Ask StallSmart",reason:r});let o=n,a=r,i="";if(S)await new Promise(l=>setTimeout(l,700)),i=Jo(t).answer,o="DEMO";else try{const c=await Do(t);i=c.answer,o=c.inferenceSource,a=c.reason,x({mode:o==="ON_DEVICE"?"PREFER_ON_DEVICE":"PREFER_IN_CLOUD",lastRequest:"Ask StallSmart",reason:a,onDevice:o==="ON_DEVICE"})}catch(c){m(u("ask-loading"),!0),u("btn-ask").disabled=!1;const l=u("ask-error");l.textContent=c.needsInternet?"⚠ This request needs an internet connection. Please check your signal and try again.":`⚠ Error: ${c.message}`,m(l,!1);return}m(u("ask-loading"),!0),u("btn-ask").disabled=!1,u("ask-badge-row").innerHTML=`${te(o)}<span>${a}</span>`,u("ask-answer").textContent=i,m(u("ask-result"),!1)}),u("ask-input").addEventListener("keydown",t=>{t.key==="Enter"&&u("btn-ask").click()})}function K(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function Bt(){qo(),x();try{await Mo()}catch(t){console.warn("StallSmart: store init failed —",t.message)}jo(),Wo(),Ko(),zo(),Yo(),S||To().then(t=>{x({mode:t?"PREFER_ON_DEVICE":"PREFER_IN_CLOUD (fallback)",lastRequest:u("status-last").textContent,reason:t?"Gemini Nano is available on this device — short jobs will run on-device.":"On-device model not available in this browser. All requests will fall back to the cloud.",onDevice:t})}).catch(()=>{x({mode:"PREFER_IN_CLOUD (fallback)",lastRequest:u("status-last").textContent,reason:"Could not reach on-device model — all requests will use the cloud.",onDevice:!1})}),window.__stallsmart={isDemo:S,getStock:()=>B,getSales:()=>ee,getParsedItems:()=>w,renderInventory:G,renderDashboard:Ee,buildSalesDataForSummary:vn}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bt):Bt();export{da as A,Er as B,ie as C,ca as D,Qt as E,z as F,zn as G,fa as H,Wt as I,Os as J,Yn as K,Zt as L,Xo as M,or as S,sn as _,Qo as a,as as b,ea as c,Be as d,b as e,aa as f,et as g,Yt as h,ha as i,zt as j,Jn as k,ia as l,rn as m,le as n,Zo as o,pa as p,Kn as q,W as r,oa as s,la as t,ua as u,Fe as v,ta as w,ra as x,sa as y,na as z};
