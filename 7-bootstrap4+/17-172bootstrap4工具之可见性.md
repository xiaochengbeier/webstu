# bootstrap4工具之可见性
【小城贝尔】


是否可见视觉中，实际结构页面通。

对比显示大不同，结构消失无影从。

## 是否可见视觉中，实际结构页面通。
    .visible 可见
    .invisible 不可见  只是表现为肉眼看不到 实际结构还是在页面中存在
## 对比显示大不同，结构消失无影从。
    .d-none 这个类名是真正消失

     <div class="row">
            <div class="col-4 bg-dark visible text-white">可见</div>
            <div class="col-4 bg-info invisible">不可见</div>
            <!-- visibility: hidden!important；  css底层实现属性 -->
        </div>

