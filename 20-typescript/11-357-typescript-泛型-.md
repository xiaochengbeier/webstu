# 泛型

【小城贝尔】

类型具体执行定，符号占位括号进。

函数接口类中定，还有约束别名进。

扩展语法后规定，默认传值等号进。

数量不限使用定，符号分割逗号进。



## 类型具体执行定，符号占位括号进。
   有时候在定义类一个类方法的时候刚开始并不知道其类型是什么只有在使用的时候才知道
   这个时候我们可以使用泛型 即一个类型占位符号 我们可以在使用的时候在具体确定类型
## 函数接口类中定，还有约束别名进。
   泛型可以用在函数 类 接口 以及类型别名上
   用在方法上
   function func<T>(argu1:T,argu2:T):T{
    
   }
   用在类
   class Clazz<K,V>{
       key:K[], //K  类型的数组
       value:V[],//V 类型的数组
       ........
   }
   用在接口
   interface<T>{

   }
   用在别名
   type user<T> = {

   }
   
## 扩展语法后规定，默认传值等号进。
   我们规定的泛型仅仅是一个类型占位 可以使用继承语法规定这个类型继承某些基本特点
   type user<T extends B,C>
   指定泛型默认值
   type user<T = user> 如果使用的时候没有传入类型约束那么就使用默认值
## 数量不限使用定，符号分割逗号进。
   对一泛型的数量是不限定的在<> 中通过逗号 分隔即可
   <K,V,M,D>

```ts
    // 在方法中使用泛型
    function add<T>(arg1:T):T{
        return arg1;
    }
    // 在定义函数的时候并不知道应该是什么类型
    // 在使用的时候明确指定
    add<number>(3);

    // 在类中使用泛型
    class Clazz<K,V>{
        private key:K[] =[];
        private value:V[]= [];
        
        add(key:K,value:V){
        this.key.push(key);
        this.value.push(value);
        }
        show(){
            console.log(this.key);
            console.log(this.value);
        }

    }
    let clazz = new Clazz<string,number>();
    clazz.add("one",1);
    clazz.add("two",2);
    clazz.show();


    // 在接口中使用泛型
    interface user<T>{
        name:string
        say(argu:T):T
    }

    let he:user<number> = {
        name:"xxxxx",
        say(word){
            return word;
        }
    }
    he.say(666);

    //在类型别名中使用泛型和接口中使用一样


    //泛型的继承
    interface Animal{
        run():void
        ead():void
    }
    function show<T extends Animal>(arg:T){
        arg.run();
        arg.ead();
    }
    show({run(){
        console.log("run......");
    },ead(){
        console.log("ead......");
    }});
```