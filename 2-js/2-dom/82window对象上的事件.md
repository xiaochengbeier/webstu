# window 对象上的两个事件

【小城贝尔】

窗口监听滚动条，一旦移动便动摇。

文档加载全完成，其中脚本速难行。

## 窗口监听滚动条，一旦移动便动摇。
    window.onsroll 一旦滚动条位置发生改变 这个事件便会被触发

    window.onscroll = function() {
        var pagex = window.pageXOffset;
        var pagey = window.pageYOffset;
        console.log("pageX  = " + pagex + "     pageY = " + pagey);
    }
## 文档加载全完成，其中脚本速难行。
    window.onload 一旦文档 加载完毕就会触发这个事件
    这个加载完毕是指 文档所有的内容加载完毕 包括外部引入资源
    比如说 <img src = "">外边的图片资源 等加载完毕之后才会触发
    所以如果你

     window.onload = function() {

            //业务逻辑

            //这样写的确可以但是 这样效率太慢 
            //因为要等到所有的文档加载完毕后才执行
     }