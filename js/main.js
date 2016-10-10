$(document).ready(function(){
	$('#gallery ul li a').hover(
		function(){
			$(this).find('.zoom').show();
		},
		function(){
			$(this).find('.zoom').hide();
		}
	);

	$('#slider').bxSlider();
	$(".fbox").fancybox();

	$('#price .button').on('click',function(e){
		e.preventDefault();
		$('.popup').toggle();
		$('.overlay').toggle();
	});
	$('#close_cross').on('click',function(e){
		e.preventDefault();
		$('.popup').hide();
		$('.overlay').hide();
	});
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

	if ($(window).width()<417){
		$('#top p').html($('#top p').html().replace('<br>',' '));

		$('.lined li').each(function(){$(this).html('<span>'+$(this).html()+'</span>')});
	}
	//$('#phone').mask("+99 (999) 999-99-99");
});