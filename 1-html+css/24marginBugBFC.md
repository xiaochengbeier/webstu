# 两个bug  bfc
【小城贝尔】

父子元素有嵌套，上外边距塌陷掉。

兄弟并列有间距，外边上下合并去。

格式操作上下文，解决异常方法纯。

触发格式定位绝，展示属性行块携。

浮动溢出均触发，灵活选择业务佳。


## 父子元素有嵌套，上外边距塌陷掉。
    当两个元素嵌套的时候上外边距会塌陷 
    即子类元素设置margin-top 在小于父类元素margin-top的时候不会有任何效果
    当子类设置margin-top 在大于父类元素margin-top的时候会带着父级元素一起动
## 兄弟并列有间距，外边上下合并去。
    两个兄弟元素上边设置margin-bottom  下边设置margin-top  这两个外边距会合并在一起 以大的为准1
## 格式操作上下文，解决异常方法纯。
    解决这两个bug的方法就是 触发 bfc（block  format content） 块级格式化上下文
## 触发格式定位绝，展示属性行块携。
    触发bfc的操作有  
    position：absolute；
    display：inline-block；
## 浮动溢出均触发，灵活选择业务佳。
    float：right/left;
    overflow:hidden;
    使用时根据具体情况灵活选择