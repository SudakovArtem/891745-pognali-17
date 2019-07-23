const headerNav = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const headerButton = document.querySelector(".main-nav__toggle");
const link = document.querySelector(".advantages__link");
const advantage = document.querySelector(".advantages-popup");
const close = advantage.querySelector(".advantages-popup__close");
const img = document.getElementById("myImg");
const img2 = document.getElementById("myImg2");
const img3 = document.getElementById("myImg3");


headerButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    headerNav.classList.toggle("main-nav--open");
    header.classList.toggle("header--open")
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  advantage.classList.remove("visually-hidden");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  advantage.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (advantage.classList.contains("visually-hidden") === false) {
      advantage.classList.add("visually-hidden");
    }
  }
});

window.onscroll = function showHeader() {
  if(window.pageYOffset > 200){
    header.classList.add('header--scroll');
    img.src='img/logo-mobile-blue@1x.png';
    img2.srcset='img/logo-tablet-blue@1x.png';
    img3.srcset='img/logo-desktop-blue@1x.png';
  } else{
    header.classList.remove('header--scroll');
    img.src='img/logo-mobile-white@1x.png';
    img2.srcset='img/logo-tablet-white@1x.png';
    img3.srcset='img/logo-desktop-white@1x.png';
  }
}

// 'img/logo-mobile-blue@1x.png'
