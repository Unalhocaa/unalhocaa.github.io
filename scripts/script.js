/*==================== toggle icon navbar ====================*/
/* This code is selecting the HTML elements with the IDs "menu-icon" and "navbar" using the
`document.querySelector()` method and assigning them to the variables `menuIcon` and `navbar`,
respectively. */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
/* This code is selecting all the `section` elements and all the `a` elements inside the `nav` element
in the `header` element. It then adds an event listener to the `window` object that listens for the
`scroll` event. When the user scrolls, it checks which section is currently in view and adds the
class `active` to the corresponding `a` element in the navigation. It also adds a class `sticky` to
the `header` element when the user scrolls past a certain point, and removes the toggle icon and
navbar when a navigation link is clicked. */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
/* This code is using the ScrollReveal library to add scroll animations to certain elements on the
webpage. */
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .testimonials-container, .expertise-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
/* This code initializes a new Typed instance, which is a JavaScript library for creating typing
animations. The instance is created with the class ".multiple-text" as the target element, and
various options are set such as the strings to be typed, the speed of typing and backspacing, the
delay before backspacing, and whether or not to loop the animation. */
const typed = new Typed('.multiple-text', {
    strings: ['B.Sc. Computer Engineering Student', 'Machine Learning Specialist', 'Learner', 'Pythonist', 'Developer', 'Freelancer', 'Mentor'],
    typeSpeed: 90,
    backSpeed: 35,
    backDelay: 500,
    loop: true
});


/*==================== swiper js ====================*/
/* This code initializes a new Swiper instance, which is a JavaScript library for creating responsive
and customizable sliders and carousels. The instance is created with the class ".mySwiper" as the
target element, and various options are set such as the number of slides to show per view, the space
between slides, whether or not to loop the slides, and the pagination and navigation elements to
use. Additionally, breakpoints are set to adjust the number of slides and space between them at
different screen sizes. */
var swiper = new Swiper(".mySwiper", {
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
    },
});
