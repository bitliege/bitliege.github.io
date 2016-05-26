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
            $('#dateChanger').text("Take a Break, it's Sunday!");
        }
        if(n == 1) {
            $('#dateChanger').text("Whelp, it's Monday.");
        }
        if(n == 2) {
            $('#dateChanger').text("Have a Terrific Tuesday!");
        }
        if(n == 3) {
            $('#dateChanger').text("Happy New Comic Book Day!");
        }
        if(n == 4) {
            $('#dateChanger').text("Throwback Thursday, Right?");
        }
        if(n == 5) {
            $('#dateChanger').text("Gotta Get Down on Friday!");
        }
        if(n == 6) {
            $('#dateChanger').text("Saturday = Quest Day");
        }

        var cardHeight = $('.hero-block .block-card').outerHeight();
        $('.hero').css('padding-bottom', (cardHeight/2) + 'px');
        $('.main').css('padding-top', (cardHeight/2) + "px");

        $(window).resize(function() {
            var cardHeight = $('.hero-block .block-card').outerHeight();
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
        $(".block-card input").focus(function(e) {
            $(this).parent().find("label").addClass("active");
        });

        $(".block-card input").blur(function(e) {

            if(!$(this).val()) {
                $(this).parent().find("label").removeClass('active');
            }

        });

        // Post Filters ========================================================
        $('#writingFilter').keyup(function(e) {

            var input = this.value.toLowerCase()

            $('.main.archive .article-list dd h4').each(function () {
                var text  = $(this).text().toLowerCase();

                if(text.indexOf(input) >= 0) {
                    $(this).parents('.article-list dd').hide();
                    $(this).parents('dd').show();
                }
                else {
                    $(this).parents('.article-list dd').hide();
                }

            });

            if($('.article-list dd.block-summary:visible').length) {
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
            var articleHeight = $('.block-article').outerHeight() + heroHeight;
            var articlePadding =  parseInt($(".copy-container").css("padding-bottom"));
            var metaHeight = $(".post-meta").outerHeight();

            $("#postSidebar").css("top", heroHeight + metaHeight + "px");
            $("#postSidebar").css("opacity", 1);

            var sidebarPosition = parseInt($("#postSidebar").css("top"));
            var sidebarHeight = $("#postSidebar").outerHeight();
            var sidebarDiff = sidebarPosition - heroHeight;
            var sidebarStopHeight = articleHeight - articlePadding - metaHeight - sidebarHeight;

            $(window).scroll(function() {

                var scrollPosition = $(document).scrollTop();

                if(scrollPosition > heroHeight && scrollPosition < sidebarStopHeight) {
                    $('#postSidebar').css('position', "fixed");
                    $('#postSidebar').css('top', sidebarDiff + "px");
                    $('#postSidebar').css('bottom', "auto");
                }
                else if(scrollPosition > sidebarStopHeight) {
                    $('#postSidebar').css('position', "absolute");
                    $('#postSidebar').css('top', "auto");
                    $('#postSidebar').css('bottom', articlePadding + "px");
                }
                else {
                    $('#postSidebar').css('position', "absolute");
                    $('#postSidebar').css('top', sidebarPosition + "px");
                    $('#postSidebar').css('bottom', "auto");
                }

            });

        }

        // Post Sidebar Timer Handler ==========================================
        if($(".main").hasClass("post")) {

            if (matchMedia("screen and (min-width: 64em)").matches) {

                var postTime = $("#postSidebar .length span").text();
                var postLength = $(".block-article").outerHeight() + $(".post-hero").outerHeight();
                var windowHeight = $(window).height();

                $(window).resize(function() {
                    windowHeight = $(window).height();
                });

                $(window).scroll(function() {
                    var userPosition = $(document).scrollTop();
                    var remainingPost = (userPosition/(postLength - windowHeight/2));
                    var timeLeft = Math.ceil((postTime - (postTime*remainingPost)));

                    $("#postSidebar .length span").text(timeLeft);
                    if(timeLeft == 1) {
                        $("#postSidebar .length").text(timeLeft + " Minute Left");
                    }
                    if(timeLeft == 0) {
                        $("#postSidebar .length").text("All Done!");
                    }
                    if(timeLeft > 1) {
                        $("#postSidebar .length").text(timeLeft + " Minutes Left");
                    }

                });

            }

        }

    }

})(jQuery);
