# moment

【小城贝尔】

天涯此时一刻同，时区间隔转换融。

标准时间子午同，时间邮戳毫秒融。

解析字符格式同，严格匹配布尔融。

本地时间展现同，对应方法线性融。

## 天涯此时一刻同，时区间隔转换融。
   对于时间的表示 由于同一时刻不同地区的时间差异导致时间展现上的不同
## 标准时间子午同，时间邮戳毫秒融。
   一般存储到数据库的时间都以本初子午线的标准时间
   事件戳就是表示从1970-01-01 00:00:00 到现在的毫秒数
## 解析字符格式同，严格匹配布尔融。
## 本地时间展现同，对应方法线性融。
```js
    let moment = require("moment");
    //将字符串格式的数据转换为moment对象
    //将本地指定的时间转换成utc时间
    let format = ["YYY-MM-DD HH:mm:ss","YYYY-M-D","HH:mm:ss"] ;
    let date =  moment("2020-11-12 15:07:00",format,true);
    console.log(date.valueOf()); //抓换成时间戳作为统一时间
    console.log(date.format("YYY-MM-DD HH:mm:ss"));

    //将utc时间转换成本地时间
    let local =  moment(date).local().format("YYY-MM-DD HH:mm:ss");
    console.log(local);
```