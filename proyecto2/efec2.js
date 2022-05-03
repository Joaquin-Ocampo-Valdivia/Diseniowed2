$(document).ready(function(){

	// Efecto Menu
	$('.men a').each(function(PROYECTO, elemento){
		$(this).css({
			'top': '500px'
		});
		$(this).animate({
			'top': '0px'
		},1000 + (PROYECTO * 1000));
	});
    // Efecto Header
	if ($(window).width() > 800){
		$('.men a').css({
			opacity: 0,
			marginTop: 0
		});

		$('.men a').animate({
			opacity: 1,
			marginTop: '10px'
		},1000);
	}
	//var top = $('#top').offset().top;
	//var	contacto = $('#contacto').offset().top;
	//var	snn = $('#sn').offset().top;
        
        
// Boton Acerca de
	$('#opi').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});
});