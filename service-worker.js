var dataCacheName = 'groentengids-v1.0.1';
var cacheName = 'groentengids-v1.0.1';
var filesToCache = [
  'https://bartronix.github.io/groentengids/',
  'https://bartronix.github.io/groentengids/index.html',
  'https://bartronix.github.io/groentengids/scripts/app.min.js',
  'https://bartronix.github.io/groentengids/css/main.min.css?v=1',
  'https://bartronix.github.io/groentengids/favicon.ico',
  'https://bartronix.github.io/groentengids/images/icons/icon-32x32.png',
  'https://bartronix.github.io/groentengids/images/icons/icon-128x128.png',
  'https://bartronix.github.io/groentengids/images/icons/icon-144x144.png',
  'https://bartronix.github.io/groentengids/images/icons/icon-152x152.png',
  'https://bartronix.github.io/groentengids/images/icons/icon-192x192.png',
  'https://bartronix.github.io/groentengids/images/icons/icon-256x256.png',
  'https://bartronix.github.io/groentengids/images/icons/android-chrome-192x192.png',
  'https://bartronix.github.io/groentengids/images/icons/android-chrome-512x512.png',
  'https://bartronix.github.io/groentengids/images/icons/apple-touch-icon.png',
  'https://bartronix.github.io/groentengids/images/icons/mstile-150x150.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-640x1136.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-750x1294.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-1125x2436.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-1242x2148.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-1536x2048.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-1668x2224.png',
  'https://bartronix.github.io/groentengids/images/splash/launch-2048x2732.png',
  'https://bartronix.github.io/groentengids/images/vegetables/andijvie.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/artisjok.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/aubergine.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/augurk.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/bieslook.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/bloemkool.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/boerenkool.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/broccoli.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/chinese-kool.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/courgette.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/komkommer.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/koolraap.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/pastinaak.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/postelein.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/prei.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/rabarber.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/reuzenpompoen.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/rode-biet.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/romanesco.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/selder.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/snijboon.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/spinazie.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/spruitkool.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/tomaat.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/venkel.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/witloof.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/wortel.jpg',
  'https://bartronix.github.io/groentengids/images/vegetables/zoete-aardappel.jpg'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if(key !== cacheName && key !== dataCacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var dataUrl = 'https://bartronix.github.io/groentengids/data/data.json';
  if(e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {          
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
