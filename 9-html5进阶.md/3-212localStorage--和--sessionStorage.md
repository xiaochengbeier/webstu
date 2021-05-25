# localStorage 和 sessionStorage
【小城贝尔】

存储数据浏览上，不同域名标志畅。

内容仅限字符上，属性得取方法畅。

本地商店持久上，会话关闭即消畅。


## 存储数据浏览上，不同域名标志畅。
    localStorage 和 sessionStorage 
    都是将数据存储到浏览器上属于自己的域名下
## 内容仅限字符上，属性得取方法畅。
    这两个只能存字符串类型的数据
    所以使用的时后使用 JSON对象辅助
## 本地商店持久上，会话关闭即消畅。
    不同的是 localStorage 持久存储
             sessionStorage  一次会话如果浏览器关闭就消失了
```js
        let obj = {
                name: "小城贝尔",
                age: 22,
                address: {
                    city: "西安",
                    province: "陕西那嘎达"
                }
            }
            //存数据
        window.localStorage.me = JSON.stringify(obj);
        window.localStorage.setItem("me2", obj);
        //取数据
        let me = localStorage.getItem("me");
        let ome = JSON.parse(me);
        console.log(ome);
```