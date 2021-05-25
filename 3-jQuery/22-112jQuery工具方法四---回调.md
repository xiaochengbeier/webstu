# jQuery 工具方法回调
【小城贝尔】

工具方法找回调，返回对象空间到。

加入函数待执行，待到时机火难停。

传入参数执行勤，执行限制参数明。

参数类型字符串，执行一次无后患。

记忆使用在执行，后续加入跑不停。

今生唯一单相守，停止坐落错上走。

##  工具方法找回调，返回对象空间到。
##  加入函数待执行，待到时机火难停。
    <script>
        var backs = $.Callbacks();

        function a(mes) {
            console.log("a....." + mes);
        }

        function b(mes) {
            console.log("b....." + mes);
        }
        backs.add(a, b);
        backs.fire("执行啦。。。");
     </script>
##  传入参数执行勤，执行限制参数明。
##  参数类型字符串，执行一次无后患。
     once:表示方法只执行一次
##  记忆使用在执行，后续加入跑不停。
     memory：表示如果执行过那么后续加入就不需要调用 fire()
     就自动执行
##  今生唯一单相守，停止坐落错上走。
    unique：表示去出callbacks 对象中的重复函数
    stopOnFalse: 表示遇到返回值是 false的就停止执行

     <script>
        var backs = $.Callbacks("once memory");

        function a(mes) {
            console.log("a....." + mes);
        }

        function b(mes) {
            console.log("b....." + mes);
        }
        backs.add(a, b);
        backs.fire("执行啦。。。");
        backs.add(b); //由于参数是once memory 所以 添加就会执行 然而 后续继续 fire() 不会执行 
        backs.fire("执行啦。。。");
        backs.add(a); // once限制的只是 fire() 不会限制 add() memory 执行
    </script>