const headerNav = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const headerButton = document.querySelector(".header__toggle");
const headerLogoMobile = document.querySelector(".header__logo-image");
const headerLogoTablet = document.querySelector(".header__logo-image-tablet");
const headerLogoDesktop = document.querySelector(".header__logo-image-desktop");
const filterButton = document.querySelector(".country-filter__toggle");
const close = document.querySelector(".country-filter-popup__close");
const filter = document.querySelector(".country-filter");
const headerLogoMobileWebp = document.querySelector(".header__logo-image-webp");
const headerLogoTabletWebp = document.querySelector(".header__logo-image-tablet-webp");
const headerLogoDesktopWebp = document.querySelector(".header__logo-image-desktop-webp");
const hobbyButton = document.querySelector(".compilation__turn-btn--hobby");
const hobbyWrapper = document.querySelector(".compilation__wrapper--hobby");
const musicButton = document.querySelector(".compilation__turn-btn--music");
const musicWrapper = document.querySelector(".compilation__wrapper--music");
const foodButton = document.querySelector(".compilation__turn-btn--food");
const foodWrapper = document.querySelector(".compilation__wrapper--food");
const transportButton = document.querySelector(".compilation__turn-btn--transport");
const transportWrapper = document.querySelector(".compilation__wrapper--transport");
const rangeButton = document.querySelector(".compilation__turn-btn--range");
const rangeWrapper = document.querySelector(".compilation__wrapper--range");
const travelersButton = document.querySelectorAll(".companion__btn");
const rosterButton = document.querySelector(".roster__btn");


headerNav.classList.remove("main-nav--open");
header.classList.remove("header--open");
header.classList.remove("header--no-js");
headerLogoMobile.src = "img/logo-mobile-white@1x.png";
headerLogoMobile.srcset = "img/logo-mobile-white@2x.png 2x";
headerLogoTablet.srcset = "img/logo-tablet-white@1x.png 1x, img/logo-tablet-white@2x.png 2x";
headerLogoMobileWebp.srcset = "img/logo-mobile-white@1x.webp 1x, img/logo-mobile-white@2x.webp 2x";
headerLogoTabletWebp.srcset = "img/logo-tablet-white@1x.webp 1x, img/logo-tablet-white@2x.webp 2x";
filter.classList.add("country-filter--closed");
hobbyWrapper.classList.add("compilation__wrapper--closed");
foodWrapper.classList.add("compilation__wrapper--closed");

for (let i = 0; i < travelersButton.length; i++) {
  const button = travelersButton[i];
  button.addEventListener("click", evt => {
    evt.preventDefault();
  });
}

rosterButton.addEventListener("click", evt => {
  evt.preventDefault();
});

hobbyButton.addEventListener("click", evt => {
  evt.preventDefault();
  hobbyWrapper.classList.toggle("compilation__wrapper--closed");
});

musicButton.addEventListener("click", evt => {
  evt.preventDefault();
  musicWrapper.classList.toggle("compilation__wrapper--closed");
});

foodButton.addEventListener("click", evt => {
  evt.preventDefault();
  foodWrapper.classList.toggle("compilation__wrapper--closed");
});

transportButton.addEventListener("click", evt => {
  evt.preventDefault();
  transportWrapper.classList.toggle("compilation__wrapper--closed");
});

rangeButton.addEventListener("click", evt => {
  evt.preventDefault();
  rangeWrapper.classList.toggle("compilation__wrapper--closed");
});

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

filterButton.addEventListener("click", evt => {
  evt.preventDefault();
  filter.classList.toggle("country-filter--closed");
});

close.addEventListener("click", evt => {
  evt.preventDefault();
  filter.classList.add("country-filter--closed");
});

window.addEventListener("keydown", evt => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (filter.classList.contains("country-filter--closed") === false) {
      filter.classList.add("country-filter--closed");
    }
  }
});
