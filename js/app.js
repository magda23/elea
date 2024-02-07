let burgerMenu = document.querySelector(".burger_menu");
let mobileNavigation = document.querySelector(".mobile_navigation");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.querySelector(".burger__").classList.toggle("burg_act");
  mobileNavigation.classList.toggle("nav_act");
  document.body.classList.toggle("overflow_hidden");
});

var swiper = new Swiper(".Swiper_1", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".Swiper_2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
