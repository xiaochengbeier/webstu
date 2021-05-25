# jQuery筛选方法
【小城贝尔】

获得方法得原生，不传参数转全真。

比较获得是包装，不传参数空铃铛。

寻找方法有基础，每次保存前一主。

过滤方法参数多，正常选择函数落。

否定方法过滤反，操作详情易开展。

某个元素其中有，他是限定前边走。

是否交集得对错，冒泡目标判断过。

添加方法并一起，业务操作简便挤。

返回方法是末尾，包装对象属性怼。

框架操作核心链，实现原理栈展现。

## 获得方法得原生，不传参数转全真。
    get();方法获得的是原生dom对象
    如果不传参数 那么就会获得所有的dom原生对象
## 比较获得是包装，不传参数空铃铛。
    eq(); 获得的对象是JQ对象 
    如果不传参数 返回的就是一个空的对象
    jQuery.fn.init [prevObject: jQuery.fn.init(2)]
## 寻找方法有基础，每次保存前一主。
    find() ; 方法是在前边的基础上再进行查找
    这个被查找的对象 其中会有一个属性
    prevObject ;指向他的前一个对象 其实不只是 find() 方法 只要是查找元素
    被封装成  jQuery.fn.init  对象的都有prevObj 属性

     <script>
        var div = $("ul li").find("div");
        //find 找到的那个 div jq对象 中的 prevObjec 会指向他的前一个jq对象
        // 即  $("ul li").find("div").prevObject ==指向==> $("ul li") 
       //当然是不相等的 因为他们是不同的  jQuery.fn.init  对象 但是里边的 那些dom对象是一样的 
    </script>

## 过滤方法参数多，正常选择函数落。
    filter();参数可以传 css 选择器 jq特有的选择器 还可以传函数
     <script>
        $("ul li").filter(function(index, ele) {
            return ele.className != "demo";
        }).css({
            color: "red"
        });
        //表示过滤掉 ul 下的 li 类名是 demo的
    </script>
## 否定方法过滤反，操作详情易开展。
    <script>
        $("ul li").not(function(index, ele) {
            return ele.className != "demo";
        }).css({
            color: "red"
        });
        //not表示否定即 将 ul 下 li 类名不等于 demo 的全部去掉
    </script>
## 某个元素其中有，他是限定前边走。
     <ul>
        <li></li>
        <li>
            <p class="has"></p>
        </li>
        <li></li>
    </ul>
    <script src="./jquery.js"></script>
    <!-- <script src="./myJquey.js"></script> -->
    <script>
        $("ul li").has(".has").css({
            backgroundColor: "red"
        });
        //has 表示 在 ul 下的 li 中 而且 这个 li 还必须包含子元素 子元素的 class = "has"
    </script>
## 是否交集得对错，冒泡目标判断过。
       <ul>
        <li></li>
        <li id="isMe"></li>
        <li></li>
    </ul>
    <li class="out"></li>
    <script src="./jquery.js"></script>
    <!-- <script src="./myJquey.js"></script> -->
    <script>
        var is = $("ul li").is("#isMe"); //true
        var is = $("ul li").is(".out"); //false
        console.log(is);
        //is 表示 在这些 $("ul li") 选中的所有对象中 有没有 包含 这个.is("#isMe");
    </script>

    //判断冒泡 目标事件源 是否是某个指定的元素对象
    <script>
        $("ul").click(function(e) {
            var target = e.target;
            if ($(target).is("li")) {
                //如果点击的是某个li $(target).is("li") 判断目标对象是否包含 li
                alert(target.innerText);
            } else {
                //如果不是点击的 li 那就是 ul
                alert(this.innerText);
            }
        });
    </script>
## 添加方法并一起，业务操作简便挤。
    add();是将不同选择器选择的内容加入到一起
    这样避免了给不同对象添加相同操作的麻烦
     <script>
        $("ul li").add("div").css({
            position: "absolute"
        });
        //这样就只操作一次 却给不同的对象都添加了样式
    </script>
## 返回方法是末尾，包装对象属性怼。
    end(); 方法 是返回上一个操作对象 
    就就是找到 prevObjec
    <script>
        $("div").find("ul").find("li").css({
            color: "red"
        }).end().css({
            border: "1px solid red"
        });
        //我们首先操作了 li 让 color = "red"
        //然后我们需要 在操作 ul 给他加个边框  $("div").find("ul") 我们可以这样在选择一次
        //但是太麻烦了 我们可以 使用 end() 退回一层即可
    </script>
## 框架操作核心链，实现原理栈展现。
    jQuery的链式操作极大的方便了开发 减少了时间成本 和开发者的精力
    