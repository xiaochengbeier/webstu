# 装饰器

【小城贝尔】

参与运行装饰器，归元数据函数记。

使用类名装饰器，函数操作参数记。

参数数组收集器，返回新类覆盖记。

使用成员装饰器，坐落类中属性记。

对应参数收集器，静态首个构造记。

如遇属性对象器，首个参数原型记。

参数第二名称器，还有第三描述记。

装饰执行就近器，生成函数顺序记。


## 参与运行装饰器，归元数据函数记。
   装饰器类似于java中的注解 是对对象以及其成员的描述
   在ts中装饰器实际上就是一个函数
## 使用类名装饰器，函数操作参数记。
   定义类装饰器的时候会将被修饰的类作为参数传入装饰函数
## 参数数组收集器，返回新类覆盖记。
   对于构造函数我们可以通过剩余参数收集参数
   如果在类的装饰器返回一个新的类 那么后续使用这个类new对象
   产生的实例就是这个返回的类的实例
```ts
   //定义类装饰器  new (...argu:any)=>object 表示限制该函数必须是构造函数
   function ClassDecorator(clazz:new (...argu:any)=>object/*也可以使用 Function*/){
      // 这里返回了一个新的类如果某个类使用了该装饰器创建对象实例就是该返回类的实例
      return class B {
         name:string;
         age:number;
         address:string
      }
   }

   @ClassDecorator
   class Decorator{
      name:string;
      age:number;
      constructor(name:string,age:number){
         this.name = name;
         this.age = age;
      }
   }
   let dec:Decorator = new  Decorator("肖焕然",22);
   console.log(dec);//B {}
```
## 使用成员装饰器，坐落类中属性记。
   成员装饰器修饰属性 和方法
## 对应参数收集器，静态首个构造记。
    对应接收的参数如果说修饰的是静态属性和方法那么第一个参数就是
    当前类
## 如遇属性对象器，首个参数原型记。
   如果是成员方法和属性那么第一参数就是当前类的原型
## 参数第二名称器，还有第三描述记。
   第二个参数是属性名 第三参数是属性描述符
```js
      //静态属性装饰器
   function staticDecoratorProp(clazz:Function,name:string){
      console.log("----静态属性装饰器----");
      console.log(clazz,name);
   }
   //静态方法装饰器
   function staticDecoratorMethod(clazz:Function,name:string,deco:object){
      console.log("----静态方法装饰器----");
      console.log(clazz,name,deco);
   }
   //成员属性装饰器
   function decoratorProp(proto:object,name:string){
      console.log("----成员属性装饰器----");
      console.log(proto,name);
   }
   //成员方法装饰器
   function decoratorMethod(proto:object,name:string,deco:object){
      console.log("----成员方法装饰器-----");
      console.log(proto,name,deco);
   }
   class User{
      @staticDecoratorProp
      static className:string= User.name;
      @ staticDecoratorMethod
      static classIntroduce(){

      }
      @decoratorProp
      private _name:string = "小城贝尔"
      @decoratorMethod
      private sayHellow(){
         
      }
   }
```
## 装饰执行就近器，生成函数顺序记。
   对于装饰器的执行顺序问题是 就近原则越靠近越先执行
   但是一般我们会使用装饰器生成函数 对应生成函数的执行顺序是
   先调用先执行
```TS
      // 装饰器生成函数以及执行顺序问题
   function decoA(des:string){
      console.log("装饰器生成函数A");
      return function (proto:object,name:string){
         console.log("装饰器--decoA---"+name+"---desc--"+des);
      }
   }
   function decoB(des:string){
      console.log("装饰器生成函数B");
      return function (proto:object,name:string){
         console.log("装饰器--decoB---"+name+"---desc--"+des);
      }
   }

   class User{
   @decoA("我是a鸭")
   @decoB("我是b鸭")
   duck:string
   }
   // 装饰器生成函数A
   // 装饰器生成函数B
   // 装饰器--decoB---duck---desc--我是b鸭
   // 装饰器--decoA---duck---desc--我是a鸭
```