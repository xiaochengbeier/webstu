# json
【小城贝尔】

交换数据前后端，相约格式字符串。

对象属性名字符，解析转换两不误。

## 交换数据前后端，相约格式字符串。
    前端和后端进行数据交互的一种数据格式
## 对象属性名字符，解析转换两不误。
       <script>
        var demo = {
            name: "小城贝尔",
            age: 24,
            school: "西安体育学院"
        }
        var jdemo = JSON.stringify(demo);
        console.log(jdemo); //{"name":"小城贝尔","age":24,"school":"西安体育学院"}

        //将字符串转换成对象
        var parse = JSON.parse(jdemo);
        console.log(parse);
        /**
        {name: "小城贝尔", age: 24, school: "西安体育学院"}
        name: "小城贝尔"
        age: 24
        school: "西安体育学院"
        __proto__: Object
        */
    </script>