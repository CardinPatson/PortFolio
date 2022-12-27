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
		tableScroll[tableScroll.length - 1] >
		tableScroll[tableScroll.length - 2]
	) {
		// console.log(tableScroll);
		// Nav.style.transform = "translate3d(0px, 0px, 0px)";
		if (Nav.classList.contains("nav-animation-none"))
			Nav.classList.remove("nav-animation-none");
		Nav.classList.add("nav-animation-visible");
	}
	if (
		tableScroll[tableScroll.length - 1] <
		tableScroll[tableScroll.length - 2]
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

// window.addEventListener("load", function () {
// 	showSlides(slideIndex);
// 	myTimer = setInterval(function () {
// 		plusSlides(1);
// 	}, 3000);
// });

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
// 	showSlides((slideIndex += n));
// }

// function currentSlide(n) {
// 	showSlides((slideIndex = n));
// }

// function showSlides(n) {
// 	let i;
// 	let slides = document.getElementsByClassName("mySlides");
// 	let dots = document.getElementsByClassName("dot");
// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace("active", "");
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += "active";
// }
