# HTML5的一些表单属性

【小城贝尔】

表单组件日期类，时间年月本地缀。

数据校验脚本累，直接标签辅助醉。

数字网址和邮件，颜色范围搜索现。

实际运用教少见，奈何兼容留遗憾。

# 表单组件日期类，时间年月本地缀。
    和时间日期有关的属性值
        <form action="">
            <!-- 展示日期组件供用户选择输入日期 -->
            <input type="date">
            <!-- 展示时间组件供用户选择输入时间 -->
            <input type="time">
            <!-- 展示日期时间组件供用户选择输入日期和时间 -->
            <input type="datetime-local">
            <input type="submit">
        </form>
# 数据校验脚本累，直接标签辅助醉。
    还有一些具有校验功能
# 数字网址和邮件，颜色范围搜索现。
     <form action="">
        <!-- 只能输入数字其他类型的值输入不进去 -->
        <input type="number">
        <!-- 提交数据的时候自动校验输入内容是否是 url -->
        <input type="url">
        <!-- 提交数据的时候自动校验输入内容是否是邮箱地址 -->
        <input type="email">
        <!-- 展示一个选择颜色的组件 -->
        <input type="color">
        <!-- 展示一个选择范围的组件 max 最大值 min最小值 -->
        <input type="range" max="100" min="10" name="range">
        <input type="submit">
    </form>
# 实际运用教少见，奈何兼容留遗憾。
    遗憾的是这些兼容性都不是特别好所以实际开发中很少使用