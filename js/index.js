// Carousel buttons
const buttons = document.querySelectorAll("[data-carousel-button]");

// Text carousel
const slider = document.querySelector(".slider");
let currentIndex = 0;

// Burger button
const menuButton = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

// Body 
const body = document.body;

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

        // Text slides
        const textSlides = document.querySelector(".slider");
        const active = textSlides.querySelector("[data-active]");
        let cur = [...textSlides.children].indexOf(active) + offset;

        if(cur < 0) cur = textSlides.children.length - 1;
        else if(cur >= textSlides.children.length) cur = 0;

        textSlides.children[cur].dataset.active = true;
        delete active.dataset.active;

        // Add and remove active attribute to new active slide, and remove from old one
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });

});

[menuButton, nav].forEach(item => 
    
    item.addEventListener("click" , () => {

        hamburger.classList.toggle('open');
        nav.classList.toggle('open');
        menuNav.classList.toggle('open');
        navItems.forEach(item => item.classList.toggle('open'));
        body.classList.toggle('noscroll');
    
    }
        
));