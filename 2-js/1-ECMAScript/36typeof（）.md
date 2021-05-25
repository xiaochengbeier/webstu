# s  typeof（）
【小城贝尔】

判断类型关键字，不写括号也相似。

变量天降不报错，否定申明唯一过。

字符数字未定义，对对方法返回意。

## 判断类型关键字，不写括号也相似。
    typeof() 判断一个值的真正类型
    语法要求 不写 typeof() 这个括号也没问题
    <script>
        console.log(typeof undefined); //undefined
    </script>
## 变量天降不报错，否定申明唯一过。
    当使用一个没有声明的变量名的时候 typeof(a) 
    是唯一不会解析成语法错误的
    <script>
        console.log(typeof(stu)); //undefined
    </script>
## 字符数字未定义，对对方法返回意。
    typeof() 返回值有
    字符 string
    数字 number
    未定义 undefined
    对象 object
    对错 boolean 
    方法 function