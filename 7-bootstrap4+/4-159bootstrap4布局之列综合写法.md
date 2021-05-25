# bootstrap4布局之混合模式实现响应式
【小城贝尔】

一列类名值多个，不同屏幕状态落。

由此实现响应过，媒体查询底层落。

## 一列类名值多个，不同屏幕状态落。
## 由此实现响应过，媒体查询底层落。

    <div class="container">
        <div class="row">
            <!-- 在超大屏幕下一行展示五个 -->
            <!-- 在大屏幕下一行展示四个 -->
            <!-- 在中等屏幕下一行展示三个 -->
            <!-- 在小屏幕下一行展示两个 -->
            <!-- 在超小屏幕下一行展示一个 -->
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"> 在超大屏幕下一行展示五个</div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"> 在大屏幕下一行展示四个 -</div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"> 在中等屏幕下一行展示三个</div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"> 在小屏幕下一行展示两个 -</div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"> 在超小屏幕下一行展示一个</div>
        </div>
    </div>