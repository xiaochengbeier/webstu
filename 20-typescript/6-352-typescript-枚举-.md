# 枚举

【小城贝尔】

枚举类型关键字，字段选择值依次。

取值字符和数字，数字特殊自增次。

赋值直接可数字，编译结果赋值次。

权限枚举二进字，添加结果或运次。

判断权限用并字，删除异或符号次。

## 枚举类型关键字，字段选择值依次。
   声明枚举类型使用 enum关键字
   enum 枚举名字 {
       //枚举字段 
        Up = 1,
        Down,
        Left,
        Right,
   }
## 取值字符和数字，数字特殊自增次。
   枚举字段可以赋值字符和数字 如果是数字稍稍特殊一点如果
   不设置值参考第一个依次自增
## 赋值直接可数字，编译结果赋值次。
   如果枚举类型是数字那么赋值可以直接是数字 不需要 枚举对象.字段
   对于枚举是会出现在编译结果中的
## 权限枚举二进字，添加结果或运次。
   可以巧妙的利用二进制和枚举设置权限控制
   enum Permission{
       insert=1,
       delete=2,
       update=4
   }
   如果给某个值赋值多个权限那么
   let root:Permission = Permission.insert | Permission.delete | Permission.update;
   现在root就有全部的权限啦
## 判断权限用并字，删除异或符号次。
   判断是否存在某个权限
   如判断root是否包含 delete权限
   if((root&Permission.delete)  === Permission.delete){
       return true;
   }
   //删除某个权限
   如删除root的update权限 进行异或运算
   root^Permission.update
```js
   enum Gender {
    female ="女神",
      male="男神"
   }
   type user ={
      name:string,
      age:number,
      sex:Gender
   }
   let firstUser:user = {
      name:"小城贝尔",
      age:18,
      sex:Gender.male
   }
   // 编译结果
   // var Gender;
   // (function (Gender) {
   //     Gender["female"] = "\u5973\u795E";
   //     Gender["male"] = "\u7537\u795E";
   // })(Gender || (Gender = {}));
   // var firstUser = {
   //     name: "小城贝尔",
   //     age: 18,
   //     sex: Gender.male
   // };

   // 枚举值为数字
   enum Leve{
      leve1=1,
      leve2,
      leve3,
      leve4
   }
   // 编译结果
   // var Leve;
   // (function (Leve) {
   //     Leve[Leve["leve1"] = 1] = "leve1";
   //     Leve[Leve["leve2"] = 2] = "leve2";
   //     Leve[Leve["leve3"] = 3] = "leve3";
   //     Leve[Leve["leve4"] = 4] = "leve4";
   // })(Leve || (Leve = {}));

   //位枚举控制权限
   enum Permission{
      // 二进制 0001
      insert=1,
      // 二进制 0010
      delete = 2,
      // 二进制 0100
      update = 4
   }

   //添加混合权限
   let root:Permission = Permission.insert | Permission.delete |Permission.update;
   //判断是否有某个权限
   function isKeep(user:Permission,per:Permission){
      if((user & per) == per){
         return true;
      }
      return false;
   }
   console.log(isKeep(root,Permission.delete));//true
   console.log(isKeep(root,Permission.update));//true
   console.log(isKeep(root,Permission.insert));//true


   //删除某个权限
   root = root ^ Permission.delete;
   console.log(isKeep(root,Permission.delete));//false
```