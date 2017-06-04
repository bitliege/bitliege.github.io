// =============================================================================

    // APP JS
    // Authored by Josh Beveridge

// =============================================================================

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

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
        $('a[href*="#"]:not([href="#"])').on('click',function() {

            $root.animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500); // change the duration of your animation in ms

            return false;

         });

        // FFXIV Guide Filters =================================================
        $("#guideFilter").keyup(function(e) {

            var input = this.value.toLowerCase()

            $(".guide-index__list .guide-index__list-item").each(function () {

                var headingText  = $(this).find(".guide-index__list-item-title").text().toLowerCase();

                if (headingText.indexOf(input) >= 0) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });

            if($(".guide-index__list-item:visible").length) {
                $(".guide-index__no-result").hide();
            }
            else {
                $(".guide-index__no-result").show();
            }

            $('.guide-index__search-form').on('keyup keypress', function(e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {
                    e.preventDefault();
                    return false;
                }
            });

            e.preventDefault();
        });

        // FFXIV Guide Accordions ==============================================
        $(".guide__mechanic-accordion-trigger").on("click", function(e) {
            $(this).siblings(".guide__mechanic-content-wrapper").toggleClass("active");
        });

    });

})(jQuery);
