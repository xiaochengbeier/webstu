# bootstrap4工具之宽高
【小城贝尔】

宽高设置有四值，每档二五再加持。

内部原理比百分，默认样式自动吞。

设置最大有宽高，布局样式防范要。

## 宽高设置有四值，每档二五再加持。
    w/h-25
    w/h-50
    w/h-75
    w/h-100 默认值
## 内部原理比百分，默认样式自动吞。
    内部都是参考 父级宽高
     <div class="row d-block" style="height: 100px">
            <div class="bg-info w-25"> w-25</div>
            <div class="bg-info w-50"> w-50</div>
            <div class="bg-info w-75"> w-75</div>
            <div class="bg-info w-100"> w-100</div>
     </div>

     <div class="row " style="height: 100px">
            <div class="bg-info h-25"> h-25</div>
            <div class="bg-info h-50"> h-50</div>
            <div class="bg-info h-75"> h-75</div>
            <div class="bg-info h-100"> h-100</div>
    </div>
## 设置最大有宽高，布局样式防范要。
    mh-xx 最大高度
    mw-xx 最宽高度
    <div class="container">
        <div class="row " style="height: 100px">
            <!-- 设置最大宽度 -->
            <div class="bg-info mw-100" style="width: 400px"> mw-100</div>
        </div>
        <div class="row " style="height: 100px">
            <!-- 设置最大高度 -->
            <div class="bg-info mh-100" style="height: 200px"> mh-100</div>
        </div>
    </div>
   