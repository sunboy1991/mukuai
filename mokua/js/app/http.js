var http = require('http');
//suggest组件
app.get('/sitesearch/:keyword' , function (req , res) {
	var url = req.params.keyword;
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
}


app.get('/sitesearch',function(req,res){

    //获取用户传递过来的参数
    var arg = req.query['kw'];
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