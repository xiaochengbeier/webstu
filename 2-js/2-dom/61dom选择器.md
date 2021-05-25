# dom选择器
【小城贝尔】
获得元素ID 单，其他方法数组端。

兼容最好标签名，类名 IE8 不行。

直接书写名属性，有些标签不淡定。

查询选择样式器，只是副本静态记。


## 获得元素ID 单，其他方法数组端。
    document.getElementById("id名称");
    只有这个方法获的是一个单独的dom 对象
    <div id="idName">1</div>
    <div id="idName">2</div>
    <div></div>
    <script>
        var getById = document.getElementById("idName");
        console.log(getById); //<div id="idName">1</div>
    </script>
    其他的获得的都是其中包含dom 元素的类数组
## 兼容最好标签名，类名 IE8 不行。
    document.getElementsByTagName("标签名字");
    这个方法是兼容性最好的 
    <div id="idName">1</div>
    <div id="idName">2</div>
    <div></div>
    <script>
        var tag = document.getElementsByTagName("div");
        console.log(tag); //HTMLCollection(3) [div#idName, div#idName, div, idName: div#idName]
    </script>
    document.getElementsByClassName("clas名");
    这个ie 8以下不兼容
    <div id="idName">1</div>
    <div id="idName">2</div>
    <div></div>
    <script>
        var tag = document.getElementsByTagName("div"); // ie 8 以下不兼容
        console.log(tag); //HTMLCollection(3) [div#idName, div#idName, div, idName: div#idName]
    </script>
## 直接书写名属性，有些标签不淡定。
     name选择器 直接根据属性名 name 这个属性选择对应的dom 对象
     document.getElementsByName("name属性值");
     但是有些标签 如 img 等标签并没有 name 属性 所以对于这些标签该选择器没有作用
      <input type="text" name="userName">
    <div name="divName"></div>
    <img src="" alt="" name="imgName">
    <script>
        var inputName = document.getElementsByName("userName")[0];
        console.log(inputName); //<input type="text" name="userName">
        var divName = document.getElementsByName("divName")[0];
        console.log(divName); //<div name="divName"></div>  本身没有name属性自己强加上去的
        var imgName = document.getElementsByName("imgName")[0];
        console.log(imgName); //<img src="" alt="" name="imgName"> 本身没有name属性自己强加上去的
    </script>
## 查询选择样式器，只是副本静态记。
    querySeletor("可以就和在css中写选择器的形式 ");该方法获得的是一个dom元素
    querySeletorAll("");该方法获得的是一个类数组对象
    但是这两个方法获得的仅仅是在某个时间段的副本并不是时时的

    <div class="outer">
        <p id="inner"><span>querySelector</span></p>
    </div>
    <script>
        var querySelector = document.querySelector(".outer #inner span");
        console.log(querySelector); //<span>querySelector</span>
        var querySelectorAll = document.querySelectorAll(".outer #inner span");
        console.log(querySelectorAll); //NodeList [span]
    </script>