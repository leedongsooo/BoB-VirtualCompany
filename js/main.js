$(function() {
    $('.main_slide').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        autoplay: true,
    });

    $('.list_slide').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('button').click(function() {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');

        var $inner = $this.closest('.inner');
        var $current = $inner.find(' > .tabs > .tab.active');
        var $post = $inner.find(' > .tabs > .tab').eq(index);

        $current.removeClass('active');
        $post.addClass('active');

        $('.slider').slick('setPosition');
    });

    $('.slider').slick({
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(document).ready(function() {
        // Load the default content
        $("#main-content").load("./main.html");
        history.replaceState({page: 'main'}, '', 'index.html');
    
        // Handle menu link clicks
        $(".gnb a").click(function(e) {
            e.preventDefault();
            var page = $(this).attr("href").replace('./partials/', '');
            $("#main-content").load(`./partials/${page}`);
            history.pushState({page: page}, '', page);
        });

        // Handle browser navigation (back/forward buttons)
        window.onpopstate = function(event) {
            if (event.state && event.state.page) {
                var page = event.state.page;
                if (page === 'main') {
                    $("#main-content").load('./main.html');
                } else {
                    $("#main-content").load(`./partials/${page}`);
                }
            }
        };
    });
});
