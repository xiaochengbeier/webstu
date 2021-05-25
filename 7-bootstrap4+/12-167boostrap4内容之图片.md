# bootstrap内容之图片
【小城贝尔】
添加流动响应式，图片指甲缩略制。

设置图片圆角值，直接类名上夹持。

图片对齐浮动值，块级元素自动持。

最新标准新标签，媒体查询资源添。

不同尺寸单对应，如不支持最后浸。

## 添加流动响应式，图片指甲缩略制。
    .img-fluid 使图片变为响应式 跟随父级容器扩大缩小
    .img-thumbnail 缩略图
## 设置图片圆角值，直接类名上夹持。
    .rounded 图片变为圆角

     <div class="row">
            <div class="col-md-3">
                <!-- 响应式 -->
                <img src="./img/1.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-md-3">
                <!-- 缩略图 -->
                <img src="./img/2.jpg" class="img-thumbnail" alt="">
            </div>
            <div class="col-md-3">
                <!-- 图片圆角 -->
                <img src="./img/2.jpg" class="rounded img-fluid" alt="">
            </div>
        </div>
## 图片对齐浮动值，块级元素自动持。
     .float-left 图片左浮动
     .float-right 图片右浮动
     .d-block 将图片变为块级元素 然后 .mx-auto 表示水平方向 margin auto 然后图片就可以居中对齐

      <div class="row">
            <div class="col-xl-3">
                <!-- 浮动到右边 -->
                <img src="./img/1.jpg" class="img-fluid img-thumbnail float-right" alt="">
            </div>
            <div class="col-xl-3">
                <!-- 浮动到左边-->
                <img src="./img/2.jpg" class="img-thumbnail img-thumbnail float-left" alt="">
            </div>
            <div class="col-xl-3">
                <!-- 图片居中 -->
                <img src="./img/2.jpg" class="rounded img-fluid img-thumbnail  d-block mx-auto" alt="">
            </div>
        </div>
## 最新标准新标签，媒体查询资源添。
## 不同尺寸单对应，如不支持最后浸。
    在不同尺寸下展示不同图片
    ​<picture>
        <source src="大规格图片.jpg"  media="(min-width: 800px)" >
        <source src="中规格图片.jpg"  media="(min-width: 600px)">
        <source src="小规格图片.jpg">
        <img src="通用图片.jpg" alt="这是当浏览器不支持picture标签时显示的图片">
    </picture>