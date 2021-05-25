# canvas线条和图形交界处理

线条装饰小盖帽，原先长度增长考。

默认设置烟蒂笑，方圆是用效果妙。

设置线条交界处，倾斜衔接限制住。

还有斜角延长渡，截断棱角圆边固。

全球综合好操作，填充图形交界落。

图形目标后跟源，参考文档将值悬。

## 线条装饰小盖帽，原先长度增长考。
     lineCap = "";设置线两端的样式
     是在原来长度的基础上添加两端样式的所以线会相应的边长
## 默认设置烟蒂笑，方圆是用效果妙。
    butt 烟蒂的意思就是默认的效果
    round 圆角
    square 方块
## 设置线条交界处，倾斜衔接限制住。
    lineJion = "";设置两线交界处的效果
## 还有斜角延长渡，截断棱角圆边固。
        con.beginPath();
        con.lineWidth = 50;
        con.moveTo(100, 100);
        con.lineTo(200, 200);
        con.lineTo(50, 210);
        con.lineCap = "round";
        // con.lineJoin = "miter";
        // con.miterLimit = 4; 限制棱角的长度
        // con.lineJoin = "round"  交界圆角
        // con.lineJoin = "bevel"; 直接砍断交界棱角
        con.stroke();
# 全球综合好操作，填充图形交界落。
    con.globalCompositeOperation = "";
    设置图形交界关系处理
# 图形目标后跟源，参考文档将值悬。
    文档路径
    https://www.w3school.com.cn/tags/canvas_globalcompositeoperation.asp
    

    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(100, 100, 200, 200); //目标图像
    //表示展示目标图像外的源图像 目标图像里边包括目标都是透的
    ctx.globalCompositeOperation = "source-out";
    ctx.fillStyle = "red";
    ctx.fillRect(150, 150, 300, 300); //源图像