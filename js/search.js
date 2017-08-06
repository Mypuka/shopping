/**
 * Created by Administrator on 2016/11/11.
 */
$(function(){
    search();
    close_history();
})
function search(){//搜索框
    $('#search_input').bind('input propertychange', function() {
        var val=$(this).val();
        if(val!=''){
            $('.cancel_text').hide().siblings().show();
        } else{
            $('.cancel_text').show().siblings().hide();
        }
    })
}
function close_history(){//删除搜索历史记录
    $('#btn_clear').on('click',function(){
        var message=confirm("删除是不可恢复的，你确认要删除吗？");
        if(message==true){
            $('.history_box').empty();
            $(this).remove();
        }
    })
};

$(function(){
    $('a.cancel_text').click(function(event){
        // event.preventDefault();
        window.history.back(1);
    })
});

/*关键字搜索*/
/*
function keyWorld(){
    $.ajax({
        type: 'GET',
        url: '' ,
        async: false,
        data: "txt_search="+escape($('#search_input').val()),
        success:function(data){
            if(data!=''){
                var result;
                $('.search_result').empty();
                result=data.split('');
                for(var i=0;i<result.length-1;i++){
                    layer+="<li class='result'>"+result[i]+"</li>"
                };
                $('.search_result').append(layer);
                $('.search_result').on('click','li',function(){
                    var Html=$(this).html();
                    window.location.href = "goods_order.html?keywords=" + Html;
                })
            }else{
                $('.search_result').empty();
            }
        },
        dataType: 'json'
    });
};
*/
