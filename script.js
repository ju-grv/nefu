document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const drawerMenu = document.querySelector('.drawer-menu');
    const body = document.querySelector('body');
    const drawerLinks = document.querySelectorAll('.drawer-menu a');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('is-active');
            drawerMenu.classList.toggle('is-active');
            body.classList.toggle('drawer-open');
        });
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            navToggle.classList.remove('is-active');
            drawerMenu.classList.remove('is-active');
            body.classList.remove('drawer-open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!drawerMenu.contains(event.target) && !navToggle.contains(event.target) && drawerMenu.classList.contains('is-active')) {
            navToggle.classList.remove('is-active');
            drawerMenu.classList.remove('is-active');
            body.classList.remove('drawer-open');
        }
    });

});