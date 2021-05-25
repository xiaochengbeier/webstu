# jQuey 包裹元素
【小城贝尔】

包裹元素添父级，符合语法参随意。

如若使用已存在，它是复制非剪戴。

内部包裹墙皮在，所有子级加父债。

包裹所有看基准，剪切调整同级狠。

去除父级不包裹，一次只去一级躲。

## 包裹元素添父级，符合语法参随意。
    wrap() 给选中的元素添加一个父级标签
    至于参数只要是符合语法的都可以
    wrap("可以是自己创建的元素标签 || 通过选择器选中的标签 || 标签字符串")
## 如若使用已存在，它是复制非剪戴。
    如果参数是 通过选择器选中的标签  值得注意的是不像追加插入那样是剪切操作 这个是复制操作
     <div class="demo"></div>
     <div class="out"></div>
     <script>
        $(".demo").wrap("<div></div>");
        $(".demo").wrap($("<div></div>"));
        $(".demo").wrap(".out"); //对于 .out 是复制操作
    </script>
## 内部包裹墙皮在，所有子级加父债。
    wrapInner();给所选中元素所有的子元素添加一个共有父级标签
    <ul class="wrapInnerDemo">
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
    $(".wrapInnerDemo").wrapInner("<div></div>");
    </script>
## 包裹所有看基准，剪切调整同级狠。
    wrapAll() ; 这个方法是给所选择的所有标签添加一个共有父级
    如果所选标签不在同一级别 那么会以第一个选中的为参考然后将其他的剪切到同一级
    <li></li>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        $("li").wrapAll("<div></div>");
        //会将ul >li 都剪切到 和第一个li同一级别然后给包上同一个父级
    </script>
## 去除父级不包裹，一次只去一级躲。
    unwrap() 去除所选元素的包裹层一次只会去除一层而且到 body标签就无法去除了
    <div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    </div>

    <script>
        $("li").unwrap();
    </script>