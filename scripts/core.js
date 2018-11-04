// =============================================================================

    // JOSHDRINK: HOME
    // CORE SCRIPTS

// =============================================================================
(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Smooth Scrolling ====================================================
        $('a[href*="#"]:not([href="#"])').on('click',function() {

            $root.animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500); // change the duration of your animation in ms

            $('nav').fadeIn();

            return false;

        });

        // Hide Menu on Scroll =================================================
        var lastYPos = 0,
            yPos = 0,
            yPosDelta = 5,
            nav = $('nav'),
            navHeight = nav.outerHeight(),

        navDisplay = function() {

            yPos = $(window).scrollTop();

            if(Math.abs(lastYPos - yPos) >= yPosDelta) {
                if (yPos > lastYPos && yPos > navHeight){
                    nav.fadeOut();
                } else {
                    nav.fadeIn();
                }
                lastYPos = yPos;
            }

            // var aboutOffset = Math.round($("#about").offset().top);
            //
            // if (yPos == aboutOffset) {
            //     nav.fadeIn();
            // }
            //
            // var practiceOffset = Math.round($("#practice").offset().top);
            //
            // if (yPos == practiceOffset) {
            //     nav.fadeIn();
            // }

        };

        $(window).scroll(function(e){
            navDisplay();
        });

        // Contact Trigger =====================================================
        $("#contactTrigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".nav__item-tag").addClass("active");
            setTimeout(function() {
                $(".nav__item-tag").removeClass("active");
            }, 1400);
        });

        // CTA Trigger =========================================================
        $("#ctaTrigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".core__button-tag").addClass("active");
            setTimeout(function() {
                $(".core__button-tag").removeClass("active");
            }, 1400);
        });

        // About Alert Contact Trigger =========================================
        $("#aboutAlertTrigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".about__alert-contact-tag").addClass("active");
            setTimeout(function() {
                $(".about__alert-contact-tag").removeClass("active");
            }, 1400);
        });

        // Services 01 Contact Trigger =========================================
        $("#services01Trigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".services__01-contact-tag").addClass("active");
            setTimeout(function() {
                $(".services__01-contact-tag").removeClass("active");
            }, 1400);
        });

        // Services 02 Contact Trigger =========================================
        $("#services02Trigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".services__02-contact-tag").addClass("active");
            setTimeout(function() {
                $(".services__02-contact-tag").removeClass("active");
            }, 1400);
        });

        // Services 03 Contact Trigger =========================================
        $("#services03Trigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".services__03-contact-tag").addClass("active");
            setTimeout(function() {
                $(".services__03-contact-tag").removeClass("active");
            }, 1400);
        });

        // Services 04 Contact Trigger =========================================
        $("#services04Trigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("joshua.w.beveridge@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".services__04-contact-tag").addClass("active");
            setTimeout(function() {
                $(".services__04-contact-tag").removeClass("active");
            }, 1400);
        });

        // Accordion Triggers ==================================================
        $(".services__accordion-trigger").on("click", function(e) {
            e.preventDefault();
            var parent = $(this).parent(".services__accordion");
            if(parent.hasClass("active")) {
                parent.removeClass("active");
            }
            else {
                parent.addClass("active");
            }
        });

        $(".services__skill-accordion-trigger").on("click", function(e) {
            e.preventDefault();
            var parent = $(this).parent(".services__skill-accordion");
            if(parent.hasClass("active")) {
                parent.removeClass("active");
            }
            else {
                parent.addClass("active");
            }
        });

        $(window).on("load", function(e) {
            $(".services__accordion").removeClass("active");
            $(".services__skill-accordion").removeClass("active");
        });

        // Publications ========================================================
        $(".publications__button").on("click", function(e) {
            if ($(this).hasClass("disabled")) {
                // Nothing
            }
            else {
                e.preventDefault();
                $(".publications__item").removeClass("hidden");
                $(".publications__button").addClass("disabled");
            }
        });

        $(window).on("load", function(e) {
            $(".publications__item:nth-child(n+5)").addClass("hidden");
            $(".publications__button").removeClass("disabled");
        });

    });

})(jQuery);
