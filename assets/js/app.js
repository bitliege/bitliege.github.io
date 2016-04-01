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

        // Sidebar Height Handler ==============================================
        // var screenHeight = $(window).height();
        // var sidebarTopHeight = $("section.main").css("margin-top").replace("px", "");
        // var sidebarTitleHeight = $(".sidebar >h3").outerHeight();
        // var sidebarTitleMargin = $(".sidebar >h3").css("margin-top").replace("px", "");
        //
        // if (matchMedia("screen and (min-width: 64em)").matches) {
        //     $(".sidebar >dl").css("height", screenHeight - sidebarTopHeight - sidebarTitleHeight - (sidebarTitleMargin*2) - sidebarTopHeight - sidebarTitleMargin + "px");
        // }
        //
        // $( window ).resize(function() {
        //
        //     var screenHeight = $(window).height();
        //     var sidebarTopHeight = $("section.main").css("margin-top").replace("px", "");
        //     var sidebarTitleHeight = $(".sidebar >h3").outerHeight();
        //     var sidebarTitleMargin = $(".sidebar >h3").css("margin-top").replace("px", "");
        //
        //     if (matchMedia("screen and (min-width: 64em)").matches) {
        //         $(".sidebar >dl").css("height", screenHeight - sidebarTopHeight - sidebarTitleHeight - (sidebarTitleMargin*2) - sidebarTopHeight - sidebarTitleMargin + "px");
        //     }
        //
        // });

        // Post Sidebar Timer Handler ==========================================
        if($(".main").hasClass("post")) {

            if (matchMedia("screen and (min-width: 64em)").matches) {

                var postTime = $(".sidebar .length p span").text();
                var postLength = $(document).height();
                var windowHeight = $(window).height();

                $(window).resize(function() {
                    windowHeight = $(window).height();
                });

                $(window).scroll(function() {
                    var userPosition = $(document).scrollTop();
                    var remainingPost = (userPosition/(postLength - windowHeight));
                    var timeLeft = Math.ceil((postTime - (postTime*remainingPost)));

                    $(".sidebar .length p span").text(timeLeft);
                    if(timeLeft == 1) {
                        $(".sidebar .length p").text(timeLeft + " Minute Left");
                    }
                    if(timeLeft == 0) {
                        $(".sidebar .length p").text("All Done!");
                    }
                    if(timeLeft > 1) {
                        $(".sidebar .length p").text(timeLeft + " Minutes Left");
                    }

                });

            }

        }

        // Post Filters ========================================================
        $('#writingFilter').keyup(function(e) {

            var input = this.value.toLowerCase()

            $('.main.archive .article-list dd h3').each(function () {
                var text  = $(this).text().toLowerCase();

                if(text.indexOf(input) >= 0) {
                    $(this).parents('.article-list dd').hide();
                    $(this).parents('dd').show();
                }
                else {
                    $(this).parents('.article-list dd').hide();
                }

            });

            if($('.article-list dd.summary:visible').length) {
                $('.no-result').hide();
            }
            else {
                $('.no-result').show();
            }

            e.preventDefault();

        });

    });

})(jQuery);
