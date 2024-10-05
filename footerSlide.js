// footerSlide.js

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
        footer.classList.add('visible'); // Add the class to slide up
    } else {
        footer.classList.remove('visible'); // Hide the footer when scrolling away
    }
});
