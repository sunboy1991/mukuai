
var express=require("express");
var app=express();
var http = require('http');
var fs=require("fs");
//存储从文件读取的数据
var gdata =null;
var bannerdata=null;
var menudata=null;
var freeWalkdata=null;
var walkContentdata=null;
fs.readFile('data/nav.json',function(err,data){
	if (err) {
		console.log(err);
	};
gdata=data;


fs.readFile('data/index/banner.json',function(err1,data1){
	if (err1) {
		console.log(err1);
	};
bannerdata=data1;
console.log("11111111");

fs.readFile('data/index/menu.json',function(err2,data2){
	if (err2) {
		console.log(err2);
	};
menudata=data2;

fs.readFile('data/index/freeWalk.json',function(err3,data3){
	if (err3) {
		console.log(err3);
	};
freeWalkdata=data3;
fs.readFile('data/index/cityWalkList.json',function(err4,data4){
	if (err4) {
		console.log(err4);
	};
walkContentdata=data4;
console.log("已经启动")
app.listen(8000);
})
})
})
})
});

//提供web服务功能
app.use(express.static("www"));

	app.get("/*",function(req,res,next){
	res.header("Content-type","application/json")
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();

});



app.get("/znav",function(req,res,next){
	res.header("Content-type","application/json");

	res.send(gdata);

})

app.get("/banner",function(req,res,next){
	res.header("Content-type","application/json");

	res.send(bannerdata);

})


app.get("/menu",function(req,res,next){
	res.header("Content-type","application/json");

	res.send(menudata);

})
app.get("/freeWalk",function(req,res,next){
	res.header("Content-type","application/json");

	res.send(freeWalkdata);

})
app.get("/walkContent",function(req,res,next){
	res.header("Content-type","application/json");

	res.send(walkContentdata);

})
// app.get("/remote",function(req,res,next){


// 	 var cbname=req.query['callback'];

//  	res.send(cbname+'('+bannerdata+')');

// })
app.get('/sitesearch',function(req,res){

    //获取用户传递过来的参数
    var arg = req.query['kw'];
    console.log(arg)
    httpSearch(arg,function(info){
        res.send(JSON.parse(info));
    });
    console.log(req.query['kw']);
});

function httpSearch(kwVal,callback){
    http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=' + kwVal, function(httpRes) {
        var buffers = [];
        httpRes.on('data', function(chunk) {
            buffers.push(chunk);
        });
        httpRes.on('end', function(chunk) {
            var wholeData = Buffer.concat(buffers);
            var dataStr = wholeData.toString('utf8');
            callback(wholeData);
        });
    }).on('error', function(e) {
        console.log(e);
    });
}