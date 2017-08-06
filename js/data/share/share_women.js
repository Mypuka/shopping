	$('ul.goods_box').empty();
    for(var i=0;i<women_data.length;i++){
        (function  a(){
               	var json=women_data[i];
                var html=`
					 <li class="">
		                <div class="goods_img">
		                    <a onclick="top.location.href='../detail_html/women/women_${i}.html'" class="block">
		                        <img src="../img/all_img/${json.imgUrl}"/>
		                    </a>
		                </div>
		                <p class="goods_name over">
		                    <a onclick="top.location.href='../detail_html/women/women_${i}.html'" class="block">
		                        ${json.title}
		                    </a>
		                </p>
		                <p class="price">
		                    <span>￥${json.nowPrice}</span>
		                    <s>￥${json.oldPrice}</s>
		                </p>
		                <div class="mall_name over">
		                    <img src="../img/${json.logoUrl}" class="mall_name_icon"/>
		                    <span>${json.name}</span>
		                    <p class=""></p>
		                </div>
		                <div class="data" style="display:none;">
		                    <p class="overTime">${json.overTime}</p>
		                    <p class="tb_url">${json.tbUrl}</p>
		                    <p class="tkl_url">${json.tkl}</p>
		                    <p class="now_price">${json.nowPrice}</p>
		                    <p class="vip_url">${json.vipUrl}</p>
		                </div>
		            </li>
                `   ;                      
                $('ul.goods_box').append(html);    
            }());
    };
    /**************************************************/
    				var haha='';
    				var bb='';
   					$('ul.goods_box li').each(function(){
   						var me=$(this);
		                var a_img=me.find('.goods_img img').attr('src');
		                var a_logo=me.find('.mall_name img').attr('src');
		                var a_old=me.find('p.price span:first-child').html();
		                var a_back=me.find('p.price span:last-child').html();
		                var a_title=me.find('p.goods_name a').html();
		                var a_name=me.find('div.mall_name span').html();
		                var a_overT=me.find('p.overTime').html();
		                var a_tb=me.find('p.tb_url').html();
		                var a_tkl=me.find('p.tkl_url').html();
		                var a_now=me.find('p.now_price').html();
		                var a_vip=me.find('p.vip_url').html();
   						haha+=a_old+',';
   						
   					})
   					bb=haha.split(',');
   					var len=bb.length;
   					console.log(len);
        			// console.log(bb[len-2]);
        			for(var i=0;i<bb.length-1;i++){
        				console.log(bb[i]);
        			}
            
      