let mobile = 768
//set fixedBtn link
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
//file-form error
function fileFormOnError(formGroup) {
  formGroup.classList.remove("checked")
  formGroup.classList.add("error")
  formGroup.querySelector("input[type=file]").value = ""
  formGroup.querySelector(".file-form__name").textContent =""

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
		if (file.name.length> 35 ) 
		{ item.querySelector(".file-form__name").textContent = file.name.substr(0, 35) + "..." }
		else { item.querySelector(".file-form__name").textContent = file.name }
		if (file.size > 2000000) {
    		$(".file-form__error").show();
            $(".file-form__txt").hide();
            //item.querySelector("input[type=file]").value = ""
            item.querySelector(".file-form__name").style.color = "#ff0000";
		} else {
    		$(".file-form__error").hide();
            $(".file-form__txt").show();
		}
		$file_type = file.name.split('.').pop();
        if($file_type!="jpeg" && $file_type!="jpg"  && $file_type!="png"){
            item.querySelector(".file-form__error").textContent = "Ошибка: Допускаются файлы только jpeg, jpg, png"
        }

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
  window.addEventListener("resize", workSwiper)
}

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
  window.addEventListener("resize", photoSwiper)
}

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
  window.addEventListener("resize", deliverySwiper)
}

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

function setCollection(collection){

  collection = choiceForm.querySelector("input[name=collection]:checked").getAttribute("data-val")
  let n_color = choiceForm.querySelector(`picture[data-collection="${collection}"]`).getAttribute("data-color")
  let n_type = choiceForm.querySelector(`picture[data-collection="${collection}"]`).getAttribute("data-type")
  choiceForm.querySelector(`input[data-val="${n_color}"]`).checked = true
  choiceForm.querySelector(`input[data-val="${n_type}"]`).checked = true
}

function setChoiceImg() {

if (choiceForm.querySelectorAll("label[data-collection]")) {
 collection = choiceForm.querySelector("input[name=collection]:checked").getAttribute("data-val")
} else {collection = ""}
let color = choiceForm.querySelector("input[name=color]:checked").getAttribute("data-val")
let type = choiceForm.querySelector("input[name=type]:checked").getAttribute("data-val")
let picture = collection + color + type 


if (choiceForm.querySelectorAll("label[data-color]")) {
choiceForm.querySelectorAll("label[data-color]").forEach(function(element) {
    let datcolor = element.getAttribute("data-color")
    if (choiceForm.querySelector(`picture[data-collection="${collection}"][data-color="${datcolor}"][data-type="${type}"]`))
    {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
});
}

if (choiceForm.querySelectorAll("label[data-type]")) {
choiceForm.querySelectorAll("label[data-type]").forEach(function(element) {
    let dattype = element.getAttribute("data-type")
    if (choiceForm.querySelector(`picture[data-collection="${collection}"][data-color="${color}"][data-type="${dattype}"]`))
    {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
});
}

if (choiceForm.querySelector("picture.d-block"))
{
choiceForm.querySelector("picture.d-block").classList.remove("d-block")
choiceForm.querySelector(".choice-form__price.d-block").classList.remove("d-block")
}

choiceForm.querySelector(`picture[data-val="${picture}"]`).classList.add("d-block")
choiceForm.querySelector(`.choice-form__price[data-val="${picture}"]`).classList.add("d-block")

}

if (choiceForm) {
  setChoiceImg()
   choiceForm.querySelectorAll("input[name=collection]").forEach(inpc => {
    inpc.addEventListener("change", () => {
      setCollection()
    })
  })
  choiceForm.querySelectorAll("input[type=radio]").forEach(inp => {
    inp.addEventListener("change", () => {
      setChoiceImg()
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
      vid.removeEventListener("click", lazyVidOnClick)
    })
})
}

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
    if (formToggle) {
      formToggle.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", updateChoice);
      });
    }
    increaseButton.addEventListener("click", increaseValue);
    decreaseButton.addEventListener("click", decreaseValue);
    
    amountInput.addEventListener("blur", roundValueToMultipleOfFour);
    amountInput.addEventListener("input", validateInput); 

    function setDefaultValue() {
      amountInput.value = 1;
      updateValue();
    }
    setDefaultValue()
    function updateChoice() {
      choice = formToggle.querySelector('.form-toggle__item input:checked').value;
      updateValue()
    }
    function updateValue() {
      choiceUnit.textContent = "/" + choice;
      if (choice === "шт") {
        amountInput.value = amountInput.value * step;
      } else {
        amountInput.value = Math.ceil(amountInput.value / step);
      }
    }
    function increaseValue() {
      if (choice === "шт") {
        amountInput.value = +amountInput.value + step;
      } else {
        amountInput.value = +amountInput.value + 1
      }
    }  
    function decreaseValue() {
      if ( (amountInput.value > step && choice === "шт") ||  (amountInput.value > 1 && choice === "уп")) {
        if (choice === "шт") {
          amountInput.value = +amountInput.value - step;
        } else {
          amountInput.value = +amountInput.value - 1
        }
      }
    }   
    function roundValueToMultipleOfFour() {
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