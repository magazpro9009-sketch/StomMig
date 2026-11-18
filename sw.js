const scope = new URL(self.registration.scope);
const cachePrefix = `stommig:${scope.pathname}:`;
const cacheName = `${cachePrefix}v1`;
const shellUrl = new URL('index.html', scope);
const shellUrls = new Set([
  'index.html',
  'style.css',
  'fonts.css',
  'assets/font-Regular.woff',
  'assets/font-Bold.woff',
  'app.js',
  'manifest.webmanifest',
  'assets/logo.svg',
  'assets/hero.svg',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/icon-maskable.png',
  'assets/apple-touch-icon.png',
].map(path => new URL(path, scope).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    const requests = [...shellUrls].map(url => new Request(url, {
      cache: 'reload',
      redirect: 'error',
    }));
    await cache.addAll(requests);
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith(cachePrefix) && name !== cacheName)
      .map(name => caches.delete(name)));
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== scope.origin) return;

  const isAppPage = request.mode === 'navigate'
    && (url.pathname === scope.pathname || url.pathname === shellUrl.pathname);
  if (!isAppPage && !shellUrls.has(url.href)) return;

  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(isAppPage ? shellUrl.href : url.href);
    return cached || fetch(request);
  })());
});
