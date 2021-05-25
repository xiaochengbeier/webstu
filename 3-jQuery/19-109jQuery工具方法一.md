# Query工具方法一
【小城贝尔】
判断类型更具体，空值为空包装挤。

内置对象名显现，自己定义原生见。

数组函数窗口是，接触冲突美元斥。

去除空格参数置，改变this指向是。

数组操作每一个，还有地图返新课。

字符解析成对象，其中格式双引荡。

创建数组操作类，两个参数拼后缀。

## 判断类型更具体，空值为空包装挤。
## 内置对象名显现，自己定义原生见。
   $.type() 判断数据类型
    null ---》 null 并非原生 object
    包装类 ----》 
    Number() ----> nunber   原生 object
    Date()  ----> date      原生 object
    自定义对象 ---》 object
## 数组函数窗口是，接触冲突美元斥。
    $.isFunction();判断是否是方法
    $.isArry();判断是否是 数组
    $.isWindow() ;判断是否是 widow对象

    //防止其他库 和 $ 符号冲突
     <script>
        var apple = $.noConflict();
        var nocon = apple(".proxy");
        console.log(nocon);
    </script>
## 去除空格参数置，改变this指向是。
    $.trim();去除空格
    $.proxy();改变方法中this指向

     <script>
        var list = {
            datas: "proxy",
            init: function() {
                var dom = $(".proxy");
                this.bondEvent(dom);
            },
            bondEvent: function(dom) {
                //当点击触发事件的时候 发现 输出为 undefined 因为 这时
                //this.show 方法的this已经是 dom对象了 因为 点击触发的时候是 
                //dom调用的this.show() 方法所以 this就指向这个dom对象 但是我们需要
                //this指向 当前对象 所以 需要用 $.proxy() 改变this指向
                // dom.on("click", this.show, this);
                dom.on("click", $.proxy(this.show, this));
            },
            show: function() {
                console.log(this.datas);
            }
        }
        list.init();
    </script>
## 数组操作每一个，还有地图返新课。
    $.each(); 遍历数组 $.map();过滤并产生一个新的数组
    <script src="./jquery.js"></script>
    <!-- <script src="./myJquey.js"></script> -->
    <script>
        var arr = ["demo", "chs", 32, "jds", "js"];
        //遍历数组
        $.each(arr, function(index, ele) {
            console.log(index, ele);
        });
        //map  找到数组中含有 j 这字母的元素 并且返回构成一个新的数组
        var maparr = $.map(arr, function(ele, index) {

            if ((ele + "").indexOf("j") != -1) {
                return ele;
            }
        });
        console.log(maparr); //["jds", "js"]
    </script>
## 字符解析成对象，其中格式双引荡。
     <script>
        //将json 格式的字符串解析成对象
        //var jsonStr = ' {"age":"30","name":"小城贝尔"}';
        var jsonStr = "{'age':'30','name':'小城贝尔'}"; //必须严格按照 单引号 双引号的规则不然解析报错
        var obj = $.parseJSON(jsonStr);
        console.log(obj);
    </script>
## 创建数组操作类，两个参数拼后缀。
      <script>
        var obj = {
                "0": "老铁",
                "1": "age",
                "2": "小城贝尔",
                length: 3
            }
            //将类数组转换成 数组
        var arr = $.makeArray(obj);
        arr.sort();
        console.log(arr); // ["age", "小城贝尔", "老铁"]

        //如果是两个参数
        var arr1 = [1, 2, 3];
        var arr2 = [4, 5, 6];
        var arrNew = $.makeArray(arr2, arr1, arr2); //表示将arr2 拼接到 arr1 后边 如果是参数大于 2 那么后边的参数直接忽略
        console.log(arrNew); //(6) [1, 2, 3, 4, 5, 6]
    </script>