# ajax  jsonp
【小城贝尔】
如果跨域jsonp, 方法默认转拿取。

同源使用均可以，其中原理下回起。

脚本标签外引入，跨域机理不限住。

后台约定包裹渡，传入回调做参数。

## 如果跨域jsonp, 方法默认转拿取。
    如果采用jsonp进行跨域那么请求方式必须是 GET
    在jQuery $.ajax()  中 如果使用 dataType ： "jsonp"
    那么type 一定是 "GET" ,如果你写 "POST" 会被默认转换成 "GET"
## 同源使用均可以，其中原理下边起。
   jsonp方式在同源下也是可以使用的 下边就来介绍jsonp的原理
## 脚本标签外引入，跨域机理不限住。
    data.text 中的内容
    console.log("data===text");

    然后使用script标签引入这个文件 在控制台你就会发现会打印 
    data===text

    <script src="./data.text"></script> 
    使用 script 标签引入资源浏览器不回限制其是否跨域
## 后台约定包裹渡，传入回调做参数。
    利用script标签引入跨域资源不受同源策略限制 并且引入的资源会当做 js代码执行
    我们和后台约定一个方法名让后台将需要传输的数据 使用这个方法名包裹起来 作为这个方法的参数
    然后等到跨域资源加载到当前页面的时候这个我们事先约定好的函数自动执行 后台的数据就作为参数传递给我们这个回调函数

    <script>
    function backFunc(res) {
        var parse = JSON.parse(res);
        console.log(parse); //{name: "cheng", age: "20"}
    }
    </script>
    <!--
        data.text 内容：
        backFunc('{"name": "cheng", "age": "20" }'); 
    -->
    <script src="./data.text"></script> 
