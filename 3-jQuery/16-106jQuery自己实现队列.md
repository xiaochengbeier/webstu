# jQuery队列实现
【小城贝尔】

队列执行有先后，实现原理数组透。

加入队列名判断，队列数组可存患。

传入参数如为一，返回整体队列提。

出队弹出数组首，判断为空终止走。

如若执行定不空，传入参数找下盅。

下盅函数用递归，弹出队列在一锥。

## 队列执行有先后，实现原理数组透。
    队列执行是先进先出 其中原理可以使用数组实现
    将需要按照队列执行的函数加到数组中然后从前往后取出依次执行
## 加入队列名判断，队列数组可存患。
    在加入队列的时候先根据队列的名字判断的这个队列是否存在如果不存在则创建这个队列
    存在的话加入这个队列的数组即可
## 传入参数如为一，返回整体队列提。
    如果使用者仅仅是传进来一个参数是队列的名字那么就是想获得这个队列
    我们将整个队列返回即可
## 出队弹出数组首，判断为空终止走。
    在出队列方法中我们需要首先拿到这个队列数组然后取出第一个 从前边取 shift();
    判断是否为空
## 如若执行定不空，传入参数找下盅。
    如果这个函数不为空我们就执行这个函数 
    然后这函数执行的参数我们需要传入下一个函数对象
## 下盅函数用递归，弹出队列在一锥。
     如何才能拿到下一个执行对象呢 我们可以在创建一个方法
     在这个方法中递归调用 出队列的方法然后将这个方法传给执行那个函数的参数


     //加入队列
    jQuery.prototype.inQueue = function() {
            var qName = arguments[0] || "fx";
            var qFunc = arguments[1];
            var self = this;
            //传入参数如为一，返回整体队列提。
            if (arguments.length == 1) {
                return this[0][qName];
            }
            //加入队列名判断，队列数组可存患。
            //判断是否存在这个队列 如果不存在那么创建 如果存在那么 直接加入数组
            this[0][qName] == undefined ? this[0][qName] = [qFunc] : this[0][qName].push(qFunc);
            //链式调用 
            return this;
        }
        //出队列执行
    jQuery.prototype.outQueue = function(qName) {
            var qName = qName || "fx";
            var self = this;
            var qArr = this.inQueue(qName);
            //出队弹出数组首，判断为空终止走。
            var outFunc = qArr.shift();
            if (outFunc == undefined) {
                return;
            }
            //下盅函数用递归，弹出队列在一锥。
            var next = function() {
                    self.outQueue(qName);
                }
                //如若执行定不空，传入参数找下盅。
            outFunc(next);
        }


        测试：
        <script>
            $(".eventDemo").inQueue("demo", function(next) {
                console.log("deom1........");
                next();
            }).inQueue("demo", function(next) {
                console.log("deom2........");
                next();
            }).inQueue("demo", function(next) {
                console.log("deom3........");
                next();
            }).inQueue("demo", function(next) {
                console.log("deom4........");
                next();
            });
            $(".eventDemo").outQueue("demo");
            /**
            * deom1........
            deom2........
            deom3........
            deom4........
            * /
       </script>