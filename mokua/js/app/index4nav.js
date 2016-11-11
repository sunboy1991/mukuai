	define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
	function getNavData() {var x=xhr();
	x.open('get',url.getBaseUrl()+"/znav");
	x.send(null);
	x.onreadystatechange=function(){
		if(x.readyState==4){
			handData(JSON.parse(x.responseText));
		}
	}
	}
	
	
	function handData(data){
			console.log(data)
			  for (var i=0; i<data.length;i++) {
			  	 	var li=document.createElement("li");
			  	 	var a=document.createElement("a");
			 	a.innerHTML=data[i].name;
			 	a.href=data[i].url;
			 	li.appendChild(a);
			 	document.getElementById("nav").appendChild(li);
			 	$('.searchImg,.search').mouseenter(function(){
			 		$('.search').css('width','200px').css('transition','all 1s')	
			 	});
			 	console.log($('.search').val()=='')
			 	$('.search,.searchImg').mouseleave(function(){
			 		if($('.search').val()==''){
			 			$('.search').css('width','0px');	
			 		}
			 			else{
			 		$('*').not($('.search,.searchImg')).click(function(){
			 			
			 		$('.search').css('width','0px');
			 		$('.search').val('')
			 		$('*').not($('.search,.searchImg')).unbind('click')
			 					})
			 			}
			 	})
			 	//结束搜索功能
			 	
			  }
			
			
		};
	
	
	
	
	return getNavData;
})