# 小程序WebSocket

【小城贝尔】

面相链接协议新，打开关闭有监听。

发送方法消息新，返回数据同监听。

## 面相链接协议新，打开关闭有监听。
    在WebSocket API中，只需要完成一次握手，
    两者之间就直接可以创建持久性的连接，
    并进行双向数据传输
    在微信小程序中使用 WebSocket 首先需要打开链接
```js
    //打开连接
    wx.connectSocket({
            url: 'wss://example.qq.com',
   })
   //监听连接打开
   wx.onSocketOpen(function callback)
   //关闭websocket
   wx.closeSocket()
   // 监听关闭
   wx.onSocketClose(function(res) {
       console.log('WebSocket 已关闭！')
   })
```
## 发送方法消息新，返回数据同监听。
    打开连接之后就可以发送消息
    并且返回消息对应的也有监听
```js
    // 发送消息
    wx.sendSocketMessage({
      data:msg
    })
    // 接收服务器返回的消息
    wx.onSocketMessage(function callback)
```