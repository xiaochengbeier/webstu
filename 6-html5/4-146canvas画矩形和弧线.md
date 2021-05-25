# HTML5canvas矩形和弧线
【小城贝尔】
绘制矩形起始点，宽高设置描目显。

直接绘制和填充，省去操作步骤空。
----------------------------------
绘制弧线圆心点，半径设置长短简。

起始结束弧度值，方向顺时零把持。
----------------------------------
设置弧度奔向去，实现圆角归形矩。

参数先设拐角点，拐角方向在后潜。

最后参数弧度值，拼接闭合起点迟。
## 绘制矩形起始点，宽高设置描目显。
    rect(x,y,width,height);绘制矩形
    绘制完毕之后stroke();
## 直接绘制和填充，省去操作步骤空。
    srokeRect(x,y,width,height);直接绘制一个矩形
    filRect(x,y,width,height);直接填充一个矩形


    <script>
        var c = document.getElementsByTagName("canvas")[0];
        var con = c.getContext("2d");
        con.rect(100, 100, 100, 400);
        con.stroke();

        //直接绘制矩形
        con.strokeRect(0, 0, 50, 20);
        //直接填充一个矩形
        con.fillRect(60, 60, 100, 30);
    </script>
## ----------------------------------
## 绘制弧线圆心点，半径设置长短简。
       arc(圆心x,圆心y,半径,起始弧度,结束弧度,方向 0 表示顺时针 1表示逆时针);
## 起始结束弧度值，方向顺时零把持。
        var con = c.getContext("2d");
        con.arc(300, 300, 100, 0, Math.PI / 2, 1);
        con.stroke();
## ----------------------------------
## 设置弧度奔向去，实现圆角归形矩。
## 参数先设拐角点，拐角方向在后潜。
    arcTo(拐角位置x,拐角位置y,拐角方向x,拐角方向y,拐角弯曲值);
## 最后参数弧度值，拼接闭合起点迟。
      <script>
        var c = document.getElementsByTagName("canvas")[0];
        var con = c.getContext("2d");
        //画一个弧度角的矩形
        //因为最后一笔弯曲了10所以起始点y应该多加10
        con.moveTo(100, 110);
        con.arcTo(100, 200, 300, 300, 10);
        con.arcTo(200, 200, 200, 100, 10);
        con.arcTo(200, 100, 100, 100, 10);
        con.arcTo(100, 100, 100, 200, 10);
        con.stroke();
    </script>