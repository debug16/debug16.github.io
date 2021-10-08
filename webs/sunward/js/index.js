$(() => {

    const topBar = $('.topBar');
    const pageHeader = $('.pageHeader');
    const headerBox = $('.headerBox');
    const logo = $('.logo img');
    $('.topBar .top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        topBar.hide();
    })

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();
        if (scroll >= 100) {
            topBar.stop();
            topBar.fadeIn(100);
            pageHeader.addClass('bg');
            headerBox.addClass('bg');
            logo.attr('src', 'https://cdn.jsdelivr.net/gh/debug16/image-hosting@master/sunward/logo_hover.1gel3zdzc8tc.png')
        } else {
            topBar.stop();
            topBar.fadeOut(300);
            pageHeader.removeClass('bg');
            headerBox.removeClass('bg');
            logo.attr('src', 'https://cdn.jsdelivr.net/gh/debug16/image-hosting@master/sunward/logo_new_04.53m3np03i740.png')
        }
    })
})