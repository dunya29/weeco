
let mobile = 768
let fixedBtn = document.querySelector(".fixed-btn")
function setFixedBtnLink() {
  if (window.innerWidth > 1024) {
    fixedBtn.setAttribute("href", "https://web.whatsapp.com/send?phone=79279983383&text=")
  } else {
    fixedBtn.setAttribute("href", "https://api.whatsapp.com/send?phone=79279983383")
  }
}
if (fixedBtn) {
  setFixedBtnLink()
  window.addEventListener("resize",setFixedBtnLink)
} 
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
    form.querySelector(".file-form").classList.remove("error")
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
    item.classList.remove("error")
		item.classList.add("checked")
		item.querySelector(".file-form__name").textContent = file.name
	  }
	})
})
//file-form error
function fileFormOnError(formGroup) {
  formGroup.classList.remove("checked")
  formGroup.classList.add("error")
  formGroup.querySelector("input").value = ""
  formGroup.querySelector(".file-form__name").textContent =""
}
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

//unshow swiper scrollbar when enabled
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
// set order form img
function setChoiceImg() {
  choiceForm.querySelector(".choice-form__img").computedStyleMap.opacity = "0"
  let collection = choiceForm.querySelector("input[name=collection]:checked").getAttribute("data-val")
  let type = choiceForm.querySelector("input[name=type]:checked").getAttribute("data-val")
  let color = choiceForm.querySelector("input[name=color]:checked").getAttribute("data-val")
  let src = "img/plitki/" + collection + "-" + type + "-" + color
    choiceForm.querySelector(".choice-form__img").innerHTML = `<picture>
    <source srcset=${src}.jpg type="image/webp">
    <img src=${src}.jpg alt="Выбор плитки">
   </picture>`
   choiceForm.querySelector(".choice-form__img").computedStyleMap.opacity = "1"
}
function setPrice() {
  let collPrice = +choiceForm.querySelector("input[name=collection]:checked").getAttribute("data-price")
  let typePrice = +choiceForm.querySelector("input[name=type]:checked").getAttribute("data-price")
  let colorPrice = +choiceForm.querySelector("input[name=color]:checked").getAttribute("data-price")
  let price = collPrice + typePrice + colorPrice
  choiceForm.querySelector(".choice-form__price").textContent = "Цена: " + price + " руб./шт"
}
if (choiceForm) {
  setChoiceImg()
  setPrice()
  choiceForm.querySelectorAll("input[type=radio]").forEach(inp => {
    inp.addEventListener("change", () => {
      setChoiceImg()
      setPrice()
    })
  })
}
//close menu 
const mobmenu = document.querySelector(".mobile-menu")
mobmenu.querySelector(".button--primary").addEventListener("click", e => {
  e.preventDefault()
  burgerMenu.classList.toggle('_active');
	mobileMenu.classList.toggle('_active');
  setTimeout(() => {
    $('#modalCallback').modal('show');
  }, 400);
})
function loadYT() {
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

const lazyVid = document.querySelectorAll(".lazyload-video")
if (lazyVid) {
  lazyVid.forEach(vid => {
    vid.addEventListener("click", function lazyVidOnClick() {
  /*     if (vid.querySelector("video")) {    
        let url = vid.getAttribute("data-src"); 
        let webmUrl = vid.getAttribute("data-webm");
        let webm = "" !== vid.querySelector("video").canPlayType('video/webm; codecs="vp8, vorbis"')
        if (webm && webmUrl) {
          vid.querySelector("video").innerHTML = `<source src="${webmUrl}" type='video/webm'>`
        } else {
          vid.querySelector("video").innerHTML = `<source src="${url}">`
        }
        setTimeout(() => {
          vid.querySelector("video").play()
          vid.querySelector("video").controls = true
          vid.querySelector("video").style.zIndex = 2
        }, 0); 
        
      } else {*/
        let regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
        let url = vid.getAttribute("data-src");
        let videoId = url.match(regex)[1]
        let iframe = document.createElement( "iframe" );
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute("src", "https://www.youtube.com/embed/"+ videoId +"?rel=0&showinfo=0&autoplay=1");
        vid.innerHTML = "";
        vid.appendChild( iframe );  
        vid.querySelector("iframe").muted = true
     // }
      vid.removeEventListener("click", lazyVidOnClick)
    })
})
}
/* document.querySelector("select").addEventListener("change", ()=> {
  document.querySelector("select").querySelector("option:first-child").style.display = "none"
}) */
const stepper = document.querySelectorAll(".stepper")
if (stepper) {
  stepper.forEach(item => {
    let inp = item.querySelector("input[type=number]")
    function checkMinValue() {
      if (inp.value <= +inp.step.trim()) {
        item.querySelector(".form__number-button-left").style.pointerEvents = "none"
        inp.value = +inp.step.trim()
      } else {
        item.querySelector(".form__number-button-left").style.pointerEvents = ""
      }
    }
    if (inp.value == +inp.step.trim()) {
      item.querySelector(".form__number-button-left").style.pointerEvents = "none"
    }
    inp.addEventListener("change", checkMinValue)
    item.querySelector(".form__number-button-right").addEventListener("click", checkMinValue)
    item.querySelector(".form__number-button-left").addEventListener("click", checkMinValue)
  })
}