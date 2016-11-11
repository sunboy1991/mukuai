define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
	function getMenuData() {
		var x=xhr();
	x.open('get',url.getBaseUrl()+"/menu");
	x.send(null);
	x.onreadystatechange=function(){
		if(x.readyState==4){
		menu1(JSON.parse(x.responseText));
		}
	}
	};
	//创建浮动菜单
	function menu1(data){
		for(var p in data ){
			console.log(data[p].title)
		var img=$('<img />').attr('src','images/host.png');
		var createP=$('<p></p>');
		createP.html(data[p].title)
		var li =$('<li></li>');
		var createP1=$('<p></p>');
		for ( var r in data[p].mainCity){
			var a=$('<a></a>').html(data[p].mainCity[r]);
			createP1.append(a);
			console.log(data[p].mainCity[r])
		
			
		}
		li.append(img);
		li.append(createP);
		li.append(createP1);
		li.appendTo($("#listul"));
		console.log(p)
		console.log(data[p].moreCity)
		//右侧隐匿div
		function float(){
		var div =$('<div></div>');
		 div.addClass("list21");
		if(p==5){ div.css({'width':'280px'})}else{
			var img=$('<img />').attr('src',data[p].moreCityImg)}	
		for(i=0;i<data[p].moreCity.length;i++){
				var dl=$('<dl></dl>');
				var h1=$('<h1></h1>');
				var dd=$('<dd></dd>');
				
		for(var k in data[p].moreCity[i].items){
		if(data[p].moreCity[i].items[k].length>30){
				var aa=$('<img />').attr('src',data[p].moreCity[i].items[k]).css({
					"width":'80px',
					"height":'80px',
					"float":"left"
				})
				dd.append(aa);
			}
		
			else{var a=$('<a></a>').html(data[p].moreCity[i].items[k])
			dd.append(a)
		
		}}
		for(var j in data[p].moreCity[i]){
				h1.html(data[p].moreCity[i].cityName)
		}
			
			dl.append(h1);	
			dl.append(dd);	
			div.append(dl)
			
			}	
			var dl=$('<dl></dl>');
			dl.css('margin-top','20px')
   	     	
   	      	dl.append(img);
   	    	 div.append(dl);
   	      	console.log(p)
			$('.list1').eq(p).append(div);
			
		}
		
		 float();
		 $('#listul li').mouseenter(function(){
		 	var $this=$(this);
		 	index =$this.index();
		 	 $('#listul li').eq(index).addClass("hover").siblings("#listul li").removeClass('hover');
		
		 	$(".list1").eq(index).addClass("list2").siblings(".list1").removeClass('list2');
		 })
		 	 $('#list').mouseleave(function(){
		 		$(".list1").removeClass('list2');
		 	 $('#listul li').removeClass('hover');
	
		 })
	}
	}

  return  getMenuData;
})