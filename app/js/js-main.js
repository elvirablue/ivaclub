  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************    
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup;
    var close;

    
    $('.js-modal-package1').click(function(event){
          event.preventDefault();           
          popup = document.querySelector('.js-modal-pac1');
          close = popup.querySelector('.modal_close');          
          popup.classList.remove('zoomOut');         
          popup.classList.add('show', 'zoomIn');           
    }); 
    $('.js-modal-package2').click(function(event){
          event.preventDefault();           
          popup = document.querySelector('.js-modal-pac2');
          close = popup.querySelector('.modal_close');          
          popup.classList.remove('zoomOut');         
          popup.classList.add('show', 'zoomIn');           
    }); 
     $('.js-modal-package3').click(function(event){
          event.preventDefault();          
          popup = document.querySelector('.js-modal-pac3'); 
          close = popup.querySelector('.modal_close');          
          popup.classList.remove('zoomOut');         
          popup.classList.add('show', 'zoomIn');           
    }); 


    $('.js-modal-open').click(function(event){
           event.preventDefault();
          popup = document.querySelector('.js-modal');
          close = popup.querySelector('.modal_close');      
          popup.querySelector('.button').innerText = this.innerText;   
          popup.querySelector('.modal__title').innerText = popup.querySelector('.hidden').value = this.getAttribute('data-title-modal'); 
          popup.style.height = 'auto';         
          var heightModal = $('.js-modal').height();
          popup.style.marginTop = '-' + heightModal/2 + 'px';               
          PopupShow(event);
         
    });

    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
         
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 100);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    $('.modal_close').click(function(event) {
          event.preventDefault();
          popup = document.querySelector('.modal.show');
          closePopup();
    });


});
$(document).ready(function() {
 
	$("form").submit(function() {
		var $form = $(this);
		var data = $form.serialize();
		
		if (validateForm($form)) {
			$.post("./assets/mail.php", data, function(resp) {});
			
			
//*************************************************************************************************
			//КОД ДЛЯ GOOGLE ANALYTICS:
			//ga('send', 'event', 'FormContact1', {nonInteraction: true});
			//ga('send', 'event',	'FormContact1', 'play', 'Fall Campaign');

//*************************************************************************************************			
			//КОД ДЛЯ МЕТРИКИ ЯНДЕКС:
			// ЗДЕСЬ ХХХХХХ - номер счетчика, FormContact - имя события, которое будет отображаться в метрике
			//yaCounter39173625.reachGoal('FormContact');
//*************************************************************************************************

			$('#exampleModal').arcticmodal({
				beforeOpen: function(data, el) {
					if ($('.modal').hasClass('show')) {
						$('.modal').addClass('zoomOut');						
                  		$('.modal_wrapper').addClass('fadeOut');                  		
                        $('.modal').removeClass('show zoomIn');      
                        $('.modal_wrapper').removeClass('show fadeIn');                  		
                 	}
				}				
    		});
//
		} else { return false; };

		return false;
	});

});
 

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("modal_error");
			setTimeout(function(){
                        $(element).removeClass('modal_error');
                  }, 1500);
			valid = false;
		}
		else {
			$(element).removeClass("modal_error");
		}
	});
	return valid;

}
$(document).on('ready', function(){ 
	
  $('.nav.navbar-nav a').click(function () { 
    var el = $(this).attr('href');
    $('html,body').animate({scrollTop: $(el).offset().top - 200}, 600);
    return false;
  });

  $(window).scroll(function(){    
    if ($(window).scrollTop() >= 100) {
        $('.navbar-iva').css('background-color', 'rgba(255, 255, 255, 0.9)');       
    } 
    if ($(window).scrollTop() < 100) {
      $('.navbar-iva').css('background-color', 'rgba(255, 255, 255, 0)');       
  } 
  });

  //*****************



});