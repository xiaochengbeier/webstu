# bootstrap4内容之排版
【小城贝尔】

标题大小一到六，赋予样式类名秀。

自定标题大字就，展示一到三四遛。

标记删除内联间，插入倾斜多标签。

省略语句标题值，鼠标移入展全值。

书写文章引用它，页脚类名显中划。

对齐处理左中右，文本类名效果秀。

列表去除出生点，样式否定效果捡。

如要子类一行展，行级特性父子产。

## 标题大小一到六，赋予样式类名秀。
    标题标签 h1 - h6 
    在bootstrap  h1 - h6 还可以作为相应的类名一旦给某个元素添加便会得到对应的展示效果
## 自定标题大字就，展示一到三四遛。
    自定义标题 使用 类名 display-1 ~ display-4 字体逐渐增大
## 标记删除内联间，插入倾斜多标签。
    通过应用 .lead样式，可以定义一个中心段落，用于提示这是中心内容或重要内容。
    <p class="lead">
       Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>

    文本内联元素
    HTML5 文本元素的常用内联表现方法也适用于BootStrap4。
    <!-- 倾斜 -->
    <em>Lorem ipsum dolor sit amet consectetur adipisicin</em>
    <!-- 删除线 -->
    <del>g elit. Molestias beatae consequuntur totam non sequi et ducimus</del>
    <!-- 表示插入内容有下划线 -->
    <ins>eaque perspiciatis nostrum sint omnis asper </ins>
    <!-- 标记背景是黄色 -->
    <mark>highlightpiciatis nostrum sint </mark>
## 省略语句标题值，鼠标移入展全值。
    缩略语
    <!-- 当鼠标移入便会弹出简写全称 -->
    <abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
## 书写文章引用它，页脚类名显中划。
    <blockquote class="blockquote">
        <p class="mb-0">爱上一个地方，就应该背上包去旅游，走得更远。</p>
        <footer class="blockquote-footer">出自商务印书馆的 <cite title="Source Title">《新华字典》</cite></footer>
    </blockquote>
## 对齐处理左中右，文本类名效果秀。
     .text-center 设置文字居中对齐
     .text-right  设置文字右对齐
## 列表去除出生点，样式否定效果捡。
     .list-unstyled 设置li标签的 前边默认样式 
## 如要子类一行展，行级特性父子产。
         list-inline 和 子元素 list-inline-item  配合实现 一横排展示
        <ul class="list-inline">
            <li class="list-inline-item">列表之一</li>
            <li class="list-inline-item">列表之二</li>
            <li class="list-inline-item">列表之三</li>
        </ul>
       
        .text-truncate 此类明使用使用省略号截断多余部分内容
          <div class="row">
            <div class="col-lg-1 text-truncate">jlskjjjjjjjjjjjjjjjjjjjjjjjjjjslddddddddddjsjdksjldnmfffffffffffdsljfjjjs</div>
         </div>