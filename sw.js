// Тал Нутгийн Хаан — service worker (суулгах боломж + ачаалал хурдасгах)
const CV = 'tnh-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil((async () => { const ks = await caches.keys(); await Promise.all(ks.filter(k => k !== CV).map(k => caches.delete(k))); await self.clients.claim(); })()); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;          // Firebase, QPay зэргийг оролдохгүй
  if (r.headers.has('range')) return;                                           // ch.bin зэрэг хэсэгчилсэн таталт
  if (r.mode === 'navigate' || /\/(index\.html)?$/.test(u.pathname)) {         // index.html: эхлээд сүлжээ, байхгүй бол кэш
    e.respondWith(fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(CV).then(k => k.put('./index.html', c)); } return x; }).catch(() => caches.match('./index.html')));
    return; }
  if (/\.(bin|m4a|jpg|png|webp|js)$/.test(u.pathname)) {                        // том файл: кэш эхэлж (?v= өөрчлөгдвөл шинээр татна)
    e.respondWith(caches.match(r).then(c => c || fetch(r).then(x => { if (x.ok && x.status === 200) { const y = x.clone(); caches.open(CV).then(k => k.put(r, y)); } return x; }))); }
});
