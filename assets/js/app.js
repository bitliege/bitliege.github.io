// =============================================================================

    // APP JS
    // Property of Norex
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================
(function($) {

    $(document).ready(function() {

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Disabled Button Clicks ==============================================
        $('.disabled').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Smooth Scrolling ====================================================
        $("a[href*='#']:not([href='#'])").on('click',function() {

           if(!$(this).parent().hasClass('accordion-navigation')) {

               if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

                 var target = $(this.hash);

                 target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                 if (target.length) {
                   $('html,body').animate({
                     scrollTop: target.offset().top - $('.search-cta').outerHeight()
                   }, 650); // Duration
                   return false;
                 }

               }

           }

         });

        // Data Link Handler ===================================================
        $('[data-link-handler]').on('click',function(e){
            if($('[data-link-target="'+$(this).attr('data-link-handler')+'"]').hasClass('active')) {
                $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').removeClass('active');
            }
            else {
                $('[data-link-target="'+$(this).attr('data-link-handler')+'"]').addClass('active');
            }
            e.preventDefault();
        });

        // Navigation Handler ==================================================
		var navHeight = $('header').outerHeight();

		$('.content').css('margin-top', navHeight + 'px');

		$(function() {

			var prevScroll = $(document).scrollTop();

			$(window).scroll(function() {
				scrollPosition = $(document).scrollTop();
				if(scrollPosition > navHeight) {
					var newScroll = $(document).scrollTop();
			        if(newScroll < prevScroll) {
			            $('header').removeClass('active');
			        } else {
			            $('header').addClass('active');
			        }
			        prevScroll = newScroll;
				}
		    });

		});

    });

})(jQuery);
