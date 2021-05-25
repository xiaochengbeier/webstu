# overflow和resize
【小城贝尔】

默认可见内溢出，横竖滚动自动扑。

横竖一个非默认，另一添加自动证。

调节尺寸给用户，全部方向和横竖。

使用莫忘加辅助，溢出不能可见铸。

## 默认可见内溢出，横竖滚动自动扑。
    overflow:   visible 默认值
                hidden 超出隐藏
                scroll 超出隐藏  展示滚动条
                auto  超出隐藏 展示滚动条
## 横竖一个非默认，另一添加自动证。
    overflow-x /  overflow-y  如果任意一个设置了 非默认值 visible 那么另一个默认值 为 auto

    /* 设置  overflow-x: scroll 那么 overflow-y: auto */
    overflow-x: scroll;
## 调节尺寸给用户，全部方向和横竖。
    resize: both 用户可以自己调整元素宽高
            vertical 只可以调整竖直方向高
            horizontal 只能调整水平方向宽 
## 使用莫忘加辅助，溢出不能可见铸
    使用resize 属性必须配合 overflow 的非默认属性（visible）使用
    /* 表示水平方向可以拉伸 但是必须配和 overflow:非默认值 visible使用 */
    resize: horizontal;