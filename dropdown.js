$(document).ready(function(){
    $('.burgericon').on('click', function(e){
        $('.nav-menu').slideToggle();
    })
    e.stopPropagation();
  });