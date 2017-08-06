
$(function(){
    /*搜索框获取焦点跳转到搜索页面*/
    $('#search_input').on('focus',function(){
        location.replace("search.html");
    });
    //收藏效果
    $('ul.goods_box').on('click','.mall_name p',function(){
        $(this).toggleClass('fav')
    });
    /*控制高度*/
    var h=window.screen.height;//设备高度屏幕
    var head_h=$('#head').height();//页头高度
    var nav_h=$('#menuTab').height();//底部固定菜单栏高度
    var content_h=h-head_h-nav_h;//内容区域高度
    console.log(content_h);
    $('.goods_list').height(content_h);
    $('.goods_box').height(content_h);


    /*各块对应显示*/
    /*
    $('.goods_list a').on('click',function(event){
        event.preventDefault();
        
        $(this).parent().addClass('on').siblings().removeClass('on');
        var scr_rfm=$(this).attr('href');
        var title=$(this).attr('title');
        var id='#'+title;
        // console.log(id);
        //添加iframe并将对应的页面引入
        //var rfm="<iframe src='"+scr_rfm+"' id='"+title+"' scrolling='' frameborder='0'></iframe>";
        //$('div.contentAll').append(rfm);
        //$(id).show().siblings().hide();
        //$(id).height(content_h);
        // $(id).contentWindow.find('#head').css('display','none');
        // var y=($(id).contentWindow || $(id).contentDocument);
    });
    */
    $('.goods_list a').on('click',function(event){
        event.preventDefault();
        var val=$(this).html();
        var title=$(this).attr('title');
        var css='.'+title;
        $('#change_title').html(val);
        $(this).parent().addClass('on').siblings().removeClass('on');
        $(css).show().siblings('div').hide();
    });

    /*引入数据*/
    $('.goods_box div.hidden ol').empty();
    //全部
    for(var i=0;i<data.length;i++){
        var json=data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/all/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/all/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.all ol').append(html);
    };
    //女装
    for(var i=0;i<women_data.length;i++){
        var json=women_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/women/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/women/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.women ol').append(html);
    };
    //男装
    for(var i=0;i<man_data.length;i++){
        var json=man_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/man/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/man/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.man ol').append(html);
    };
    //鞋包配饰
    for(var i=0;i<shoes_data.length;i++){
        var json=shoes_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/shose/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/shose/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.shoes ol').append(html);
    };
    //美妆
    for(var i=0;i<beauty_data.length;i++){
        var json=beauty_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/beauty/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/beauty/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.beauty ol').append(html);
    };
    //家居
    for(var i=0;i<home_data.length;i++){
        var json=home_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/home/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/home/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.home ol').append(html);
    };
    //母婴
    for(var i=0;i<m_baby_data.length;i++){
        var json=m_baby_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/m_baby/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/m_baby/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.m_baby ol').append(html);
    };
    //内衣
    for(var i=0;i<shirt_data.length;i++){
        var json=shirt_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/shirt/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/shirt/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.shirt ol').append(html);
    };
    //户外运动
    for(var i=0;i<sport_data.length;i++){
        var json=sport_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/sport/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/sport/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.sport ol').append(html);
    };
    //数码家电
    for(var i=0;i<appliance_data.length;i++){
        var json=appliance_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/application/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/application/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.appliance ol').append(html);
    };
    //食品
    for(var i=0;i<food_data.length;i++){
        var json=food_data[i];
        var html=`
                <li class="fl">
                    <div class="goods_img">
                        <a href="../detail_html/food/women_${i}.html" class="block">
                            <img src="../img/all_img/${json.imgUrl}"/>
                        </a>
                    </div>
                    <p class="goods_name over">
                        <a href="../detail_html/food/women_${i}.html" class="block">
                            ${json.title}
                        </a>
                    </p>
                    <p class="price">
                        <span>￥${json.oldPrice}</span>
                        省 <span>${json.shengPrice}</span>
                        <s class=""></s>
                    </p>
                </li>
            `;
        $('.goods_box div.food ol').append(html);
    };
})










