# 类型演算

【小城贝尔】

数据类型计算定，其他类型取值印。

类型从属键名定，坐落其中字符印。

官方演算类型定，可选必需只读印。

交并取值累心定，返回类型参数印。

## 数据类型计算定，其他类型取值印。
   有时候数据的类型是通过计算的到的这个
   通过从其他数据上取到类型作用于自己身上
   使用typeof 获得某个数据的类型
## 类型从属键名定，坐落其中字符印。
   keyof 取得某个约束所有的属性
   in    一般用于索引器配置keyof使用
```ts
    let type:string = "name";
    // typeof 关键字
    let me:typeof type;//现在我是根据别人的类型动态改变

    type Animals={
        name:string,
        age:number,
        cute:number
    }
    // Dogs的类型是根据Animal动态改变的
    type Dogs={
        [p in keyof Animals]:Animals[p]
    }
    let dogs:Dogs = {
        name:"大黄",
        age:11,
        cute:99
    }
```
## 官方演算类型定，可选必需只读印。
   官方已经定义好了一些类型演算
   Partial<T> 将T 中的成员全部变成可选
   Required<T> 将T 中的成员全部变成必须赋值
   Readonly<T> 将T 中的成员全部变成只读
## 交并取值累心定，返回类型参数印。
   Exclude<T,U> 从 T中剔除包含在U中的成员
   Extract<T,U> 去并集合
   ReturnType<T> 获得函数返回值类型
   InstanceType<T> - 获取构造函数的实例类型


