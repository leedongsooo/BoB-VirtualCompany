$(function () {
    $('.main_slide').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        autoplay: true,
    })

    $('.list_slide').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
    })







    $('button').click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');

        var $inner = $this.closest('.inner');
        var $current = $inner.find(' > .tabs > .tab.active');
        var $post = $inner.find(' > .tabs > .tab').eq(index);

        $current.removeClass('active');
        $post.addClass('active');
        // 위의 코드는 탭메뉴 코드입니다.

        $('.slider').slick('setPosition');
        // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
    });


    // 기존 처음의 slick 적용
    $('.slider').slick({
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        // 마우스가 올라가도 슬라이드 넘기기
        pauseOnHover: false,
        pauseOnFocus: false,
    });




})