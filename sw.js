
/**
 * Cache with static files.
 */
const STATIC_CACHE = "static-v1";

/**
 * Cache with audio files.
 */
const AUDIO_CACHE = "audio-v1";

self.addEventListener("install", event => {
  const staticFiles = [
    "manifest.json",
    "/",
    "index.html",
    "config.js",
    "script.js",
    "style.css",
    "logo.png",
    "discord.png",
    "https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2",
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
    "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css",
  ];

  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(staticFiles))
  );

  importScripts("config.js"); // => audioFiles

  event.waitUntil(
    caches.open(AUDIO_CACHE).then(cache => cache.addAll(
      audioFiles.map(audioFile => audioFile[2])
    ))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== STATIC_CACHE && key !== AUDIO_CACHE) {
          return caches.delete(key);
        }
      })
    ))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
