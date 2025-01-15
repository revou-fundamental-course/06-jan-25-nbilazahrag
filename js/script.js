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

showSlide(currentIndex);

document.getElementById('submit').addEventListener("click", function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name-input').value;
    document.getElementById('name').textContent = nameInput;
});