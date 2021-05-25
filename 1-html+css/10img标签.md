img标签

【小城贝尔】

引入资源添路径，加载失败有属性。

使用地图井号名，地图标签地方行。

地方形状有三种，圆圈方块多边哄。

各点定位写坐标，需要跳转路径到。

图片配文语意到，使用标签将其包

## 引入资源添路径，加载失败有属性。
      <img src="./img/1.jpg" alt="太阳系" />
    src 表示资源路径
    alt 表示图片加载失败文字展示
## 使用地图井号名，地图标签地方行。
    <img usemap="#sun" src="./img/1.jpg" alt="太阳系" />
    <map name="sun">
        <area shape="circle" coords="245,93,22" href="https://baikje.baidu.com"    target="_blank" alt="木星">
        <area shape="rect" coords="279,223,396,290" href="" alt="">
        <area shape="poly" coords="" href="" alt="">
    </map>
## 地方形状有三种，圆圈方块多边哄。
    circle 表示圆形 设置圆心和半径
    rect  rectangle  表示矩形 设置 两点坐标
    poly 表示多边形 顺时针设置多个坐标
## 各点定位写坐标，需要跳转路径到。
    coords 表示坐标
    href 跳转路径

##  图片配文语意到，使用标签将其包
     <figure>
        <h2>太阳系</h2>
        <img usemap="#sun" src="./img/1.jpg" alt="太阳系" />
    </figure>
    这样语义更加明确 知道 <h2>太阳系</h2> 就是修饰图片的