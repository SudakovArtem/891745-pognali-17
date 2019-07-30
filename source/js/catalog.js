const headerNav = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const headerButton = document.querySelector(".main-nav__toggle");
const headerLogoMobile = document.querySelector(".header__logo-image");
const headerLogoTablet = document.querySelector(".header__logo-image-tablet");
const headerLogoDesktop = document.querySelector(".header__logo-image-desktop");
const filterButton = document.querySelector(".country-filter__toggle");
const close = document.querySelector(".country-filter-popup__close");
const filter = document.querySelector(".country-filter");


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

filterButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  filter.classList.toggle("country-filter--closed");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  filter.classList.add("country-filter--closed");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (filter.classList.contains("country-filter--closed") === false) {
      filter.classList.add("country-filter--closed");
    }
  }
});
