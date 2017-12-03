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

            return false;

         });

        // Contact Trigger =====================================================
        $("#contactTrigger").on("click", function(e) {
            e.preventDefault();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val("imjoshdrink@gmail.com").select();
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
            $temp.val("imjoshdrink@gmail.com").select();
            document.execCommand("copy");
            $temp.remove();
            $(this).find(".core__button-tag").addClass("active");
            setTimeout(function() {
                $(".core__button-tag").removeClass("active");
            }, 1400);
        });

    });

})(jQuery);
