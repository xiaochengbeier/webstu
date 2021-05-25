# session

【小城贝尔】

使用会话中间件，加密配置对象现。

保存数据服务件，依赖标识饼干现。


## 使用会话中间件，加密配置对象现。
   var session = require('express-session')
   app.use(session({
        secret: '秘钥任何一个字符串均可',
        name:"session名字"
    }))
## 保存数据服务件，依赖标识饼干现。
   session是一项服务端存储数据的技术但是依赖cookie 
   会像cookie中存储一个标识次session的id
【设置seesion中间件以及给session赋值】
```js
    const session = require("express-session");
    app.use(session({
        secret:"myprivate",
        name:"mysession",
        resave: false,
        saveUninitialized: true,
    }))

     if(name =="admin" && pass=="123"){
        //表示登录成功写入session
         req.session.user = name;
```

【权限查看】
```js
    //校验权限
    if(req.session &&req.session.user){
        //    存在权限
        next();
    }else{
        res.send({
            msg:"权限不足请先登录"
        });
    }
```