# canvas背景填充
【小城贝尔】

填充风格自定义，颜色渐变生成器。

线性方向两点定，颜色商店小数进。

辐射渐变圆两个，渐变规则关系测。

背景图片创纹理，监听事件重复痞。

参考定位原始点，平移方法难任免。

## 填充风格自定义，颜色渐变生成器。
    fillStyle = "";
    自定义填充风格 
     fillStyle = "red"; 表示自己直接自定义颜色

     var linear = con.createLinearGradient(渐变起始点x,渐变起始点y,渐变结束点x,渐变结束点y)));
## 线性方向两点定，颜色商店小数进。
      linear.addColorStop(0.1, "red");
      linear.addColorStop(0.5, "pink");
      linear.addColorStop(1, "green");
      fillStyle = linear;
      con.fillRect(0, 0, 100, 100);
      添加颜色以及颜色渐变的起止位置 范围只能是从0 - 1；
## 辐射渐变圆两个，渐变规则关系测。
    var radial = con.createRadialGradient(x1,y1,r1,x2,y2,r2);
    radial.addColorStop(0.1, "red");
    radial.addColorStop(0.5, "pink");
    radial.addColorStop(1, "green");
    fillStyle =  radial;
    使用两个圆的位置关系调整渐变渲染样式效果

     <script>
        var c = document.getElementsByTagName("canvas")[0];
        var con = c.getContext("2d");
        con.translate(100, 100);
        con.beginPath();
        var radial = con.createRadialGradient(10, 10, 10, 70, 70, 40);
        radial.addColorStop(0.1, "red");
        radial.addColorStop(0.5, "green");
        radial.addColorStop(0.8, "black");
        radial.addColorStop(1, "pink");

        con.fillStyle = radial;
        con.fillRect(0, 0, 100, 100);
    </script>
## 背景图片创纹理，监听事件重复痞。
       var c = document.getElementsByTagName("canvas")[0];
        var con = c.getContext("2d");
        var img = new Image();
        img.src = "./2.jpg";
        img.onload = function() {
            var pattern = con.createPattern(img, "no-repeat");
            con.fillStyle = pattern;
        }


     <script>
        var c = document.getElementsByTagName("canvas")[0];
        var con = c.getContext("2d");
        con.translate(100, 100);
        con.beginPath();
        var img = new Image();
        img.src = "./2.jpg"
        img.onload = function() {
            var pattern = con.createPattern(img, "no-repeat");
            con.fillStyle = pattern;
            con.fillRect(0, 0, 300, 300);
        }
    </script>
## 参考定位原始点，平移方法难任免。
    以上背景参考的起始点是 画板起始点 （0，0）点
    所以要想设置的背景效果作用到所画的图形里就必须使用 
    translate();方法移动起始点使之和图形起始点对齐