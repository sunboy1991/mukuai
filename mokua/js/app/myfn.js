//定义一个模块
define({
    baseUrl:"http://localhost",
    port:8000,
    getBaseUrl:function(){
        return this.baseUrl + ":" + this.port;
    }
});