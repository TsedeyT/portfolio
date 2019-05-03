
$(document).ready(function(){
	$('.menu-btn').click(function(){
		$('.menu-btn').toggleClass('close');
		$('.menu').toggleClass('show');
		$('.menu-branding').toggleClass('show');
		$('.menu-nav').toggleClass('show');
		$('.nav-item').toggleClass('show');
	})

});