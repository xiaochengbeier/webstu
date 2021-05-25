# class-transformer

【小城贝尔】

平面对象转换库，类别声明参数住。

类型声明注解库，配置触发描述住。

## 平面对象转换库，类别声明参数住。
    class-transformer 是用来将平面对象转换成指定的类对象的一个工具库
## 类型声明注解库，配置触发描述住。
    如果遇到类型不对应的情况可以使用
     @Type(() => Photo)
     photos: Photo[];
     指明类型
```ts
    import {plainToClass, Type} from "class-transformer"
    // 注意class-transformer 依赖 reflect-metadata
    import  "reflect-metadata" 

    let plainObj =  {
        "id": 1,
        "firstName": "Johny",
        "lastName": "Cage",
        "age": "30",
        "birth":"2008-8-8"
    }

    class User {
        id: number;
        firstName: string;
        lastName: string;
        @Type(()=>Number)
        age: number;
        @Type(()=>Date)
        birth:Date
        getName() {
        return this.firstName + ' ' + this.lastName;
        }
    
        isAdult() {
        return this.age > 36 && this.age < 60;
        }
    }

    // 将平面对象转换成user对象
    let obj:User = plainToClass(User,plainObj);
    console.log(obj);
    // User {
    //     id: 1,
    //     firstName: 'Johny',
    //     lastName: 'Cage',
    //     age: 30,
    //     birth: 2008-08-07T16:00:00.000Z
    // }

```