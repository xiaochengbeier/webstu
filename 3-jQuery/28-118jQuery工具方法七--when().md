# jQuery 工具方法when()
【小城贝尔】
延迟对象做参数，传入多少不稳固。

然后方法接后处，对错处理依次住。

如若前边一错铸，后边正确无人渡。

## 延迟对象做参数，传入多少不稳固。
    $.when(多个延迟对象);
## 然后方法接后处，对错处理依次住。
    $.when().then(成功执行函数，失败执行函数))
## 如若前边一错铸，后边正确无人渡。
     果 when()里边都是 执行的 成功函数 那么then() 里边也执行成功
     如果 有一个是失败那么 then() 里边也执行失败
    <script>
        var d1 = $.Deferred();
        d1.done(function() {
            console.log("done.....");
        });
        var d2 = $.Deferred();
        d2.done(function() {
            console.log("done2.....");
        });
        var d3 = $.Deferred();
        d3.done(function() {
            console.log("done3.....");
        });
        $.when(d1, d2, d3).then(function() {
            console.log("sucess....");
        }, function() {
            console.log("fail....");
        })
        d1.resolve();
        d2.resolve();
        d3.resolve();
        /**
         *done.....
          done2.....
          done3.....
          sucess.... 
         * /
    </script>