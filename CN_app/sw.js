self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('castle-night').then(function(cache) {
      return cache.addAll([
        'index-1-1.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png',
        // ajoute ici d'autres ressources comme tes images, css, js, etc.
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
