# form表单

【小城贝尔】

数据收集表单上，提交地址请求上。

邮递获得方法实，应用编码默认值。

多重内容传文件，还有空格加号见。

其中内容子元素，文本密码单多数。


##  数据收集表单上，提交地址请求上。
    form表单是用于收集用户数据 和后端交互的
     <form action="" method="" enctype="">
        
     </form>
     action="" 表示提交数据地址
    
##  邮递获得方法实，应用编码默认值。
     method="" 表示传输方法 常用 post get
     enctype="application/x-www-form-urlencoded"
##  多重内容传文件，还有文本简单见。
     enctype="multipart/form-data"
     enctype="text/plain"
##  其中内容子元素，文本密码单多数。
    form表单的子元素
       文本框 <input type="text" name="">
        密码框 <input type="password">
        单选 <input type="radio" name="sex" id=""  value="male">  boy
             <input type="radio" name="sex" id=""  value="fmale"  checked> girl

        多选 <input type="checkbox" name="ball" > 篮球
            <input type="checkbox" name="ball"> 足球
            <input type="checkbox" name="ball"> 拍球
        
        下拉类列表
        <select name="province" id="">

            <option value="bejin">北京</option>
            <option value="tianjin">天津</option>
            <option value="nanjin">南京</option>
        </select>

        <input type="submit" value="提交">