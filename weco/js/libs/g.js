//delivery gallery swiper
let initdeliverySwiper = false
let swiperdelivery
function deliverySwiper() {
  if (window.innerWidth < mobile) {
    if (!initdeliverySwiper) {
		initdeliverySwiper = true
		swiperdelivery = new Swiper(".delivery-gallery .swiper", {
        slidesPerView: 1.9,
		spaceBetween: 20,
        observe: true,
        observeParents: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		  },
        scrollbar: {
          el: '.delivery-gallery .swiper-scrollbar',
          draggable: true,
        },
        speed: 800
      })
    }
  } else if (window.innerWidth >= mobile && initdeliverySwiper){
    swiperdelivery.destroy()
    initdeliverySwiper = false
  }
}
if (document.querySelector(".delivery-gallery")) {
	deliverySwiper();
}
window.addEventListener("resize", deliverySwiper)