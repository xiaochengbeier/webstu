# socket.io

【小城贝尔】

封装连接套接字,客户服务各一次。

服务包装服务字,连接监听做一次。

获得通道连接字,消息监听发多次。

客户连接套接字,连接地址放一次。

获得通道连接字,监听发送方法次。


## 封装连接套接字,客户服务各一次。
   socket.io 是对websocket的封装
   分为服务端和客户端使用两大部分
## 服务包装服务字,连接监听做一次。
   服务端使用和express 结合 使用其包装
   server即可
    let server =  http.createServer(app);
    let io = socketIo(server);
    使用io对象监听socket请求
      io.on('connection', (socket) => {
          。。。。。
      }
## 获得通道连接字,消息监听发多次。
    获得的socket对象就是和服务端建立的连接通道
    发送消息
    socket.emit('hello', 'world'); 
    监听消息
    socket.on('news', (data) => {
            console.log("客户端发送了---》",data);
    });
## 客户连接套接字,连接地址放一次。
   客户端使用 const socket = io.connect(ws://url);
   如果不写url那么就是默认连接本站 
## 获得通道连接字,监听发送方法次。
   同样的获得通道就是和服务器建立的socket通道
   可以通过此通道发送和监听接收消息
【服务端】
```js
    let express = require("express");
    let http = require("http");
    let path = require("path");
    let socketIo = require("socket.io");
    let app = express();
    app.use(express.static(path.resolve(__dirname,"./public")));
    let server =  http.createServer(app);
    let io = socketIo(server);
    io.on('connection', (socket) => {
        console.log("有人连接----");
        // 监听客户端发送的消息
        socket.on('news', (data) => {
            console.log("客户端发送了---》",data);
        });
        // 向客户端发送消息
        setInterval(()=>{
            socket.emit('hello', 'world');
        },3000);
        // 监听摸个客户端断开连接
        socket.on('disconnect', (reason) => {
            console.log("此链接断开了---",socket.id,socket.rooms);
        });
    });
    app.get("/root",(req,res)=>{
        res.send("<h1 style='color:red'>学习websocket io <h1/>")
    })
    server.listen(8888);
```

【客户端】
```html
        <script src="https://cdn.socket.io/socket.io-3.0.1.min.js"></script>
</head>
<body>
    <script>
        // socket.io 客户端
        const socket = io.connect();
        socket.on("hello",(data=>{
            console.log(data);
        }));
        //向服务器发送消息
        function sentToServer(mess){
            socket.emit('news',{...mess})
        }
        //主动断开连接
        function close(){
            socket.close();
        }
    </script>
```