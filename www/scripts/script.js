// $(document).ready(function() {

//     $('js-burger').on('click', function(){
//         if('isOpen') {
//            $('.js-menu').slideUp();
//            isOpen = true;
//         } else {
//             $('.js-menu').slideDown();
//             isOpen = true;
//         }
//     })
//     console.log('js-burger');
// })


$(document).ready(function() {
    
    let isOpen = false;
  
     $('.js-burger').on('click', function(){
       if (isOpen) {
        $('.js-menu').slideUp();
        isOpen = false;
      } else {
         $('.js-menu').slideDown();
     isOpen = true;
      }
    });
})
