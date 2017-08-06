	$('ul.goods_box').empty();
    for(var i=0;i<man_data.length;i++){
        (function  a(){
               	var json=man_data[i];
                var html=`
					 <li class="fl">
		                <div class="goods_img">
		                    <a onclick="top.location.href='../detail_html/man/women_${i}.html'" class="block">
		                        <img src="../img/all_img/${json.imgUrl}"/>
		                    </a>
		                </div>
		                <p class="goods_name over">
		                    <a onclick="top.location.href='../detail_html/man/women_${i}.html'" class="block">
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
   
        
            
            		$('ol.goods_box').on('click','li',function(){

	            		var me=$(this);
		                var a_img=me.find('.goods_img img').attr('src');
		                var a_logo=me.find('.mall_name img').attr('src');
		                var a_old=me.find('p.price  .old_price').html();
		                var a_back=me.find('p.price .s_price').html();
		                var a_title=me.find('p.goods_name a').html();
		                var a_name=me.find('div.mall_name span').html();
		                var a_overT=me.find('p.overTime').html();
		                var a_tb=me.find('p.tb_url').html();
		                var a_tkl=me.find('p.tkl_url').html();
		                var a_now=me.find('p.now_price').html();
		                var a_vip=me.find('p.vip_url').html();
		                
		               	console.log(a_img);
		               	console.log(a_name);
		               	console.log(a_old);
		       		});
            	
   