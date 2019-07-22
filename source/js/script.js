const headerNav = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const headerButton = document.querySelector(".main-nav__toggle");
const link = document.querySelector(".advantages__link");
const advantage = document.querySelector(".advantages-popup");
const close = advantage.querySelector(".advantages-popup__close");


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
