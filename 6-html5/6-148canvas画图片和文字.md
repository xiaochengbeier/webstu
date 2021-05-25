# canvas画文字和图片
【小城贝尔】
文字描边和填充，展示效果能中空。

设置文字属性值，高度字体家族持。

文字图形对齐值，文本横向基竖直。

构造图片对象建，引入资源路径面。

绘画图片传对象，参数起始点位呛。

再加参数切割畅，参数起点长宽让。
## 文字描边和填充，展示效果能中空。
    strokeText(); 描边文字中间是镂空效果
    fillText(); 填充文字
## 设置文字属性值，高度字体家族持。
    font="40px Arial"; 设置文字大小和字体

      con.strokeText("小城贝尔", 100, 100);
      con.fillText("小城贝尔", 0, 0);
## 文字图形对齐值，文本横向基竖直。
      在canvas中文字和图形的对齐方式
      ctx.textAlign = "";设置水平方向 文字和图像的左上顶点对齐方式
      ctx.textBaseline = "";设置竖直方向 文字和图像的左上顶点对齐方式
## 构造图片对象建，引入资源路径面。
    var img =  new Image();
    img.src = "图片资源路径";
## 绘画图片传对象，参数起始点位呛。
    drawImage(创建的img对象,x,y);

     var img = new Image();
        img.src = "./2.jpg";
        img.onload = function() {
            con.drawImage(img, 0, 0);
      }
## 再加参数切割畅，参数起点长宽让。
     con.drawImage(img,切割图片起点x,切割图片起点y,切割图片终点x,切割图片终点y,起点x,起点y,宽,高);

       var ctx = c.getContext("2d");
        ctx.beginPath();
        var img = new Image();
        img.src = "./101-snow/qi.PNG";
        img.onload = function() {
            //表示从 100 100 的位置开始截取 一直截到 200 200 
            //然后将这个截取的图片 从 50 50 的地方开始画 画图片的宽高 为 200 200
            ctx.drawImage(img, 100, 100, 200, 200, 50, 50, 200, 200);
        }
