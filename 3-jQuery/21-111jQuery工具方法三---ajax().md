# jQuery工具方法ajax()

【小城贝尔】

前后交互数据通，十个参数对象中。

资源定位类型先，传输数据对象间。

成功数据传形参，错误状态文本摊。

全局上下文改变，异步执行默认现。

请求超时设时间，跨域请求回调添。

回掉坐落对象间，函数名称字符先。

响应数据还形参，业务操作对它翻。

完成属性最后调，一切交互完毕要。

## 前后交互数据通，十个参数对象中。
   $.ajax();是jQuery对原生ajax的封装 是前后端交互数据的一种方式
   常用的参数有 10 个
## 资源定位类型先，传输数据对象间。
    url:表示资源定位 
    type:表示传输数据的方式 GET / POST 
    data:{} 需要传输的数据 使用对象组织数据
## 成功数据传形参，错误状态文本摊。
        success: function(res) { //执行成功执行逻辑 res为成功后返回的数据

        },
        error: function(e) { //执行失败执行的逻辑 参数是错误信息对象
            var status = e.status; //错误的状态码
            var statusText = e.statusText; //错误信息
        },
## 全局上下文改变，异步执行默认现。
      context: //ajax 上下文对象
      async: true, //同步异步执行 默认是异步的
## 请求超时设时间，跨域请求回调添。
     timeout: 300, //设置请求超时时间
     dataType: "jsonp", //同源策略 跨域请求
## 回掉坐落对象间，函数名称字符先。
     data: {
                callBack:"make",
                //如果是跨域请求需要在传输数据的时候告诉后台你的回调函数名称必须是字符串形式
                //至于回到函数属性名是后台规定的
        },
## 响应数据还形参，业务操作对它翻。
    function make(res){ //同源策略 跨域请求 的回调函数 res 就是后台出传输给的 数据对象

    }
## 完成属性最后调，一切交互完毕要。
       complete: function() { //ajax逻辑执行完毕之后执行逻辑

            }, 


    <script>
        $.ajax({
            url: "",
            type: "GET", // GET / POST
            context: this, //ajax 这个对象的上下文 
            async: true, //同步异步执行 默认是异步的
            dataType: "jsonp", //同源策略
            timeout: 300, //设置请求超时时间
            data: {
                callBack:"make",
            }, //需要传输的数据
            success: function(res) { //执行成功执行逻辑 res为成功后返回的数据

            },
            error: function(e) { //执行失败执行的逻辑 参数是错误信息对象
                var status = e.status; //错误的状态码
                var statusText = e.statusText; //错误信息
            },
            complete: function() { //ajax逻辑执行完毕之后执行逻辑

            },
        });
    </script>