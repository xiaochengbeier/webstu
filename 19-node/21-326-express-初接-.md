#  express初接

【小城贝尔】

监听端口回掉值，创建服务网络识。

请求方法路径值，增删查改标准识。

请求响应封装值，查询参数头相识。

响应发送数据值，数据格式杰森识。

设置状态转发值，位置路径完结识。

简单封装重定值，状态号码路径识。

## 监听端口回掉值，创建服务网络识。
   导入 express 
   var express = require('express')
   var app = express()
   app.listen(3000,()=>{
       console.log("----");
   })
   实际上是和如下操作一样
   var express = require('express')
    var https = require('https')
    var http = require('http')
    var app = express()

    http.createServer(app).listen(80)
## 请求方法路径值，增删查改标准识。
    当我们外部请求的时候一般会遵守 rest规则
    对于同一个请求如路径 
    /student
    app.post("/student");    表示添加学生
    app.delete("/stuent/:id"); 表示删除学生
    app.put("/student/:id");  表示修改学生
    app.get("/student/:id")   表示是要查询学生
## 请求响应封装值，查询参数头相识。
    当一个请求请求到响应的资源路径的时候
    如：
    app.get("/student/get",(request,response)=>{

    });
    会将请求数据封装到 request对象
    响应对象封装到     response中 
    我们直接使用即可
## 响应发送数据值，数据格式杰森识。
    使用response发送数据
    response.send(data);
    如果发送的数据 是一个 字符串那么自动将响应数据格式设置为 html
    如果发送的是 数据对象 那么会响应数据格式设置为 json
## 设置状态转发值，位置路径完结识。
    设置重定向
    301 表示零时重定向
    302 永久重定向
    response.status(301).header("location","http://www.baidu.com").end();
    end 方法表示响应数据结束
## 简单封装重定值，状态号码路径识。
    response.redirect(code,path); 只是对上边操作的简化
```js
    let http = require("http");
    let express = require("express");
    //创建监听的第一种方式
    let app = express();
    app.get("/student/:id",(req,res)=>{
        let path = req.path;
        console.log(path,"----path---");
    })
    let server = http.createServer(app);
    server.listen(8899,()=>{
        console.log("connected ....");
    });

    //常用的创建方式
    let app = express();
    app.get("/student/:id",(req,res)=>{
        //获得请求路径
        let path = req.path;
        //获得请求参数
        let param = req.params;
        //获得请求拼接的数据
        let query =  req.query;
        console.log("path--->",path);
        console.log( param);
        console.log(query);
        //响应字符串自动设置 Content-Type: text/html; charset=utf-8
        res.send("<h1 style='color:red'>我的响应</h1>");
        //响应数据自动设置  Content-Type: application/json; charset=utf-8
        res.send({path,param,query});

        //重定向
        res.status(301).header("location","https://www.baidu.com").end();
        // 封装简写
        res.redirect(301,"https://www.taobao.com");
    });
    app.listen(8868);
```