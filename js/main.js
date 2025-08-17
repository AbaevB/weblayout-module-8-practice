document.addEventListener("DOMContentLoaded", function () {

  const burger = document.getElementById("burger");
  const header = document.getElementsByClassName("header")[0];
  console.log(header);

  burger.addEventListener("click", function () {
    header.classList.toggle("header--open");
  });

});
