const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navBar = document.querySelector(".navbar");
const navbarMobile = document.querySelector(".navbar__mobile");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", function () {
  navbarMobile.style.display = "flex";
  menuClose.style.display = "flex";
  menuOpen.style.display = "none";
  overlay.style.display = "block";
});

menuClose.addEventListener("click", function () {
  navBar.style.display = "none";
  menuClose.style.display = "none";
  menuOpen.style.display = "flex";
  overlay.style.display = "none";
});
