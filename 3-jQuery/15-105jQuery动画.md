# jQuery动画
【小城贝尔】
动画函数有目标，对象封装数据到。

时间样式加回调，连续动画队列到。

延迟时间在执行，添加参数毫秒行。

结束方法一调用，直奔终点无律动。

停止方法不传参，只停当前后续翻。

如果参数一值真，停止所有静无声。

如若参数两值真，也停所有当前深。

## 动画函数有目标，对象封装数据到。
## 时间样式加回调，连续动画队列到。
    animate({目标},"执行完动画时间","运动样式",回调函数) ; 
    对于运动要达到的目标 我们一般使用对象设置各个属性的目标值
## 延迟时间在执行，添加参数毫秒行。
    delay("延迟时间"); 方法延迟动画执行 
## 结束方法一调用，直奔终点无律动。
    finish(); 这个方法是让动画直接到达最终状态 没有中间过渡样式
## 停止方法不传参，只停当前后续翻。
    stop() ;如果传参数立即停止当前动画 并执行下一个动画
## 如果参数一值真，停止所有静无声。
    stop(true); 立即停止所有的动画 
## 如若参数两值真，也停所有当前深。
    stop(true,true); 停止所的动画但是当前动画会达到终点

    <div class="eventDemo">

    </div>
    <button>停止</button>
    <button>开始</button>
    <script>
        function ani() {
            $(".eventDemo").animate({
                top: 200,
                left: 300,
                height: 300,
                width: 300
            }, 2000, "linear", function() {
                console.log("over.....");
            }).animate({
                top: 00,
                left: 900,
                height: 50,
                width: 50
            }, 2000, "linear", function() {
                console.log("over2.....");
            });

        }
        $("button").eq(0).on("click", function() {
            // $(".eventDemo").stop();//会停止当前执行下一个东湖
            // $(".eventDemo").stop(true); //立即停止所有的动画
            $(".eventDemo").stop(true, true); //立即停止所有的动画但是当前动画到达终点
        })
        $("button").eq(1).on("click", function() {
            ani();
        })
    </script>