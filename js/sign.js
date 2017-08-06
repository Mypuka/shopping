/**
 * Created by Administrator on 2016/11/24.
 */
$(function(){
    no();
});
(function slider(){
    TouchSlide({//轮播图
        slideCell:"#slideBox",
        titCell:".hd ul",
        mainCell:".bd ul",
        effect:"leftLoop",
        autoPage:true,
        autoPlay:true
    });
}());

function no(){
    $('li.yes').on('click',function(){
        $(this).toggleClass('no');
    })
};