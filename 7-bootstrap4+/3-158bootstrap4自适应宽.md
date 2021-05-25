# bootstrap4布局之自适应宽和内容撑开宽
【小城贝尔】
所占宽度不指定，剩余空间自适应。

添加多个等宽列，如欲换行宽百窃。

设置列宽内容进，断点条件要指定。

同样字符类名值，后缀自动英文持。

## 所占宽度不指定，剩余空间自适应。
    col 表示自适应宽度
## 添加多个等宽列，如欲换行宽百窃。
    如果在一个 row中添加多个 col 那么这些 col就会自动平分row的空间
    如果想让 这些col换行可以使用 一个元素给其添加 w-100 这个类名 表示占全部宽度

     <div class="container">
        <div class="row">
            <div class="col">自适应宽1</div>
            <div class="col">自适应宽2</div>
            <!-- 独占宽度导致自适应宽度元素换行 -->
            <div class="w-100" style="height: 0px; border:none"></div>
            <div class="col">自适应宽3</div>
            <div class="col">自适应宽4</div>
        </div>
    </div>
## 设置列宽内容进，断点条件要指定。
    col-auto 表示宽度由类容撑开
## 同样字符类名值，后缀自动英文持。
    col-{breakpoint表示 xl/lg/md/sm}-auto；
    在特定的条件下使用内容撑开

     <div class="container">
        <div class="row">
            <div class="col-auto">内容决定宽</div>
            <div class="col-md-auto">在中等屏幕下才是内容决定宽</div>
        </div>
    </div>