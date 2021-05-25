# express中间件

【小城贝尔】

处理请求中间件，参数后续传递链。

如不传递阻挡件，一直持续到空链。

响应操作一级件，后续执行断回链。

发生错误抛快件，底层下级参数链。

捕捉错误参数件，响应状态五百链。

公有操作使用件，不与行为请求链。

常用静态中间件，公共文件首页链。

封装请求类型件，资源定位编码链。

还有内容杰森件，同样中间处理链。

## 处理请求中间件，参数后续传递链。
   每个监听请求的回调函数就是一个中间件
   app.get("/student/id",(request,response,next)=>{
       next() ;即调用下一个中间件执行
   })
## 如不传递阻挡件，一直持续到空链。
   如果说一直调用 next 但是没有使用 response响应数据的话
   那么到最后就是自动响应 404
## 响应操作一级件，后续执行断回链。
   如果在中间件传递执行的过程中有一个级别响应了数据那么后续响应
   就无效并且会报错
## 发生错误抛快件，底层下级参数链。
   如果说当中间件发生了错误那么实际上相当于
   在next(new Error("xxxx"));
## 捕捉错误参数件，响应状态五百链。
   针对这个特性我们可以定义一个中间件专门用于捕获错误
   app.use((error,response,request,next)=>{
       if(error){//表示有错误那么就不往后执行了
            response.states(500).send("你好我不好，我会马上好");
       }else{
           next();
       }
   })
## 公有操作使用件，不与行为请求链。
    use 方法和请求行为无关只要是请求都会从该方法路过
## 常用静态中间件，公共文件首页链。
    常用的中间件官方封装好的
    express.static(【baseUrl可以没有】,静态资源路径,【{index:指定首页文件}】);
    app.use(static);
    静态资源服务器如果请求的是静态资源那么直接使用流响应静态资源文件
## 封装请求类型件，资源定位编码链。
    如果请求的类型 content-type:x-www-form-urlencoded 
    那么参数会放到请求体中 这个时候可以使用
    express.urlencoded({extend:true});
    extend:true 表示数据是通过 querystring 这个库解析数据
    中间件会将数据封装成对象放到
    request.body 中
## 还有内容杰森件，同样中间处理链。
    如果  如果请求的类型 content-type: application/json
    可以使用 express.json() 中间件将数据封装到header.body中
```js
    let express = require("express");
    let app = express();
    let path = require("path").resolve(__dirname,"./public");
    console.log(path);
    app.use(express.static(path));
    //当请求content-type:x-www-form-urlencoded 
    app.use(express.urlencoded({extended:true}));
    //当请求 content-type: application/json
    app.use(express.json());
    //获得 请求体
    app.get("/student",(req,res,next)=>{
        let reqBody = req.body;
        console.log("body",reqBody);
        next();
    });
    app.get("/student",(req,res,next)=>{
        console.log("stu1");
        next();
    });
    app.get("/student",(req,res,next)=>{
        console.log("stu2");
        res.send("我是stu2 我响应了后边的响应会报错");
        // throw new Error("i am a error ....");
        next();
    });
    app.get("/student",(req,res,next)=>{
        console.log("stu3");
        //报错信息
        // Cannot set headers after they are sent to the client
        // res.send("我是stu3 听stu2说我响应了会报错 我不信我试试----");
        next();
    });
    app.use((error,req,res,next)=>{
        if(error){//如果发生错误
        res.status(500).send("<h1 style='color'>我会马上好!</h1>");
        }else{
            next();
        }
    })
    app.listen(9999);
```


    【有时候我们客户端是vue或者是react单页面引用】

    【但是如果说使用的路由是history模式就会导致】

    【请求服务器但是实际上并没有对于那个的资源所以就会报错404】

    【可以使用 connect-history-api-fallback 解决】
```js
  var history = require('connect-history-api-fallback');
  var express = require('express');
  var app = express();
   app.use(history());
```