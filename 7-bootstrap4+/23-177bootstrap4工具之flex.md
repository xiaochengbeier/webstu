# bootstrap4工具之flex
【小城贝尔】

触发展示弹性盒，内联特性易加得。

设置主轴可反向，是否换行也同样。

对齐主轴值五项，起止空间环绕让。

交叉设置单多行，多行设置单迷茫。

多行取值主轴比，仅少牵拉一值挤。

单行设置中止起，牵拉默认基线体。

子类对齐看自己，取值只需看单起。

压缩伸展零一值，填充自将空白持。

排列顺序十二值，以上属性响应持。

## 触发展示弹性盒，内联特性易加得。
    触发弹性盒子
    .d-flex
    .d-{breakpoint}-flex
    .d-{breakpoint}-inline-flex
## 设置主轴可反向，是否换行也同样。 
    设置主轴方向
    .flex-row   .flex-{breakpoint}-row
    .flex-row-reverse   .flex-{breakpoint}-row-reverse 

    .flex-colum  .flex-{breakpoint}-colum
    .flex-colum-reverse  .flex-{breakpoint}-colum-reverse

    是否换行
    .flex-wrap    .flex-{breakpoint}-wrap
    .flex-nowrap  .flex-{breakpoint}-nowrap
    .flex-wrap-reverse   .flex-{breakpoint}-wrap-reverse
    逆转换行仅仅是将行逆反了 每一行中的元素并没有被逆反
## 对齐主轴值五项，起止空间环绕让。
    主轴对齐方式
    .justify-content-start        主轴开始方向对齐
    .justify-content-end          主轴结束方向对齐
    .justify-content-center       居中对齐
    .justify-content-between      两端对齐中间空间平分
    .justify-content-around       空白空间环绕对齐
    响应式
    .justify-content-{breakpoint}-xxx
## 交叉设置单多行，多行设置单迷茫。
    设置交叉轴对齐方式  如果是多行设置对单行没有任何效果
## 多行取值主轴比，仅少牵拉一值挤。
    设置交叉轴对齐方式 交叉轴对齐方式比 主轴只是仅仅多一个值  
    .align-content-{breakpoint}-stretch 默认对齐方式 表示如果不设置交叉轴方向元素宽高自己平分剩余空间然后占满
    .align-content-start        交叉轴开始方向对齐
    .align-content-end          交叉轴结束方向对齐
    .align-content-center       居中对齐
    .align-content-between      两端对齐中间空间平分
    .align-content-around       空白空间环绕对齐
    响应式
    .align-content-{breakpoint}-xxx
## 单行设置中止起，牵拉默认基线体。
    设置单行对齐方式
    .align-items-start          交叉轴开始方向对齐
    .align-items-end            交叉轴结束方向对齐
    .align-items-center         居中对齐
    .align-items-baseline       基线对齐
     响应式
    .align-itmes-{breakpoint}-xxx
## 子类对齐看自己，取值只需看单起。
    设置交叉轴方向自对齐 这个是设置在元素自己身上的 上边那些都是设置在父级元素身上的
    如果父级也设置了交叉轴对齐方式 这个只能覆盖 父级设置的单行对齐方式 
    .align-self-start          交叉轴开始方向对齐
    .align-self-end            交叉轴结束方向对齐
    .align-self-center         居中对齐
    .align-self-baseline       基线对齐
     响应式
    .align-self-{breakpoint}-xxx
## 压缩伸展零一值，填充自将空白持。
    .flex-grow/shrink-1   .flex-{breakpoint}-grow/shrink-1  
    表示在特定的屏幕尺寸下允许该元素伸展或者缩小占有剩余空白空间

    .flex-grow/shrink-0   .flex-{breakpoint}-grow/shrink-0 
     表示在特定的屏幕尺寸不下允许该元素伸展或者缩小占有剩余空白空间

     .flex-fill在一系列兄弟元素上使用该类来强制它们变成相等的宽度，同时占据所有可用的水平空
     .flex-{breakpoint}-fill
## 排列顺序十二值，以上属性响应持。 
     .order-{1~12}; 设置弹性盒子中每个元素的排放位置 越小越靠近主轴起始方向
     响应式
    .order-{breakpoint}}-{1~12}
