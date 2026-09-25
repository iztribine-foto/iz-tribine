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

// Čišćenje starih verzija cachea
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Dohvaćanje sadržaja: prvo internet, pa spremljeno ako nema veze
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        var copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
