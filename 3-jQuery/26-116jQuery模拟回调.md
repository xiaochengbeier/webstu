# jQuery 回调模拟
【小城贝尔】
方法属性方法上，工具方法调用荡。

回掉使用返对象，其中加入执行棒。

方法全局一数组，方法加入就存储。

方法全局一变量，记录执行位置跄。

方法全局一把火，执行函数循环裹。

记忆执行添加惯，莫忘标识已更换。

执行一次即停止，清空库存索引始。

## 方法属性方法上，工具方法调用荡。
    回调$.Callbacks() 是一个工具方法存储在 jQuery这个方法的属性上
## 回掉使用返对象，其中加入执行棒。
    $.Callbacks();调用之后返回一个对象
    这个对象中 有 add() 添加函数的方法 和 fire() 执行函数的功能
## 方法全局一数组，方法加入就存储。
    在这个自定义的 callaback方法中 需要一个数组来存储外界加入需要执行的函数
## 方法全局一变量，记录执行位置跄。
    在这个方法中还需要一个变量来记录指向 执行的函数位置
## 方法全局一把火，执行函数循环裹。
    在这个方法中还需要定义一个 fire() 方法 用来执行已经添加的函数
## 记忆执行添加惯，莫忘标识已更换。
    在这个方法中定义一个标识 记录是否执行过 fire()方法 
    用来完成 memory 这个参数的功能
## 执行一次即停止，清空库存索引始。
    数组中所有的函数执行完毕之后判断是否有 once 这个参数如果存在 那么 就需要清空那个存储
    函数的数组让他只能执行一次

     jQuery.myCallback = function(arg) {
        //接收参数 其中包括 memory once 或者 二者组合
        var gloArgs = arg || "";
        //方法全局一数组，方法加入就存储。
        var list = [];
        //方法全局一变量，记录执行位置跄。
        var exeIndex = 0;
        //记忆执行添加惯，莫忘标识已更换。
        var isFire = false;
        //方法全局一把火，执行函数循环裹。
        var fire = function() {
            isFire = true;
            for (; exeIndex < list.length; exeIndex++) {
                list[exeIndex].apply(window, arguments);
            }
            //如果 参数是 once 那么只执行一次然后清空 list 
            if (gloArgs.indexOf("once") != -1) {
                list = [];
                exeIndex = 0;
            }
        }
        return {
            // 回掉使用返对象，其中加入执行棒。
            add: function(func) {
                list.push(func);
                //判断如果前边已经执行过 然后参数是 memory 那么添加之后立即执行
                if (isFire && arg.indexOf("memory") != -1) {
                    fire();
                }
                return this;
            },
            fire: function() {
                //调用fire() 执行 list中的函数
                fire(arguments);
                exeIndex = 0;
                return this;
            }
        }
    }