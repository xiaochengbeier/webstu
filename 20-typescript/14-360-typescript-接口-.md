# 接口

【小城贝尔】

接口定义强约束，子类实现标准住。

判断子类继承束，类型保护方法住。

方法返回布尔束，类型判断接口住。

判断是否属性束，如遇不觉断言住。


## 接口定义强约束，子类实现标准住。
   接口是对其实现类的强制约束 
   对于接口中的属性和方法子类都必须实现
## 判断子类继承束，类型保护方法住。
   由于接口只是ts中的类型编译之后就不存在了所以如果要在运行过程中
   具体知道自己是否实现了某个接口那么就要使用到类型保护
## 方法返回布尔束，类型判断接口住。
    我们自己定义一个方法来判断是不是实现了某个接口
    如果实现了一定会有接口的属性和方法
## 判断是否属性束，如遇不觉断言住。
    function 类型保护方法名(ani:object):ani is  某个接口{
       if((ani as unkow as 某个接口).某个接口方法或者属性){
           return true;
       }
       return false;
   }


```ts
    interface Run{
        steps:number;
        run():void;
    }
    interface Jump{
        tall:number;
        jump():void;
    }

    class Cat implements Run,Jump{
        steps: number = 100;
        run(): void {
        console.log("跑了 "+this.steps+"步");
        }
        tall: number = 50;
        jump(): void {
            console.log("跳了 "+this.tall+" 米");
        }
    }

    let cat:Cat = new Cat();
    //类型保护方法判断是否实现了 Jump  这个接口
    function isImpleJump(ani:object):ani is Jump{
        if((ani as unknown as  Jump).jump && (ani as unknown as Jump).tall){
            return true;
        }
        return false;
    }
    if(isImpleJump(cat)){
        cat.jump();
    }
```