/**
 * Created by Administrator on 2016/11/22.
 */
(function fav(){//收藏效果
    $('.mall_name p').on('click',function(){
        $(this).toggleClass('fav')
    })
}())
//控制右侧固定小菜单
function fixed(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}
fixed(window,'scroll',function(){//控制右侧固定小菜单
    var h = document.documentElement.scrollTop || document.body.scrollTop;
    var myDiv = document.getElementById("to_top");
    if(h>=800){
        myDiv.style.display='block';
    }else{
        myDiv.style.display='none';
    }
})
/*搜索框获取焦点跳转到搜索页面*/
$(function search(){
    $('#search_input').on('focus',function(){
        location.replace("search.html");
    })
})
/*独角兽logo*/
$(function unicorn(){
    $('#unicorn b').on('click',function(){
        $(this).parent().hide();
        $('#unicorn').css('left','-25px');
    })
    $('#unicorn .img').on('click',function(){
        $(this).siblings().show().parent().css('left','-5px');
    })
})