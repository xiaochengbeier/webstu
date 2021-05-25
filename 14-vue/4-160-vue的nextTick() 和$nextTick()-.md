# vue的nextTick() 和$nextTick()
【小城贝尔】

回掉激活异步值，响应渲染结束时。

不同从属相同值，回掉存储数组时。

匹配环境异步值，刷新数组执行时。

先看微型队列值，如不存在宏队时。

## 回掉激活异步值，响应渲染结束时。
    $nextTick(function(){});
    nextTick(function(){});
    都是在数据渲染结束时执行的函数
## 不同从属相同值，回掉存储数组时。
    $nextTick 从属于对象
    nextTick   从属于vue的静态方法
    底层都是一个方法 $nextTick  里边调用的是 nextTick
    执行该方法的时候会将回调函数存入一个  var callbacks = []; 的数组
   
## 匹配环境异步值，刷新数组执行时。
 然后还定义了一个 flushCallbacks ()执行数组的方法
 对于calllbacks里边的方法不是立即执行性而是异步执行 
## 先看微型队列值，如不存在宏队时。
    异步执行对象匹配顺序
    Promise 
    MutatioObserver
    setImmediate
    setTimeout
    //曾经还使用过
    messageChannel