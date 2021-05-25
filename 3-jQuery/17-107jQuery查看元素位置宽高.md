# jQuery位置宽高
【小城贝尔】
获得位置看文档，不管父级定位晃。

设置位置也作用，详情请看行间动。

如若探寻想定位，对应方法赋值跪。

上左位置滚动条，窗口元素都逍遥。

获得元素找宽高，内部间距有算到。

盒子模型看整体，外部宽高参数起。

## 获得位置看文档，不管父级定位晃。
    offset();方法获得元素的位置 参考文档不管父级是否有定位
## 设置位置也作用，详情请看行间动。
    还可以使用对象作为参数设置位置 作用于行间样式
      <script>
        var offset = $(".offset").offset();
        console.log(offset);
        /**
         *{top: 30, left: 30}
         */
        //赋值
        $(".offset").offset({
            left: 400,
            top: 40
        });
    </script>
## 如若探寻想定位，对应方法赋值跪。
    position()方法根据父级定位获得位置 不可以赋值
    <script>
        //position()
        var positon = $(".son").position(); //获得的位置是参考父级定位
        console.log(positon); //{top: 30, left: 30}
        ; //var positon = $(".son").position({top:50,left:60}); 不可以赋值
    </script>
## 上左位置滚动条，窗口元素都逍遥。
     <script>
        //获得窗口滚动条的位置
        var scrollLeft = $(document).scrollLeft();
        var scrollTop = $(document).scrollTop();
        console.log(scrollLeft + "   " + scrollTop);
        //获得元素滚动条的位置
        var scrollLeft = $(".father").scrollLeft();
        var scrollTop = $(".father").scrollTop();
        console.log(scrollLeft + "   " + scrollTop)
        //给滚动条位置赋值
        // $(".father").scrollTop(5000);
        $(".father").scrollTop("5000"); //注意这里赋值不能是加 px
    </script>
## 获得元素找宽高，内部间距有算到。
    width(); height(); 获得元素内容区宽高
    innerHeight() ;innerWidth(); 获得内部宽搞包括 padding值
## 盒子模型看整体，外部宽高参数起。
    <script>
        //获得元素宽高
        var width = $(".hw").width();
        var height = $(".hw").height();
        console.log(width + "  " + height); //50  50 内容区宽高
        var innerWidth = $(".hw").innerWidth();
        var innerHeight = $(".hw").innerHeight();
        console.log(innerWidth + "   " + innerHeight); //70   70 内容区加上 padding
        var outerWidth = $(".hw").outerWidth();
        var outerHeight = $(".hw").outerHeight();
        console.log(outerWidth + "    " + outerHeight); //80    80 内容区加上 padding 边框
        var outerWidth = $(".hw").outerWidth(true);
        var outerHeight = $(".hw").outerHeight(true);
        console.log(outerWidth + "    " + outerHeight); //140    140 内容区加上 padding 边框 margin
    </script>