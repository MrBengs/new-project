"use strict";
let menuToggle = document.querySelector(".toggle");
let showcase = document.querySelector(".showcase");
let icon = document.querySelector(".toggle i");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
