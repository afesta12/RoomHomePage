// Carousel buttons
const buttons = document.querySelectorAll("[data-carousel-button]");

// Text carousel
const slider = document.querySelector(".slider");
let currentIndex = 0;

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        const slides = button.closest("[data-carousel]")
                             .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        // Loops around to last image and vice versa
        if(newIndex < 0) newIndex = slides.children.length - 1;
        else if(newIndex >= slides.children.length) newIndex = 0;

        // Add and remove active attribute to new active slide, and remove from old one
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        // Text slider
        currentIndex = currentIndex + 1;
        const translate = currentIndex * -33;
        slider.style.transform = `translate(${translate}%)`;

    });

})