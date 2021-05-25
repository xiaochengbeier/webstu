# bootstrap4组件之面包屑导航
【小城贝尔】
设置面包导航栏,浏览层次易返还。

内部结构是列表,需要跳转链接晓。

## 设置面包导航栏,浏览层次易返还。
## 内部结构是列表,需要跳转链接晓。

    <nav aria-label="breadcrumb"> 
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">首页</a></li>
            <li class="breadcrumb-item"><a href="#">第一页</a></li>
            <li class="breadcrumb-item"><a href="#">第二页</a></li>
            <li class="breadcrumb-item"><a href="#">第三页</a></li>
            <li class="breadcrumb-item active" aria-current="page">当前页</li>
        </ol>
    </nav>