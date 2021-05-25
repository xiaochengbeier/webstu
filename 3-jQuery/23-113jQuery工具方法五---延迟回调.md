# jQuery工具方法延迟回掉
【小城贝尔】

延迟调用三状态，完成失败进行在。

激活方法对应待，分解拒绝通知寨。

成败一到即停止，还要运行进步时。

如想对象仅注册，使用方法调承诺。

## 延迟调用三状态，完成失败进行在。
    延迟回调对象添加执行函数的三种状态
    done() ;成功执行
    fail() ;失败执行
    progress() ;正在执行中
## 激活方法对应待，分解拒绝通知寨。
    每一种状态都有对应的激活方法
    done() ---> resolve();
    fail()----> reject();
    progress() ----> notify();
## 成败一到即停止，还要运行进步时。
      done() 或者 fail() 一旦执行了那么这个延迟回调对象便会停止执行
      progress() 执行了 还会继续执行 直到  done() 或者 fail()  执行了在停止
    <script>
        var deffered = $.Deferred();
        deffered.done(function(mes) {
            console.log("done。。。。。" + mes);
        });
        deffered.fail(function(mes) {
            console.log("fail......." + mes);
        });
        deffered.progress(function(mes) {
            console.log("progress....." + mes);
        });
        deffered.notify("notify....");
        deffered.resolve("resolve...."); //这里是执行done() 所以后边不会再继续执行了
        deffered.reject("reject。。");
    </script>
## 如想对象仅注册，使用方法调承诺。
    如果你只是想外界只是注册执行方法 而不可以执行的话
    可以给外界返回一个 阉割版的 对象 调用 promise() 方法


     <script>
        function test() {
            var deferred = $.Deferred();
            setInterval(function() {
                var score = Math.random() * 100;
                if (score > 80) {
                    deferred.resolve("> 80");
                } else if (score > 60) {
                    deferred.notify("> 60");
                } else {
                    deferred.reject(" 下次再来吧。。。");
                }
            }, 30);
            //返回阉割版 defered对象 只能注册不能执行
            return deferred.promise();
        }
        test().done(function(ms) {
            console.log("success..." + ms);
        }).fail(function(ms) {
            console.log("fail...." + ms);
        }).progress(function(ms) {
            console.log("again,,,," + ms);
        });
    </script>