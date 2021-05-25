# bootstrap4工具之文本
【小城贝尔】

文本对齐左中右，依据两端响应就。

是否换行属性遛，截断字符省略就。

打破单词长链遛，大小转换首字秀。

字体粗细和等宽，字体描述链接关。

## 文本对齐左中右，依据两端响应就。
    .text-left 左对齐
    .text-right 文本右边对齐
    .text-centere 居中对齐
    .text-justify 两端对齐

     <div class="container">
        <div class="row">
            <div class="col-10 bg-warning text-left">左对齐</div>
            <div class="col-10 bg-warning text-right">右边对齐</div>
            <div class="col-10 bg-warning text-center">居中对齐</div>
            <div class="col-10 bg-warning text-justify">两端对齐 Lorem, ipsum dolor sit a met consectetur adipisicing elit. Dignissimos ea maxime rem doloremque sit aliquam, eligendi i llum in impedit nesciunt enim. Mollitia quam blanditiis soluta dolor, distinctio rem iusto sit!</div>
        </div>
        <div class="row mt-5">
            <div class="col-xl-5">
                <!-- 响应式对齐方式 -->
                <div class="text-lg-center">在大屏居中对齐</div>
            </div>
        </div>
    </div>
## 是否换行属性遛，截断字符省略就。
    .text-wrap 换行
    .text-nowrap 不换行 
    .text-break 强制换行
    .text-truncate   超出部分打点展示

    <div class="container">
        <div class="row">
            <!-- 不换行超出打点展示 -->
            <div class="col-md-2 text-nowrap text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime alias fugit distinctio ratione, asperiores magnam? Nam voluptas eos illum iure. Et sit corrupti ad fuga maxime dolore reprehenderit tenetur neque!</div>
            <!-- 强制换行 -->
            <div class="col-md-2 text-break">lolsjekwjeoijfsjeifjedijfiejfwljeiwoeiur20jeiifjlsajplsjfdaeioqjeflwiejfdilsajepoq</div>
        </div>
    </div>
## 打破单词长链遛，大小转换首字秀。
    .text-lowercase 转小写
    .text-uppercase 转大写
    .text-capitalize 首字母大写

      <div class="container">
        <div class="row">
            <p class="text-lowercase col-7">XIAO CHENG</p>
            <p class="text-uppercase col-7">xiao cheng</p>
            <p class="text-capitalize col-7">xiao cheng</p>
        </div>
    </div>
## 字体粗细和等宽，字体描述链接关。
    <div class="row">
            <!-- 设置字体宽 -->
            <p class="font-weight-bold">Bold text.</p>
            <p class="font-weight-normal">Normal weight text.</p>
            <p class="font-weight-light">Light weight text.</p>
            <!-- 倾斜字体 -->
            <p class="font-italic">Italic text.</p>
    </div>

    <div class="row">
        <!-- 等宽字体 对中文不明显 -->
        <p class="text-monospace">This is in monospace</p>
    </div>
    
    .text-decoration-none 去除a标签下划线
        <div class="row">
            <!-- 去除鼠标hover时候的下划线  -->
            <a href="#" class="text-decoration-none">让我们走 lets go。。。。</a>
        </div>