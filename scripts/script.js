// DOM Elements
const elements = {
    menuIcon: document.querySelector('#menu-icon'),
    navbar: document.querySelector('.navbar'),
    header: document.querySelector('header'),
    sections: document.querySelectorAll('section'),
    navLinks: document.querySelectorAll('header nav a')
};

// Configuration Objects
const scrollRevealConfig = {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
};

const typedConfig = {
    strings: [
        'Hocayım',
        'Mentörüm',
        'Danışmanım',
        ''
    ],
    typeSpeed: 90,
    backSpeed: 35,
    backDelay: 500,
    loop: true
};

const swiperConfig = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1560: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
};

// Navigation Functions
const toggleNavbar = () => {
    elements.menuIcon.classList.toggle('bx-x');
    elements.navbar.classList.toggle('active');
};

const closeNavbar = () => {
    elements.menuIcon.classList.remove('bx-x');
    elements.navbar.classList.remove('active');
};

// Scroll Functions
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    // Update active navigation link based on scroll position
    elements.sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Toggle sticky header
    elements.header.classList.toggle('sticky', scrollPosition > 100);

    // Close mobile navbar when scrolling
    closeNavbar();
};

// Initialize ScrollReveal
const initScrollReveal = () => {
    const sr = ScrollReveal(scrollRevealConfig);

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .testimonials-container, .expertise-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
};

// Initialize Typed.js
const initTyped = () => {
    new Typed('.multiple-text', typedConfig);
};

// Initialize Swiper
const initSwiper = () => {
    new Swiper(".mySwiper", swiperConfig);
};

// Event Listeners
const initEventListeners = () => {
    elements.menuIcon.addEventListener('click', toggleNavbar);
    window.addEventListener('scroll', handleScroll);
};

// Initialize All
const init = () => {
    initEventListeners();
    initScrollReveal();
    initTyped();
    initSwiper();
};

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);