$(function(){
  
  $('.header__burger').on('click', function(){
    $('.header__burger, .nav').toggleClass('active');
  });


  var mixer = mixitup('.portfolio__inner', {
    animation: {
      duration: 500
    }
  });

});

$('[.video__btn]').fancybox({

});