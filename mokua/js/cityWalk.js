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
define(['app/index4nav','app/search','jquery','app/bgWalk','app/walkContent'],function(nav,search,$,bgWalk,walkContent){
	nav();
	search();
	bgWalk();
	walkContent();
})