const CACHE_NAME = 'simungil-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/e-gizi.png',
  '/logokkn.png',
  '/unp.png',
  '/hero-illustration.jpg',
  '/status-success.jpg',
  '/status-warning.jpg',
];

// Install event - cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache:', CACHE_NAME);
      return cache.addAll(urlsToCache).catch((err) => {
        console.log('Cache addAll error:', err);
        // Don't fail installation if some assets fail
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // For API routes, try network first then cache
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response
          const clonedResponse = response.clone();
          // Cache the fetched response for future use
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(() => {
          // Network failed, try to return from cache
          return caches.match(event.request);
        })
    );
  } else {
    // For other requests (HTML, CSS, JS, images), use cache first strategy
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached response if available
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache responses that aren't successful
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone the response
            const clonedResponse = response.clone();

            // Cache the fetched response for future use
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
            });

            return response;
          })
          .catch(() => {
            // Network failed and no cache available
            // Return a fallback response
            return new Response('Aplikasi tidak bisa diakses offline. Coba lagi nanti.', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain',
              }),
            });
          });
      })
    );
  }
});

// Handle background sync for future offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-results') {
    event.waitUntil(
      // This would sync data when connection is restored
      new Promise((resolve) => {
        resolve();
      })
    );
  }
});
