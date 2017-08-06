/**
 * Created by Administrator on 2016/11/11.
 */
$(function(){
    //弹框
    $('div.foot').on('click',function(){
        $('#mask').show();
        $('#mask .cut img').on('click',function(){
            $('#mask').hide();
        })
    });

    //复制
    var timer=null;
    function calc(){
        $('#mask').hide();
    };
    $('#copy_btn').click(function(){
        var val=$('#tkl').html();
        console.log(val);
        $(this).hide().siblings().show();
        timer=setTimeout(calc,2000);
    });

})