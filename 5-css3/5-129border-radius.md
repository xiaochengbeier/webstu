# css3 border-radius
【小城贝尔】

边框弯曲半径值，横竖设置椭圆值。

大小宽高边界值，语法上下左右持。

简写组合斜杠实，四四对应可一值。

正半圆形巧设值，叶片形状也和时。

## 边框弯曲半径值，横竖设置椭圆值。
    border-radius设置的是边框弯曲的半径值
    以设置得横竖值为半径将元素的角弯曲成一个椭圆的曲线
## 大小宽高边界值，语法上下左右持。
    设置取值大小超过元素的宽高就不会再有效果
    border-radius是简写形式 详细设置每个角的语法是

    border-top-left-radius: 10px 20px;
    border-top-right-radius: 30px 40px;
    border-bottom-left-radius: 30px 50px;
    border-bottom-right-radius: 10px 10px;
## 简写组合斜杠实，四四对应可一值。
    如果想设置不同角的横竖半径 可以使用 "/" 符号
    /* 前边的第几个和后边的第几个 一次对应 */
    border-radius: 10px 30px 50px 80px / 10px 30px 50px 80px; 
    /* 前边的每一个都和后一个对应 */
    border-radius: 10px 30px 50px 80px / 10px;
## 正半圆形巧设值，叶片形状也和时。
    /* 半圆 */
    width: 400px;
    height: 200px;
    border-top-left-radius: 200px 200px;
    border-top-right-radius: 200px 200px;

     /* 树叶 */
    width: 400px;
    height: 200px;
    border-top-left-radius: 400px 200px;
    border-bottom-right-radius: 400px 200px;