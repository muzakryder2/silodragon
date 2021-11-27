// Main Nav Dropdown
const featuresMenuWrapper = document.getElementById("featuresMenuWrapper");
const featuresMenuBtn = document.getElementById("featuresBtn");
const featuresMenu = document.getElementById("featuresMenu");
const moreMenuWrapper = document.getElementById("moreMenuWrapper");
const moreMenuBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");

function openFeaturesMenu() {
  featuresMenuBtn.childNodes[1].classList.add("open");
  featuresMenu.classList.add("show");
  moreMenuBtn.childNodes[1].classList.remove("open");
  moreMenu.classList.remove("show");
}
function closeFeaturesMenu() {
  featuresMenuBtn.childNodes[1].classList.remove("open");
  featuresMenu.classList.remove("show");
}

function openMoreMenu() {
  moreMenuBtn.childNodes[1].classList.add("open");
  moreMenu.classList.add("show");
  featuresMenuBtn.childNodes[1].classList.remove("open");
  featuresMenu.classList.remove("show");
}

function closeMoreMenu() {
  moreMenuBtn.childNodes[1].classList.remove("open");
  moreMenu.classList.remove("show");
}

featuresMenuBtn.addEventListener("mouseover", openFeaturesMenu);
featuresMenuWrapper.addEventListener("mouseleave", closeFeaturesMenu);
moreMenuBtn.addEventListener("mouseover", openMoreMenu);
moreMenuWrapper.addEventListener("mouseleave", closeMoreMenu);

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
