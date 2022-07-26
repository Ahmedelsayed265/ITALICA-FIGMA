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
let searchBtn = document.getElementById("search");
let links = document.querySelectorAll(".navigation ul li");
let ul = document.querySelector(".navigation ul");
let searchField = document.querySelector(".search_field");
searchBtn.addEventListener("click", () => {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("hide");
  }
  searchField.classList.add("show");
setTimeout(() => {
  ul.classList.add("hide_ul");
}, 600);
});
