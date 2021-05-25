# jQuery初阶

【小城贝尔】

首先引入工具库，入口名称美元符。

传入元素选择器，获得对象包装起。

获得元素更细分，等于先后奇偶登。

属性选择也存在，开始结尾逻辑待。

传入函数等执行，文档结构准备勤。

方法使用包装毕，原生转换括号易。

框架模式初模拟，闭包之中函数起。

函数原型初始化，返回对象全局挂。

## 首先引入工具库，入口名称美元符。
    需要使用jQuery 第一步当然是引入jquery库啦
    <script src="./jquery.js"></script>
    我们需要使用 jQuery 可以看成是一个据他的存在已经存在当前widow对象上的方法
    这个方法名 就是 jQuery  $ 美元符和 jQuery 都是指向的同一个方法
    <script>
        var isTure = $ == jQuery;
        console.log(isTure); ////true
        var isTure = $ == window.jQuery;
        console.log(isTure); //true
    </script>
## 传入元素选择器，获得对象包装起。
    当你需要获得某个元素对象的时候
    使用 
    $("选择器") 这里的选择器 可以和使用 css选择器的模式一样
     .class  #id      ul li 子元素等等 
     这样就可以获得对应的元素对象啦
    不过 获得的对象 是jQuery的对象 是原生都dom对象经过包装的
## 获得元素更细分，等于先后奇偶登。
    对于选择器 jQuery 还有自己一些独有的
    如
        <script>
        var eq = $("ul li:eq(2)"); //准确的取出第几个 当然是从零开始的
        console.log(eq); //jQuery.fn.init [li, prevObject: jQuery.fn.init(1)]

        var odd = $("ul li:odd"); //li 下的索引是奇数的都被选中
        var even = $("ul li:even"); ////li 下的索引是偶数的都被选中
        var first = $("ul li:first") // li 的第一个
        var last = $("ul li:last") // li 的最后一个
        var content = $("ul li", "div"); // 表示 选择 ul 下边的 li 但是是要在  div 的环境中
    </script>
## 属性选择也存在，开始结尾逻辑待。
    还有属性选择器
    <script>
        $("[class = Jquery]").css({
            backgroundColor: "red"
        }); //表示选择 class = Jquery的
        $("[class ^= Jquery]").css({
            backgroundColor: "blue"
        }); //表示选择以 class 属性是 jquery开头的
        $("[class $= Jquery]").css({
            backgroundColor: "yellow"
        }); //表示选择以 class 属性是 jquery开结尾的
    </script>
## 传入函数等执行，文档结构准备勤。
    <script>
        $(function() {
            console.log("$----");
        });

        $(document).ready(function() {
            console.log("ready......");
        });
        //上边两个的执行实际理论上是 在 readState = "interactive" 的时候
        //但是根据浏览器性能也有可能在 readyState = "complete" 之后
        console.log(document.readyState);

        document.onreadystatechange = function() {
            console.log(document.readyState);
        }

        document.addEventListener("DOMContentLoaded", function() {
            console.log("domTree");
        }, false);

        window.onload = function() {
            console.log("window.onload........");
        }
        console.log(".........."+ (0/0)  +"..........");
        console.log(4 / 0);
        
        /* 打印结果
        loading
        Infinity
        interactive
        domTree
        complete
        window.onload........
        $----
        ready......
        
        */
    </script>
## 方法使用包装毕，原生转换括号易。
    如果是一个原生dom对象 想使用 jquery的方法 难么就必须 转换成 
    jquery对象 
    转换方法
    $(原生dom对象);
## 框架模式初模拟，闭包之中函数起。

## 函数原型初始化，返回对象全局挂。

       (function() {
            function Jquery(seletor) {
                return new Jquery.prototype.init(seletor);
            }
            //初始化方法
            Jquery.prototype.init = function(selector) {
                    //构造函数执行三部曲 这里会默认创建 一个this对象
                    this.length = 0;
                    //如果seletor是外界传来想包装成 Jqury对象的话
                    if (selector instanceof Element) {
                        this[this.length++] = selector;
                    }
                    //如果selector 是 .class 类选择器的话
                    if (typeof selector == "string" && selector.indexOf(".") != -1) {
                        //表示这是类选择器
                        var className = selector.slice(1); //去除字符串中的小点 .
                        var doms = document.getElementsByClassName(className);
                        //然后将这个对象放到this中返回
                        for (var i = 0; i < doms.length; i++) {
                            this[this.length++] = doms[i];
                        }
                    } else if (typeof selector == "string" && selector.indexOf("#") != -1) {
                        //如果 selector包含 # 那么肯定是id选择器
                        var id = selector.slice(1); //去除字符串中的#
                        var dom = document.getElementById(id);
                        this[length++] = dom;
                    }
                }
                //由于反会的是  Jquery.prototype.init 对象 他的原型是 Object.prototype 
                //但是我们是需要使用Jqury这个方法上的原型上的方法的所以我们需要改变Jquery.prototype.init 原型指向
            Jquery.prototype.init.prototype = Jquery.prototype;
            //实现css方法
            Jquery.prototype.css = function(obj) {
                //根据传入的 对象样式属性改变所选择对象的样式
                //这里的this 是谁呢 我们上边通过选择器 将原生dom对象封装到 init这个对象中
                //然后我们在外界操作的时候当然是哪个对象调用这个方法 所以这个this便是指向哪个对象
                //判断this是否是空对象
                if (this.length == 0 || this == undefined || obj == undefined) {
                    return this;
                }
                //遍历this对象
                for (var i = 0; i < this.length; i++) {
                    for (var pro in obj) {
                        this[i].style[pro] = obj[pro];
                    }
                }
                //实现链式调用业务执行完毕之后返回this
                return this;
            }
            window.$ = window.Jquery = Jquery;
    }())