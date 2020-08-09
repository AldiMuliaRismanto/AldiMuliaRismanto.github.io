$(window).scroll(function () {
    
    var scroll = $(this).scrollTop();

   if (scroll > 450) {
       $('.kotak').addClass('aktif');
   }


   if(scroll > 450){
       $('.lead').addClass('berubah');
   }


});