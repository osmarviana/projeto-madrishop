const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});
