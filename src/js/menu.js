const hamburger = document.querySelector(".hamburger");
const menuNav = document.querySelector(".menu-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuNav.classList.toggle("active");
});
