# CSS三种引入方式
【小城贝尔】

行间样式属性中，页面书写标签弄。

外部引入最常用，链接关系资源用。

 
## 行间样式属性中，页面书写标签弄。
        <section style="width: 100px; 
        height: 100px;
        background-color: red">
            行间样式
        </section>

        <style>
   
            article {
                width: 30px;
                height: 30px;
                background-color: darkcyan;
            }
       </style>
## 外部引入最常用，链接关系资源用。
    
         <link rel="stylesheet" href="./css/first.css" type="text/css">