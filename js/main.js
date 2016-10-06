$(document).ready(function(){
	$('#gallery ul li a').hover(
		function(){
			$(this).find('.zoom').show();
		},
		function(){
			$(this).find('.zoom').hide();
		}
	);
});