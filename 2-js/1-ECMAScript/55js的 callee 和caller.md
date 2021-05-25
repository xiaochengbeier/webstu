# callee  和 caller
【小城贝尔】

被调程序关键字，参数列表属性赐。

方法调用有嵌套，呼叫调用主人到。

## 被调程序关键字，参数列表属性赐。
    callee 表示的是被调用的函数的引用
    是参数列表的一个属性
      <script>
        var sum = (function(i) {
            //计算结成使用递归
            if (i == 1) {
                return 1;
            }
            //这个时候我们要调用这个函数 但是这个函数没有名字 咋找到他呢
            return i * arguments.callee(--i);
        }(3))
        console.log(sum); //6
    </script>
## 方法调用有嵌套，呼叫调用主人到。
    caller 表示调用 它的那个函数的引用
     <script>
        function B() {
            console.log(B.caller);
            /*
              ƒ A() {
                B();
              }
             */
        }

        function A() {
            console.log(A.caller); //null
            B();
        }
        A();