const headerNav = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const headerButton = document.querySelector(".header__toggle");
const headerLogoMobile = document.querySelector(".header__logo-image");
const headerLogoTablet = document.querySelector(".header__logo-image-tablet");
const headerLogoDesktop = document.querySelector(".header__logo-image-desktop");
const countryButton = document.querySelector(".plan-filter__button--choice");
const close = document.querySelector(".plan-add-popup__close");
const countryPopup = document.querySelector(".plan-add-popup");
const headerLogoMobileWebp = document.querySelector(".header__logo-image-webp");
const headerLogoTabletWebp = document.querySelector(".header__logo-image-tablet-webp");
const headerLogoDesktopWebp = document.querySelector(".header__logo-image-desktop-webp");

headerNav.classList.remove("main-nav--open");
header.classList.remove("header--open");
header.classList.remove("header--no-js");
headerLogoMobile.src = "img/logo-mobile-white@1x.png";
headerLogoMobile.srcset = "img/logo-mobile-white@2x.png 2x";
headerLogoTablet.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
headerLogoMobileWebp.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
headerLogoTabletWebp.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";


headerButton.addEventListener("click", evt => {
  evt.preventDefault();
  headerNav.classList.toggle("main-nav--open");
  header.classList.toggle("header--open");
  if (header.classList.contains("header--open") === true) {
    headerLogoMobile.src = "img/logo-mobile-blue@1x.png";
    headerLogoMobile.srcset = "img/logo-mobile-blue@2x.png 2x";
    headerLogoTablet.srcset = "img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x";
    headerLogoMobileWebp.srcset = "img/logo-mobile-blue@1x.webp 1x, img/logo-mobile-blue@2x.webp 2x";
    headerLogoTabletWebp.srcset = "img/logo-tablet-blue@1x.webp 1x, img/logo-tablet-blue@2x.webp 2x";
  } else {
    headerLogoMobile.src = "img/logo-mobile-white@1x.png";
    headerLogoMobile.srcset = "img/logo-mobile-white@2x.png 2x";
    headerLogoTablet.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
    headerLogoMobileWebp.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
    headerLogoTabletWebp.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";
  }
});

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
};

const showHeader = () => {
  if (window.pageYOffset > 200) {
    header.classList.add("header--scroll");
    headerLogoMobile.src = "img/logo-mobile-blue@1x.png";
    headerLogoMobile.srcset = "img/logo-mobile-blue@2x.png 2x";
    headerLogoTablet.srcset = "img/logo-tablet-blue@1x.png 1x, img/logo-tablet-blue@2x.png 2x";
    headerLogoDesktop.srcset = "img/logo-desktop-blue@1x.png 1x, img/logo-desktop-blue@2x.png 2x";
    headerLogoMobileWebp.srcset = "img/logo-mobile-blue@1x.webp 1x, img/logo-mobile-blue@2x.webp 2x";
    headerLogoTabletWebp.srcset = "img/logo-tablet-blue@1x.webp 1x, img/logo-tablet-blue@2x.webp 2x";
    headerLogoDesktopWebp.srcset = "img/logo-desktop-blue@1x.webp 1x, img/logo-desktop-blue@2x.webp 2x";
  } else {
    header.classList.remove("header--scroll");
    headerLogoMobile.src = "img/logo-mobile-white@1x.png";
    headerLogoMobile.srcset = "img/logo-mobile-white@2x.png 2x";
    headerLogoTablet.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
    headerLogoDesktop.srcset = "img/logo-desktop-white@1x.png 1x, img/logo-desktop-white@2x.png 2x";
    headerLogoMobileWebp.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
    headerLogoTabletWebp.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";
    headerLogoDesktopWebp.srcset = "img/logo-desktop-white@1x.webp 1x, img/logo-desktop-white@2x.webp 2x";
  }
};

window.addEventListener("scroll", throttle(function() {
  showHeader();
}, 500));

countryButton.addEventListener("click", evt => {
  evt.preventDefault();
  countryPopup.classList.toggle("plan-add-popup--open");
});

close.addEventListener("click", evt => {
  evt.preventDefault();
  countryPopup.classList.remove("plan-add-popup--open");
});

window.addEventListener("keydown", evt => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (countryPopup.classList.contains("plan-add-popup--open") === true) {
      countryPopup.classList.remove("plan-add-popup--open");
    }
  }
});
