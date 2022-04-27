$(document).ready(function(){

	// Efecto Menu
	$('.container ul a').each(function(PROYECTO, elemento){
		$(this).css({
			'top': '500px'
		});
		$(this).animate({
			'top': '0px'
		},1000 + (PROYECTO * 1000));
	});
    // Efecto Header
	if ($(window).width() > 800){
		$('.container ul a').css({
			opacity: 0,
			marginTop: 0
		});

		$('.container ul a').animate({
			opacity: 1,
			marginTop: '10px'
		},1000);
	}
	//var top = $('#top').offset().top;
	//var	contacto = $('#contacto').offset().top;
	var	pra1 = $('#pra1').offset().top;
	//var	snn = $('#sn').offset().top;
        
        
// Boton Acerca de
	$('#pra1').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});
});