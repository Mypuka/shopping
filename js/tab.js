/**
 * Created by Administrator on 2016/11/11.
 */
$(function(){
    cut_tab();
    cut_title();
})

function cut_tab(){//�
    $('#menuTab li').on('click',function(){
        $(this).addClass('cur').siblings().removeClass('cur');
    })
}

function cut_title(){//
    $('#title_box div.bd li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings().find('li').removeClass('active');
    })
}

