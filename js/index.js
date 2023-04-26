const Nav = document.querySelector(".menu");
const body = document.querySelector("body");
const NavImage = document.querySelector(".nav-image");
let tableScroll = [];
window.addEventListener("load", init());
function init() {
  window.addEventListener("scroll", scrollFunction);

  // document.body.addEventListener("click", disableProofPopupIfActivate);
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

function showProuf() {
  console.log("prouf");
  const popup = document.getElementById("wrapper__popup");
  console.log(popup.style.display);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function disableProofPopupIfActivate() {
  const popup = document.getElementById("wrapper__popup");
  console.log("click");
  if (popup.style.display === "block") {
    popup.style.display = "none";
  }
}

function showProofImage(imgList) {
  // construire le html avec les images et l'injecter dans le carroussell
  let imageSlider = document.querySelector("#activite__proof__popup");
  let carouselDivImage = `<div
					id="activite__proof__image"
					class="carousel"
					data-flickity='{ "wrapAround": true }'
				>`;

  let imageDom = imgList.map((image) => {
    return `<div class="carousel__cell__image" style='position:absolute; left:0px'><img src='${image}' alt='image proof' /></div>`;
  });
  // let imageDom = imgList.map((image) => {
  // 	return `<div class="carousel__cell__image"><img src='${image}' alt='image proof' /></div>`;
  // });
  // let activiteProofCarousel = document.getElementById(
  // 	"activite__proof__image"
  // );
  imageDom[0] = `<div class="carousel__cell__image is-selected" style='position:absolute; left:0px'><img src='${imgList[0]}' alt='image proof' /></div>`;

  imageDom.forEach((element) => {
    console.log(element);
    carouselDivImage = carouselDivImage + element;
  });
  carouselDivImage += "</div>";
  imageSlider.innerHTML += carouselDivImage;
  console.log(document.getElementById("activite__proof__popup"));
  // return imageSlider;
}

function showProofImageClone(imgList) {
  let carouselImage = document.querySelector(
    "#activite__proof__image .flickity-slider"
  );
  // let buttonImage = document.querySelector(
  // 	"#activite__proof__image .flickity-button"
  // );
  let count = 0;
  let imageDom = [];
  // let imageDom = imgList.map((image) => {
  // 	return `<div class="carousel__cell__image" style='position:absolute; left:0px' aria-hidden="true"><img src='${image}' alt='image proof' /></div>`;
  // });

  for (let i = 0; i < imgList.length; i++) {
    imageDom.push(
      `<div class="carousel__cell__image" style='position:absolute; left:0px;transform: translateX(${count}%);' aria-hidden="true"><img src='${imgList[i]}' alt='image proof' /></div>`
    );
    count += 100;
  }
  imageDom[0] = `<div class="carousel__cell__image is-selected" style='position:absolute; left:0px;transform: translateX(0%);'><img src='${imgList[0]}' alt='image proof' /></div>`;
  imageDom.join("");
  // buttonImage.style.zIndex = 9999;
  carouselImage.innerHTML = imageDom;
  console.log(imageDom);
  console.log(carouselImage);
  console.log(document.getElementById("activite__proof__image"));
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
