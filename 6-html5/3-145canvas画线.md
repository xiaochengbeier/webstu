# HTML5canvas
【小城贝尔】

画布宽高设属性，样式操作勿跟进。

获得二维上下文，绘制图形方法门。

划线移去起始点，由此奔向坐标浅。

操作完毕要描边，封闭路径一笔添。

设置划线宽度拈，另起路径方法签。


## 画布宽高设属性，样式操作勿跟进。
    canvas画布的宽高尺寸需要通过width 和 height这两个属性设置
    通过css设置的样式仅仅是元素的宽高画布内部的一些组件功能的尺寸不会改变
## 获得二维上下文，绘制图形方法门。
    要在canvas上边画东西首先就要通过js获得画布的上下文对象
    canvasDOM对象.getContext("2d");
    然后对于绘制不同的图形都有对应的方法
## 划线移去起始点，由此奔向坐标浅。
    moveTo(x,y);移动画笔的起点
    lineTo(x,y);从起点开始画到终点的位置
## 操作完毕要描边，封闭路径一笔添。
    stroke();画完之后需要描边要然不会显示画过的路径
    closePath(); 封闭路径将画的图形的终点和起点连接起来
                 这个封闭的只能是一笔画完的图形如果你新启了一个开始路径
                 这个方法是不会将两个路径封闭连接到一起的
## 设置划线宽度拈，另起路径方法签。
    lineWidth  =  "10"  设置画线的宽度 这是一个属性
    beginPath();新启一个路径


     <canvas width="500" height="500"></canvas>
    <script>
        var c = document.getElementsByTagName("canvas")[0];
        var con = c.getContext("2d");
        con.moveTo(100, 100);
        con.lineTo(200, 200);
        con.lineTo(300, 200);
        con.lineTo(400, 500);
        // 封闭路径将上边的路径首位相连
        con.closePath();
        con.stroke();
        //新开启一个路径
        con.beginPath();
        //设置线的宽度
        // con.lineWidth = "10px"; 可以写字符类型的数字 或者 数字不能写 px
        con.lineWidth = 10;
        con.moveTo(300, 300);
        con.lineTo(350, 400);
        con.stroke();
    </script>