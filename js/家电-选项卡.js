/**
 * Created by Administrator on 2017/12/7.
 */
$('.tab-btns li').on('mouseover',function () {
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
    var $idx=$(this).index();
    $(this).parent().siblings().children().find('ul').eq($idx).show().siblings().hide();
})