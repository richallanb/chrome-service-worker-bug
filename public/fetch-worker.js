// Pass along the fetch event (will not fail after 30+ seconds)
self.addEventListener('fetch', event => {
    console.log(`Handling fetch for ${event.request.url}`)
    event.respondWith(fetch(event.request));
});