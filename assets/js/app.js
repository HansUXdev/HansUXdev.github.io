$(document).foundation();

// Sedna Style
   // $(document).ready(function() {
   // });


(function ($) {
"use strict";

   var closeFn;
   function closeShowingModal() {
      var showingModal = document.querySelector('.modal.show');

      if (!showingModal) return;

      showingModal.classList.remove('show');

      document.body.classList.remove('disable-mouse');
      document.body.classList.remove('disable-scroll');

      if (closeFn) {
         closeFn();
         closeFn = null;
      }
   }
   
   function navHover(){
      $( ".menu-item a, .top-bar .menu li a" ).hover(
        function() {
          $( this ).addClass( "menu-active" );
        }, function() {
          $( this ).removeClass( "menu-active" );
        }
      );
   }

   document.addEventListener('click', function (e) {
      var target = e.target;
      if (target.dataset.ctaTarget) {
        closeFn = cta(target, document.querySelector(target.dataset.ctaTarget), 
         { relativeToWindow: true }, 
         function showModal(modal) {
            modal.classList.add('show');
            document.body.classList.add('disable-mouse');
            if(target.dataset.disableScroll){
              document.body.classList.add('disable-scroll');
            }
        });
      }
      else if (target.classList.contains('modal-close-btn')) {
        closeShowingModal();
      }
   });
   
   document.addEventListener('keyup', function (e) {
      if (e.which === 27) {
        closeShowingModal();
      }
   })

   function init() {
      closeShowingModal();
      navHover();
   }

   init();

})(jQuery);


// jQuery(function($) {
//    "use strict";
// });