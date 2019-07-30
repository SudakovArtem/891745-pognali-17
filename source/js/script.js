const headerNav = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const headerButton = document.querySelector(".main-nav__toggle");
const link = document.querySelector(".advantages__link");
const advantage = document.querySelector(".advantages-popup");
const close = advantage.querySelector(".advantages-popup__close");
const headerLogoMobile = document.querySelector(".header__logo-image");
const headerLogoTablet = document.querySelector(".header__logo-image-tablet");
const headerLogoDesktop = document.querySelector(".header__logo-image-desktop");


headerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerNav.classList.toggle("main-nav--open");
  header.classList.toggle("header--open");
  if (header.classList.contains("header--open") === true) {
    headerLogoMobile.src = 'img/logo-mobile-blue@1x.png';
    headerLogoMobile.srcset = 'img/logo-mobile-blue@2x.png 2x';
    headerLogoTablet.srcset = 'img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x';
  } else {
    headerLogoMobile.src = 'img/logo-mobile-white@1x.png';
    headerLogoMobile.srcset = 'img/logo-mobile-white@2x.png 2x';
    headerLogoTablet.srcset = 'img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x';
  }
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
    headerLogoMobile.src='img/logo-mobile-blue@1x.png';
    headerLogoMobile.srcset='img/logo-mobile-blue@2x.png 2x';
    headerLogoTablet.srcset='img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x';
    headerLogoDesktop.srcset='img/logo-desktop-blue@1x.png 1x, img/logo-desktop-blue@2x.png 2x';
  } else{
    header.classList.remove('header--scroll');
    headerLogoMobile.src='img/logo-mobile-white@1x.png';
    headerLogoMobile.srcset='img/logo-mobile-white@2x.png 2x';
    headerLogoTablet.srcset='img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x';
    headerLogoDesktop.srcset='img/logo-desktop-white@1x.png 1x, img/logo-desktop-white@2x.png 2x';
  }
};
