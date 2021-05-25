# viewport 适配

【小城贝尔】

视口大小伸缩比，默认文档九八起。

宽度匹配视口比，伸缩比例一字起。

冲突取值大小比，用户缩放控制起。

极值控制兼容比，浏览默认贪婪起。

设计尺寸标准比，伸缩动态倍数起。

最大宽度控制比，像素比例倒数起。

## 视口大小伸缩比，默认文档九八起。
    通过在 html 文档中的 meta标签中配置 
```html
        <meta name="viewport" content="
            width=device-width,
            initial-scale=1,
            minimum-scale=1,
            maximum-scale=1,
            user-scalable=no" />
```
    来达到文档和视口宽度一致的效果
    如果不设置 viewport 属性 那么文档宽到达移动端度默认是980px
## 宽度匹配视口比，伸缩比例一字起。
    width=device-width 和 initial-scale=1 配置效果一样
    但是一考虑到兼容性问题做如下配置
    一般配置为 
    width=device-width,   表示文档宽度和设备宽度一样
    initial-scale=1,      起始缩放比
    minimum-scale=1,      最小缩放比
    maximum-scale=1,      最大缩放比
    user-scalable=no"      不允许用户双指缩放
## 冲突取值大小比，用户缩放控制起。
    当 width=device-width 和 initial-scale=1 有冲突的时候
    取两个较大的值 
## 极值控制兼容比，浏览默认贪婪起。
    最大值 最小值
    minimum-scale=1,     
    maximum-scale=1,
    是为了防止浏览器兼容性问题 浏览器会尽可能的将文档中所有的内容都
    在一屏下向用户展示
## 设计尺寸标准比，伸缩动态倍数起。
    在项目开发的时候就使用某个屏幕的作为标准 一般是使用
    iPhone 6 物理像素是 750 css像素是 375 
    这样当不同屏幕我们使用 js动态调整 伸缩比例即可
## 最大宽度控制比，像素比例倒数起。
     有时候屏幕太宽了我们可以设置父级的 max-with 来控制页面的最大宽度
```html
     <script>
            (function(){
                //获取css像素（viewport没有缩放）
                var curWidth=document.documentElement.clientWidth;
                var curWidth=window.innerWidth;
                var curWidth=window.screen.width;
                 
                console.log(curWidth);
                // 假设设计稿是 物理像素为 750 px
                var targetWidth=375;
                var scale=curWidth/targetWidth;
                console.log(scale);
 
                var view=document.getElementById('view');
                console.log(view.content);
                // 根据不同的屏幕按照 设计稿的尺寸缩放
                view.content='initial-scale='+scale+',user-scalable=no,minimum-scale='+scale+',maximum-scale='+scale+'';
            })();
        </script>
```