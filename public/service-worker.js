self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("sabadwani").then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});
