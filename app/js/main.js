$('document').ready(function(){

$('.function__item').on('click', function(){
	$('.function__hiddenvalue').removeClass('active');
	$('.function__item').removeClass('active');
	$(this).addClass('active');
	$(this).children('.function__hiddenvalue').addClass('active');
});
});
