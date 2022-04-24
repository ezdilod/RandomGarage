const burgerMenuEl = document.querySelector("#menuBurger");
const menuEl = document.querySelector("#menuContainer");

menuBurger.onclick = function () {
  menuContainer.classList.toggle("active");
  menuBurger.classList.toggle("active");
};

/* Multiple Slider */
let slideIndex = [1, 1, 2]; /* add third slider */
let slideId = ["mySlides1", "mySlides2", "mySlides3"]; /* add third slider */
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2); /* add third slider */

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
