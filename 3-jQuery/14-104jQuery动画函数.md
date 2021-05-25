# jQuey动画函数系列
【小城贝尔】
动画系列参数三，时间样式回掉翻。

线性展现慢到快，两种状态切换在。

影藏展示卷落门，淡入淡出多到人。

侧重效果稍不同，参数使用勿朦胧。

## 动画系列参数三，时间样式回掉翻。
## 线性展现慢到快，两种状态切换在。
    所有的动画函数都有三个基本的参数
    执行时间  
    动画样式【swing 先慢后快 linear 线性】
    回调函数动画执行完毕之后执行
    都有一个切换两种状态的方法 toggle();
## 影藏展示卷落门，淡入淡出多到人。
    展示隐藏：hide(); show() ;toggle();
    <div class="eventDemo">

    </div>
    <button>展示隐藏</button>
    <script>
        $("button").click(function() {
            $(".eventDemo").toggle(3000, "swing", function() {
                alert("over.......");
            });
        });
    </script>
    滑动 :slideUp() slideDown() slideToggle();
         $("button").click(function() {
            $(".eventDemo").slideToggle(3000, "swing", function() {
                alert("over.......");
            });
         });
    淡入淡出：fadeIn() fadeOut() fadeToggle();
             fadeTo()  到指定的透明度 
            <script>
                $("button").click(function() {
                    $(".eventDemo").fadeTo(3000, 0.4, "swing", function() {
                        alert("over.......");
                    });
                });
             </script>
## 侧重效果稍不同，参数使用勿朦胧。
    展示隐藏：display 展示还是 none
    滑动  元素高度
    淡入淡出：透明度