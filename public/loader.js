const listServiceWorkerRegistrations = async () => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    document.querySelectorAll('.scope-registration').forEach(e => e.remove());
    registrations.forEach(({scope, active}) => {
        const scopeRelative = scope.replace(location.origin, '');
        const scriptRelative = active.scriptURL && active.scriptURL.replace(location.origin, '');
        div = document.createElement('div');
        div.setAttribute('class', 'scope-registration')
        div.innerHTML = `⚙️ SW Registration: ${scriptRelative} - (scope: ${scopeRelative}) `;
        document.body.appendChild(div);
    });
}

window.addEventListener('load', async () => {
    await navigator.serviceWorker.register('/fallthrough-worker.js', {
        scope: '/',
        updateViaCache: 'imports'
    });
    await navigator.serviceWorker.register('/fetch-worker.js', {
        scope: '/working-scope',
        updateViaCache: 'imports'
    });
    await listServiceWorkerRegistrations();
});