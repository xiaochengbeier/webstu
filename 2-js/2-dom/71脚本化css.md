# js 脚本化CSS
【小城贝尔】

脚本操作样式表，行间样式范围小。

外部引入看不到，赋值操作唯一傲。

获得样式计算妙，参数两个伪元笑。

IE  兼容老大难，当前样式属性含。

## 脚本操作样式表，行间样式范围小。
    实用 js 操作样式表改变添加获得的仅仅是 行间样式 
## 外部引入看不到，赋值操作唯一傲。
    对于行间样式以外的部分的 css是操作不到 也获取不到的
    dom元素.style.某个样式 = "某个值"；
    这是唯一的可以给样式赋值操作 
## 获得样式计算妙，参数两个伪元笑。
      获得经过计算的样式 就是最终展现出来的样式值
      window.getComputedStyle("dmo元素","一般情况下填写false 还可以填写 after before 表示该元素的伪元素属性");
## IE  兼容老大难, 当前样式属性含。
     window.getComputedSyle();这个方法ie 老版本不兼容
     IE 提供的操作
     dom元素.currentStyle;这个属性



     //封装获得样式的方法
        function getComputeStyle(ele, style) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(ele, false)[style];
            } else {
                return ele.currentStyle[style];
            }
        }