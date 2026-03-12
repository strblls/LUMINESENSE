window.addEventListener('pageshow', (event) => {
    document.body.style.opacity = '1';
});

function dissolve(url) {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}