# bootstrap4工具之定位
【小城贝尔】

定位静态绝相对，还有视口粘贴醉。

相对视口添上下，粘贴仅限身体下。

## 定位静态绝相对，还有视口粘贴醉。
    .position-static    默认值
    .position-relative  相对定位
    .position-absolute  绝对定位
    .position-fixed     相对于视口定位
    .position-sticky    粘性定位
## 相对视口添上下，粘贴仅限身体下。
    .fixed-top    固定在top顶部
    .fixed-bottom 固定在bottom底部
    .sticky-top   贴齐于top顶部



    <div class="container">
        <div class="row  mt-5" style="height: 100px">
            <div class="col-3 border  py-3 px-3 bg-warning position-absolute">绝对定位</div>
            <div class="col-3 border  py-3 px-3 bg-warning position-relative">相对定位</div>
            <div class="col-3 border  py-3 px-3 bg-warning position-fixed">相对于视口定位</div>
        </div>

        <div class="row">
            <div class="fixed-top">固定到顶部</div>
            <div class="fixed-bottom">固定到底部</div>
        </div>
        <!-- 必须放到body 直接子级才可以使用 并且兼容性不好 -->
        <div class="sticky-top">黏贴定位</div>
    </div>
    