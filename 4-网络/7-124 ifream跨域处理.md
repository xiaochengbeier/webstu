# ifram跨域
【小城贝尔】

父级获得子窗口，事件监听加载走。

内嵌页面加载毕，内容窗口带数据。

跨域处理先欺骗，同源引入手动现。

子级窗口名跨域，携带字符传数据。

同源之下子得父，直接父级窗口住。

跨域处理拼参数，位置链接解析兔。

解决方案版本五，邮递消息窗口苦。

参数数据域名堵，接受监听消息阻。

监听方法数据源，获得数据属性连。

## 父级获得子窗口，事件监听加载走。
    父级页面想要获得子页面中的数据首先需要 添加一个onload事件
    监听子窗口是否加载完毕
    子窗口DOM对象.onload = function(){
         然后获得内容窗口对象
        子窗口DOM对象.contentWindow
    }
## 内嵌页面加载毕，内容窗口带数据。
    等到内嵌的页面加载完毕触发onload事件 获得contenWindow对象然后就可以获得子窗口的数据了
    子窗口
    <script>
        var son = {
            name: "son",
            age: "30"
        }
    </script>
    父窗口
    <body>
        <iframe src="./son.html" frameborder="0" id="son"></iframe>
        <script>
            var son = document.getElementById("son");
            son.onload = function() {
                var cw = son.contentWindow;
                console.log(cw.son); //{name: "son", age: "30"}
            }
        </script>
    </body>
## 跨域处理先欺骗，同源引入手动现。
    跨域想要获得子窗口数据 那么就需要在子页面加载完毕之后欺骗服务器立马将 子窗口 src改为同源的
    <iframe src="http://127.0.0.1:5501/outSon.html" frameborder="0" id="son"></iframe>
    <script>
        var son = document.getElementById("son");
        var isOrigin = false;
        son.onload = function() {
            if (!isOrigin) {
                son.src = "./data.text";
                isOrigin = true;
            } else {
                var cw = son.contentWindow;
                console.log(cw.name); //{"name":"otherName","age":"otherAge"}
            }
        }
    </script>
## 子级窗口名跨域，携带字符传数据。
    <script>
        var otherSon = {
                name: "otherName",
                age: "otherAge"
            }
            //使用 父窗口 window.name 属性可以跨域 但是 window.name 值必须是字符串类型
        window.name = JSON.stringify(otherSon);
    </script>
## 同源之下子得父，直接父级窗口住。
    同源条件下子页面要想获得父级页面
    直接 window.parent 获得父级对象即可
    <script>
        var pw = window.parent.fater;
        console.log(pw); //{name: "i am father"}
    </script>
## 跨域处理拼参数，位置链接解析兔。
    如果是跨域那么就需要将父窗口需要传给子窗口的数据拼接在 url后边作为参数传递

    父窗口----》
     <iframe src="http://127.0.0.1:5501/outSon.html#name=father" frameborder="0" id="son"></iframe>
    子窗口----》
    <script>
        var param = window.location.hash;
        console.log(param);//#name=father
    </script>
## 解决方案版本五，邮递消息窗口苦。
    HTML5的解决方案是 postMessage(数据对象,接收数据的域);
## 参数数据域名堵，接受监听消息阻。
    接收参数的域 window.onmessage 
## 监听方法数据源，获得数据属性连。
    window.onmessage = function(e){
       console.log(e);
    } 

    父级页面给子级页面====》
    父级页面
    <iframe src="http://127.0.0.1:5501/outSon.html" frameborder="0" id="son"></iframe>
    <script>
        var fater = {
            name: "i am father"
        }
        var outSon = document.getElementById("son");
        outSon.onload = function() {
            outSon.contentWindow.postMessage(fater, "http://127.0.0.1:5501/outSon.html");
        }
    </script>

    //子页面
    <script>
        window.onmessage = function(e) {
            console.log(e.data); //{name: "i am father"}
        }
    </script>

    子级页面给父级页面====》
    父级页面
    //获得子元素传递的数据
    window.onmessage = function(e) {
        console.log(e.data, "....form son...."); //{name: "i am a son"} "....form son...."
    }

     //子页面
     var son = {
        name: "i am a son"
    }
    window.parent.postMessage(son, "http://127.0.0.1:5500/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/review/ifream.html");

    



