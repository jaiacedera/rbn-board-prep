const CACHE = 'rbn-demo-v4';

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const response = await fetch('./asset-manifest.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Unable to load the build asset manifest');
    const manifest = await response.json();
    const assets = Object.values(manifest).flatMap(entry => [
      entry.file, ...(entry.css || []), ...(entry.assets || []),
    ]);
    const cache = await caches.open(CACHE);
    await cache.addAll([
      './', './icon.svg', './manifest.webmanifest',
      ...new Set(assets.map(path => './' + path)),
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('rbn-demo-') && key !== CACHE)
      .map(key => caches.delete(key)),
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' ||
      new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      return await cache.match(event.request) || Response.error();
    }
  })());
});
