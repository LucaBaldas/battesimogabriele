const cacheName = 'invito-v1';
cconst assets = ['./index.html', './manifest.json', './icona.png', './background.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});