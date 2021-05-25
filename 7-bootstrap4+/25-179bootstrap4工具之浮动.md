# bootstrap4工具之浮动
【小城贝尔】

底层布局弹性盒，子类浮动冲突隔。

左右浮动属性值，端点查询符合时。

清除浮动一类名，直接调用麻烦平。

## 底层布局弹性盒，子类浮动冲突隔。
    由于boostrap4布局使用的是弹性盒子 而浮动在弹性盒子中是无效的所以这个值得注意
## 左右浮动属性值，端点查询符合时。
    .float-left
    .float-right
## 清除浮动一类名，直接调用麻烦平。
    .clearfix  清除浮动


     <!-- 浮动在弹性盒子中没效果 -->
        <div class="row d-block  clearfix  bg-warning mt-5">
            <div class="col-3 float-right">浮动右</div>
            <div class="col-3 float-left">浮动左</div>
        </div>