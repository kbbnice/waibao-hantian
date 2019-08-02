var swiper = new Swiper('.head-swiper', {
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',

    },
});

// 按钮切换
function navBtnUpShow() {
    $('.nav-btn').children('.nav-up').addClass('show').removeClass('hide')
    $('.nav-btn').children('.nav-down').addClass('hide').removeClass('show')
}

function navBtnDownShow() {
    $('.nav-btn').children('.nav-down').addClass('show').removeClass('hide')
    $('.nav-btn').children('.nav-up').addClass('hide').removeClass('show')
}

// 显示隐藏导航
function navHide() {
    $('.head-nav').addClass('hide').removeClass('show')
    navBtnDownShow()

}

function navShow() {
    $('.head-nav').addClass('show').removeClass('hide')
    navBtnUpShow()
}

navHide()
// 自适应屏幕宽高
function resetSets() {
    // 1200 / 800
    var num = 800 / 1800
    $('.head').height($(window).width() * num + 30)
    // $('.swiper-container').height($(window).width() * num)
    // $('.swiper-container').height($(window).width() * num)


    if ($(window).width() > 992) {
        $('.other-list-item').show()
    }
    if ($(window).width() > 768) {

        $('.nav-btn').children().addClass('hide').removeClass('show')
        $('.head-nav').addClass('show').removeClass('hide')
    } else {
        navHide()
        $('.other-list-item').hide()

        // 导航切换
        $('.head-nav').on('click', '.kbb-nav-li', function () {
            navHide()
        })
    }
    $('.swiper-container').css({
        width: '100%',
        height: '100%'
    })
}
resetSets()
$(window).resize(function () {
    resetSets()
})

// 切换导航
$('.nav-up').click(function () {
    navHide()
})
$('.nav-down').click(function () {
    navShow()
})

// 导航点击事件