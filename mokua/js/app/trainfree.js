	define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
	function getfreeWalkData(f) {var x=xhr();
	x.open('get',url.getBaseUrl()+"/freeWalk");
	x.send(null);
	x.onreadystatechange=function(){
		if(x.readyState==4){
			freeWalk(JSON.parse(x.responseText));
			
		}
	}
	}
	function freeWalk(data){
	var div1=$('<div></div>')
	div1.addClass('freetitle');
	$('#free').append(div1);
	var ul=$('<ul></ul>');
	var h1=$('<h1></h1>');
	h1.html("城市游玩");
	var span=$('<span></span>').html("精选全球最优质的机票,酒店,游轮等旅游产品")
	data.forEach(function(elem,index){
	var li=$('<li></li>').addClass('li');
		var a=$('<a></a>');
		a.html(elem.title);
		console.log(index)
		li.append(a);
		ul.append(li);
		console.log(ul);
		
		var content=$("<div></div>").addClass('content');
		if(index==0){
			 content.css('display','block')
		}
		function createDiv(elem,index){
			for( var p in elem.data){
				if(p==0)
				{var content12=$("<div></div>").addClass('content12');
				content12.append($('<img />').attr('src',elem.data[p].imgUrl));
				var floattitle=$("<div></div>").addClass('floattitle');
				content12.append(floattitle);
				var p1=$('<p></p>').html(elem.data[p].title);
				var p2=$('<p></p>').html(elem.data[p].time).addClass('time');
				floattitle.append(p1);
				floattitle.append(p2);
				content.append(content12);
				$('#free').append(content);	
				}
				else{
					var content1=$('<div></div>').addClass('content1');
					if(p==3){ content1.css('margin-left','0px')}
					var img=$('<img />').attr('src',elem.data[p].imgUrl)
					var p1 =$('<p></p>').html(elem.data[p].title);
					var p2 =$('<p></p>').html(elem.data[p].price+"元起").attr('id','price');
					
					content1.append(img);
					content1.append(p1);
					content1.append(p2);
					content.append(content1);
				}
				
			
			}
			
		}
		createDiv(elem,index);
	})
	
	
	div1.append(h1);
	div1.append(span);
	div1.append(ul);
	console.log($('.content'))
	$(".li").mouseenter(function(){
		var $this=$(this);
		 index =$this.index();
		 $('.li').eq(index).addClass('hover1').siblings('.li').removeClass('hover1');
		 $('.content').eq(index).css('display','block').siblings('.content').css('display','none');
	})
	}
	
	return getfreeWalkData;
})