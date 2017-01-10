$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

    $('.icon_drop_menu').on('click', function() {
    	event.preventDefault();
    	$('.header_drop').addClass('open');
    });

   	$('.drop_menu .icon_close').on('click', function() {
   		event.preventDefault();
    	$('.header_drop').removeClass('open');
   	});

	$('.slider_image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider_text'
	});
	$('.slider_text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider_image',
		dots: true,
		arrows: false,
		fade: true,
		centerMode: false,
		focusOnSelect: true
	});

	$('.coin_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		prevArrow: '<div class="arrow_prev"></div>',
		nextArrow: '<div class="arrow_next"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 599,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	})

	var boxHei = $('.box_preview').height();
		boxWidth = $('.box_preview').width();

	$(window).resize(function() {
		var boxHei = $('.box_preview').height();
			boxWidth = $('.box_preview').width();
		$('.grid__item').removeClass('open').removeAttr('style');
		$('.box_preview').removeAttr('style');
	});

	$('.box_preview').on('click', '.more_detailed', function(event) {
		event.preventDefault();

		$('.box_preview').css({
			minHeight: boxHei,
		});
		$(this).closest('.grid__item').addClass('open').css({
			width: boxWidth,
			minHeight: boxHei,
		});
	});

	$('.box_preview').on('click', '.close_detailed', function(event) {
		event.preventDefault();
		$(this).closest('.grid__item').removeClass('open').removeAttr('style');
	});

});
