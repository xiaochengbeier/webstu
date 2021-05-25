# bootstrap4工具之border
【小城贝尔】

边框设置四方值，默认样式早加持。

取消边框后缀零，圆角属性过去停。


## 边框设置四方值，默认样式早加持。
    .border 设置四个方向的边框
    .border-top/right/bottom/left 单设置一个方向的边框
    边框的宽等属性是已经定义好了的我们通过框架提供的类名无法改变
## 取消边框后缀零，圆角属性过去停。
    取消边框
    .border-0
    .border-top/right/bottom/left-0 
    .rounded设置边框圆角


     <div class="container">
        <div class="row">
            <div class="col-md-4 py-4 border rounded border-info">border border-info</div>
            <div class="col-md-4 py-4 border-right border-warning">border-right border-warning</div>
        </div>
     </div>