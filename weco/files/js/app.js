let scrollpos = window.scrollY
const header = document.querySelector(".header--home")
const headerMain = document.querySelector(".header--main")
const scrollChange = 1

if (header) {

	const add_class_on_scroll = () => header.classList.add("header--scroll2")
	const remove_class_on_scroll = () => header.classList.remove("header--scroll2")
	window.addEventListener('scroll', function() { 
		scrollpos = window.scrollY;
		if (scrollpos >= scrollChange) { add_class_on_scroll() }
		else { remove_class_on_scroll() }
	})

}
if (headerMain) {
	const add_class_on_scroll2 = () => headerMain.classList.add("header--scroll")
	const remove_class_on_scroll2 = () => headerMain.classList.remove("header--scroll")
	window.addEventListener('scroll', function() { 
		scrollpos = window.scrollY;
		if (scrollpos >= scrollChange) { add_class_on_scroll2() }
		else { remove_class_on_scroll2() }
	})
}


const burgerMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (burgerMenu) {
	burgerMenu.addEventListener("click", function(e){
		burgerMenu.classList.toggle('_active');
		mobileMenu.classList.toggle('_active');

	});
}
if (mobileMenuClose) {
	mobileMenuClose.addEventListener("click", function(e){
		burgerMenu.classList.toggle('_active');
		mobileMenu.classList.toggle('_active');

	});
}

// Маска для телефона

$('input.phonemask').inputmask({
	mask: '+7 (999) 999-99-99',
	showMaskOnFocus: true,
	showMaskOnHover: true,
	placeholder: "_",
	removeMaskOnSubmit: false,
	oncomplete: function () {
		$(this).removeClass('empty');
	},
	onincomplete: function () {
		$(this).addClass('empty');
	},
	onKeyValidation: function () {
		$(this).addClass('empty');
	}
});

// Маска для телефона

/*Антиспам*/  
$(function(){
    $('.ajax_form').append('<input type="text" name="org" value="" class="_org" style="visibility:hidden; height: 0; width: 0; padding: 0; border:none;"/>')
})
/*Антиспам*/
  
/*Автозакрытие формы*/ 
$(document).on('af_complete', function(event,res) {
    if(res.success) 
    setTimeout(function() {
        $('.modal-close').click(); 
    }, 2500);
});
/*Автозакрытие формы*/  
    
/*Сообщение об успешной отправке*/ 
$(document).ready(function() {
    AjaxForm.Message.success = function() {};
});
          
$(document).on('af_complete', function(event, response) {
    var form = response.form;
    if (response.success) {
        form.parents('.modal').modal('hide');
        $('#successModal .successModal-text').html(response.message);
        $('#successModal').modal('show');
    }
});
/*Сообщение об успешной отправке*/   
  
        

// Всплывающие подсказки
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})



jQuery(document).ready(function(a) {
	"use strict";
  function c() {n.removeClass("open")}
  var j = a(".sub-menu-toggle");
  a("").on("click"), 
	function(b, c, d) {
		a(b).on("click", function() {
			a(this).addClass("sidebar-open"), a(c).addClass("open")
		}), a(d).on("click", function() {
			a(b).removeClass("sidebar-open"), a(c).removeClass("open")
		})
	}(".sidebar-toggle", ".sidebar-offcanvas",".sidebar-close");
});





const exampleModal = document.getElementById('modalOrder')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        const recipient = button.getAttribute('data-bs-whatever')
        const modalTitle = exampleModal.querySelector('#modalTitle')
        const modalBodyInput = exampleModal.querySelector('#requestInput')
        modalTitle.textContent = `${recipient}`
        modalBodyInput.value = recipient
  })
}


$(document).ready(function() {
  $(document).on('change', '#mse2_sort', function() {
      var selected = $(this).find('option:selected');
      var sort = selected.data('sort');
      sort += mse2Config.method_delimeter + selected.val();
      mse2Config.sort =  sort;
      mSearch2.submit();
  });
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


    if ($(window).width() < 768 ) {
        $('.read-more').readmore({
            speed: 75,
            moreLink: '<a href="#">Подробнее</a>',
            lessLink: '<a href="#">Закрыть</a>',
            collapsedHeight: 218
        });

    }
