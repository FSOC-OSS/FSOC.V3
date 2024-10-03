
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

let youtube = "https://www.youtube.com";
let instagram = "https://www.instagram.com";
let twitter = "https://www.x.com";
let maps = "https://maps.google.com";
let facebook = 'https://www.facebook.com';

document.querySelector("#twt").setAttribute('href', twitter);
document.querySelector("#utube").setAttribute('href', youtube);
document.querySelector("#map").setAttribute('href', maps);
document.querySelector("#instagram").setAttribute('href', instagram);
document.querySelector("#facebook").setAttribute('href', facebook);

// Select the cart anchor and elements
const cartAnchor = document.getElementById("cart-anchor");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const removeFromCartButtons = document.querySelectorAll(".remove");

let cartItemCount = 0;

// Function to update cart text
const updateCartDisplay = () => {
  if (cartItemCount > 99) {
    cartAnchor.querySelector(".span").textContent = "Cart 99+";
  } else if (cartItemCount > 0) {
    cartAnchor.querySelector(".span").textContent = `Cart ${cartItemCount}`;
  } else {
    cartAnchor.querySelector(".span").textContent = "Cart";
  }
};

// Add event listeners to "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartItemCount += 1;
    updateCartDisplay();
  });
});

// Add event listeners to "Remove" buttons
removeFromCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (cartItemCount > 0) {
      cartItemCount -= 1;
      updateCartDisplay();
    }
  });
});

// Initialize the cart display on page load
window.addEventListener("load", updateCartDisplay);




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
w.addEventListener("load", autoSlide);



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

