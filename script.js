function slidesPlugin(activeSlide = 0) {

  const slides = document.querySelectorAll('.slide');
  
  slides[activeSlide].classList.add('slide--active');

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
}
slidesPlugin();
