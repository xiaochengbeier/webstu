# bootstrap4工具之间隔
【小城贝尔】

内外边距间隔生，上下左右方向撑。

竖直水平坐标轴，对应方向全拿揉。

取值范围零到五，设置居中自动主。

单位参考根中值，响应断点也把持。

## 内外边距间隔生，上下左右方向撑。
    m margin的简称
    p padding的简称
    t r b l 上右下左四个方向 
## 竖直水平坐标轴，对应方向全拿揉。 
    m/p-x  表示设置 margin/padding left 和 right的值
    m/p-y  表示设置 margin/padding top 和 bottom的值
## 取值范围零到五，设置居中自动主。
    m/p-xx 取值范围是一到五
    0 - 这个Class属性会设定 margin 或 padding 的样式值为 0
    1 - (默认时)这个Class属性会设定 margin 或 padding 以 $spacer * .25规格呈现
    2 - (默认时) 这个Class属性会设定 margin 或 padding 以 $spacer * .5规格呈现
    3 - (默认时)这个Class属性会设定 margin 或 padding 以 $spacer规格呈现
    4 - (默认时) 这个Class属性会设定margin 或 padding 以 $spacer * 1.5规格呈现
    5 - (默认时)这个Class属性会设定 margin 或 padding 以 $spacer * 3规格呈现
    auto - 这个Class属性会设定 margin 值 auto（按浏览器默认值自由展现）。
## 单位参考根中值，响应断点也把持。
   单位是rem 参考根节点font-size

     <div class="row">
            <div class="bg-info col-4 px-5 py-5"> px-5 py-5</div>
            <div class="border bg-info col-4 px-lg-5"> 响应式 当在大屏幕下才会设置 px-lg-5</div>
     </div>
