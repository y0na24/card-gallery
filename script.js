const slides = document.querySelectorAll('.slide');

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('slide--active');
    })
};

function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('slide--active')
    })
};