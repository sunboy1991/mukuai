	define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
		function bgWalk(){
		var img=$('<img />').attr('src','http://common1.qyerstatic.com/zworld/web/project/headfoot/images/foot-logo.png').css('float','left')
		$('#walkTitle').append(img).css({
			'width':'100%',
			'margin-left':'10%',
			'padding':'20px 0'
		});
		var input =$('<input />').css({
			'width':'40%',
			'height':'35px',
			'border-radius':'20px',
			'margin-left':'20px',
			'border':'1px solid green',
			'outline':'none',
//			'background':'gray'
		})
		var span=$("<span></span>").append($("<a></a>").html("我的订单").css({
			'border-right':'1px solid black',
			'display':'inline-block',
			'padding':'0 10px ',
			'margin-left':'75px'
		})).append($("<a></a>").html("我的收藏").css({
		
			'display':'inline-block',
			'padding':'0 10px ',
			
		}))
		$('#walkTitle').append(input);
		$('#walkTitle').append(span);
		$('#bgWalk').append($('<img />').attr('src','http://common1.qyerstatic.com/zworld/web/project/components/banner1/images/banner1-black-img1.jpg').css('width','100%'));
		$('#contentlist p').css({
			'margin-left':'10%',
			'width':'80%',
			'background':'white',
			'padding':'10px 10px 30px 10px'
			
		});
		$('#contentlist p span').css('font-size','18px');
	$('#walkContent').css({
			'width':'100%',
			'background':'black'
		});
	$('#contentlist a').css('margin-left','15px').css('font-size','15px');
		}
		
		
			return bgWalk;
	}

	
	)