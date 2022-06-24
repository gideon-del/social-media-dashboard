"use strict";
let css = document.querySelector(":root");
let input = document.querySelector(".switch__input");
let card = document.querySelectorAll(".card");
let cardMini = document.querySelectorAll(".card-mini");
let header = document.querySelector(".header-primary");
let body = document.body;
input.addEventListener("change", function (e) {
  e.preventDefault();
});
input.addEventListener("click", function (e) {
  if (input.checked) {
    card.forEach((x) => {
      x.classList.remove("card--light");
      x.classList.add("card--dark");
    });
    cardMini.forEach((x) => {
      x.classList.add("card-mini--dark");
      x.classList.remove("card-mini--light");
    });
    body.classList.add("dark");
  } else {
    card.forEach((x) => {
      x.classList.remove("card--dark");
      x.classList.add("card--light");
    });
    cardMini.forEach((x) => {
      x.classList.remove("card-mini--dark");
      x.classList.add("card-mini--light");
    });
    body.classList.remove("dark");
  }
});
