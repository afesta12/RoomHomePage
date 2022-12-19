// Carousel buttons
const buttons = document.querySelectorAll("[data-carousel-button]");

// Text carousel
const slider = document.querySelector(".slider");
let currentIndex = 0;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const textCarousel = document.querySelector(".section__text");
let direction;

const arr = [0, 1, 2];

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

        // Text carousel
        currentIndex += offset;
        if(currentIndex > 2) currentIndex = 0;
        if(currentIndex < 0) currentIndex = 2; 
        const x = -33 * arr[currentIndex];
        slider.style.transform = `translate(${x}%)`;

        // Add and remove active attribute to new active slide, and remove from old one
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });

});