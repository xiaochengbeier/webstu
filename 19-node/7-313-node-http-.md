# node的http模块

【小城贝尔】

封装网络套接字，传输格式协议赐。

请求方法配置字，响应对象回掉赐。

创建服务监听字，请求响应流恩赐。

数据格式要求字，底层封装协议赐。

## 封装网络套接字，传输格式协议赐。
   http模块是对 net模块的封装数据传输遵守http协议
## 请求方法配置字，响应对象回掉赐。
   请求某个连接直接使用request方法即可 请求成功响应的数据可以在
   回调函数拿到
## 创建服务监听字，请求响应流恩赐。
   使用 http.createServer([options][, requestListener]) 创建服务器
   会在回调中注入 request response 这两个对象
## 数据格式要求字，底层封装协议赐。
   对于请求或者是响应的数据都已经遵循http协议
   标准进行了封装
```js
    let http = require("http");
    let reuqest = http.request({
        host:"www.baidu.com",
        port:80
    },resp=>{
        resp.on("data",data=>{
            console.log("响应数据==》",data.toString("utf-8"));
        });
    });

    // post请求发送数据
    // req.write(postData);
    //告知服务器发送完毕
    reuqest.end();

    let server = http.createServer((req,res)=>{
        console.log("request==>",req.headers);
        res.setHeader("content-type","text/html; charset=utf-8");
        res.write(`<h1 style="font-size: 20px;color: red;">你好欢迎连接好</h1>`);
        res.end();
    });
    server.listen(6699);
```