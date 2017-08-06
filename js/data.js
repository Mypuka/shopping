/**
 * Created by Administrator on 2016/11/14.
 */

$(function (){
	getData();
	keyWorld();
})
function getData(){
    $.ajax({
        type:'get',
        url:'',
        async: false,
        data: {type:'男装',firstPage:1,endPage:10},
        dataType:'json',
        success:function(json){
        	$.each(json.data,function(){
        		var html+=``
        	})
  
        }
    })
}

/*关键字搜索*/
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
                /*
                $(".search_result td").click(function(){
                    $('.search_1').val($(this).text())
                })
                */
            }else{
                $('.search_result').empty();
            }
        },
        dataType: 'json'
    });
};

/*下滑加载数据*/
function moreData(){ 
    var winH = $(window).height(); //页面可视区域高度 
    var i = 1; //设置当前页数 
    $(window).scroll(function () { 
        var pageH = $(document.body).height(); //页面总高度 
        var scrollT = $(window).scrollTop(); //滚动条top 
        var aa = (pageH-winH-scrollT)/winH;  
        if(aa<0.02){ 
            $.getJSON("",{page:i},function(json){ 
                if(json){ 
                    $(".goods_list ul").empty();
                    var str = ""; 
                    $.each(json,function(index,array){ 
                        str+=`
                            <li class="fl">
                                <div class="goods_img">
                                    <a href="${json.buyUrl}" class="block">
                                        <img src="${json.imgUrl}"/>
                                    </a>
                                </div>
                                <p class="goods_title over">
                                    <a href="${json.buyUrl}" class="block">
                                        ${json.name}
                                    </a>
                                </p>
                                <p class="price">
                                    <span>￥${json.buyPrice}</span>
                                    省 <span>${json.backPrice}</span>
                                </p>
                                <div class="mall_name over">
                                    <img src="../img/tm_icon.png" class="mall_name_icon"/>
                                    <span>${json.shop_name}</span>
                                    <p class=""></p>
                                </div>
                            </li>
                        `
                    	$(".goods_list ul").append(str); 
                    }); 
                    i++; 
                }else{ 
                    $(".noData").show(); 
                    return false; 
                } 
            }); 
        } 
    }); 
}; 











