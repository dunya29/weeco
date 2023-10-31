
let mobile = 768
let fixedBtn = document.querySelector(".fixed-btn")
function setFixedBtnLink() {
  if (window.innerWidth > 1024) {
    fixedBtn.setAttribute("href", "https://web.whatsapp.com/send?phone=79399006916&text=")
  } else {
    fixedBtn.setAttribute("href", "https://api.whatsapp.com/send?phone=79399006916")
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
/* const stepper = document.querySelectorAll(".stepper")
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
    item.querySelector(".form__number-button-right").addEventListener("click",()=> {
      inp.value = +item.querySelector("input").value + Number(inp.getAttribute("data-step"))
      checkMinValue()
    })
    item.querySelector(".form__number-button-left").addEventListener("click",()  => {
      inp.value = +inp.value - Number(inp.getAttribute("data-step"))
      checkMinValue()
    })
  })
} */
const promocode = document.querySelector(".promocode")
if (document.querySelector(".promo-btn")) {
  document.querySelector(".promo-btn").addEventListener("click", () => {
    if (!promocode.classList.contains("show")) {
      promocode.classList.add("show")
      promocode.querySelector("input").focus()
    } else {
      promocode.classList.remove("show")
      promocode.querySelector("input").value = ""
    }
  })
}
const cartItem = document.querySelectorAll(".cart__item")
if (cartItem) {
  cartItem.forEach(item => {
    const formToggle = item.querySelector(".form-toggle")
    const amountInput = item.querySelector(".form__number input[name='count']");
    const increaseButton = item.querySelector(".form__number-button-right");
    const decreaseButton = item.querySelector(".form__number-button-left");
    const choiceUnit = item.querySelector(".d-price small")
    const step = Number(amountInput.getAttribute("data-step")) 
    let choice = amountInput.getAttribute("data-packages")
    choiceUnit.textContent = "/" + choice;
    if (formToggle) {
      formToggle.querySelectorAll("input").forEach(inp => {
        if (inp.value === choice) {
          inp.checked = true
        }
      })
      formToggle.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", updateChoice);
      });
    }
    increaseButton.addEventListener("click", increaseValue);
    decreaseButton.addEventListener("click", decreaseValue);

    amountInput.addEventListener("blur", roundValueToMultipleOfFour);
    amountInput.addEventListener("input", validateInput); 

    function updateChoice() {
      choice = formToggle.querySelector('.form-toggle__item input:checked').value;
      updateValue()
    }
    function updateValue() {
    /*   const choice = formToggle.querySelector('.form-toggle__item input:checked').value; */
      choiceUnit.textContent = "/" + choice;
      if (choice === "шт") {
        amountInput.value = amountInput.value * step;
      } else {
        amountInput.value = Math.ceil(amountInput.value / step);
      }
    }
    function increaseValue() {
      /* const choice = formToggle.querySelector('.form-toggle__item input:checked').value; */
      if (choice === "шт") {
        amountInput.value = +amountInput.value + step;
      } else {
        amountInput.value = +amountInput.value + 1
      }
    }  
    function decreaseValue() {
    /*   const choice = formToggle.querySelector('.form-toggle__item input:checked').value; */
      if ( (amountInput.value > step && choice === "шт") ||  (amountInput.value > 1 && choice === "уп")) {
        if (choice === "шт") {
          amountInput.value = +amountInput.value - step;
        } else {
          amountInput.value = +amountInput.value - 1
        }
      }
    }   
    function debounce(f, t) {
      return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall-previousCall) <= t)) {
          clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
      }
    }
    function roundValueToMultipleOfFour() {
      /* const choice = formToggle.querySelector('.form-toggle__item input:checked').value; */
      if (choice === "шт") {
        const value = parseInt(amountInput.value);
        if (!isNaN(value)) {
          amountInput.value = Math.ceil(value / step) * step;
        }
      }

    }  
    function validateInput() {
      const value = amountInput.value.trim();
      if (value.length === 0) {
        amountInput.value = 1;
      } else {
        const number = parseFloat(value);
        if (isNaN(number) || number <= 0) {
          amountInput.value = 1;
        } else {
          amountInput.value = number;
        }
      }
    }

  /*   if (formToggle) {
    const jsStepper = item.querySelector(".stepper")
    const unit = item.querySelector(".d-price small")
    formToggle.querySelectorAll("input").forEach (inp => {
      let step = jsStepper.querySelector("input").getAttribute("step")
      inp.addEventListener("change", () => {
        let value = jsStepper.querySelector("input").value
        if (formToggle.querySelector("input:checked").value === "шт") {
          jsStepper.querySelector("input").value = value * step;
          jsStepper.querySelector("input").setAttribute("step", step)
          unit.textContent = "/шт"
        } else {
          jsStepper.querySelector("input").value = Math.ceil(value / step);
          jsStepper.querySelector("input").setAttribute("step", "1")
          unit.textContent = "/уп"
        }
      })
    })
    }
*/
  })
} 
const deliveries = document.querySelector("#deliveries")
if (deliveries) {
  deliveries.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("change", ()=> {
      if (inp.value == 2) {
        document.querySelector("#cart-pickup").style.display = "none"
        document.querySelector("#cart-address").style.display = "block"
      } else {
        document.querySelector("#cart-pickup").style.display = "block"
        document.querySelector("#cart-address").style.display = "none"
      }
    })
  })
}
if (document.querySelector(".blog-toc")) {
  document.querySelectorAll(".blog-toc a").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault()
      let windowTop = window.pageYOffset || document.documentElement.scrollTop
      let dest = document.querySelector(item.getAttribute("href"))
      window.scrollTo({ top: windowTop + dest.getBoundingClientRect().top - 80, behavior: 'smooth' })
    })
  })
/*   $('.blog-toc a').on('click', function () {
    let txt = $(this).attr('href');
console.log($(txt).offset().top)
    $('html, body').animate({
        scrollTop: $(txt).offset().top - 80
    },  'slow');

    return false;
}); */

}
if (document.querySelector(".blog-aside__swiper")) {
  const blogAsideSwiper = new Swiper(".blog-aside__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    observe: true,
    observeParents: true,
    loop: true,
    autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
    navigation: {
      nextEl: ".blog-aside__buttons .swiper-btn--next",
      prevEl: ".blog-aside__buttons .swiper-btn--prev"
    },
    speed: 800
  })
}
if (document.querySelector(".blog-cards__swiper")) {
  const blogCardsSwiper = new Swiper(".blog-cards__swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    observe: true,
    observeParents: true,
    loop: false,
    breakpoints: {
      991.98: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
      },
      500.98: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: false,
      }
    },
    scrollbar: {
      el: '.blog-cards .swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: ".blog-cards__buttons .swiper-btn--next",
      prevEl: ".blog-cards__buttons .swiper-btn--prev"
    },
    speed: 800
  })
}
