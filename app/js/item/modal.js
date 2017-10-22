  
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