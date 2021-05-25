# jQuery 延迟调用和ajax
【小城贝尔】

数据交互两状态，回调地狱易存在。

解决方案然后在，内部返回承诺待。

## 数据交互两状态，回调地狱易存在。
    使用ajax的时候 会有 
    success 成功执行方法
    error 失败执行方法
    这两两种执行状态 
    如果 在业务操作的时候 成功处理又需要ajax 这样就一层一层的嵌套形成地狱回调 不便于维护和阅读
## 解决方案然后在，内部返回承诺待。
    解决地狱回调的方法便是 then() 方法
    因为 $.ajax() 返回值 就是 defer.pronise();
    所以可以同过 then() 方法处理对错两种结果

     <script>
        $.ajax({
            url: "hthsll",
            method: "",
            data: {}
        }).then(function(res) {
            console.log(res);
        }, function(res) {
            //404   Not Found
            console.log(res.status + '   ' + res.statusText);
        });
    </script>