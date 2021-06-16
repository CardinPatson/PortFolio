const Nav = document.querySelector(".menu");
const body = document.querySelector("body");
const NavImage = document.querySelector(".nav-image");
let tableScroll = [];
window.addEventListener("load", init());
function init() {
  window.addEventListener("scroll", scrollFunction);
}

function scrollFunction() {
  let scroll = window.scrollY / body.clientHeight;
  let scrollPercent = Math.round(scroll * 100);
  tableScroll.push(scrollPercent);
  if (
    tableScroll[tableScroll.length - 1] > tableScroll[tableScroll.length - 2]
  ) {
    // console.log(tableScroll);
    // Nav.style.transform = "translate3d(0px, 0px, 0px)";
    if (Nav.classList.contains("nav-animation-none"))
      Nav.classList.remove("nav-animation-none");
    Nav.classList.add("nav-animation-visible");
  }
  if (
    tableScroll[tableScroll.length - 1] < tableScroll[tableScroll.length - 2]
  ) {
    if (Nav.classList.contains("nav-animation-visible"))
      Nav.classList.remove("nav-animation-visible");
    Nav.classList.add("nav-animation-none");
    // Nav.style.transform = "translate3d(0px, -100%, 0px);";
  }
  if (scrollPercent === 0 || scrollPercent === 100) {
    // Nav.style.transform = "translate3d(0px, 0px, 0px)";

    tableScroll = [];
  }
}
