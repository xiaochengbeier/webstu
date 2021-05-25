# css3 background-image
【小城贝尔】

背景图片多引入，常用备份体验渡。

不同属性分别值，使用逗号隔离池。

设置尺寸像素值，覆盖包含比例尺。

内部间距盒子去，定位参考默认距。

边框内容盒同在，设置背景区域爱。

图片截断同上值，另加文本谷歌值。

谷歌文本填满色，透明截断背景乐。

附着定位背景图，默认滚动当前涂。

本地跟随内容走，超出影藏看视口。

是否平铺有横竖，此值只能一个入。

环绕压缩半个添，直到空缺新空间。

此种方式横竖值，分别设置可同时。

## 背景图片多引入，常用备份体验渡。
    background-image:url(),url();
    css3背景图片支持引入多张图片
    引用场景：有时候需要引入的图片资源较大加载耗时
    这个时候就可以将一张小的图片作为备用引入
## 不同属性分别值，使用逗号隔离池。
    设置不同背景图片的值使用 "," 分隔

    background-image: url(./9.jpg), url(./0.jpg);
    background-size: 150px 100%, 150px 100%;
    background-position: 0, 150px;
    background-repeat: no-repeat;
## 设置尺寸像素值，覆盖包含比例尺。
    background-size:像素 ,百分比,
                    cover：按照图片百分比覆盖该元素
                    contain：按照图片百分比 让该元素 包含一张图片
## 内部间距盒子去，定位参考默认距。
    background-origin：默认值是 padding-box 意思是背景图片填充从 padding部分开始 
    是background-position 默认参考位置
## 边框内容盒同在，设置背景区域爱。
    background-origin:取值还有 border-box   content-box
       .dmeo {
            background: transparent;
            position: absolute;
            /* calc函数符号两边必须加空格 */
            top: calc(50% - 150px);
            left: calc(50% - 150px);
            width: 300px;
            height: 300px;
            border: 30px solid rgba(26, 192, 20, .2);
            padding: 30px;
            background-image: url(./9.jpg);
            background-origin: content-box;
            background-repeat: no-repeat;
        }
## 图片截断同上值，另加文本谷歌值。
    background-clip:截断背景图片和上边background-origin取值一样
    border-box ：默认值按照边框范围截断
    padding-box：按照padding宽高截断
    content-box：按照内容区大小截断
       {
            background-image: url(./9.jpg);
            /*背景图片从 padding-box开始渲染*/
            background-origin: padding-box;
            /*背景图片只要超出content-box 就被截断*/
            background-clip: content-box;
            background-repeat: no-repeat;
        }
    另外还有一个按照文本截断只有webkit 系列浏览器实现了
## 谷歌文本填满色，透明截断背景乐。
    使用文本截断还需要将文字设置成透明的颜色才可以看到背景图片
    这个属性也是只有webkit 系列浏览器实现了

    {
            background-image: url(./9.jpg);
            font-size: 60px;
            font-weight: bolder;
            /* color: transparent; 文字背景颜色透明 */
            /*使用文字截断背景*/
            -webkit-background-clip: text;
            background-clip: text;
            background-position: 10px;
            /*设置文字背景透明*/
            -webkit-text-fill-color: transparent;
     }
## 附着定位背景图，默认滚动当前涂。
    background-attachment:设置背景图片移动时候的参考值
    scroll：默认值按照当前元素进行定位
## 本地跟随内容走，超出影藏看视口。
    local：根据文本内容定位也就是说会跟随文本移动
    fixed:根据浏览器窗口定位但是位置如果超出当前元素了会被隐藏

    {
            background-image: url(./0.jpg);
            background-size: 100px;
            background-repeat: no-repeat;
            background-position: center;
            overflow-y: scroll;
            /* scroll：默认值按照当前元素进行定位 
            background-attachment: scroll;
            */
            /* 参照文本内容定位 
            background-attachment: local;
            */
            /* fixed:根据浏览器窗口定位但是位置如果超出当前元素了会被隐藏
            background-attachment: fixed;
             */
    }
## 是否平铺有横竖，此值只能一个入。
      /*  background-repeat: repeat-x repeat-y; 如果写成这样不会被作用在控制台会被划掉*/
            background-repeat: repeat-x;
## 环绕压缩半个添，直到空缺新空间。
## 此种方式横竖值，分别设置可同时。
        /* 
        表示水平方向 round  竖直方向 space
        就只有这两个值可以同时出现 
        */
        background-repeat: round space;