"use strict";

window.addEventListener("load", () => {
  const preloader = document.querySelector("[data-preloader]");
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 1000);
});

// Add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (const item of elements) {
    item.addEventListener(eventType, callback);
  }
};

// Navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-navbar] a");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navToggler, "click", toggleNav);
addEventOnElements(navLinks, "click", toggleNav);

// Header
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY >= 120 ? "add" : "remove"]("active");
});

let sections = document.querySelectorAll("section");

document.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 180;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
});

// dynamic year copyright
document.querySelector(".current-yr-cp").textContent = new Date().getFullYear();