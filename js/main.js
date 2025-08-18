document.addEventListener("DOMContentLoaded", function () {

  const burger = document.getElementById("burger");
  const header = document.getElementById("header");
  const mainNavLinks = document.getElementsByClassName("main-nav__link");

  burger.addEventListener("click", function () {
    header.classList.toggle("header--open");
  });

  for (let i = 0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].addEventListener("click", function () {
      header.classList.remove("header--open");
    });
  }
});
