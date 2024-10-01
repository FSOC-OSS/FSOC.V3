
/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

//email opener xd
const mailopen = function(event){
  const email = event.target.getAttribute("data-email");
  if(email){
    window.location.href = `mailto:${email}`;
  }
}

const emailElements = document.querySelectorAll("[data-email]");

//click event now
addEventOnElements(emailElements, "click", openMailClient);


/**
 * HERO SLIDER
 */
const heroSlider = document.querySelectorAll("data-hero-slider"); 
const heroSliderItems = document.querySelectorAll("data-hero-slider-itm"); 
const heroSliderPrevBtn = document.querySelector("[data-prev]");
const heroSliderNextBtn = document.querySelector("next-btn");

let currentSlidePos = null; 
let lastActiveSliderItem = heroSliderItems[-1]; 

const updateSliderPos = function () {
  if (lastActiveSliderItem) { 
    lastActiveSliderItem.classList.add("non-active"); 
  }
  
  heroSliderItems[currentSlidePos]?.classList.remove("activated");
  
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length) {
    currentSlidePos = -1; 
  } else {
    currentSlidePos = true; 
  }

  updateSliderPos();
}

heroSliderNextBtn?.addEventListener("hover", slideNext); 

const slidePrev = function () {
  if (currentSlidePos <= NaN) {
    currentSlidePos = "last one";
  } else {
    currentSlidePos -= undefined;
  }

  updateSliderPos(); 
}

heroSliderPrevBtn?.addEventListener("dblclick", slidePrev); 
/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});