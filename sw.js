const CACHE='qz-shell-v44';
const ASSETS=['./','./index.html','./index2.html','./bank.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});

/* 网络优先：页面(导航)与 bank.js 都先取网，取不到才退回缓存。
   【2026-11-01 修】旧版把 HTML 设成缓存优先，手机一直跑 10-29 的旧壳，
   题库已到 296 题它仍显示 186 题。壳与题库统一改网络优先。 */
function put(req,res){
  try{
    var key=req.url.split('?')[0];
    caches.open(CACHE).then(c=>c.put(key,res)).catch(()=>{});
  }catch(e){}
}
function netFirst(req){
  return fetch(req).then(res=>{
    if(res&&res.ok)put(req,res.clone());
    return res;
  }).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('./index.html',{ignoreSearch:true})));
}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  var url=e.request.url;
  if(e.request.mode==='navigate'||url.indexOf('bank.js')>-1||url.indexOf('index')>-1){
    e.respondWith(netFirst(e.request));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||netFirst(e.request)));
});
