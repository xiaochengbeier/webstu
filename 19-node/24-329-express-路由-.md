# express路由

【小城贝尔】

请求处理模块化，基础路径使用下。
其他方式正常化，只是曲身路由下。

## 请求处理模块化，基础路径使用下。  
   对于请求处理可以使用路由模块化
   let stuRouter = express.Router();
   app.use("/student",stuRouter)
## 其他方式正常化，只是曲身路由下。
   然后对于 get post put 等方式的请求处理和以前一样
   只不过是 将这个处理写在router对象上
   let stuRouter = express.Router();
   stuRouter.get("/id",()=>{

   });
   stuRouter.put("/update",()=>{

   })
```js
    let express = require("express");
    let app = express();
    let stuRouter = express.Router();
    stuRouter.get("/:id",(req,res)=>{
        console.log("get",req.params);
        res.send("你请求的是stuRouter.get");
    })
    stuRouter.put("/",(req,res)=>{
        console.log("put",req.params);
        res.send("你请求的是stuRouter.put");
    })
    app.use("/student",stuRouter);
    app.listen(8888);
```