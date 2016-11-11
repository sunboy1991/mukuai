	define(['jquery','js/app/myfn.js','myutil'],function($,url,xhr){
	function getBannerData(f) {var x=xhr();
	x.open('get',url.getBaseUrl()+"/banner");
	x.send(null);
	x.onreadystatechange=function(){
		if(x.readyState==4){
			f(JSON.parse(x.responseText));
		}
	}
	}
	return getBannerData;
})