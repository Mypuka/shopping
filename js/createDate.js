function creatDate(direct,showMonth){
	var nowTime=new Date();
	var year=nowTime.getFullYear(),month=nowTime.getMonth(),showMonth=showMonth;
	var yue = month+1;
	var ri = nowTime.getDate();
	if ( yue <10) {
		yue = "0" + yue;
	};
	if (ri <10) {
		ri = "0"+ ri;
	};
	$('#dataStr').html(year+"-"+ yue +"-" + ri + "");	
	var dateArr=[],ArrMonth;
	//生成月份和天数;
	for(var m=0;m<showMonth;m++){
		dateArr[m]=[];
		ArrMonth=month+m;
		for(var d=0;d<33;d++){
			var b=new Date();
			b.setFullYear(year,ArrMonth,d);
			if((b.getMonth()-ArrMonth)<=0){
				var Arr={y:b.getFullYear(),m:(b.getMonth()+1),d:b.getDate(),z:b.getDay()};
				dateArr[m].push(Arr);
			}
		};
		//补位
		if(dateArr[m][0].z!=6){
			for(var q=dateArr[m][0].z;q>0;q--){
				var Arr={y:dateArr[m][0].y,m:dateArr[m][0].m,d:dateArr[m][0].d-1,z:q};
				dateArr[m].unshift(Arr);
			}
		}else{
			dateArr[m].shift();
		};
		var len=dateArr[m].length;
		if(dateArr[m][(len-1)].z!=6){
			var i=0;
			for(var q=(dateArr[m][(len-1)].z+1);q<7;q++){
				i++;
				var Arr={y:dateArr[m][(len-1)].y,m:dateArr[m][(len-1)].m+1,d:i,z:q};
				dateArr[m].push(Arr);
			}
		}
	};
	console.log(dateArr);
	
	//生成html部分
	for(var i=0,l=dateArr.length;i<l;i++){
		var tableHtml="",weekHtml="",html="",reback=0;
		tableHtml="<table rel='"+dateArr[i][15].m+"' width='100%' border='0' cellspacing='0' cellpadding='0'>"+
			"<tr class='tt'>"+
			"<th>日</th>"+
			"<th>一</th>"+
			"<th>二</th>"+
			"<th>三</th>"+
			"<th>四</th>"+
			"<th>五</th>"+
			"<th>六</th>"+
			//"<tr class='fullYear'>"+
			//"<th colspan='7'>"+dateArr[i][15].y+"年"+dateArr[i][15].m+"月"+"</th>"
			"</tr>"+
			"</tr>"
		;
		
		for(var t=0,tl=dateArr[i].length;t<tl;t++){
			if((month+1) == dateArr[i][t].m ) {
			html+="<td year='"+dateArr[i][t].y+"' mon='"+dateArr[i][t].m+"' day='"+dateArr[i][t].d+"' id='d_"+dateArr[i][t].y+"-"+dateArr[i][t].m+"-"+dateArr[i][t].d+"'><div>"+dateArr[i][t].d+"</div><div class='jf_yuan'>+2</div></td>"; } else {
				html+="<td><div></div></td>"; 
			}
			if((t+1)%7==0){
				html="<tr rel='"+dateArr[i][15].m+"'>"+html+"</tr>";
				weekHtml+=html;
				html="";
			}
		}
		tableHtml+=weekHtml;
		tableHtml+="</table>";
		$("#dateMobile").append(tableHtml);
	}
	$("#"+direct+" td").each(function(){
		if($(this).attr("mon")==$(this).parent().attr("rel")){
			$(this).addClass("can");
		}
		$(this).click(function(){
			if($(this).attr("class")!=undefined&&$(this).attr("class")!=""){
			$(this).closest("#dateMobile").find("td").removeClass("on");
			$(this).addClass("on");
			}
		});
	});
	
	$("#d_"+nowTime.getFullYear()+"-"+(nowTime.getMonth()+1)+"-"+nowTime.getDate()).trigger("click");
}
creatDate();