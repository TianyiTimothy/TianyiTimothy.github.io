// jQuery
(function ($) {

    // scrolling
    $('a.js-scroll-trigger').click(function () {
        var target = $(this.hash);
        if (target.length) {
            // set scroll top and animate method to achieve scroll effect
            $("html").animate(
                {
                    scrollTop: target.offset().top,
                },
                700,
                "easeInOutExpo"
            );
            // stop functioning to remove hashtag in url
            // return false;
        }
    });

    // Accessibility: close dropdown menu when click on scroll-trigger items
    $(".js-scroll-trigger").click(function () {
        const screen_width = window.screen.width;
        // if is not desktop
        if (screen_width < 991.5) {
            $(".navbar-collapse").collapse("hide");
        }
    });

    // highlight clicked link
    $("body").scrollspy({
        target: "#sideNav",
    });

    
    // percentage
    $(window).scroll(function () {
        $("#percentage").text(() => {
            s = $(window).scrollTop(),
                d = $(document).height(),
                c = $(window).height();
            percentage = (s / (d - c)) * 100;
            percentage = Math.round(percentage);

            return percentage + "%";
        })
    });

})(jQuery);
