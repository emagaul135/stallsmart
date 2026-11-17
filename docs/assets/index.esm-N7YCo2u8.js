import{r as R,n as V,C as U,_ as K,E as ge,J as xe,F as j,b as p,d as De,g as Be,k as he,K as Ve,e as A,L as Ue,S as Y,H as fe,M as $}from"./index-xzQvvcxQ.js";const de="@firebase/installations",q="0.6.24";/**
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
 */const me=1e4,pe=`w:${q}`,we="FIS_v2",$e="https://firebaseinstallations.googleapis.com/v1",He=3600*1e3,Ke="installations",je="Installations";/**
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
 */const qe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},I=new ge(Ke,je,qe);function be(s){return s instanceof j&&s.code.includes("request-failed")}/**
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
 */function Ee({projectId:s}){return`${$e}/projects/${s}/installations`}function ye(s){return{token:s.token,requestStatus:2,expiresIn:Ge(s.expiresIn),creationTime:Date.now()}}async function Ce(s,e){const i=(await e.json()).error;return I.create("request-failed",{requestName:s,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function _e({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function ze(s,{refreshToken:e}){const t=_e(s);return t.append("Authorization",We(e)),t}async function Se(s){const e=await s();return e.status>=500&&e.status<600?s():e}function Ge(s){return Number(s.replace("s","000"))}function We(s){return`${we} ${s}`}/**
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
 */async function Je({appConfig:s,heartbeatServiceProvider:e},{fid:t}){const i=Ee(s),n=_e(s),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const o={fid:t,authVersion:we,appId:s.appId,sdkVersion:pe},r={method:"POST",headers:n,body:JSON.stringify(o)},c=await Se(()=>fetch(i,r));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:ye(l.authToken)}}else throw await Ce("Create Installation",c)}/**
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
 */function Ie(s){return new Promise(e=>{setTimeout(e,s)})}/**
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
 */function Xe(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ye=/^[cdef][\w-]{21}$/,H="";function Qe(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const t=Ze(s);return Ye.test(t)?t:H}catch{return H}}function Ze(s){return Xe(s).substr(0,22)}/**
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
 */function F(s){return`${s.appName}!${s.appId}`}/**
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
 */const Te=new Map;function ve(s,e){const t=F(s);Ae(t,e),et(t,e)}function Ae(s,e){const t=Te.get(s);if(t)for(const i of t)i(e)}function et(s,e){const t=tt();t&&t.postMessage({key:s,fid:e}),st()}let S=null;function tt(){return!S&&"BroadcastChannel"in self&&(S=new BroadcastChannel("[Firebase] FID Change"),S.onmessage=s=>{Ae(s.data.key,s.data.fid)}),S}function st(){Te.size===0&&S&&(S.close(),S=null)}/**
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
 */const it="firebase-installations-database",nt=1,T="firebase-installations-store";let N=null;function z(){return N||(N=xe(it,nt,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(T)}}})),N}async function k(s,e){const t=F(s),n=(await z()).transaction(T,"readwrite"),a=n.objectStore(T),o=await a.get(t);return await a.put(e,t),await n.done,(!o||o.fid!==e.fid)&&ve(s,e.fid),e}async function Me(s){const e=F(s),i=(await z()).transaction(T,"readwrite");await i.objectStore(T).delete(e),await i.done}async function L(s,e){const t=F(s),n=(await z()).transaction(T,"readwrite"),a=n.objectStore(T),o=await a.get(t),r=e(o);return r===void 0?await a.delete(t):await a.put(r,t),await n.done,r&&(!o||o.fid!==r.fid)&&ve(s,r.fid),r}/**
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
 */async function G(s){let e;const t=await L(s.appConfig,i=>{const n=at(i),a=rt(s,n);return e=a.registrationPromise,a.installationEntry});return t.fid===H?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function at(s){const e=s||{fid:Qe(),registrationStatus:0};return Re(e)}function rt(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(I.create("app-offline"));return{installationEntry:e,registrationPromise:n}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ot(s,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ct(s)}:{installationEntry:e}}async function ot(s,e){try{const t=await Je(s,e);return k(s.appConfig,t)}catch(t){throw be(t)&&t.customData.serverCode===409?await Me(s.appConfig):await k(s.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ct(s){let e=await Q(s.appConfig);for(;e.registrationStatus===1;)await Ie(100),e=await Q(s.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await G(s);return i||t}return e}function Q(s){return L(s,e=>{if(!e)throw I.create("installation-not-found");return Re(e)})}function Re(s){return lt(s)?{fid:s.fid,registrationStatus:0}:s}function lt(s){return s.registrationStatus===1&&s.registrationTime+me<Date.now()}/**
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
 */async function ut({appConfig:s,heartbeatServiceProvider:e},t){const i=gt(s,t),n=ze(s,t),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const o={installation:{sdkVersion:pe,appId:s.appId}},r={method:"POST",headers:n,body:JSON.stringify(o)},c=await Se(()=>fetch(i,r));if(c.ok){const l=await c.json();return ye(l)}else throw await Ce("Generate Auth Token",c)}function gt(s,{fid:e}){return`${Ee(s)}/${e}/authTokens:generate`}/**
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
 */async function W(s,e=!1){let t;const i=await L(s.appConfig,a=>{if(!ke(a))throw I.create("not-registered");const o=a.authToken;if(!e&&dt(o))return a;if(o.requestStatus===1)return t=ht(s,e),a;{if(!navigator.onLine)throw I.create("app-offline");const r=pt(a);return t=ft(s,r),r}});return t?await t:i.authToken}async function ht(s,e){let t=await Z(s.appConfig);for(;t.authToken.requestStatus===1;)await Ie(100),t=await Z(s.appConfig);const i=t.authToken;return i.requestStatus===0?W(s,e):i}function Z(s){return L(s,e=>{if(!ke(e))throw I.create("not-registered");const t=e.authToken;return wt(t)?{...e,authToken:{requestStatus:0}}:e})}async function ft(s,e){try{const t=await ut(s,e),i={...e,authToken:t};return await k(s.appConfig,i),t}catch(t){if(be(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Me(s.appConfig);else{const i={...e,authToken:{requestStatus:0}};await k(s.appConfig,i)}throw t}}function ke(s){return s!==void 0&&s.registrationStatus===2}function dt(s){return s.requestStatus===2&&!mt(s)}function mt(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+He}function pt(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function wt(s){return s.requestStatus===1&&s.requestTime+me<Date.now()}/**
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
 */async function bt(s){const e=s,{installationEntry:t,registrationPromise:i}=await G(e);return i?i.catch(console.error):W(e).catch(console.error),t.fid}/**
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
 */async function Et(s,e=!1){const t=s;return await yt(t),(await W(t,e)).token}async function yt(s){const{registrationPromise:e}=await G(s);e&&await e}/**
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
 */function Ct(s){if(!s||!s.options)throw O("App Configuration");if(!s.name)throw O("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!s.options[t])throw O(t);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function O(s){return I.create("missing-app-config-values",{valueName:s})}/**
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
 */const Fe="installations",_t="installations-internal",St=s=>{const e=s.getProvider("app").getImmediate(),t=Ct(e),i=K(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},It=s=>{const e=s.getProvider("app").getImmediate(),t=K(e,Fe).getImmediate();return{getId:()=>bt(t),getToken:n=>Et(t,n)}};function Tt(){V(new U(Fe,St,"PUBLIC")),V(new U(_t,It,"PRIVATE"))}/**
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
 */Tt();R(de,q);R(de,q,"esm2020");const x="@firebase/remote-config",ee="0.10.0";/**
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
 */class Le{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */const Pe="remote-config",te=100,se=250,ie=500;/**
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
 */const vt={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported.","stream-error":"The stream was not able to connect to the backend: {$originalErrorMessage}.","realtime-unavailable":"The Realtime service is unavailable: {$originalErrorMessage}","update-message-invalid":"The stream invalidation message was unparsable: {$originalErrorMessage}","update-not-fetched":"Unable to fetch the latest config: {$originalErrorMessage}","analytics-unavailable":"Connection to Firebase Analytics failed: {$originalErrorMessage}"},g=new ge("remoteconfig","Remote Config",vt);function At(s,e){return s instanceof j&&s.code.indexOf(e)!==-1}/**
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
 */const Mt=!1,Rt="",ne=0,kt=["1","true","t","yes","y","on"];class D{constructor(e,t=Rt){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return this._source==="static"?Mt:kt.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return ne;let e=Number(this._value);return isNaN(e)&&(e=ne),e}getSource(){return this._source}}class Ft{constructor(e){this.storage=e._storage,this.logger=e._logger,this.analyticsProvider=e._analyticsProvider}async updateActiveExperiments(e){const t=await this.storage.getActiveExperiments()||new Set,i=this.createExperimentInfoMap(e);return this.addActiveExperiments(i),this.removeInactiveExperiments(t,i),this.storage.setActiveExperiments(new Set(i.keys()))}createExperimentInfoMap(e){const t=new Map;for(const i of e)t.set(i.experimentId,i);return t}addActiveExperiments(e){const t={};for(const[i,n]of e.entries())t[`firebase${i}`]=n.variantId;this.addExperimentToAnalytics(t)}removeInactiveExperiments(e,t){const i={};for(const n of e)t.has(n)||(i[`firebase${n}`]=null);this.addExperimentToAnalytics(i)}addExperimentToAnalytics(e){if(Object.keys(e).length!==0)try{const t=this.analyticsProvider.getImmediate({optional:!0});t?(t.setUserProperties(e),t.logEvent("set_firebase_experiment_state")):this.logger.warn("Analytics import failed. Verify if you have imported Firebase Analytics in your app code.")}catch(t){throw g.create("analytics-unavailable",{originalErrorMessage:t==null?void 0:t.message})}}}/**
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
 */function ns(s=Be(),e={}){var n,a;s=p(s);const t=K(s,Pe);if(t.isInitialized()){const o=t.getOptions();if(De(o,e))return t.getImmediate();throw g.create("already-initialized")}t.initialize({options:e});const i=t.getImmediate();return e.initialFetchResponse&&(i._initializePromise=Promise.all([i._storage.setLastSuccessfulFetchResponse(e.initialFetchResponse),i._storage.setActiveConfigEtag(((n=e.initialFetchResponse)==null?void 0:n.eTag)||""),i._storage.setActiveConfigTemplateVersion(e.initialFetchResponse.templateVersion||0),i._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),i._storageCache.setLastFetchStatus("success"),i._storageCache.setActiveConfig(((a=e.initialFetchResponse)==null?void 0:a.config)||{})]).then(),i._isInitializationComplete=!0),i}async function Lt(s){const e=p(s),[t,i]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);if(!t||!t.config||!t.eTag||!t.templateVersion||t.eTag===i)return!1;const a=new Ft(e).updateActiveExperiments(t.experiments||[]);return await Promise.all([e._storageCache.setActiveConfig(t.config),e._storage.setActiveConfigEtag(t.eTag),e._storage.setActiveConfigTemplateVersion(t.templateVersion),a]),!0}function Pt(s){const e=p(s);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function Nt(s){const e=p(s),t=new Le;setTimeout(async()=>{t.abort()},e.settings.fetchTimeoutMillis);const i=e._storageCache.getCustomSignals();i&&e._logger.debug(`Fetching config with custom signals: ${JSON.stringify(i)}`);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:t,customSignals:i}),await e._storageCache.setLastFetchStatus("success")}catch(n){const a=At(n,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(a),n}}function as(s){const e=p(s);return Ot(e._storageCache.getActiveConfig(),e.defaultConfig).reduce((t,i)=>(t[i]=P(s,i),t),{})}function rs(s,e){return P(p(s),e).asBoolean()}function os(s,e){return P(p(s),e).asNumber()}function cs(s,e){return P(p(s),e).asString()}function P(s,e){const t=p(s);t._isInitializationComplete||t._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const i=t._storageCache.getActiveConfig();return i&&i[e]!==void 0?new D("remote",i[e]):t.defaultConfig&&t.defaultConfig[e]!==void 0?new D("default",String(t.defaultConfig[e])):(t._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new D("static"))}function ls(s,e){const t=p(s);switch(e){case"debug":t._logger.logLevel=A.DEBUG;break;case"silent":t._logger.logLevel=A.SILENT;break;default:t._logger.logLevel=A.ERROR}}function Ot(s={},e={}){return Object.keys({...s,...e})}async function us(s,e){const t=p(s);if(Object.keys(e).length!==0){for(const i in e){if(i.length>se){t._logger.error(`Custom signal key ${i} is too long, max allowed length is ${se}.`);return}const n=e[i];if(typeof n=="string"&&n.length>ie){t._logger.error(`Value supplied for custom signal ${i} is too long, max allowed length is ${ie}.`);return}}try{await t._storageCache.setCustomSignals(e)}catch(i){t._logger.error(`Error encountered while setting custom signals: ${i}`)}}}function gs(s,e){const t=p(s);return t._realtimeHandler.addObserver(e),()=>{t._realtimeHandler.removeObserver(e)}}/**
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
 */class xt{constructor(e,t,i,n){this.client=e,this.storage=t,this.storageCache=i,this.logger=n}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const i=Date.now()-t,n=i<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${i}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${n}.`),n}async fetch(e){const[t,i]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(i&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return i;e.eTag=i&&i.eTag;const n=await this.client.fetch(e),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return n.status===200&&a.push(this.storage.setLastSuccessfulFetchResponse(n)),await Promise.all(a),n}}/**
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
 */function Dt(s=navigator){return s.languages&&s.languages[0]||s.language}/**
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
 */class Bt{constructor(e,t,i,n,a,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=i,this.projectId=n,this.apiKey=a,this.appId=o}async fetch(e){const[t,i]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),a=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},r={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:i,app_id:this.appId,language_code:Dt(),custom_signals:e.customSignals},c={method:"POST",headers:o,body:JSON.stringify(r)},l=fetch(a,c),d=new Promise((m,b)=>{e.signal.addEventListener(()=>{const X=new Error("The operation was aborted.");X.name="AbortError",b(X)})});let h;try{await Promise.race([l,d]),h=await l}catch(m){let b="fetch-client-network";throw(m==null?void 0:m.name)==="AbortError"&&(b="fetch-timeout"),g.create(b,{originalErrorMessage:m==null?void 0:m.message})}let f=h.status;const y=h.headers.get("ETag")||void 0;let C,w,u,E,v;if(h.status===200){let m;try{m=await h.json()}catch(b){throw g.create("fetch-client-parse",{originalErrorMessage:b==null?void 0:b.message})}C=m.entries,w=m.state,u=m.templateVersion,E=m.experimentDescriptions,v=m.rolloutMetadata}if(w==="INSTANCE_STATE_UNSPECIFIED"?f=500:w==="NO_CHANGE"?f=304:(w==="NO_TEMPLATE"||w==="EMPTY_CONFIG")&&(C={},E=[],v=[]),f!==304&&f!==200)throw g.create("fetch-status",{httpStatus:f});return{status:f,eTag:y,config:C,templateVersion:u,experiments:E,rollouts:v}}}/**
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
 */function Vt(s,e){return new Promise((t,i)=>{const n=Math.max(e-Date.now(),0),a=setTimeout(t,n);s.addEventListener(()=>{clearTimeout(a),i(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ut(s){if(!(s instanceof j)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class $t{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:i}){await Vt(e.signal,t);try{const n=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),n}catch(n){if(!Ut(n))throw n;const a={throttleEndTimeMillis:Date.now()+fe(i),backoffCount:i+1};return await this.storage.setThrottleMetadata(a),this.attemptFetch(e,a)}}}/**
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
 */const Ht=60*1e3,Kt=720*60*1e3;class jt{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,i,n,a,o,r){this.app=e,this._client=t,this._storageCache=i,this._storage=n,this._logger=a,this._realtimeHandler=o,this._analyticsProvider=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:Ht,minimumFetchIntervalMillis:Kt},this.defaultConfig={}}}/**
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
 */function M(s,e){const t=s.target.error||void 0;return g.create(e,{originalErrorMessage:t&&(t==null?void 0:t.message)})}const _="app_namespace_store",qt="firebase_remote_config",zt=1;function Gt(){return new Promise((s,e)=>{try{const t=indexedDB.open(qt,zt);t.onerror=i=>{e(M(i,"storage-open"))},t.onsuccess=i=>{s(i.target.result)},t.onupgradeneeded=i=>{const n=i.target.result;switch(i.oldVersion){case 0:n.createObjectStore(_,{keyPath:"compositeKey"})}}}catch(t){e(g.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}})}class Ne{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getActiveExperiments(){return this.get("active_experiments")}setActiveExperiments(e){return this.set("active_experiments",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}class Wt extends Ne{constructor(e,t,i,n=Gt()){super(),this.appId=e,this.appName=t,this.namespace=i,this.openDbPromise=n}async setCustomSignals(e){const i=(await this.openDbPromise).transaction([_],"readwrite"),n=await this.getWithTransaction("custom_signals",i),a=Oe(e,n||{});return await this.setWithTransaction("custom_signals",a,i),a}async getWithTransaction(e,t){return new Promise((i,n)=>{const a=t.objectStore(_),o=this.createCompositeKey(e);try{const r=a.get(o);r.onerror=c=>{n(M(c,"storage-get"))},r.onsuccess=c=>{const l=c.target.result;i(l?l.value:void 0)}}catch(r){n(g.create("storage-get",{originalErrorMessage:r==null?void 0:r.message}))}})}async setWithTransaction(e,t,i){return new Promise((n,a)=>{const o=i.objectStore(_),r=this.createCompositeKey(e);try{const c=o.put({compositeKey:r,value:t});c.onerror=l=>{a(M(l,"storage-set"))},c.onsuccess=()=>{n()}}catch(c){a(g.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async get(e){const i=(await this.openDbPromise).transaction([_],"readonly");return this.getWithTransaction(e,i)}async set(e,t){const n=(await this.openDbPromise).transaction([_],"readwrite");return this.setWithTransaction(e,t,n)}async delete(e){const t=await this.openDbPromise;return new Promise((i,n)=>{const o=t.transaction([_],"readwrite").objectStore(_),r=this.createCompositeKey(e);try{const c=o.delete(r);c.onerror=l=>{n(M(l,"storage-delete"))},c.onsuccess=()=>{i()}}catch(c){n(g.create("storage-delete",{originalErrorMessage:c==null?void 0:c.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class Jt extends Ne{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=Oe(e,t),Promise.resolve(this.storage.custom_signals)}}function Oe(s,e){const t={...e,...s},i=Object.fromEntries(Object.entries(t).filter(([n,a])=>a!==null).map(([n,a])=>typeof a=="number"?[n,a.toString()]:[n,a]));if(Object.keys(i).length>te)throw g.create("custom-signal-max-allowed-signals",{maxSignals:te});return i}/**
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
 */class Xt{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),n=this.storage.getCustomSignals(),a=await e;a&&(this.lastFetchStatus=a);const o=await t;o&&(this.lastSuccessfulFetchTimestampMillis=o);const r=await i;r&&(this.activeConfig=r);const c=await n;c&&(this.customSignals=c)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
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
 */class Yt{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let n=0;n<i.length;n++)i[n].callback.apply(i[n].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);const n=this.listeners_[e]||[];for(let a=0;a<n.length;a++)if(n[a].callback===t&&(!i||i===n[a].context)){n.splice(a,1);return}}validateEventType_(e){$(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class J extends Yt{static getInstance(){return new J}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qt="X-Goog-Api-Key",Zt="X-Goog-Firebase-Installations-Auth",B=8,ae=3,re=-1,oe=0,ce="featureDisabled",le="retryIntervalSeconds",ue="latestTemplateVersionNumber",es="_exp_rollout";class ts{constructor(e,t,i,n,a,o,r,c,l,d){this.firebaseInstallations=e,this.storage=t,this.sdkVersion=i,this.namespace=n,this.projectId=a,this.apiKey=o,this.appId=r,this.logger=c,this.storageCache=l,this.cachingClient=d,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=B,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=h=>this.observers.forEach(f=>{var y;return(y=f.error)==null?void 0:y.call(f,h)}),this.isStatusCodeRetryable=h=>!h||[408,429,502,503,504].includes(h),this.setRetriesRemaining(),J.getInstance().on("visible",this.onVisibilityChange,this)}async setRetriesRemaining(){const e=await this.storage.getRealtimeBackoffMetadata(),t=(e==null?void 0:e.numFailedStreams)||0;this.httpRetriesRemaining=Math.max(B-t,1)}async updateBackoffMetadataWithLastFailedStreamConnectionTime(e){var n;const t=(((n=await this.storage.getRealtimeBackoffMetadata())==null?void 0:n.numFailedStreams)||0)+1,i=fe(t,6e4,2);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+i),numFailedStreams:t})}async updateBackoffMetadataWithRetryInterval(e){const t=Date.now(),i=e*1e3,n=new Date(t+i);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:n,numFailedStreams:0}),await this.retryHttpConnectionWhenBackoffEnds()}async closeRealtimeHttpConnection(){if(!this.isClosingConnection){this.isClosingConnection=!0;try{this.reader&&await this.reader.cancel()}catch{this.logger.debug("Failed to cancel the reader, connection was lost.")}finally{this.reader=void 0}this.controller&&(await this.controller.abort(),this.controller=void 0),this.isClosingConnection=!1}}async resetRealtimeBackoff(){await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})}resetRetryCount(){this.httpRetriesRemaining=B}async establishRealtimeConnection(e,t,i,n){const a=await this.storage.getActiveConfigEtag(),o=await this.storage.getActiveConfigTemplateVersion(),r={[Qt]:this.apiKey,[Zt]:i,"Content-Type":"application/json",Accept:"application/json","If-None-Match":a||"*","Content-Encoding":"gzip"},c={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:o,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t};return await fetch(e,{method:"POST",headers:r,body:JSON.stringify(c),signal:n})}getRealtimeUrl(){const t=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:streamFetchInvalidations?key=${this.apiKey}`;return new URL(t)}async createRealtimeConnection(){const[e,t]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)]);this.controller=new AbortController;const i=this.getRealtimeUrl();return await this.establishRealtimeConnection(i,e,t,this.controller.signal)}async retryHttpConnectionWhenBackoffEnds(){let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(re),numFailedStreams:oe});const t=new Date(e.backoffEndTimeMillis).getTime(),i=Date.now(),n=Math.max(0,t-i);await this.makeRealtimeHttpConnection(n)}setIsHttpConnectionRunning(e){this.isConnectionActive=e}checkAndSetHttpConnectionFlagIfNotRunning(){const e=this.canEstablishStreamConnection();return e&&this.setIsHttpConnectionRunning(!0),e}fetchResponseIsUpToDate(e,t){return e.config!=null&&e.templateVersion?e.templateVersion>=t:this.storageCache.getLastFetchStatus()==="success"}parseAndValidateConfigUpdateMessage(e){const t=e.indexOf("{"),i=e.indexOf("}",t);return t<0||i<0||t>=i?"":e.substring(t,i+1)}isEventListenersEmpty(){return this.observers.size===0}getRandomInt(e){return Math.floor(Math.random()*e)}executeAllListenerCallbacks(e){this.observers.forEach(t=>t.next(e))}getChangedParams(e,t,i,n){const a=new Set,o=new Set(Object.keys(e||{})),r=new Set(Object.keys(t||{})),c=i.experiments||[],l=(n==null?void 0:n.experiments)||[],d=this.createExperimentsMap(c),h=this.createExperimentsMap(l),f=i.rollouts||[],y=(n==null?void 0:n.rollouts)||[],C=this.createRolloutsMap(f),w=this.createRolloutsMap(y);for(const u of o){if(!r.has(u)||e[u]!==t[u]){a.add(u);continue}if(d.has(u)!==h.has(u)){a.add(u);continue}const E=d.get(u),v=h.get(u);if(E&&v&&!this.areExperimentsEqual(E,v)){a.add(u);continue}if(C.has(u)!==w.has(u)){a.add(u);continue}const m=C.get(u),b=w.get(u);m&&b&&!this.areRolloutsEqual(m,b)&&a.add(u)}for(const u of r)o.has(u)||a.add(u);return a}areExperimentsEqual(e,t){return e.experimentId===t.experimentId&&e.variantId===t.variantId&&e.timeToLiveMillis===t.timeToLiveMillis&&e.triggerTimeoutMillis===t.triggerTimeoutMillis}areRolloutsEqual(e,t){if(e.size!==t.size)return!1;for(const[i,n]of e)if(t.get(i)!==n)return!1;return!0}createExperimentsMap(e){const t=new Map;for(const i of e)if(!(!i.affectedParameterKeys||i.experimentId.startsWith(es)))for(const n of i.affectedParameterKeys)t.set(n,i);return t}createRolloutsMap(e){const t=new Map;for(const i of e){const n=i.rolloutId,a=i.variantId,o=i.affectedParameterKeys||[];for(const r of o){let c=t.get(r);c||(c=new Map,t.set(r,c)),c.set(n,a)}}return t}async fetchLatestConfig(e,t){const i=e-1,n=ae-i,a=this.storageCache.getCustomSignals();a&&this.logger.debug(`Fetching config with custom signals: ${JSON.stringify(a)}`);const o=new Le;try{const r={cacheMaxAgeMillis:0,signal:o,customSignals:a,fetchType:"REALTIME",fetchAttempt:n},c=await this.storage.getLastSuccessfulFetchResponse(),l=await this.cachingClient.fetch(r);let d=await this.storage.getActiveConfig();if(!this.fetchResponseIsUpToDate(l,t)){this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),await this.autoFetch(i,t);return}if(l.config==null){this.logger.debug("The fetch succeeded, but the backend had no updates.");return}d==null&&(d={});const h=this.getChangedParams(l.config,d,l,c);if(h.size===0){this.logger.debug("Config was fetched, but no params changed.");return}const f={getUpdatedKeys(){return new Set(h)}};this.executeAllListenerCallbacks(f)}catch(r){const c=r instanceof Error?r.message:String(r),l=g.create("update-not-fetched",{originalErrorMessage:`Failed to auto-fetch config update: ${c}`});this.propagateError(l)}}async autoFetch(e,t){if(e===0){const a=g.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."});this.propagateError(a);return}const n=this.getRandomInt(4)*1e3;await new Promise(a=>setTimeout(a,n)),await this.fetchLatestConfig(e,t)}async handleNotifications(e){let t,i="";for(;;){const{done:n,value:a}=await e.read();if(n)break;if(t=this.decoder.decode(a,{stream:!0}),i+=t,t.includes("}")){if(i=this.parseAndValidateConfigUpdateMessage(i),i.length===0)continue;try{const o=JSON.parse(i);if(this.isEventListenersEmpty())break;if(ce in o&&o[ce]===!0){const r=g.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."});this.propagateError(r);break}if(ue in o){const r=await this.storage.getActiveConfigTemplateVersion(),c=Number(o[ue]);r&&c>r&&await this.autoFetch(ae,c)}if(le in o){const r=Number(o[le]);await this.updateBackoffMetadataWithRetryInterval(r)}}catch(o){this.logger.debug("Unable to parse latest config update message.",o);const r=o instanceof Error?o.message:String(o);this.propagateError(g.create("update-message-invalid",{originalErrorMessage:r}))}i=""}}}async listenForNotifications(e){try{await this.handleNotifications(e)}catch{this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")}}async prepareAndBeginRealtimeHttpStream(){if(!this.checkAndSetHttpConnectionFlagIfNotRunning())return;let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(re),numFailedStreams:oe});const t=e.backoffEndTimeMillis.getTime();if(Date.now()<t){await this.retryHttpConnectionWhenBackoffEnds();return}let i,n;try{if(i=await this.createRealtimeConnection(),n=i.status,i.ok&&i.body){this.resetRetryCount(),await this.resetRealtimeBackoff();const a=i.body.getReader();this.reader=a,await this.listenForNotifications(a)}}catch(a){this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",a)}finally{const a=this.isInBackground;if(await this.closeRealtimeHttpConnection(),this.setIsHttpConnectionRunning(!1),!this.isInBackground)if(a)this.resetRetryCount(),await this.retryHttpConnectionWhenBackoffEnds();else{const o=n===void 0||this.isStatusCodeRetryable(n);if(o&&await this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date),o||i!=null&&i.ok)await this.retryHttpConnectionWhenBackoffEnds();else{const r=`Unable to connect to the server. HTTP status code: ${n}`,c=g.create("stream-error",{originalErrorMessage:r});this.propagateError(c)}}}}canEstablishStreamConnection(){const e=this.observers.size>0,t=!this.isRealtimeDisabled,i=!this.isConnectionActive,n=!this.isInBackground;return e&&t&&i&&n}async makeRealtimeHttpConnection(e){if(this.canEstablishStreamConnection()){if(this.httpRetriesRemaining>0)this.httpRetriesRemaining--,await new Promise(t=>setTimeout(t,e)),this.prepareAndBeginRealtimeHttpStream();else if(!this.isInBackground){const t=g.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."});this.propagateError(t)}}}async beginRealtime(){this.observers.size>0&&await this.makeRealtimeHttpConnection(0)}addObserver(e){this.observers.add(e),this.beginRealtime()}removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}async onVisibilityChange(e){this.isInBackground=!e,e?e&&await this.beginRealtime():await this.closeRealtimeHttpConnection()}}/**
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
 */function ss(){V(new U(Pe,s,"PUBLIC").setMultipleInstances(!0)),R(x,ee),R(x,ee,"esm2020");function s(e,{options:t}){const i=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate(),a=e.getProvider("analytics-internal"),{projectId:o,apiKey:r,appId:c}=i.options;if(!o)throw g.create("registration-project-id");if(!r)throw g.create("registration-api-key");if(!c)throw g.create("registration-app-id");const l=(t==null?void 0:t.templateId)||"firebase",d=he()?new Wt(c,i.name,l):new Jt,h=new Xt(d),f=new Ue(x);f.logLevel=A.ERROR;const y=new Bt(n,Y,l,o,r,c),C=new $t(y,d),w=new xt(C,d,h,f),u=new ts(n,d,Y,l,o,r,c,f,h,w),E=new jt(i,w,h,d,f,u,a);return Pt(E),E}}/**
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
 */async function hs(s){return s=p(s),await Nt(s),Lt(s)}async function fs(){if(!he())return!1;try{return await Ve()}catch{return!1}}/**
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
 */ss();export{Lt as activate,Pt as ensureInitialized,hs as fetchAndActivate,Nt as fetchConfig,as as getAll,rs as getBoolean,os as getNumber,ns as getRemoteConfig,cs as getString,P as getValue,fs as isSupported,gs as onConfigUpdate,us as setCustomSignals,ls as setLogLevel};
