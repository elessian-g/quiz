const CACHE='qz-shell-v8';
const ASSETS=['./','./index.html','./bank.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=e.request.url;
  // 题库每次联网优先取新（否则更新不到）；取不到再退回缓存
  if(url.indexOf('bank.js')>-1){
    e.respondWith(fetch(e.request).then(res=>{
      const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res;
    }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./bank.js'))));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res;
  }).catch(()=>caches.match('./index.html',{ignoreSearch:true}))));
});