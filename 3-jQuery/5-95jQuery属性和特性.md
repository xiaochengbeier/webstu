# jQuery 属性和特性
【小城贝尔】

属性包含范围宽，底层拿取方法专。

布尔属性拿其值，一旦书写有其实。

操作特性是自带，赋值自定隐藏在。

布尔属性看状态，对错只有二值在。

## 属性包含范围宽，底层拿取方法专。
    属性包括自定义属性 和 自带的属性 
    在 原生 js中 
    getAttribute()  setAttribute()
    可以操作任何属性包括 自定义的属性
    在 jQuery中对应 封装了 attr() 这个方法 存取一体
    在 jQuery中封装的 prop() 这个方法 只能操作自带的属性
## 布尔属性拿其值，一旦书写有其实。
    对于布尔属性 如 checked 等 只要在标签中写了有没有属性值 属性值是什么都无所谓
    获得的都是对应的 属性
## 操作特性是自带，赋值自定隐藏在。
    prop(); 这个方法是专门操作 特性的 即自带的属性
    如果你用这个给元素赋值并非自带的属性 那么这个属性不会再行间样式出现
    但是可以访问
## 布尔属性看状态，对错只有二值在。
    prop对于布尔属性 获得的是 其真实状态 即 只有 true 和 false 两个值
    设置值也是对应设置 true 和false 也可以


    <div class="hasMe" handsome="very handsome"></div>
    <input type="radio" checked="perfect">

    <script>
        //使用prop 获得自定义属性
        var prop = $(" .hasMe ").prop("handsome ");
        console.log(prop); //undefined

        //使用 attr 获得自定义属性
        var attr = $(".hasMe ").attr("handsome");
        console.log(attr); //very handsome

        //使用prop 获得布尔属性
        var prc = $("input[ type=radio] ").prop("checked");
        console.log(prc); //true

        //使用arr 获得获得布尔属性
        var arc = $("input[ type=radio] ").attr("checked");
        console.log(arc); //checked

        //使用 prop 赋值自定义属性
        $(".hasMe").prop("school", "xiAnPE"); //可以设置也可以访问但是行间样式没有
        console.log($(".hasMe").prop("school")); //xiAnPE
    </script>