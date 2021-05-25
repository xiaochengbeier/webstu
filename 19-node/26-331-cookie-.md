# cookie

【小城贝尔】

键值对应走路径，所属域名时间定。

年龄过期有捷径，销毁设置时间定。

加密协议安全径，协议仅限查看定。

封装处理中间径，登录写入权限定。

兼容客户多路径，授权响应头中定。

权限判断配路径，是否通过传递定。


## 键值对应走路径，所属域名时间定。
   通过服务器向浏览器存储cookie 的基本结构
## 年龄过期有捷径，销毁设置时间定。
## 加密协议安全径，协议仅限查看定。
   key=value 存储的数据
   expire 过期时间
   max-age 最大存活时间
   path 表示存储的路径
   domain 所属于的域
   secure 安全 如果是true那么只有在 https协议下才会携带
   httponly 在浏览器端不能通过 js获得cookie的数据
## 封装处理中间径，登录写入权限定。
   我们一般使用 cookie-parser 这个中间件来处理cookie的数据
   比如说登录成功我们呢写入cookie表示客户已经获得某些权限
## 兼容客户多路径，授权响应头中定。
   值得注意的是如果需要兼容其他的终端设备比如手机app这些设备app没有
   cookie cookie仅仅是针对浏览器的所以可能需要写入其他的数据作为标识
## 权限判断配路径，是否通过传递定。
   某些路径下的资源需要权限才能访问这个时候就可以查看cookie中是否存储了
   登录信息之类的 如果没有那么不调用 next 方法即可达到控制权限的效果
```js
   let express = require("express");
   let path = require("path");
   let app = express();
   app.use(express.static(path.resolve(__dirname,"./public")));
   //使用中间件封装cookie便于我们使用
   var cookieParser = require('cookie-parser')
   app.use(cookieParser())
   // 控制访问权限如果没有登录不能进行下一步操作
   app.use((req,res,next)=>{
      let cookies  =  req.cookies;
      // 登录不需要权限
      let whiteList = ["/login"];
      // 当前path
      let path = req.path;
      if(whiteList.includes(path)){//不需要权限
         next();
      }else{
         //校验权限
         if(cookies && cookies.user){
         //    存在权限
         next();
         }else{
            res.send({
                  msg:"权限不足请先登录"
            });
         }
      }
      
   });
   app.put("/update",(req,res,next)=>{
      res.send({mes:"更新成功"});
   })
   app.get("/login",(req,res)=>{
      //获得用户名
      let name = req.query.name;
      let pass = req.query.pass;
      //获得密码
      if(name =="admin" && pass=="123"){
         //表示登录成功写入cookie信息
         res.cookie("user",name,{
               path:"/",
               // maxAge:3600 * 5,
               httpOnly:true
         });
         //如果是其他设备需要设置其他数据标识登录成功比如
         res.header("authorization",name);
         res.send({
               msg:"登录成功",
               data:{name}
         });
      }else{
         res.send({
               msg:"登录失败"
         });
      }
   });

   app.listen(5555);
```