document.addEventListener('DOMContentLoaded', function() {
    // Commitment slider
    const slidesContainer = document.querySelector('.commitment-slider');
    if (slidesContainer) {
        const slides = slidesContainer.querySelectorAll('.slide');
        const dots = slidesContainer.querySelectorAll('.dot');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(n) {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === n);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === n);
            });
            currentSlide = n;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds
        }

        function stopSlideShow() {
            clearInterval(slideInterval);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopSlideShow();
                showSlide(parseInt(dot.dataset.slide));
                startSlideShow(); // Restart interval after manual selection
            });
        });

        // Initialize slider
        if (slides.length > 0) {
            showSlide(0);
            startSlideShow();
        }
    }
});
