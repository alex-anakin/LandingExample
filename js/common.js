$(document).ready(function() {
    /* === Chrome Smooth Scroll ======================*/
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {/* Do nothing */}

    $(function () {
        var currentHash = "#home";
        $(document).scroll(function () {
            $('.page-scroll').each(function () {
                var top = window.pageYOffset;
                var distance = top - $(this).offset().top;
                var hash = $(this).attr('href');

                if (distance < 30 && distance > -30 && currentHash != hash) {
                    alert(hash);
                    currentHash = hash;
                    /*history.pushState(null, null, currentHash);*/
                }
            });
        });
    });

});
