# bootstrap4偏移和间距
【小城贝尔】
偏移挑选断点值，参照标准左把持。

最左偏移顶后动，后续元素影响重。

距离左右外边局，简写字母断电锯。

计算结果自动去，会有影响带后续。

## 偏移挑选断点值，参照标准左把持。
    offset-xx表示偏移的列数 参考左边移动
    offset-{breakpoint}-xx表示在一定条件下才会偏移
## 最左偏移顶后动，后续元素影响重。
    如果该元素右边有兄弟元素会被带着一起移动

    <div class="container">
        <div class="row ">
            <div class="col-md-3 offset-2">1</div>
            <div class="col-md-3">2</div>
            <div class="col-md-3">3</div>
        </div>
        <div class="row ">
            <div class="col-md-3 offset-lg-2">1</div>
            <div class="col-md-3">2</div>
            <div class="col-md-3">3</div>
        </div>

    </div>
## 距离左右外边局，简写字母断电锯。
## 计算结果自动去，会有影响带后续。
    ml-auto 表示 margin-left自适应如果后边有元素会被顶着一起动
    mr-auto 表示 margin-right自适应如果后边有元素会被顶着一起动
    ml-lg-auto
    mr-{breakpont}-auto 表示在一定条件下 margin自适应
    <div class="container">
        <div class="row ">
            <div class="col-md-3 ml-auto">1</div>
            <div class="col-md-3">2</div>
            <div class="col-md-3">3</div>
        </div>
        <div class="row ">
            <!-- 表示在大屏尺寸下左边margin-left自适应 -->
            <div class="col-md-3 ml-lg-auto ">1</div>
            <div class="col-md-3">2</div>
            <div class="col-md-3">3</div>
        </div>

    </div>