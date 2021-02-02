w$(document).ready(function(){
	w$('.menu_group').hover(function(){
		w$('.menu_bg').toggleClass('active');
		w$('.menu_2dep').toggleClass('on');	
	});
	
	w$('.mnav_btn').click(function(){
		w$('.R5_mnav').toggleClass('R5_act');
		w$('.R5_scrn').toggleClass('scr_on');
		w$('.main_visual main').toggleClass('hold');
		w$('#wrap_container').toggleClass('hold');
		w$('footer').toggleClass('hold');		
	});
	
	w$('.R5_scrn').click(function(){
		w$('.R5_mnav').removeClass('R5_act');
		w$('.R5_scrn').removeClass('scr_on');
		w$('.main_visual main').removeClass('hold');
		w$('#wrap_container').removeClass('hold');
		w$('footer').removeClass('hold');
	});

	w$('.msmn_insub').click(function() {
		w$('.R5_mnav li').removeClass('active');
		w$(this).closest('li').addClass('active');	
		var checkElement = w$(this).next();
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				w$(this).closest('li').removeClass('active');
				checkElement.slideUp('normal');
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				w$('.R5_mnav ul ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
			}
			if(w$(this).closest('li').find('ul').children().length == 0) {
				return true;
			} else {
				return false;	
			}		
		});
		
	w$('.r5_SrchOpn').click(function(){
		w$( ".r5_schbox" ).addClass( "r5_schon" );		
	});
	
	w$('.SearchClose').click(function(){
		w$( ".r5_schbox" ).removeClass( "r5_schon" );		
	});	
		
		
});    


w$(window).resize(function () {
	if (w$(window).width() > 768) {
		w$('.R5_mnav').removeClass('in');
		w$('body').removeClass('opacity');
	};
});	


