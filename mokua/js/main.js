requirejs.config({
	baseUrl:'js/lib',
	paths:{
		'app':'../app',
		'jquery':'jquery-3.1.1',
		'myutil':'../app/myutil',
	},
	shim:{
		'myutil':{
		exports:'createXHR',
	}
		
	}
	
});

//加载导航栏
	define(['app/index4nav','app/banner','app/float','app/trainfree','app/search'],function(nav,banner1,menu,trainfree,search){
	nav();
	banner1(handBanerData);
	menu();
	trainfree();
	search();
})

//加载轮播图	

function handBanerData(data1){
	var i=0;
	var img=document.createElement("img");
	document.getElementById("banner").appendChild(img);
	img.src=data1[i].imgUrl;
	var timer=setInterval(function(){
		img.src=data1[i].imgUrl;
		i++;
		if(i>=data1.length)
		i=0;
	},2000)
	
}
