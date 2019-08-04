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
    $('.serve-item-list-detail-lg').addClass('show').removeClass('hide')
    $('.serve-item-list-detail-lg').addClass('hide').removeClass('show')

    if ($(window).width() > 992) {
        $('.other-list-item').show()
    }
    if ($(window).width() > 768) {

        $('.nav-btn').children().addClass('hide').removeClass('show')
        $('.head-nav').addClass('show').removeClass('hide')
    } else {
        navHide()
        $('.other-list-item').hide()

        $('.serve-item-list-detail-lg').addClass('show').removeClass('hide')
        $('.serve-item-list-detail-sm').addClass('hide').removeClass('show')
        // 导航切换
        $('.head-nav').on('click', '.kbb-nav-li', function () {
            navHide()
        })
    }
    $('.swiper-container').css({
        width: '100%',
        height: '100%'
    })


    // 导航栏下拉
    $('.kbb-nav-li').each(function () {
        $(this).children('.item-list-detail').hide();
    })
    // 导航点击事件
    var detailListA = $('.item-list-detail').siblings('a');
    var navLi = $('.kbb-nav-li');
    $('.kbb-nav-li').each(function () {
        if ($(window).width() > 768) {
            $(this).children('.item-list-detail').hide();
            $(this).mouseenter(function () {
                $(this).children('.item-list-detail').hide();
                $(this).children('.item-list-detail').show();
            })


            $(this).mouseleave(function () {
                $(this).children('.item-list-detail').hide();
            })
            $(this).mouseleave(function () {
                $(this).children('.item-list-detail').hide();
            })
        } else {
            $(this).children('.item-list-detail').show();
        }
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



// detailListA.each(function() {
//     $(this).mouseenter(function(){
//         $(this).parents('.kbb-nav-li').siblings('.kbb-nav-li').children('.item-list-detail').hide();
//         $(this).siblings('.item-list-detail').show();
//     })
//     $(this).mouseout(function(){
//         console.log(1)
//         $(this).parents('.kbb-nav-li').siblings('.kbb-nav-li').children('.item-list-detail').hide();
//         $(this).siblings('.item-list-detail').hide();
//     })
// })
// var detailListDetail = $('.item-list-detail');

// console.log(detailListA)
// for(var i in detailListA) {

// }