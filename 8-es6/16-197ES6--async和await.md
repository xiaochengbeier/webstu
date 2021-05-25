# async 和 await
【小城贝尔】

异步修饰方法值，执行返回承诺实。

方法有无返回值，奔向已决分解实。

如要触发拒绝值，抛出异常回诚实。

异步之中等待值，等待承诺分解实。

不是承诺平常值，系统默认包装实。

等待监听分解值，拒绝异常捕捉实。

循环使用阻断值，时间监听改造实。


## 异步修饰方法值，执行返回承诺实。
    使用 async修饰一个函数声明或者一个函数表达式
    当这个函数执行的时候就会返回一个 promise对象
## 方法有无返回值，奔向已决分解实。
    不管这个方法有没有返回值返回的promise默认都是 resolved的状态
    如果有返回值的话 就相当于 resolve("当前方法返回值");
## 如要触发拒绝值，抛出异常回诚实。
    那么如果想得到一个 rejected状态的 promise对象如何操作呢
    要么 在方法中 
    throw xxx;
    或者
    return Promise.reject("参数");  
    当然如果
    return Promise.resolve("参数");
    这样的话返回的还是resolve状态的promise对象
```js
        let asyn = (async() => {
            return "resolvedd.."
        })();
        console.log(asyn); //Promise {<resolved>: "resolvedd.."}
        //返回值是一个 promise对象
        async function demo() {
            return Promise.reject("我是拒绝 promise对象");
        }
        let asyn1 = demo();
        console.log(asyn1, "asyn1.."); //Promise {<pending>} "asyn1.."

        //返回值是一个 promise对象
        async function demo2() {
            return Promise.resolve("我是resolve promise对象");
        }
        let asyn2 = demo2();
        console.log(asyn2, "asyn2.."); //Promise {<pending>} "asyn2.."
```

```js
        async function demo2() {
            return Promise.reject("reject obj");
        }
        demo2().catch((data) => {
            console.log(data); //reject obj
        });
```
## 异步之中等待值，等待承诺分解实。
    await 必须写在 被 async 修饰的函数中
    其作用是 监听 promise对象 resolve();执行结果
    比如
    let result = await 一个promise对象();
    就相当于 then(data =>{
        result = data;
    }); 
```js
        let pro = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("resolveValue");
            }, 3000);
        });
        //await 
        async function demo2() {
            let result = await pro;
            console.log(result);
        }
        console.log(1);
        demo2();
        // 执行结果 立马输出 1 然后等待 3s后输出  resolveValue
```
## 不是承诺平常值，系统默认包装实。
        如果 await 后边不是promise对象
        如 let result = await 3;
        系统默认处理为
        let result = await  Promise.resolve(3);
```js
        //如果async 后边不是promise类型
        async function demo2() {
            let result = await ["name", "牟其中"];
            //这样写等价于 
            // let result;
            // Promise.resolve(["name", "牟其中"])
            //     .then(data => {
            //         result = data;
            //         console.log(result);
            //     });
            console.log(result);
        }
```
## 等待监听分解值，拒绝异常捕捉实。
        await 只能监听 promise对象 resolve状态
        如果 是 rejected转态 就只能使用 try{}catch(){} 
        捕捉异常
```js
          let pro = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(" rejectValue");
            }, 3000);
        });
        //await 
        async function demo2() {
            // await 只能捕捉后边的 promise对象 resolve状态的 promiseValue
            //Uncaught (in promise)  如果不使用 try catch 就会报错
            try {
                let result = await pro;
                console.log(result);
            } catch (error) {
                console.log(error); // rejectValue
            }

        }
        console.log(1);
        demo2();
        // 执行结果 立马输出 1 然后等待 3s后输出  rejectValue
```
## 循环使用阻断值，时间监听改造实。
        如果在 async 修饰的方法中的 循环中使用 await
        那么每次循环必须等 async 后续监听的promise到达已决状态才会执行下一次循环
        还可以利用 promise 改造 setTimeOut();更方便发我们使用
```js
          let pro = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("resolveValue");
            }, 5000);
        });
        //await 
        async function demo2() {
            let result = null;
            for (let i = 0; i <= 6; i++) {
                result = await pro;

            }
            console.log(result); // 5s后输出 resolveValue
        }
        demo2();
```

```js
        function delay(duration) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, duration);
            });
        }
        //await 
        async function demo2() {
            console.log("5s 前。。");
            await delay(5000);
            console.log("5s 后。。。");
        }
        demo2();
        // 5s 前。。 
        //然后间隔五秒输出
        // 5s 后。。。
```