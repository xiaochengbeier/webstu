# bootstrap4工具之display
【小城贝尔】

展示取值行块兼，弹性盒子一马先。

展示隐藏响应间，后续符合自动添。

## 展示取值行块兼，弹性盒子一马先。
    .d-block
    .d-inline
    .d-inline-block
    .d-flex
    .d-inline-flex
## 展示隐藏响应间，后续符合自动添。
    .d-none 表示display：none;
    当使用响应式的时候
    .d-{breakpoint}-{value} 用于 sm、md、lg、xl等多设备适配
    设置了一个响应层 那么大于它的那些响应层也是同时作用的


      <div class="container">
        <div class="row">
            <!-- 除了在中等屏幕展示在其他条件下都不展示 -->
            <div class="py-3 bg-warning col-md-5 d-none d-md-block d-lg-none ">除了在中等屏幕展示在其他条件下都不展示</div>
        </div>

        <div class="row mt-5">
            <!-- 除了大屏幕其他条件下都展示 -->
            <div class="py-3 bg-warning col-md-5  d-lg-none d-xl-block ">除了大屏幕其他条件下都展示</div>
        </div>
    </div>