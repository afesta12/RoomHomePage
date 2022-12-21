// Carousel buttons
const buttons = document.querySelectorAll("[data-carousel-button]");

// Text carousel
const slider = document.querySelector(".slider");
let currentIndex = 0;

const arr = [0, 1, 2];

// Burger button
const menuButton = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

// Body 
const body = document.body;

let showMenu = false;

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

menuButton.addEventListener("click", () => {

    if(!showMenu) {

        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;

    } else {

        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;

    }

});

nav.addEventListener("click", () => {

    if(!showMenu) {

        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;

    } else {

        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;

    }

});