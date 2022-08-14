// Just do nothing with the event (will fail after 30+ seconds)
self.addEventListener('fetch', () => {
    console.log('Doing nothing with the fetch event.');
    return;
});