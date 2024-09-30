// Changing Text with Dom
let newtext ="At Grilli, we pride ourselves on our vibrant community engagement and commitment to excellence. We’ve organized local events and open mic nights to bring people together, while also implementing sustainable practices, such as eco-friendly packaging. Our dedication to quality has earned us awards for the best coffee and service. We've launched a successful customer loyalty program and expanded with new locations to better serve our patrons. Our menu is diverse and inclusive, catering to various dietary preferences, and we proudly partner with local producers to source fresh ingredients. Join us as we continue to grow and engage with our wonderful community!;"
 document.getElementsByClassName('aboutDesc')[0].innerText = newtext; 

 let TopNotchtext = "At Grilli, enjoy artisanal coffee, freshly baked pastries, and locally sourced dishes in a cozy atmosphere, perfect for relaxation and connection."
 document.getElementsByClassName('weOffer')[0].innerHTML= TopNotchtext;
/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 2500); 
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

/**
 * NAVBAR
 */
const navbtn = document.getElementsByClassName('nav-open-btn')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}


navbtn.addEventListener('click', toggleNavbar);
closeBtn.addEventListener('click', toggleNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector(".back-top-btn");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollX;
 
  lastScrollPos = window.scrollX;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    //Do something
  } else {
    
    //Do something
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
}

backTopBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  scrollToTop(); })


/**
 * HERO SLIDER
 */

const heroSlider = document.querySelectorAll("[data-hero-slider]"); 
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0; 
let lastActiveSliderItem = heroSliderItems[heroSliderItems.length - 1]; 

const updateSliderPos = function () {
  if (lastActiveSliderItem) { 
    lastActiveSliderItem.classList.remove("active"); 
  }
  
  heroSliderItems[currentSlidePos]?.classList.add("active");
  
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  currentSlidePos++;
  if (currentSlidePos >= heroSliderItems.length) {
    currentSlidePos = 0; 
  }

  updateSliderPos();
}

const slidePrev = function () {
  currentSlidePos--;
  if (currentSlidePos < 0) {
    currentSlidePos = heroSliderItems.length - 1;
  }

  updateSliderPos(); 
}

heroSliderNextBtn?.addEventListener("click", slideNext); 
heroSliderPrevBtn?.addEventListener("click", slidePrev);
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

//
