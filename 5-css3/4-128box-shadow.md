# css3box—shadow
【小城贝尔】

横竖偏移模糊值，扩充四方都加持。

设置内部关键字，收尾添加仅一次。

内部扩大元素外，正负偏移效果在。

不同阴影后叠加，设置多个逗号压。

## 横竖偏移模糊值，扩充四方都加持。
## 设置内部关键字，收尾添加仅一次。
    box-shadow 
    inset(内阴影不写表示外阴影)
    1px(横向偏移) -1px（纵向偏移）
    10px（模糊值内外两个方向同时模糊） 
    20px（阴影扩大四个方向同时扩大）
    inset(也可以写在后边但是一般都是写在前边的);
## 内部扩大元素外，正负偏移效果在。
    如果是内阴影阔大是负数就扩大到元素边框外边去了
    .dmeo {
        width: 300px;
        height: 300px;
        border: 1px solid white;
        background: transparent;
        position: absolute;
        /* calc函数符号两边必须加空格 */
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        /*扩大 -10px 就距离边框向外了 10px 当左右偏移10px 阴影才会看到*/
        box-shadow: 10px 10px 0px -10px red inset;
    }
## 不同阴影后叠加，设置多个逗号压。
   不同阴影根据设置的顺序依次向后叠加 不中阴影值之间使用逗号隔开
    .dmeo {
            width: 300px;
            height: 300px;
            border: 1px solid white;
            background: transparent;
            position: absolute;
            /* calc函数符号两边必须加空格 */
            top: calc(50% - 150px);
            left: calc(50% - 150px);
            /*设置多个阴影使用逗号隔开 并且后设置的会在先设置的后边*/
            box-shadow: 0px 0px 10px 40px red inset,
             5px 5px 5px 10px green, 
             5px 5px 5px 15px rgb(0, 19, 128);
    }