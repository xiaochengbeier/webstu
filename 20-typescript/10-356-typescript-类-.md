# ts中的类

【小城贝尔】

属性声明构造外，类型明确修饰待。

初始严格配置外，直接赋值构造待。

构造参数修饰外，简写操作语法待。

可选操作问号外，类型实际空相待。

只读修饰属性外，公私权限保护待。

存取属性方法外，私有属性赋值待。

方法修饰法不外，同样操作语法待。


## 属性声明构造外，类型明确修饰待。
   ts中类的属性应该先在构造器外边声明 
   可以通过修饰符修饰其作用范围
## 初始严格配置外，直接赋值构造待。
   在tsconfig中配置 
    "strictPropertyInitialization": true,  
    表示必须初始化类属性
    初始化可以直接初始化
    或者是
    通过构造器初始化
## 构造参数修饰外，简写操作语法待。
    如果通过构造器初始化可以通过给参数加修饰符直接初始化
## 可选操作问号外，类型实际空相待。
    如果有些属性是可以有也可以没有可以通过 ？修饰该属性
## 只读修饰属性外，公私权限保护待。
    readonly  表示该属性为只读属性不能赋值
    private   表示私有属性对象外边不能访问
    public    共有属性默认值
    protect   受保护的
## 存取属性方法外，私有属性赋值待。
    get set 方法 对于私有属性赋值取值操作方法
## 方法修饰法不外，同样操作语法待。
    这些修饰符对方法同样起作用
```js
    class Person{
        name:string;
        age:number;
        private _tall = 185;
        // 直接初始化
        sex:"男"|"女" = "女";
        // 通过构造器初始化
        constructor(name:string,age:number, readonly id:string){
            this.name = name;
            this.age = age;
        }
        
        get tall(){
            return this._tall;
        };
        set tall(value){
            if(value > 175&&value < 185){
                this._tall = value;
            }else{
                this._tall = 180;
            }
        }
    }
    
    let person = new Person("小城贝尔",23,"160106213");
    person.tall = 180;
```