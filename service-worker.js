self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("rip-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./css/style.css",
        "./js/app.js",
        "./js/data.js",
        "./js/engine.js"
      ]);
    })
  );
});