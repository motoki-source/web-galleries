window.addEventListener('DOMContentLoaded', event => {

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.image-link'
    });

});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});