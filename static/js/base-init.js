document.addEventListener('gesturestart', function(e) {
    e.preventDefault()
        // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99
})

document.addEventListener('gesturechange', function(e) {
    e.preventDefault()
        // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99
})

document.addEventListener('gestureend', function(e) {
    e.preventDefault()
        // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99
})

document.addEventListener(
    'touchmove',
    function(event) {
        if (event.scale !== 1) {
            event.preventDefault()
        }
    }, { passive: false }
)