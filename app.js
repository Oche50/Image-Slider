let slides = document.querySelectorAll(".slide");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let auto = true;
let intervalTime = 5000;
let slideInterval;

// button Events
next.addEventListener("click", function (e) {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", function (e) {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

let nextSlide = function () {
  // get current class
  let current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(function () {
    current.classList.remove("current");
  });
};

let prevSlide = function () {
  // get current class
  let current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for prev slide
  if (current.previousElementSibling) {
    // add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(function () {
    current.classList.remove("current");
  });
};

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
