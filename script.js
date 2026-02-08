document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.comparison-container');
    const sliderWrapper = document.querySelector('.comp-img-top-wrapper');
    const topImage = document.querySelector('.comp-img-top');
    const handle = document.querySelector('.slider-handle');

    if (container) {
        const moveSlider = (e) => {
            const rect = container.getBoundingClientRect();
            let x = (e.pageX || e.touches[0].pageX) - rect.left;
            
            // Constrain movement
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;

            const percentage = (x / rect.width) * 100;

            sliderWrapper.style.width = `${percentage}%`;
            handle.style.left = `${percentage}%`;
            
            // Keep image from scaling while sliding
            topImage.style.width = `${rect.width}px`;
        };

        container.addEventListener('mousemove', moveSlider);
        container.addEventListener('touchmove', moveSlider);
        
        // Fix image width on resize
        window.addEventListener('resize', () => {
            topImage.style.width = `${container.offsetWidth}px`;
        });
        topImage.style.width = `${container.offsetWidth}px`;
    }
});