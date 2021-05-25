# js  try catch
【小城贝尔】

捕捉程序抛异常，后续运行便无妨。
异常信息传对象，获得名称信息荡。
语法解析基础见，引用地址错误变。

## 捕捉程序抛异常，后续运行便无妨。
    当程序运行到某一行出现异常的时候 就会终止后续代码运行
    使用 try{
        可以捕捉异常并且 使后续代码正常运行
         console.log(age);
    }catch (error) {
            var e = error.name + "   ==  " + error.message;
            console.log(e);
    }
## 异常信息传对象，获得名称信息荡。
         var e = error.name【错误名称】 + "   ==  " + error.message【错误信息】;
         console.log(e); 
## 语法解析基础见，引用地址错误变。
        常见错误 语法解析错误     js.html:13 Uncaught SyntaxError: Invalid or unexpected token
        引用地址错误              Uncaught ReferenceError: hdslkhdn is not defined