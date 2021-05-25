# transition
【小城贝尔】

属性过渡两状态，属性支持监听待。

过度时间设置秒，贝塞曲线速度狡。

设置时间延迟秒，过渡支持文档找。

## 属性过渡两状态，属性支持监听待。
    transition是设置css属性在两种状态之间以动画的形式过渡
    transition-property：需要过渡动画展示的属性
    需要哪些属性过渡 可以直接写上需要监听的属性名 
    一般使用的时候都是填 all 表示监听所有属性
## 过度时间设置秒，贝塞曲线速度狡。 
    transition-duration：过渡完成时间
    transition-timing-function：动画执行速率 一般使用贝塞尔曲线调控
## 设置时间延迟秒，过渡支持文档找。
    animation-delay：延迟执行时间
    有一些属性是不支持过渡动画的具体情况需要到官方文档查找


    .demo {
            height: 30px;
            width: 30px;
            border: 1px solid red;
            background-color: aqua;
            /* 一般使用这种符合书写方式 */
            transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
     }
        
    .demo:hover {
            height: 300px;
            width: 300px;
            border: 10px solid rgb(0, 255, 42);
            background-color: rgb(255, 0, 0);
    }