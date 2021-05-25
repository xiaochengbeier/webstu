# bootstrap4组件之按钮
【小城贝尔】
按钮简称三字母,链接输入标签主。

仅设轮廓外边框,尺寸大小全占光。

启用禁止两状态,活跃添加类名在。

单多选择按钮组,默认激活活跃睹。

## 按钮简称三字母,链接输入标签主。
    .btn 设置按钮基本样式
    可以在  
    <button></button>
    <input type="submit" >
    <a href=""></a>
    等标签上使用

    
    <button class="btn btn-warning">基本样式1</button>
    <input type="submit" class="btn btn-info" value="基本样式2">
    <a href="#" class="btn btn-success">基本样式3</a>
## 仅设轮廓外边框,尺寸大小全占光。
    .btn .btn-outline-color 仅展示边框 然后鼠标移入内容颜色填满效果
    .btn-lg 大尺寸
    .btn-sm 小尺寸

    <button class="btn btn-warning btn-sm">基本样式小尺寸</button>
    <input type="submit" class="btn btn-info  btn-lg" value="基本样式大尺寸">
    <a href="#" class="btn btn-success">基本样式默认尺寸</a>

    class="btn btn-primary btn-lg btn-block"  占满父级别宽度
    <a href="#" class="btn btn-success  btn-block">基本样式宽度占满父级尺寸</a>
## 启用禁止两状态,活跃添加类名在。
    .active  表示为激活状态
     disabled 禁用状态 这就是标签的一个属性不是类名

     <button class="btn btn-warning btn-sm active">启用状态</button>
     <input type="submit" class="btn btn-info  btn-lg" disabled value="禁用状态">

## 单多选择按钮组,默认激活活跃睹。
    单选框 多选框使用按钮组组合在一起



       <!-- 多选 -->

    <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-secondary active">
                  <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
                </label>
        <label class="btn btn-secondary">
                  <input type="checkbox" autocomplete="off"> Checkbox 2
                </label>
        <label class="btn btn-secondary">
                  <input type="checkbox" autocomplete="off"> Checkbox 3
                </label>
    </div>
    <!-- 单选 -->
    <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
            </label>
        <label class="btn btn-secondary">
              <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
            </label>
        <label class="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
            </label>
    </div>