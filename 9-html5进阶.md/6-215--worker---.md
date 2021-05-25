# worker
【小城贝尔】
创建对象多线程，初始加载找外文。

窗口文档难兼程，操作节点乃禁文。

外文消息待启程，执行结果邮铭文。

数据传输主线程，交替来往消息文。

主动终结辅线程，自我关闭调行文。

## 创建对象多线程，初始加载找外文。
```js
        // worker 是真正的多线程
        // 路径表示另一个线程执行的代码
        let worker = new Worker("./outset.js");
```
## 窗口文档难兼程，操作节点乃禁文。
      对于另一个线程中执行的文件中 没有 window对象
       不能操作文档 dom对象 
## 外文消息待启程，执行结果邮铭文。
## 数据传输主线程，交替来往消息文。
## 主动终结辅线程，自我关闭调行文。
```js 主线程
            // worker 是真正的多线程
            // 路径表示另一个线程执行的代码
            let worker = new Worker("./outset.js");
            //必须发送数据 outset.js 才会执行
            worker.postMessage({
                a: 100
            });
            //结束线程工作
            // worker.terminate();
            //接收别的线程传输过来的数据
            worker.onmessage = function(e) {
                console.log(e.data.result); //5050
            }
```

```js   outset.js
        this.onmessage = function(e) {
        let num = e.data.a;
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            sum += i;
        }
        //将结果发送给主线程
        this.postMessage({ result: sum });
        //执行完毕自己关闭线程 
        this.close();
}
```