document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const header = document.getElementById('header');
  const headerLink = document.querySelectorAll('.main-nav__link');


  burger.addEventListener('click', function() {
    header.classList.toggle('header--active');
  })

 headerLink.forEach((item) => {
    item.addEventListener('click', function(e) { // добавляем аргумент e
      e.stopPropagation();                     // останавливаем всплытие события
      header.classList.remove('header--active');
    });
  });

})
