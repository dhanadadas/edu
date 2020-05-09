
$(document).ready(function () {

	$('.main_btna, .main_btn, .rasp').on('click', function () {
		//$('.overlay').show();
		//$('.modal').show();

		$('.overlay').animate( {
			opacity:'toggle',
			//height: 'toggle',
			display: 'block'
		});

		$('.modal').animate( {
			opacity:'toggle',
			//height: 'toggle',
			display: 'block',
			top: 100
		});
	});

	$('.close, .overlay').on('click', function () {
		$('.overlay').hide();
		$('.modal').hide();
	})
	//$('.main_btn').
	//$('.rasp').

});