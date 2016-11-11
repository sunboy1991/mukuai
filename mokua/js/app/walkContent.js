define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
	function walkContent(){
			$.ajax({
			type:"get",
			async:true,
			url:url.getBaseUrl()+"/walkContent",
			dataType:"json",
			jsonp:"cb",
//			jsonpCallback:"callback",
			success:function(data1){
			
				 find(data1)
			}
			})
		
	}
	
//		<div id="zhuyao">
//		<img src="images/zhuyao.jpg"/>
//		<div id="zhuyao1">
//			<p><span class="localtion">京东</span><span class='shop'><a href="">12324</a>次浏览<a href="">12323</a>件已售</span></p>
//			<p id="jieshao">sakjdksladksljdskladhdsfsaffffffjklsajdklsajdlkajdlkadjskl</p>
//			<p class="introduce"> sakjsakljdlksjfdkljsa</p>
//			<p class="introduce"> sakjsakljdlksjfdkljsa</p>
//			<p class="introduce"> sakjsakljdlksjfdkljsa<span class='price'><a  class='oldprice'>12324</a>元<a class='newprice'>12323</a>元起</span></p>
//			<p id="yuding"> <span>立即预定</span></p>
//		</div>
//	</div>
//	
	
	function find(data){
			console.log(data);
		data.forEach(function(elem,index){
		  var div=$('<div></div>').attr('id','zhuyao').append($('<img />').attr('src',elem.imgurl)).css('margin-top','20px');
		 
		  var span=$("<span></span>").addClass('localtion').html(elem.address);
			var span1=$("<span></span>").addClass('shop');
			var a1=$('<a></a>').html(elem.browseCount+"次浏览");
			var a2=$('<a></a>').html(elem.soldCount+"件已售");
			span1.append(a1);
			span1.append(a2);
			var p=$('<p></p>').append(span);
			p.append(span1)
		  var div1=$('<div></div>').attr('id','zhuyao1').append(p);
		var p2=$('<p></p>').html(elem.title).attr('id','jieshao');
		div1.append(p2);
		for( var p in elem.introduce){
			var p4=$('<p></p>').html(elem.introduce[p]).addClass('introduce');
			div1.append(p4);
		};
		var p1=$('<p></p>').html($('<span></span>').html("立即预定")).attr('id','yuding');
			div1.append(p1);
			
		   div.append(div1);
		    $('#walkContent').append(div);
		})
			
			
	}
	
	return walkContent;
})