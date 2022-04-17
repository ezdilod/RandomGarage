const burgerMenuEl = document.querySelector("#menuBurger");
const menuEl = document.querySelector("#menuContainer");

menuBurger.onclick = function () {
  menuContainer.classList.toggle("active");
  menuBurger.classList.toggle("active");
};
