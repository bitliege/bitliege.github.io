// =============================================================================

    // APP JS
    // Property of Norex
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================
(function($) {

    $(document).ready(function() {

        jQuery.extend(jQuery.expr[':'], {
            focus: "a == document.activeElement"
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

        // Homepage Calcs ======================================================
        var d = new Date();
        var n = d.getDay();

        if(n == 0) {
            $('.landing .hero-block .card h1').text("Take a break, It's Sunday!");
        }
        if(n == 1) {
            $('.landing .hero-block .card h1').text("Whelp, it's Monday.");
        }
        if(n == 2) {
            $('.landing .hero-block .card h1').text("Have a terrific Tuesday!");
        }
        if(n == 3) {
            $('.landing .hero-block .card h1').text("Happy New Comic Book Day!");
        }
        if(n == 4) {
            $('.landing .hero-block .card h1').text("Throwback Thursday, right?");
        }
        if(n == 5) {
            $('.landing .hero-block .card h1').text("Gotta get down on Friday!");
        }
        if(n == 6) {
            $('.landing .hero-block .card h1').text("Saturday = Quest Day");
        }

        var cardHeight = $('.hero-block .card').outerHeight();
        $('.hero').css('padding-bottom', (cardHeight/2) + 'px');
        $('.main').css('padding-top', (cardHeight/2) + "px");

        $(window).resize(function() {
            var cardHeight = $('.hero-block .card').outerHeight();
            $('.hero').css('padding-bottom', (cardHeight/2) + 'px');
            $('.main').css('padding-top', (cardHeight/2) + "px");
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

        // Intro Labels ========================================================
        $(".hero-block input").focus(function(e) {
            $(this).parent().find("label").addClass("active");
        });

        $(".hero-block input").blur(function(e) {

            if(!$(this).val()) {
                $(this).parent().find("label").removeClass('active');
            }

        });

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

    window.onload = function () {

        // Post Sidebar Handler ================================================
        if (matchMedia('screen and (min-width: 64em)').matches) {

            var heroHeight = $(".post-hero").outerHeight();
            var articleHeight = $('.post-container').outerHeight() + heroHeight;
            var articlePadding =  parseInt($(".copy-container").css("padding-bottom"));

            $(".sidebar.post").css("top", heroHeight + 50 + "px");
            $(".sidebar.post").css("opacity", 1);

            var sidebarPosition = parseInt($(".sidebar.post").css("top"));
            var sidebarHeight = $(".sidebar.post").outerHeight();
            var sidebarDiff = sidebarPosition - heroHeight;
            var sidebarStopHeight = articleHeight - articlePadding - 50 - sidebarHeight;

            $(window).scroll(function() {

                var scrollPosition = $(document).scrollTop();

                if(scrollPosition > heroHeight && scrollPosition < sidebarStopHeight) {
                    $('.sidebar.post').css('position', "fixed");
                    $('.sidebar.post').css('top', sidebarDiff + "px");
                    $('.sidebar.post').css('bottom', "auto");
                }
                else if(scrollPosition > sidebarStopHeight) {
                    $('.sidebar.post').css('position', "absolute");
                    $('.sidebar.post').css('top', "auto");
                    $('.sidebar.post').css('bottom', articlePadding + "px");
                }
                else {
                    $('.sidebar.post').css('position', "absolute");
                    $('.sidebar.post').css('top', sidebarPosition + "px");
                    $('.sidebar.post').css('bottom', "auto");
                }

            });

        }

        // Post Sidebar Timer Handler ==========================================
        if($(".main").hasClass("post")) {

            if (matchMedia("screen and (min-width: 64em)").matches) {

                var postTime = $(".sidebar .length p span").text();
                var postLength = $(".post-container").outerHeight() + $(".post-hero").outerHeight();
                var windowHeight = $(window).height();

                $(window).resize(function() {
                    windowHeight = $(window).height();
                });

                $(window).scroll(function() {
                    var userPosition = $(document).scrollTop();
                    var remainingPost = (userPosition/(postLength - windowHeight/2));
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

    }

})(jQuery);
