const slides = document.querySelectorAll(".slide"),
  navIndicator = document.querySelectorAll(".nav_indicator");
let current = 0,
  time;
function nextStep() {
  if (current + 1 == slides.length) {
    current = 0;
    removeAll();
    slides[current].classList.add("active");
    navIndicator[current].classList.add("current_slide");
  } else {
    current++;
    removeAll();
    slides[current].classList.add("active");
    navIndicator[current].classList.add("current_slide");
  }
  current;
}
function removeAll() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  navIndicator.forEach((btn) => {
    btn.classList.remove("current_slide");
  });
}
function startLooping() {
  time = setInterval(() => {
    nextStep();
  }, 4000);
}
function stopLooping(params) {
  clearInterval(time);
}
for (let i = 0; i < navIndicator.length; i++) {
  navIndicator[i].addEventListener("click", () => {
    stopLooping();
    current = i;
    removeAll();
    navIndicator[i].classList.add("current_slide");
    slides[i].classList.add("active");
    startLooping();
  });
}
startLooping();
