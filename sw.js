const CACHE_NAME = 'iz-tribine-v2';
const ASSETS = [
  './',
  './index.html',
  './podaci.js',
  './manifest.json',
  './logo.png'
];

// Instalacija Service Workera i spremanje osnovnih datoteka u memoriju
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Dohvaćanje sadržaja (omogućuje rad i bez interneta za već učitane stvari)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
