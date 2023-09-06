let mobile = 768
// formSuccess
function formSuccess(form) {
  form.querySelectorAll(".form__group").forEach(item => item.classList.remove("error"))
  form.querySelectorAll("input").forEach(inp => {
    if (inp.type != "hidden") {
      inp.value = ""
      inp.checked = false
    }
  })
  if (form.querySelector("textarea")) {
    form.querySelector("textarea").value = ""
  }
  if (form.querySelector(".file-form")) {
    form.querySelector(".file-form").classList.remove("checked")
    form.querySelector(".file-form__name").textContent = ""
  }
  let modal = document.querySelector(".modal.show")
  if (modal) {
    $(modal).modal('hide');
  }
  $('#successModal').modal('show');
}
//file-form
document.querySelectorAll(".file-form").forEach(item => {
	item.querySelector("input").addEventListener("change", e => {
	  let files = e.target.files
	  for (let i = 0; i < files.length; i++) {
		let file = files[i]
		item.classList.add("checked")
		item.querySelector(".file-form__name").textContent = file.name
	  }
	})
})
//work swiper
let initworkSwiper = false
let swiperwork
function workSwiper() {
  if (window.innerWidth < mobile) {
    if (!initworkSwiper) {
		initworkSwiper = true
		swiperwork = new Swiper(".work-gallery .swiper", {
    slidesPerView: 1.81,
		spaceBetween: 20,
    observe: true,
    observeParents: true,
    scrollbar: {
      el: '.work-gallery .swiper-scrollbar',
      draggable: true,
    },
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		  },
        speed: 800
      })
    }
  } else if (window.innerWidth >= mobile && initworkSwiper){
    swiperwork.destroy()
    initworkSwiper = false
  }
}
if (document.querySelector(".work-gallery")) {
	workSwiper();
}
window.addEventListener("resize", workSwiper)


//photo gallery swiper
let initphotoSwiper = false
let swiperphoto
function photoSwiper() {
  if (window.innerWidth < mobile) {
    if (!initphotoSwiper) {
		  initphotoSwiper = true
		  swiperphoto = new Swiper(".photo-gallery .swiper", {
      slidesPerView: 1.81,
		  spaceBetween: 20,
      observe: true,
      observeParents: true,
		  autoplay: {
			  delay: 3500,
			  disableOnInteraction: false,
		  },
      scrollbar: {
        el: '.photo-gallery .swiper-scrollbar',
        draggable: true,
      },
      speed: 800
      })
    }
  } else if (window.innerWidth >= mobile && initphotoSwiper){
    swiperphoto.destroy()
    initphotoSwiper = false
  }
}
if (document.querySelector(".photo-gallery")) {
	photoSwiper();
}
window.addEventListener("resize", photoSwiper)

//delivery swiper
let initdeliverySwiper = false
let swiperdelivery
function deliverySwiper() {
  if (window.innerWidth < mobile) {
    if (!initdeliverySwiper) {
		initdeliverySwiper = true
		swiperdelivery = new Swiper(".delivery .swiper", {
    slidesPerView: 2.3,
		spaceBetween: 20,
    observe: true,
    observeParents: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		  },
      scrollbar: {
        el: '.delivery .swiper-scrollbar',
        draggable: true,
      },
      speed: 800,
      breakpoints: {
        576.98: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
      })
    }
  } else if (window.innerWidth >= mobile && initdeliverySwiper){
    swiperdelivery.destroy()
    initdeliverySwiper = false
  }
}
if (document.querySelector(".delivery")) {
	deliverySwiper();
}
window.addEventListener("resize", deliverySwiper)
//certificate swiper 
let certSwiper = new Swiper(".certificates-section .swiper", {
  slidesPerView: 1.15,
  spaceBetween: 30,
  observe: true,
  observeParents: true,
  loop: false,
  scrollbar: {
    el: '.certificates-section .swiper-scrollbar',
    draggable: true
  },
  speed: 800,
  breakpoints: {
    576.98: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
    991.98: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199.98: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1399.98: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});
//unshow scrollbar when enabled
const scrollBar = document.querySelectorAll(".swiper-scrollbar-wrap")
function unshowScrollbar() {
  setTimeout(() => {
    if (scrollBar) {
      scrollBar.forEach(bar => {
        if (bar.querySelector(".swiper-scrollbar-lock")) {
          bar.classList.add("lock")
        } else {
          bar.classList.remove("lock")
        }     
      })
    }
  }, 100);
}
unshowScrollbar()
window.addEventListener("resize", unshowScrollbar)
//choice-form 
const choiceForm = document.querySelector(".choice-form")
const choiceFormBtn = document.querySelector(".choice-form__btn")
const modalOrderPlate = document.querySelector("#modalOrderPlate")
if (choiceFormBtn) {
  choiceFormBtn.addEventListener("click", ()=> {
    let collection = choiceForm.querySelector("input[name=collection]:checked").value
    let color = choiceForm.querySelector("input[name=color]:checked").value
    let type = choiceForm.querySelector("input[name=type]:checked").value
    modalOrderPlate.querySelector("input[name=collection]").value = collection
    modalOrderPlate.querySelector("input[name=color]").value = color
    modalOrderPlate.querySelector("input[name=type]").value = type
  })
}
function setChoiceImg(collection,type,color) {
  let src = "img/" + collection + "-" + type + "-" + color
    choiceForm.querySelector(".choice-form__img").innerHTML = `<picture>
    <source srcset=${src}.jpg type="image/webp">
    <img src=${src}.jpg alt="Выбор плитки">
   </picture>`
}
if (choiceForm) {
  setChoiceImg("berlin","corner-step360x360x23","brown")
}
const mobmenu = document.querySelector(".mobile-menu")
mobmenu.querySelector(".button--primary").addEventListener("click", e => {
  e.preventDefault()
  burgerMenu.classList.toggle('_active');
	mobileMenu.classList.toggle('_active');
  setTimeout(() => {
    $('#modalCallback').modal('show');
  }, 400);
})
new PerfectScrollbar(".comparison-table__responsive")