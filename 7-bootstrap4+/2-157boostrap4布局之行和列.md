# bootstrap4布局之行和列
【小城贝尔】
栅格布局行和列，外内间距十五泄。

默认行宽十二列，内部所占属性窃。

行内元素属性列，顶级容器宽度借。

中等大小超级列，不符档位宽全灭。

## 栅格布局行和列，外内间距十五泄。
    bootstr布局的核心栅格系统
    在 container或者 container-fluid顶级容器下使用
    row 和 col-xx-xx 来进行布局
    顶级容器会有15px的内边距
    row会有-15px的外边距 
    col-xx-xx会有15px的内 边距
## 默认行宽十二列，内部所占属性窃。
## 行内元素属性列，顶级容器宽度借。
    框架会默认将 row中分成12个等宽列然后子元素 通过 col-xx-xx 这个属性确定自己所占的宽度
    而row的宽度就是顶级容器container或者是 container-fluid的宽度
## 中等大小超级列，不符档位宽全灭。
    超大屏类名标识 col-xl-xx(取值 1-12); 当屏幕宽度 >= 1200 会根据设置的1-12的比例得出相应宽度 当屏幕 < 1200 宽度为 100%
      大屏类名标识 col-lg-xx(取值 1-12); 当屏幕宽度 >= 992 会根据设置的1-12的比例得出相应宽度 当屏幕 < 992 宽度为 100%
    中等屏类名标识 col-md-xx(取值 1-12); 当屏幕宽度 >= 768 会根据设置的1-12的比例得出相应宽度 当屏幕 < 768 宽度为 100%
    小屏类名标识   col-sm-xx(取值 1-12); 当屏幕宽度 >= 576 会根据设置的1-12的比例得出相应宽度 当屏幕 < 576 宽度为 100%
    超小屏类名标识 col-xx   (取值 1-12); 当屏幕宽度 < 576 会根据设置的1-12的比例得出相应宽度  永远会根据比例自动缩放


    <div class="container-fluid">
        <div class="row">
            <!--表示当屏幕宽度 >= 1200 一行展示  当 宽度 < 1200 的时候每个元素宽度为100%-->
            <div class="col-xl-3">11200 一行展示 </div>
            <div class="col-xl-3">2</div>
            <div class="col-xl-3">3</div>
            <div class="col-xl-3">4</div>
        </div>
        <div class="row mt-5">
            <!--表示当屏幕宽度 >= 992 一行展示  当 宽度 < 992 的时候每个元素宽度为100%-->
            <div class="col-lg-4">1992 一行展示</div>
            <div class="col-lg-4">2</div>
            <div class="col-lg-4">3</div>
        </div>
        <div class="row mt-5">
            <!--表示当屏幕宽度 >= 768 一行展示  当 宽度 < 768 的时候每个元素宽度为100%-->
            <div class="col-md-4">1768 一行展示 </div>
            <div class="col-md-4">2</div>
            <div class="col-md-4">3</div>
        </div>
        <div class="row mt-5">
            <!--表示当屏幕宽度 >= 576 一行展示  当 宽度 < 576 的时候每个元素宽度为100%-->
            <div class="col-sm-4">1 576 一行展示</div>
            <div class="col-sm-4">2</div>
            <div class="col-sm-4">3</div>
        </div>
        <div class="row mt-5">
            <!--表示当屏幕宽度 < 576 一行不管啥时候都是一行展示-->
            <div class="col-4">1一行不管啥时候都是一行展示</div>
            <div class="col-4">2</div>
            <div class="col-4">3</div>
        </div>
    </div>