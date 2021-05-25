# bootstrap4布局之对齐方式
【小城贝尔】

底层原理弹性盒，异于版本三流模。

对齐方式水平向，底层本是主轴上。

起止方向中间值，空间两端环绕持。

竖直方向交叉轴，起止设置中间愁。

以上设置包裹行，内容设置莫彷徨。

对齐使用自我值，上下中间起止迟。

## 底层原理弹性盒，异于版本三流模。
    boostrap4布局底层使用的弹性盒模型 不同于bootstrap3使用的的是浮动模型
## 对齐方式水平向，底层本是主轴上。
## 起止方向中间值，空间两端环绕持。
     水平方向的对齐方式底层就是弹性盒子的主轴对齐方式
    justify-content-start  左对齐 主轴起始方向
    justify-content-end    右对齐 主轴结束方向
    justify-content-center 居中
    justify-content-between 两端对齐中间自适应
    justify-content-around  两端空出间隙是中间间隙的一半

    <div class="container">
        <div class="row justify-content-start">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row justify-content-end">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row justify-content-between">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row justify-content-around">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
    </div>
## 竖直方向交叉轴，起止设置中间愁。
     竖直方向对齐方式就是弹性盒子交叉轴对齐方式
     align-items-start  顶对齐 交叉轴起始方向
     align-items-end    底对齐交叉轴结束方向
     align-items-center 居中对齐

     <div class="container">
        <div class="row align-items-start">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row align-items-end">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3"></div>
        </div>
    </div>
## 以上设置包裹行，内容设置莫彷徨。
## 对齐使用自我值，上下中间起止迟。
    竖直方向对齐方式设置在子元素身上
    align-self-start  顶对齐 交叉轴起始方向
    align-self-end 底对齐交叉轴结束方向
    align-self-center 居中对齐
    如果父级设置了水平方向的对齐方式可以覆盖它

     <div class="row align-items-center">
            <div class="col-lg-3 align-self-start"></div>
            <div class="col-lg-3 align-self-end"></div>
            <div class="col-lg-3 align-self-center"></div>
     </div>