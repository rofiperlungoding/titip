// Network first, cache fallback: the hosted page keeps working after the signal drops.
self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open('titip').then(function (c) { return c.add('./'); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function (e) {
  if (e.request.method != 'GET') return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copy = r.clone();
    caches.open('titip').then(function (c) { c.put(e.request, copy); });
    return r;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
});
