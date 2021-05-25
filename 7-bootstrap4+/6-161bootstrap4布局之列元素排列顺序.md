# bootstrap4排列顺序
【小城贝尔】
设置排列顺序值，断点有无十二值。

内部再添先后值，书写方便开发值。

## 设置排列顺序值，断点有无十二值。
    设置列元素的排列顺序 底层原理弹性盒模型子元素 order属性
## 内部再添先后值，书写方便开发值。
    order-xx取值范围 1-12
    order-{breakpoint}-xx 表示在特定的屏幕宽度下所排列的位置
    order-first 排到第一个
    order-last  排到在最后一个

    <div class="container">
        <div class="row ">
            <div class="col-lg-3 order-12">排序1</div>
            <div class="col-lg-3">排序2</div>
            <div class="col-lg-3  order-first">排序3</div>
        </div>
        <div class="row  ">
            <!-- 如果在大屏宽度 > 992px  这个元素就排到最后 -->
            <div class="col order-lg-12">1</div>
            <div class="col">2</div>
            <div class="col order-first">3</div>
            <div class="col">4</div>

        </div>
    </div>