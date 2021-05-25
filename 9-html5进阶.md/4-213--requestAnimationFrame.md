# requestAnimationFrame
【小城贝尔】
请求动画关键帧，同步渲染频率深。

区别时间监听帧，运行时间准精深。

## 请求动画关键帧，同步渲染频率深。
    requestAnimationFrame 类似于 setTimeout 
    但是这个执行的频率和 浏览器渲染频率一样 为 每秒 60次
## 区别时间监听帧，运行时间准精深。
    和 setTImeOut(function(){

    },1000/60)
    有啥不同呢

    setTimeOut并不能精确的控制时间 如果过里边的逻辑执行时间超出了
    1000/60秒 那么执行时间就不准了
    而 requestAnimationFrame 无论什么时候执行都是精确的