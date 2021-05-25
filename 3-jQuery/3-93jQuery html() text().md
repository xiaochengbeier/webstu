# jQuery  取值赋值方法
【小城贝尔】

隐式迭代方法中，标记语言取值痛。

赋值还是都作用，文本方法也相同。

括号之中传函数，索引还有单元素。

返回即到标签中，覆盖所有寒雪冬。

## 隐式迭代方法中，标记语言取值痛。
    对于jQuery的方法操作一般内部都会进行隐式迭代
    比如说 $("ul li").css({hieght:100});
    选中了多个 li标签使用 css() 方法的时候会给选中的每一个标签都加上这个样式
    但是 html() 这个方法在取值的时候不会隐式迭代 选择了多个元素 他只会取出第一个的

    <div class="demo">
        <div> <span>1</span> </div>
        <div> <span>2</span> </div>
        <div> <span>3</span> </div>
    </div>
    <script>
        //只会获取到所选内容的第一个
        var c = $(".demo div").html();
        console.log(c);// <span>1</span> 
    </script>
## 赋值还是都作用，文本方法也相同。
    对于 html() 方法的赋值操作会进行隐式迭代
         text() 这个方法也是一样但这个方法不仅是赋值会迭代 取值也会迭代 
         其实大部分方法都会 隐式迭代 只是html()在取值的时候特殊一些
    <script>
        //赋值还是都作用，文本方法也相同。
        //所有的 div 下都变成 cover...并且覆盖率 span标签
        //var c = $(".demo div").html("cover..");
        //会给所有的 div下赋值成"<p style='backgroundColor:red'></p>" 字符串不会解析
        //$(".demo div").text("<p style='backgroundColor:red'></p>");
        //text取值
        var c = $(".demo div").text();//会迭代获得所有的文本
        console.log(c);//  1  2  3 
    </script>
## 括号之中传函数，索引还有单元素。
        对于这两个方法在赋值的时候 还可以以传函数作为参数 这样赋值灵活性更大
        可以通过操作 每一个元素 和其对应的索引
## 返回即到标签中，覆盖所有寒雪冬。
    <script>
        //html() 中传函数做参数的情况
        //注意这里 index ele 只是形参 这样写只是语义化一点其实随便写 
        //第一个表示索引 第二个表示对应的每个元素
        var arr = ["武松", "韩信", "宋江"];
        $(".demo div").html(function(me, he) {
            //返回即到标签中，覆盖所有寒雪冬。
            return arr[me];//这样就将数组中对应的值添加到对应的元素标签中啦
        });
    </script>