const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  /*pagination: {
    el: '.swiper-pagination',
  },*/

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
//JS NYA
