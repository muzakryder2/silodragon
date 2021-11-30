// Main Nav Dropdown
const featuresMenuWrapper = document.getElementById("featuresMenuWrapper");
const featuresMenuBtn = document.getElementById("featuresBtn");
const featuresMenu = document.getElementById("featuresMenu");
const moreMenuWrapper = document.getElementById("moreMenuWrapper");
const moreMenuBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");

function openFeaturesMenu() {
  featuresMenuBtn.childNodes[1].classList.toggle("open");
  moreMenuBtn.childNodes[1].classList.remove("open");
  featuresMenu.classList.toggle("show");
  moreMenu.classList.remove("show");
}

function openMoreMenu() {
  moreMenuBtn.childNodes[1].classList.toggle("open");
  featuresMenuBtn.childNodes[1].classList.remove("open");
  moreMenu.classList.toggle("show");
  featuresMenu.classList.remove("show");
}

featuresMenuBtn.addEventListener("click", openFeaturesMenu);
moreMenuBtn.addEventListener("click", openMoreMenu);

// Mobile Nav
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavbar = document.getElementById("mobileNavbar");

function toggleMobileMenu() {
  mobileMenuBtn.childNodes[1].classList.toggle("open");
  mobileNavbar.classList.toggle("openMobileNavbar");
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);

// Mobile Nav Submenus
const featuresSubmenu = document.getElementById("featuresSubmenu");
const moreSubmenu = document.getElementById("moreSubmenu");
const aboutUsSubmenu = document.getElementById("aboutUsSubmenu");
const featuresDrop = document.getElementById("features");
const moreDrop = document.getElementById("more");
const aboutUsDrop = document.getElementById("aboutUs");

function openfeaturesSubmenu() {
  featuresSubmenu.classList.toggle("closed");
  moreSubmenu.classList.add("closed");
  aboutUsSubmenu.classList.add("closed");
  featuresDrop.childNodes[1].classList.toggle("open");
  moreDrop.childNodes[1].classList.remove("open");
  aboutUsDrop.childNodes[1].classList.remove("open");
}

function openMoreSubmenu() {
  moreSubmenu.classList.toggle("closed");
  featuresSubmenu.classList.add("closed");
  aboutUsSubmenu.classList.add("closed");
  moreDrop.childNodes[1].classList.toggle("open");
  featuresDrop.childNodes[1].classList.remove("open");
  aboutUsDrop.childNodes[1].classList.remove("open");
}

function openAboutUsSubmenu() {
  aboutUsSubmenu.classList.toggle("closed");
  featuresSubmenu.classList.add("closed");
  moreSubmenu.classList.add("closed");
  aboutUsDrop.childNodes[1].classList.toggle("open");
  featuresDrop.childNodes[1].classList.remove("open");
  moreDrop.childNodes[1].classList.remove("open");
}

featuresDrop.addEventListener("click", openfeaturesSubmenu);
moreDrop.addEventListener("click", openMoreSubmenu);
aboutUsDrop.addEventListener("click", openAboutUsSubmenu);

// Carousel

var leftArrow = document.getElementById('leftSliderArrow')
var rightArrow = document.getElementById('rightSliderArrow')
const slides = document.querySelectorAll('.gridItem')
var position = 0

function slideLeft(){
  let activeSlide = document.querySelector('.activeSlide')
  activeSlide.classList.remove('activeSlide')
  position--
  if(position < 0){
    position = slides.length - 1
  }
  activeSlide = slides[position]
  activeSlide.classList.add('activeSlide')
}

function slideRight(){
  let activeSlide = document.querySelector('.activeSlide')
  activeSlide.classList.remove('activeSlide')
  position++
  if(position > slides.length -1){
    position = 0
  }
  activeSlide = slides[position]
  activeSlide.classList.add('activeSlide')
}

leftArrow.addEventListener('click', slideLeft)
rightArrow.addEventListener('click', slideRight)
