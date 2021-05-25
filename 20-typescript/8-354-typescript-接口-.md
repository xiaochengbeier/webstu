# 接口

【小城贝尔】

接口稍似别名化，语法对应约定挂。

对象函数限制化，取值约定类型挂。

对比继承交叉化，组合限制对比挂。

接口实现标准化，项目实现效率挂。

## 接口稍似别名化，语法对应约定挂。
   接口基础部分和类型别名具有一丢丢相似
## 对象函数限制化，取值约定类型挂。
   可以使用接口来约束类 对象 函数
## 对比继承交叉化，组合限制对比挂。
   对比接口的继承和类型别名的交叉
   如果在交叉中冲突了那么就综合其类型作为共有
   而接口继承冲突了就会提示报错
## 接口实现标准化，项目实现效率挂。
   使用接口可以强制约束代码可以提交项目开发效率
```js
    interface Person{
        name:string,
        age:number,
        talk(word:string):string
    }
    // 约束对象和方法
    let me:Person ={
        name:"姓名",
        age:23,
        talk(word){
            return word;
        }
    }

    // 对比别名交叉
    type A ={
        name:string
        id:string
    
    }
    type B = {
        id:number
    };
    type C ={
        id:boolean
    } & A & B;

    //冲突导致 e 为never类型
    // let e:C ={
        
    // }

    //继承
    interface D{
        id:string
    }
    interface E{
        name:string
    }
    // 接口“F”错误扩展接口“D”。
    //   属性“id”的类型不兼容。
    //     不能将类型“boolean”分配给类型“string”。
    // interface F extends D,E{
    //     id:boolean
    // }
```