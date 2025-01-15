//slide
let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const navLinks = document.querySelectorAll('.slider-nav a');

function showSlide(index) {
    const offset = -index * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
    updateNav(index);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function updateNav(index) {
    navLinks.forEach((link, i) => {
        link.classList.toggle('active', i === index);
    });
}

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 3000);

//rubah nama

showSlide(currentIndex);

document.getElementById('submit').addEventListener("click", function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name-input').value;
    document.getElementById('name').textContent = nameInput;
});

//im a... autotype
const autoTypeElement = document.querySelector('#autoType .auto-type');
const words = ["Graphic Designer", "FrontEnd Developer", "Content Creator"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        autoTypeElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150); 
    } else {
        setTimeout(erase, 2000); 
    }
}

function erase() {
    if (charIndex > 0) {
        autoTypeElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); 
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); 
      }
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});