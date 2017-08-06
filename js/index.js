$(function(){
    //收藏效果
    $('ul.goods_box').on('click','.mall_name p',function(){
        $(this).toggleClass('fav')
    })

    /*搜索框获取焦点跳转到搜索页面*/
    $('#search_input').on('focus',function(){
        location.replace("search.html");
    })

    /*独角兽logo*/
    $('#unicorn b').on('click',function(){
        $(this).parent().hide();
        $('#unicorn').css('left','-25px');
    })
    $('#unicorn .img').on('click',function(){
        $(this).siblings().show();
        $('#unicorn').css('left','0');
    })
})

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
    if(h>=600){
          $(myDiv).show();
    }else{
        $(myDiv).hide();
    }
})









