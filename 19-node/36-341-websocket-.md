# websocket

【小城贝尔】

网络传输长连接，三次握手不停歇。

再次传输问连接，升级协议字符歇。

服务响应字段接，由此连接建立歇。

数据传输格式接，读写约定字段歇。

打开关闭事件接，监听消息发送歇。


## 网络传输长连接，三次握手不停歇。
   websocket 是一种和服务器建立长连接的一种连接方式
   在浏览器和服务器建立socket之前首先是通过 三次握手
   建立连接
## 再次传输问连接，升级协议字符歇。
   然后通过http协议发送有关建立socket连接的字段
   其中和建立websocket连接有关的请求头字段
   connection:upgrade
   upgrade:websocket
## 服务响应字段接，由此连接建立歇。
   服务器在收到这些字段之后就知道客户端想和我建立websocket连接
   让后通过响应特殊的字段信息那么这样就建立了websocket的连接通道
## 数据传输格式接，读写约定字段歇。
   传输数据的格式需要双方约定
## 打开关闭事件接，监听消息发送歇。
   对应的连接通道的一些时间和方法
   webSocket.onclose
   用于指定连接关闭后的回调函数。
   WebSocket.onerror
   用于指定连接失败后的回调函数。
   WebSocket.onmessage
   用于指定当从服务器接受到信息时的回调函数。
   WebSocket.onopen
   用于指定连接成功后的回调函数。
   
   WebSocket.close([code[, reason]])
   关闭当前链接。
   WebSocket.send(data)
   对要传输的数据进行排队。