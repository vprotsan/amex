$(document).ready(function(){

	if ( $('html').hasClass('no-cssvhunit') ){
	var winHeight = $(window).height();
	$('.container-fluid, .row, .col-sm-3, col-xs-12').css('height', winHeight);
    }

    if ( $('html').hasClass('no-backgroundsize') ){
	
	$('.container-fluid').css({'background' : '#000 url(../images/background-image.jpg) no-repeat center center', 'position': 'fixed', 'width': '100%'});
    }

})