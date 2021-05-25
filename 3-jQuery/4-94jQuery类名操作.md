# jQuey类名操作
【小城贝尔】

类名添加和移出，隐式迭代嘲哳涂。

参数常理可函数，操作奔向灵活渡。

日常使用类字符，如若多个空格读。

如若移出不传参，删除所有为哪般。

判断类名是否有，方法提供参数走。

类名操作虽简单，配合样式成倍翻。

提高样式利用率，业务操作去艰巨。

加上样式会缓存，行为操作更封神。

## 类名添加和移出，隐式迭代嘲哳涂。
    addClass() 
    removeClass();
    都会进行隐式迭代即会对选中的每一个元素进行操作
## 参数常理可函数，操作奔向灵活渡。
    对于参数还是可以传函数 集体操作某一原生DOM元素 
## 日常使用类字符，如若多个空格读。
    日常使用还是 字符串表示操作的类名
    如果要添加或者删除多个类名 使用 空格将不同的类名隔开
    removeClass("name1  name2");
## 如若移出不传参，删除所有为哪般。
    如果 removeClass(); 不传参数那么就会删除所有的类名
## 判断类名是否有，方法提供参数走。
    $("").hasClass(""); 判断所选的元素中是否含有某个类名
## 类名操作虽简单，配合样式成倍翻。
    类名操作就是添加 去除判断所选中的元素中有没有 某个类名操作比较简单
    但是根据类名  配合上 css文件中的类选择器对于样式的操作就有了极大的灵活性
## 提高样式利用率，业务操作去艰巨。
    可以通过在 css文件中定义好样式 然后通过
     动态的给 标签添加类名就可以使这个标签动态的获得或者取消样式
## 加上样式会缓存，行为操作更封神。
    在加上浏览器是 会缓存css 文件 这样通过js 改变类名的方式更加节省了加载资源所消耗的事件
    更好的提高用户体验

    <div class="demo wrp">
        <div class="hasMe"></div>
        <div class="you yours"></div>
        <div class="he"></div>
    </div>


    <script>
        $(".demo").addClass("handSome");
        $(".demo").removeClass("handSome demo");
        var has = $(".you").hasClass("yours");
        console.log(has); //true
        var he = $(".wrp div").hasClass("he");
        console.log(he); //true

         $(".wrp div").addClass(function(index, ele) {
            console.log(index + "  " + ele); // idex 表示索引 ele 表示每个元素的类名
        });

         $(".wrp div").addClass(function(index, ele) {
            if (ele.indexOf("yours") != -1) {
                return "mine"; //意思是如果 含有 yours这个类名 给他加上 mine这个类名
            }
        });
    </script>
