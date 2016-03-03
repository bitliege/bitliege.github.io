// =============================================================================

    // APP JS
    // Property of Norex
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================
(function($) {

    $(document).ready(function() {

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

        // Mobile Navigation Handler ===========================================
        $('nav.mobile .open').on('click', function(e) {
            var navListHeight = $('.nav-list').outerHeight();
            $('nav.mobile .wrapper').css('max-height', navListHeight + 'px');
        });

        $('nav.mobile .close').on('click', function(e) {
            $('nav.mobile .wrapper').css('max-height', 0);
            e.preventDefault();
        });

        // Desktop Navigation Handler ==========================================
		var navHeight = $('header').outerHeight();

        if (matchMedia('screen and (max-width: 1023px)').matches) {

            $('.latest-posts').css('padding-bottom', navHeight + 'px');

        }

        if (matchMedia('screen and (min-width: 1024px)').matches) {

            // $('.content').css('margin-top', navHeight + 'px');

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

        }

        // Latest Post Equalizer ===============================================
        var postHeight = '';
        $('.latest-posts .post').each(function(e) {
            var thisHeight = $(this).outerHeight();
            if (matchMedia('screen and (min-width: 1024px)').matches) {
                if(thisHeight > postHeight) {
                    postHeight = thisHeight;
                }
            }
        });
        $('.latest-posts .post').css('height', postHeight + 'px');

        // Post Filters ========================================================
        $('#writingFilter').keyup(function(e) {

            var input = this.value.toLowerCase()

            $('.content.writing .article-list dd h3').each(function () {
                var text  = $(this).text().toLowerCase();

                if(text.indexOf(input) >= 0) {
                    $(this).parents('.article-list dd').hide();
                    $(this).parents('dd').show();
                }
                else {
                    $(this).parents('.article-list dd').hide();
                }

            });

            e.preventDefault();

        });

    });

})(jQuery);
