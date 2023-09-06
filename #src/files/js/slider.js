
var swiper = new Swiper(".rating-slider", {
	slidesPerView: "auto",
	slidesPerGroup: 1,
	spaceBetween: 0,
	loop: false,
	observe: true,
    observeParents: true,
	navigation: {
        nextEl: ".rating-slider-next",
        prevEl: ".rating-slider-prev",
    },
	breakpoints: {

	}
});

var swiper_nav = new Swiper(".product-slider__nav", {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: false,
	direction: "vertical",
    loop: false,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
	breakpoints: {
		1199.98: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
		1399.98: {
			slidesPerView: 6,
			spaceBetween: 15,
		}
	}

});
var swiper_for = new Swiper(".product-slider__for", {
    spaceBetween: 0,
    effect: "fade",
    loop: false,
    thumbs: {
        swiper: swiper_nav,
    },
	navigation: {
    	nextEl: '.product-slider-main .slider-arrow--right',
    	prevEl: '.product-slider-main .slider-arrow--left',
  	},
	breakpoints: {
		1199.98: {
			navigation: {
				nextEl: '.product-slider-main .slider-arrow--top',
				prevEl: '.product-slider-main .slider-arrow--bottom',
			}
		},
	}
});    

var swiper_mobile_nav = new Swiper(".product-slider__mobile-nav", {
	slidesPerView: 3,
    spaceBetween: 15,
    loop: false,
	watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
	freeMode: false,
});  

var swiper_mobile_for = new Swiper(".product-slider__mobile-for", {
    spaceBetween: 0,
    effect: "fade",
    loop: false,
	navigation: {
    	nextEl: '.product-slider__mobile-for .slider-arrow--right',
    	prevEl: '.product-slider__mobile-for .slider-arrow--left',
  	},
	thumbs: {
        swiper: swiper_mobile_nav,
    },
});   
 

var init = false;
var swiper;
function swiperDesctop() {
	if (window.innerWidth >= 991.98) {
		if (!init) {
			init = true;
			// reviews slider
	
			swiperReviews = new Swiper(".reviews-slider", {
				slidesPerView: 2.25,
				spaceBetween: 30,
				loop: true,
				autoHeight: true,
				navigation: {
					nextEl: ".reviews__buttons .slider-buttons__next",
					prevEl: ".reviews__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 3.25,
						spaceBetween: 30,
					}
				}
			});
		

			// portfolio-slider
			swiper = new Swiper(".portfolio-slider", {
				slidesPerView: 2.25,
				spaceBetween: 30,
				loop: false,
				navigation: {
					nextEl: ".portfolio__buttons .slider-buttons__next",
					prevEl: ".portfolio__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 3.25,
						spaceBetween: 30,
					}
				}
			});


			// product slider
			swiper = new Swiper(".product-slider", {
				slidesPerView: 3.25,
				spaceBetween: 30,
				loop: true,
				watchSlidesProgress: true,
				navigation: {
					nextEl: ".product-slider__buttons .slider-buttons__next",
					prevEl: ".product-slider__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 3.25,
						spaceBetween: 30,
					},
					1399.98: {
						slidesPerView: 4.25,
						spaceBetween: 30,
					}
				}
			});
			

			// certificate slider
			/* swiper = new Swiper(".certificate-slider", {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: false,
				navigation: {
					nextEl: ".certificate__buttons .slider-buttons__next",
					prevEl: ".certificate__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1399.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					}
				}
			}); */
			
			// history-slider
			swiper = new Swiper(".history-slider", {
				slidesPerView: 2.25,
				spaceBetween: 30,
				loop: true,
				autoHeight: true,
				navigation: {
					nextEl: ".history__buttons .slider-buttons__next",
					prevEl: ".history__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 3.25,
						spaceBetween: 30,
					}
				}
			});

			// personal-slider
			swiper = new Swiper(".personal-slider", {
				slidesPerView: 2.25,
				spaceBetween: 30,
				loop: true,
				navigation: {
					nextEl: ".personal__buttons .slider-buttons__next",
					prevEl: ".personal__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 3.25,
						spaceBetween: 30,
					}
				}
			});
			
			// cooperation-slider
			swiper = new Swiper(".cooperation-slider", {
				slidesPerView: 2.25,
				spaceBetween: 30,
				loop: true,
				autoHeight: true,
				navigation: {
					nextEl: ".cooperation__buttons .slider-buttons__next",
					prevEl: ".cooperation__buttons .slider-buttons__prev",
				},
				breakpoints: {
					1199.98: {
						slidesPerView: 3.25,
						spaceBetween: 30,
					}
				}
			});

		}
	} else if (init) {
		swiper.destroy();
		init = false;
	}
}
swiperDesctop();
window.addEventListener("resize", swiperDesctop);
