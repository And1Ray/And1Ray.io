<<<<<<< HEAD
$(document).ready(function() {

	$('li:eq(7), .main_btna, .main_btn').on('click', function() {
		$('.overlay').fadeIn(2000);
		$('.modal').slideDown(2000);
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut(2000);
		$('.modal').slideUp(2000);
	});



=======
$(document).ready(function() {

	$('li:eq(7), .main_btna, .main_btn').on('click', function() {
		$('.overlay').fadeIn(2000);
		$('.modal').slideDown(2000);
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut(2000);
		$('.modal').slideUp(2000);
	});



>>>>>>> 93e1c4a8ae7fb6bab2ab4ce87608a0677eef47ab
});