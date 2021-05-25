# reflect—metadata

【小城贝尔】

注解操作三方库，数据操作分离住。

添加注解键值库，类别属性描述住。

获得数据方法库，类名指定属性住。

是否存在判断库，对应填写参数住。

## 注解操作三方库，数据操作分离住。
   reflect—metadata 是一个地方的注解库 专门用于添加注解
                    分离了注解数据和被修饰对象的耦合
## 添加注解键值库，类别属性描述住。
    @Reflect.metadata(metadataKey, metadataValue)
    通过键值对的方式添加注解数据
## 获得数据方法库，类名指定属性住。
    获得注解添加的数据
    et obj = new C();
    let metadataValue = Reflect.getMetadata(metadataKey, obj, "method");
## 是否存在判断库，对应填写参数住。
    判断某个属性或者某个类是否存在某个注解数据
    let result = Reflect.hasOwnMetadata(metadataKey, target);
    let result = Reflect.hasOwnMetadata(metadataKey, target, propertyKey);
```ts
    import "reflect-metadata"
    @Reflect.metadata("class","Person")
    class Person{
        @Reflect.metadata("name","用户名")
        name:string;
        @Reflect.metadata("age","年龄")
        age:number;
        @Reflect.metadata("sayHellow","方法")
        sayHellow(){
            
        }
    }
    let p:Person = new Person();
    //获得类上的注解数据
    let clazz:string = Reflect.getMetadata("class",Person);
    console.log("clazz",clazz);
    // clazz Person


    //获得成员上的注解数据
    let name:string = Reflect.getMetadata("name",p,"name");
    // 判断某个属性上是否有某个注解
    console.log("name",name);
    // name 用户名


    let is:boolean =     Reflect.hasMetadata("sayHellow",p,"sayHellow");
    console.log("is",is);
    // is true
```