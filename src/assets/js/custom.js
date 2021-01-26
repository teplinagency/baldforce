$(document).ready(function () {

    var swiper = new Swiper('.hero__slider', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    var swiper = new Swiper('.product--slider', {
        navigation: {
            nextEl: '.product__next',
            prevEl: '.product__prev',
        },
    });

    var swiper = new Swiper('.ingredients--slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.ingredients__next',
            prevEl: '.ingredients__prev',
        },
        breakpoints: {
            1100: {
                slidesPerView: 3,
            },
        }
    });
    var swiper = new Swiper('.slider-slogan__container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        speed: 600,

    });

    $('.header__burger').click(function () {
        $(this).toggleClass('is-open');
        $('body').toggleClass('is-open-menu');
        return false;
    });


    $('.navigation__items a').hover(function () {
        $(this).toggleClass('is-active');
        $('.navigation__items a').toggleClass('is-disable');
        return false;
    });

    $('.custom-select select').select2({
        minimumResultsForSearch: -1
    });

    $('.header__languages select').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: "drop-lang"
    });


    // fields

    $('.form-input, .form-textarea').focus(function(){
        $(this).parents('.form-group').addClass('focused');
    });

    $('.form-input, .form-textarea').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })


    // end fields


    $(".js-anchor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });


    $('.is-login').click(function () {
        $('.popup--login, .overlay').fadeIn(400);
        $('.header__burger').removeClass('is-open');
        $('body').toggleClass('is-open-menu');
        return false;
    });

    $('.is-recovery').click(function () {
        $('.popup--login').fadeOut(100);
        $('.popup--recovery').fadeIn(400);
        return false;
    });

    $('.is-recovery-step-two').click(function () {
        $('.popup--recovery').fadeOut(100);
        $('.popup--recovery2').fadeIn(400);
        return false;
    });

    $('.popup__close, .overlay').click(function () {
        $('.popup, .overlay').fadeOut(400);
        return false;
    });

    $('.profile__tabs-btn').click(function () {
        var openEl = $('.' + $(this).data('open'));

        $(openEl).siblings().removeClass('is-open');
        $(this).siblings().removeClass('is-open');
        $(this).addClass('is-open');
        $(openEl).addClass('is-open');

    });

    $('.button-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.button-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // accordion
    (function () {
        var initAccordion = function (itemsClass, headerClass, bodyClass) {
            var $items = $(itemsClass);

            $items.find(headerClass).on('click', function () {
                $item = $(this).parent();
                $items.not($item).removeClass('is-open');
                $items.not($item).find(headerClass).removeClass('is-open');
                $items.not($item).find(bodyClass).slideUp(250);


                if ($(this).hasClass('is-open')) {
                    $item.removeClass('is-open');
                    $(this).removeClass('is-open');
                    $(this).siblings(bodyClass).slideUp(250);

                } else {
                    $item.addClass('is-open');
                    $(this).addClass('is-open');
                    $(this).siblings(bodyClass).slideDown(250);

                }
            });
        };

        // suppliers
        initAccordion('.faq__inner', '.faq__inner-header', '.faq__inner-body');


    })($);

});
