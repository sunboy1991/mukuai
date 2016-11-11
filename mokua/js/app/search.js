	define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
	function getBaiData() {
		$(function(){
			
			$(".search").keyup(function(){
				var kw=$('.search').val();
				console.log(url);
				var url2=url.getBaseUrl()+"/sitesearch?kw="+kw;
//				var url1="http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword="+kw;
			querySearch(url2);
			});
			
		});
	function querySearch(url){
		
		$.ajax({
			type:"get",
			async:true,
			url:url,
			dataType:"json",
			jsonp:"cb",
//			jsonpCallback:"callback",
			success:function(data1){
			
				var arr=data1.data.list
					console.log(arr)
				var div=$("<div></div>");
				div.css({
					'width':'200px',
					
					'background':'white',
					'position':'absolute',
					'margin-left':'15px',
					'top':'25px'
				});
				$('*').not('.search').click(function(){
					div.css('display','none')
				})
				$('#righttitle').append(div);
				arr.forEach(function(elem,index){
					 var p=$("<p></p>").css('font-size','16px').css('height','25px');
					 if(elem.type!=''){
					 	var img=$('<img />').attr('src',elem.src)
					 	p.append(img)
					 }
					 var a=$("<a></a>").html(elem.word).attr('href',elem.url).css('color','black').css('display','inline-block')
					 p.append(a);
					 div.append(p)
				})
			},
			error:function(){
				console.log("错了")
			}
		})
	}

	}
	return getBaiData;
})