
# jQuery val()
【小城贝尔】

表单配件对应上，拿取只有一值让。

赋值输入视觉改，默认行间值优在。

其他标签也作用，只是影藏属性重。

如果参数传函数，注意索引老值住。

表单方法走序列，化作数组键值谢。

## 表单配件对应上，拿取只有一值让。
    val() 这个方法对应的是 form 表单上 的组件
    如 输入框  单选 多选
    如果你选择了多个元素 val（）方法只会取到第一个值
## 赋值输入视觉改，默认行间值优在。
    对于 input 输入框 使用val（） 赋值 会将输入框中的值改变
    但是行间样式不会改变 但是取值的时候取到的还是 你修改赋予的值
## 其他标签也作用，只是影藏属性重。
    如果使用 val（） 给其他标签赋值 比如 div 那么
    可以设置也可以访问但是行间样式没有
## 如果参数传函数，注意索引老值住。
    复制的时候也可传函数 这个时候 会将 索引 和 oldValue 传给你操作 
    oldValue 指的是那个行间值
    <body>
        <div class="demo"></div>
        <form action="">
            name: <input type="text" value="xiaoChengBeiEr">
            <br>
            fave:
            <br> 
            football： <input type="radio" name="fave" value="football"> 
            basketball： <input type="radio" name="fave" value="basketball"> 
            pingpang ：<input type="radio" name="fave" value="pingpangball">
        </form>

        <script>
            var val = $("input").val(); //选取多个只会获得一个值
            console.log(val); //xiaoChengBeiEr
            $("input").val("pretty");
            //赋值会迭代 但是如果是输入框 那么行间样式value 值不变
            // <input type="text" value="xiaoChengBeiEr">  赋值之后 value 依然不变 但是展示效果变了
            //取值的时候也是新设置的值
            //使用val() 给非表单元素赋值
            $(".demo").val("values"); // 可以设置也可以访问但是行间样式没有
            console.log($(".demo").val()); //values
            // 在赋值的时候使用函数
            $("input").val(function(index, oldValue) {
                console.log(index + "  " + oldValue);
                return oldValue + index;
            });
        </script>
    </body>
## 表单方法走序列，化作数组键值谢。
    如果你需要一次性获得所有的表单中的数据
    可以使用
    $("form表单对象").serialize(); //这个方法获得的是url 后边拼接格式
    $("form表单对象").serializeArray();//这个方法 会将字符串拆分封装成对象更加实用
    <script>
        //获得表单中所有的值
        var serialize = $("form").serialize();
        console.log(serialize);
        var seArr = $("form").serializeArray();
        console.log(seArr);
    </script>