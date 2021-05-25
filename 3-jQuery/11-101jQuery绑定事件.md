# jQuey绑定事件
【小城贝尔】

绑定事件关键字，其中参数可选四。

类型函数传两头，筛选数据填自由。

数据封装到事件，使用拿取属性现。

过滤选择常冒泡，事件绑定父级到。

触发一次事件消，一字绑定方法凋。

鼠标移入和移出，悬浮方法两函数。

阻止默认和冒泡，兼容考虑已不要。

## 绑定事件关键字，其中参数可选四。
## 类型函数传两头，筛选数据填自由。
     on(事件类型 || 选择器 || 数据|| 事件处理函数 );
    绑定事件 其中可可以传四个参数
    其中删选和数据根据实际需要选择
## 数据封装到事件，使用拿取属性现。
    传入的数据封装到了 e 事件对象中可以通过
    e.date() ;获得数据对象

    <script>
    $(".eventDemo").on("click", {
        naem: "小城贝尔",
        age: 22
    }, function(e) {
        var data = e.data;
        console.log(data);//{naem: "小城贝尔", age: 22}
    });
    </script>
## 过滤选择常冒泡，事件绑定父级到。
    过滤选择器常用于事件委托冒泡 事件其实还是绑定在父级身上只不过只有通过触发过滤中所选择的对象才能触发
    <script>
    //事件委托 事件实际上还是加载在 ul 上只不过 点击 li 才会被触发
    $("ul").on("click", "li", "小城贝尔", function(e) {
        console.log(e.data);
        console.log(e.target);
    });
    </script>
## 触发一次事件消，一字绑定方法凋。
    one() 这个方法是绑定事件触发一次就不在作用
    <script>
        //使用one 只会触发一次然后事件就自动取消了
        $("ul").one("click", "li", "小城贝尔", function(e) {
            console.log(e.data);
            console.log(e.target);
        });
    </script>
## 鼠标移入和移出，悬浮方法两函数。
    hover(function1(){},function2(){});
    这个方法是针对鼠标移入和移出所特殊设置的方法 
    方法一表示鼠标移入执行
    方法二表示鼠标移出执行
    <script>
        $(".eventDemo").hover(function() {
            console.log("移入。。。。。。。。。。。。。");
        }, function() {
            console.log("移出。。。。。。。。。。。。。");
        });
    </script>
## 阻止默认和冒泡，兼容考虑已不要。
    对于jQuery中 阻止默认事件和冒泡
    不需要在考虑兼容性问题因为内部已经将兼容考虑到了
    e.stopPropagation();阻止冒泡
    e.preventDefault();阻止默认事件
    return false;即阻止冒泡也阻止默认事件
    <script>
        $(".eventDemo").on("click", function() {
            console.log("bubble....");
        });
        $(".inner").on("click", function(e) {
            //阻止事件冒泡
            //e.stopPropagation();
            return false;
        });
     </script>