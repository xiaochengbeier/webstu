#  promise串联
【小城贝尔】
链式调用串联态，挂起监听回掉待。

返回参数单身态，传入后续参数待。

返回承诺对象态，后续参数拆解待。

## 链式调用串联态，挂起监听回掉待。
    then()  finally() catch();
    这些方法都会返回一个新的promise对象
    并且这些promise对象一开始都是 pending状态

    而这个promise最终的状态是根据其所注册的函数决定的
    如果注册的函数被调用的是 resolve那么 这个promise就是resolve状态
    如果注册的函数被调用的是 reject那么 这个promise就是reject状态
## 返回参数单身态，传入后续参数待。
    既然返回了一个 promise对象那么就可以使用链式调用的方法再给这个promise对象
    注册后续处理回调方法
    而这些对应状态的方法执行时的形参是来自于上一个promise对应方法执行的返回值
    如果没有返回值那么当前执行的回调就没有参数
```js
         let pro = new Promise((resolve, reject) => {
            resolve({
                message: "resolve"
            });
        });
        // 串联promise
        pro.then(data => {
            console.log("then--resolve---1---", data);
            // then--resolve---1--- {message: "resolve"}
            throw new Error("i am a erro..");
        }, data => {
            console.log("then--reject---1---", data);
        }).catch(data => {
            console.log("catch--reject---2---", data);
            // catch--reject---2--- Error: i am a erro..
        }).finally().then(data => {
            console.log("then--resolve---2---", data);
            // then--resolve---2--- undefined
        });
```
## 返回承诺对象态，后续参数拆解待。
    如果上一次promise返回的是 一个 promise 对象 那么对应的参数不是这个对象
    而是那个promise对象的[[PromiseValue]]:值
```js
       let pro = new Promise((resolve, reject) => {
            resolve({
                message: "resolve"
            });
        });

        let pro2 = new Promise((resolve, reject) => {
            resolve("返回promise对象我是里边的值");
        });

        pro.then(data => {
            console.log(data); //{message: "resolve"}
            return pro2;
        }).then(data => {
            //这里的data不是pro2 这个对象 而是pro2中的 [PromiseValue]
            console.log(data); //返回promise对象我是里边的值
        });
```

