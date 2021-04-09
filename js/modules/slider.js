function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field,
}) {
  // Slider
  const slidesWrapper = document.querySelector(wrapper),
    slider = document.querySelector(container),
    slides = document.querySelectorAll(slide),
    prevSlideBtn = document.querySelector(prevArrow),
    nextSlideBtn = document.querySelector(nextArrow),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  let slidesIndex = 1,
    offset = 0,
    currentSlideNum = document.querySelector(currentCounter),
    totalSlideNum = document.querySelector(totalCounter),
    sliderNavigation = document.createElement("ol");

  slider.style.position = "relative";
  sliderNavigation.classList.add("slider-navigation");
  slider.append(sliderNavigation);

  let dots = [];

  if (slides.length < 10) {
    totalSlideNum.textContent = `0${slides.length}`;
    currentSlideNum.textContent = `0${slidesIndex}`;
  } else {
    totalSlideNum.textContent = slides.length;
    currentSlideNum.textContent = slidesIndex;
  }

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("li");
    dot.classList.add("slides-dot");
    sliderNavigation.append(dot);
    dots.push(dot);
  }

  showDot();

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      offset = +width.replace(/\D/g, "") * i;
      slidesIndex = i + 1;

      sliderTranslate(slidesField);

      showDot();

      currentNumberChange();
    });
  });

  currentNumberChange();

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.classList.add("d-flex");
  slidesField.classList.add("_transition");
  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  nextSlideBtn.addEventListener("click", () => {
    if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.replace(/\D/g, "");
    }

    sliderTranslate(slidesField);

    if (slidesIndex == slides.length) {
      slidesIndex = 1;
    } else {
      slidesIndex++;
    }

    currentNumberChange();

    showDot();
  });

  prevSlideBtn.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, "") * (slides.length - 1);
    } else {
      offset -= +width.replace(/\D/g, "");
    }

    sliderTranslate(slidesField);

    if (slidesIndex == 1) {
      slidesIndex = slides.length;
    } else {
      slidesIndex--;
    }

    currentNumberChange();

    showDot();
  });

  function showDot() {
    dots.forEach((dot) => (dot.style.cssText = ""));
    dots[slidesIndex - 1].style.cssText = `
  opacity: 1;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100%;
`;
  }

  function currentNumberChange() {
    if (slides.length < 10) {
      currentSlideNum.textContent = `0${slidesIndex}`;
    } else {
      currentSlideNum.textContent = slidesIndex;
    }
  }

  function sliderTranslate(slider) {
    slider.style.transform = `translateX(-${offset}px)`;
  }
}

export default slider;
