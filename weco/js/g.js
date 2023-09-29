if (document.querySelector(".work-gallery")) {
	workSwiper();
    window.addEventListener("resize", workSwiper)
}
if (document.querySelector(".photo-gallery")) {
	photoSwiper();
}
window.addEventListener("resize", photoSwiper)