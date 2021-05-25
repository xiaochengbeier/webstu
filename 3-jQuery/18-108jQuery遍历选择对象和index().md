# jQuey遍历方法 和 index()
【小城贝尔】

遍历元素每一个，当前索引元素坐。

专门索引已封装，方法参数偶尔光。

# 遍历元素每一个，当前索引元素坐。
# 专门索引已封装，方法参数偶尔光。
    <script>
        //遍历元素每一个，当前索引元素坐。
        $("ul li").each(function(index, ele) {
            console.log(index + "  " + ele);
        });
        //专门索引已封装，方法参数偶尔光。
        $("ul li").each(function(index, ele) {
            var index = $(ele).index();
            console.log(index); // 0 1 2 3 4
        });
    </script>

    //方法参数偶尔光
    
    <body>
        <ul>
            <li>1</li>
            <span>s1</span>
            <li>2</li>
            <span>s2</span>
            <li>3</li>
            <li>4</li>
            <span>s3</span>
            <li>5</li>
        </ul>

        <script src="./jquery.js"></script>
        <!-- <script src="./myJquey.js"></script> -->
        <script>
            //index() 方法传参数
            $("ul").on("click", function(e) {
                var index = $("ul span").index($(e.target));
                //表示 index里边的参数是前边选中的第几个
                console.log(index);
                //当点击 span标签 输出对应索引
                // 当点击 li 标签 输出 -1 表示未找到
            });
        </script>
    </body>