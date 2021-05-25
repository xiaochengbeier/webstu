#  抽象类

【小城贝尔】

抽象定义关键字，继承实现语法赐。

抽象属性方法字，必须实现要求赐。

属性实现修饰字，存取方法可赏赐。

由此实现模板字，执行流程方法赐。


## 抽象定义关键字，继承实现语法赐。
   定义抽象类使用 abstract 关键字 
   和类一样可以被类继承
## 抽象属性方法字，必须实现要求赐。
    被 abstract 修饰的方法 属性称为抽象方法和抽象属性
    如果继承了该类则必须实现抽象方法和抽象属性
## 属性实现修饰字，存取方法可赏赐。
    对于抽象属性的实现方式除了定义属性还可以 get 方法的形式实现
## 由此实现模板字，执行流程方法赐。
    基于抽象类的特点我们可以很好的实现模板设计模式
```ts
    abstract class  People{
        abstract name:string;
        abstract age:number;
        run(){
            console.log("固定操作。。start。。");
            this.startRun();
            this.stopRun();
            console.log("固定操作。。end。。");
        }
        abstract startRun():void;
        abstract stopRun():void;
    }

    class HandsomePeople extends People{
        name: string = "韩信";
        startRun(): void {
            console.log(`${this.name}---${this.age}---开始跑了`);
        }
        stopRun(): void {
            console.log(`${this.name}---${this.age}---停止了奔跑`);
        }
        // 实现属性还可以使用get方法
        get age(){
            return 18;
        }    
    }

    let p:HandsomePeople = new HandsomePeople();
    // 调用模板方法
    p.run();
```