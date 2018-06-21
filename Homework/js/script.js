$(document).ready(function() {

	$('li:eq(7), .main_btna, .main_btn').on('click', function() {
		$('.overlay').fadeIn(2000);
		$('.modal').slideDown(2000);
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut(2000);
		$('.modal').slideUp(2000);
	});



});