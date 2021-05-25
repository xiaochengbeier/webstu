# class-validator

【小城贝尔】

注解验证三方库，属性定义描述住。

大小取值长短库，验证方法对象住。

# 注解验证三方库，属性定义描述住。
   class-validator 是一个通过注解方式验证对象属性取值范围的库
# 大小取值长短库，验证方法对象住。
    @Min(0)    最小值
    @Max(10)   最大值
    @Length(10, 20) 字符串长度范围
    。。。。

    最后校验创建的对应对象即可
    validate(user).then(errors => {
           // ...
   });
   
   ```ts
   import { Length, Max, Min, validate } from "class-validator"

   class User{
      @Length(3,4)
      name:string
      @Max(200)
      @Min(18)
      age:number
   }
   let user:User = new User();
   user.name = "小城贝尔",
   user.age= 10;
   validate(user).then(data=>{
      console.log(data);
   });
   ```