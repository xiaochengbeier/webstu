# css3 border-image
【小城贝尔】

图片资源先引入，渐变颜色可过渡。

切割图片四个值，上右下做线割实。

切割结果九块持，内容填充字符值。

是否平铺有四值，牵拉空间足够时。

直接平铺稀碎间，环绕压缩半个添。

外部扩张位置边，负数设置视不见。

设置宽度倍数见，自动参考切割线。

## 图片资源先引入，渐变颜色可过渡。
    border-image-source:url();首先引入图片资源
    border-image-source：linear-gradient(red,blue);还可以使用渐变颜色

      /* 图片资源先引入，渐变颜色可过渡。 
        一旦设置了背景border-color 就被覆盖了
      */
    /* border-image-source: linear-gradient(red, pink); */
    /* border-image-slice: 100; */
    border-image-source: url(./9.jpg);
    border-image-slice: 100;
## 切割图片四个值，上右下做线割实。
    border-image-slice：
    有四个值分别对应背景图片的四条切割线位置 
    top（上切割线以上顶边为参考） 
    right（右切割线的值以右边为参考） 
    bottom(下切割线以下边为参考) 
    left（左切割线以左边为参考）
    注意：这里的值 可以是百分数 和数字 数字表示像素但是不能将"px" 写出来
          如果不写的话 默认值是 100% 
## 切割结果九块持，内容填充字符值。
    这四条切割线将图片切割成9块 然后覆盖到边框上也就是
    切割的四个角 放在边框的四个角
    上下左右四块放在边框的上下左右
    如果需要将元素的内容用切割的中间那块覆盖 
    给  border-image-slice：100 100 100 100 fill;
    添加 fill关键字即可
## 是否平铺有四值，牵拉空间足够时。
    对于背景图片是否平铺有四个值
    stretch：牵拉当空间大的时候将图片牵拉填充
    space:先使用空间填充多余部分然后当位置足够的时候添加图片填充
## 直接平铺稀碎间，环绕压缩半个添。
    repeat:直接平铺 如果空间不够使用图片局部平铺
    round：先拉伸当位置可以容下半个新的图片的时候添加新的图片压缩并排
## 外部扩张位置边，负数设置视不见。
    border-image-outset：设置图片距离边框下边的位置 如果是负数设置不会有效果
## 设置宽度倍数见，自动参考切割线。
    border-imag-width： 设置背景图片宽度 默认是 1 表示 1倍的边框宽度 
                        还可以设置 "px" 
                        如果是 auto表示的是向 slice设置的值看齐slice设置的是像素只是不写 “px”
                        所有 auto参考slice也是像素并不是倍数


 .dmeo {
            border: 100px solid rgb(26, 192, 20);
            background: transparent;
            position: absolute;
            /* calc函数符号两边必须加空格 */
            top: calc(50% - 150px);
            left: calc(50% - 150px);
            width: 300px;
            height: 300px;
            /* 图片资源先引入，渐变颜色可过渡。 
               一旦设置了背景border-color 就被覆盖了
             */
            /* border-image-source: linear-gradient(red, pink); */
            /* border-image-slice: 100; */
            border-image-source: url(./9.jpg);
            /* slice 可以设置四个值 上，右，下，左 切割线的位置 fill 表示内容区元素也填充  */
            border-image-slice: 100;
            /* repeat 有 四个值  repeat round space stretch 可以同时设置横竖两个方向的平铺值 */
            border-image-repeat: space round;
            /* outset设置距离边框下边的位置 设置负数不会有效果 */
            border-image-outset: 10px;
            /* border-image-width: 1; 背景图片宽度单位是几倍的边框宽度 */
            /* border-image-width: 20px; 背景图片宽度单位是像素 */
            /* border-image-width: auto; 向slice值看齐 单位是像素 */
        }