// este js, traera los componentes necesarios para el comun, navbar, footer, sidebar(?) etc

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
    });
}

fetch('components/navbar.html')
    .then(r => r.text())
    .then(html => {
        const mount = document.getElementById('navbar-container');
        if (!mount) throw new Error('No existe #navbar-container en el DOM');
        mount.innerHTML = html;
    })
    // primero darkmode (si toca elementos del navbar)
    .then(() => loadScript('js/darkmode.js'))
    // luego el menú hamburguesa
    .then(() => loadScript('js/main.js'))
    .catch(err => console.error('Error cargando navbar o scripts:', err));