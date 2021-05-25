# history
【小城贝尔】
历史对象时间线，返回前进奔向见。

压入状态参三线，数据标题路径见。

点击前后直行线，弹出状态事件见。

## 历史对象时间线，返回前进奔向见。
    history这个对象记录了每次你访问的足迹
```js
        history.back();//表示返回上一页面
        history.forward();//表示到下一个页面
        history.go(-1);//表示返回一个页面 参数为数字正数表示后边 负数表示返回
```
## 压入状态参三线，数据标题路径见。
    一般情况下这些记录都是浏览器自动存储的我们可以调用
    history.pushState({自己定义的历史数据},null[这个参数表示标题没有浏览器支持],path)
## 点击前后直行线，弹出状态事件见。
```js
    <button onclick="addPush()">自己存历史</button>
    <script>
        function addPush() {
            history.pushState({
                vlaue: "我自己加入的历史"
            }, null, "# myselfPath");
        }

        //点击浏览器上下页监听
        window.addEventListener("popstate", function(e) {
            alert(e.state.vlaue);
        }, false);
    </script>
```