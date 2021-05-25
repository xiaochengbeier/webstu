# promise基本api
【小城贝尔】

创建对象挂起态，传参函数单线待。

参数回掉已决态，触发后续函数待。

抛出程序异常态，拒绝触发回掉待。

后续方法绑定态，分解拒绝一二待。

捕捉方法异常态，切记回掉微队待。

绑定仅限方法态，其他内容无视待。

## 创建对象挂起态，传参函数单线待。
## 参数回掉已决态，触发后续函数待。
## 抛出程序异常态，拒绝触发回掉待。
    创建promise对象
    let pro = new Promise((resolve,rejected)=>{
        // 这里边的执行为单线程 并且promise刚创建出来为 pending 挂起状态
        // resolve,rejected 都是将未决状态推向已决状态的回调函数
        // resolve(data) rejected(data)方法执行会触发此对象上后续绑定的相应函数执行
        // 并且将data作为参数传入后续执行函数

        //rejected(data) 在此方法作用域内如果有代码运行异常抛出错误那么
        //就会自动执行并将作物信息作为参数


    });
## 后续方法绑定态，分解拒绝一二待。
    pro.then((data)=>{
        //此函数 当promise是 resolve状态就会执行
    },(data)=>{
       //此函数 当promise是 rejected状态就会执行
    });
```js
        let pro = new Promise((resolve, reject) => {
            //此作用域是单线程 
            setInterval(() => {
                resolve("resolve very like..");
            }, 500);
        });
        //绑定的方法会放入微队列
        pro.then((data) => {
            console.log("resolve..1.", data);
        }, (data) => {
            console.log("error.1..", data);
        });
        pro.then((data) => {
            console.log("resolve..2.", data);
        }, (data) => {
            console.log("error.2..", data);
        });
```
## 捕捉方法异常态，切记回掉微队待。
    pro.catch((data)=>{
       //此函数只有 当promise是 rejected状态就会执行
    });
    还有就是 这些绑定的方法都是放到 微队列等js执行栈空了之后才会回调执行
```js
          let pro = new Promise((resolve, reject) => {
            //如果出错那么 就会默认 reject(err);
            throw new Error("哎呀 出错啦。。");
        });
        //绑定的方法会放入微队列
        pro.then((data) => {
            console.log("resolve..1.", data);
        }, (data) => {
            console.log("error.1..", data);
        });
        pro.then((data) => {
            console.log("resolve..2.", data);
        }, (data) => {
            console.log("error.2..", data);
        });
        pro.catch((data) => {
            console.log("俺只会在 reject 状态调用", data);
        });
```

```js
        pro.finally(() => {
            console.log("不管啥状态我都执行 写在哪儿就在那儿执行");
        });
        // then方法中只有绑定function 才有效果
        // 其他类型无视
        pro.then({
            show: "我不是function类型就当没看见我"
        });
        // console.log 是一个方法所以可以执行
        pro.then(console.log); //{message: "resolve"}
        pro.finally(() => {
            console.log("不管啥状态我都执行  写在哪儿就在那儿执行");
        });

        打印结果
        不管啥状态我都执行 写在哪儿就在那儿执行
        {message: "resolve"}
        es6.html:31 不管啥状态我都执行  写在哪儿就在那儿执行
```
## 绑定仅限方法态，其他内容无视待。
    上述方法绑定后续回调方法必须绑定 方法类型的数据
    否则会忽略不计 就是和不写一样
    比如
    pro.then("我不是函数");
    pro.catch(10119);
    等等。。。

```JS

        let pro = new Promise((resolve, reject) => {
            resolve({
                message: "resolve"
            });
            //状态不可逆所以上边已经达到已决状态了 下边就没有意义了
            reject("出错啦");
        });
        // then方法中只有绑定function 才有效果
        // 其他类型无视
        pro.then({
            show: "我不是function类型就当没看见我"
        });
        // console.log 是一个方法所以可以执行
        pro.then(console.log); //{message: "resolve"}
```