# jQuery延迟调用then()
【小城贝尔】
简化注册关键字，失败成功填依次。

链式调用在然后，如有返回它意构。

返回结果延迟又，后续对应注册就。

其他返回类型皱，后续对应参数瘦。

## 简化注册关键字，成功失败填依次。
    then() 方法第一个作用简化注册 
    成功 失败 正在执行这三个状态需要执行的函数直接依次写在then()括号中就好了
## 链式调用在然后，如有返回它意构。
    then(); 链式调用可以以给一个状态绑定多个函数
    <script>
        var defer = $.Deferred();
        defer.then(function() {
            console.log("success1......");
        }, function() {
            console.log("fail1......");
        }, function() {
            console.log("progress1......");
        }).then(function() {
            console.log("success2......");
        }, function() {
            console.log("fail2......");
        }, function() {
            console.log("progress2......");
        });
        // defer.notify();
        //defer.reject();
        //defer.resolve();
        //reject() 执行后边会执行 done 
    </script>
    但是一旦有返回值就不是绑定多个函数就有其他的意思了
## 返回结果延迟又，后续对应注册就。
    如果返回的又是一个 defer 对象的话 那么 then()  就是给这个返回的对象注册
     <script>
        var defer = $.Deferred();
        defer.then(function() {
                var newDefer = $.Deferred();
                setTimeout(function() {
                    newDefer.reject("rejct....mm....");
                }, 1500)
                return newDefer.progress();
            }, function() {
                var newDefer = $.Deferred();
                setTimeout(function() {
                    newDefer.resolve("rejct....mm....");
                }, 1500)
                return newDefer.progress();
            }, function(ms) {
                console.log("progress...");
            })
            .then(function(ms) {
                console.log("done " + ms);
            }, function(ms) {
                console.log("fail " + ms);
            });
        //defer.resolve();  fail rejct....mm....
        //defer.reject();done rejct....mm....
    </script>
## 其他返回类型皱，后续对应参数瘦。
    如果返回值就是正常的数据类型比如字符串  那么就会作为参数返回给后边对应位置的函数
       <script>
        var defer = $.Deferred();
        defer.then(function() {
                return "done..";
            }, function() {
                return "fail..";
            }, function(ms) {
                return "progress..";
            })
            .then(function(ms) {
                console.log("done " + ms);
            }, function(ms) {
                console.log("fail " + ms);
            }, function(ms) {
                console.log("progress " + ms);
            });
        // defer.resolve();//done done..
        // defer.reject(); done fail..
        //defer.notify();progress progress..
     </script>