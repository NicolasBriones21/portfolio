// Typing Effect for Subtitle
const phrases = ["Junior Front-End Developer", "Code Enthusiast", "Problem Solver"];
let phraseIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");
const typingSpeed = 100;
const eraseSpeed = 50;
const delayBetween = 2000;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        typingElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => type());

// Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleButton.textContent = document.body.classList.contains("light")
        ? "Toggle Dark Mode"
        : "Toggle Light Mode";
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In on Scroll
const sections = document.querySelectorAll('.container');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Carousel Functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 5000);
