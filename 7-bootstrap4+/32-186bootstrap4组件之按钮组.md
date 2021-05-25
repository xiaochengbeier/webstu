# bootstrap4组件之按钮组
【小城贝尔】
按钮排列分成组,相互间距无缝睹。

嵌套使用下拉框,竖直排列属性帮。

## 按钮排列分成组,相互间距无缝睹。
     <!-- 多个按钮组组合 -->
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <!-- 按钮组一 -->
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
        </div>
        <!-- 按钮组二 -->
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
        </div>
        <!-- 按钮组三 -->
        <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-secondary">8</button>
        </div>
    </div>
## 嵌套使用下拉框,竖直排列属性帮。
    <!-- 配合下拉框 -->
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>

        <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   点我出下拉框
             </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Dropdown link</a>
                <a class="dropdown-item" href="#">Dropdown link</a>
            </div>
        </div>
    </div>



    <!-- 竖直排列 -->
    <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">top</button>
        <button type="button" class="btn btn-secondary">Middle</button>
        <button type="button" class="btn btn-secondary">bottom</button>
    </div>