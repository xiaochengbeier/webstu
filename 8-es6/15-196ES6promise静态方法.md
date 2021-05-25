# promise静态方法
【小城贝尔】
获得承诺对象在，直接已决最终态。

静态方法全都在，传入枚举承诺态。

一旦执行拒绝在，后续触发拒绝态。

还有方法竞赛在，一旦已决到终态。

## 获得承诺对象在，直接已决最终态。
```js
         //返回一个 resolved状态的 promise对象
        let re = Promise.resolve(1)
            //返回一个 rejected状态的 promise对象
        let rej = Promise.reject(4);
        console.log(re, rej);


        let pro = new Promise((resolve, reject) => {
            reject();
        });
        let proSta = Promise.resolve(pro);
        console.log(pro === proSta) //true
```
## 静态方法全都在，传入枚举承诺态。
## 一旦执行拒绝在，后续触发拒绝态。
```js
         let arr = [];
        for (let i = 1; i <= 4; i++) {
            let pro = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (i == 2) {
                        reject(i + "秒");
                    } else {
                        resolve(i + "秒");
                    }

                }, i * 1000);
            });

            arr.push(pro);
        }

        Promise.all(arr).then(data => {
            //如果 arr中全部都是 resolved状态那么次函数执行并且
            //将arr中所有的数据按照数组中的promise对象顺序放到一个数组中传给此函数
            console.log(data); //(4) ["1秒", "2秒", "3秒", "4秒"]
        }, data => {
            //如果有一个是 rejected转态那么次函数就执行 并且将那个rejected状态的参数传到此函数
            console.log(data); //2秒
        });
```
## 还有方法竞赛在，一旦已决到终态。
```js
        Promise.race(arr).then(data => {
            //如果arr中第一个到达已决状态的是 resolved 那么执行此函数
            //并且把那个promise的数据传到此函数
            console.log(data, "race-resolve");
        }, data => {
            //如果arr中第一个到达已决状态的是 rejected 那么执行此函数
            //并且把那个promise的数据传到此函数
            console.log(data, "race-reject");
        });ss
```