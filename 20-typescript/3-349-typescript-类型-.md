# typescript类型

【小城贝尔】

数字字符未定义，布尔对错空归寂。

对象数组类型义，严格判空配置寂。

混合类型或字义，类型保护推断寂。

字面类型约束义，基本对象均空寂。

数组详情元祖义，类型所有约束寂。

函数返回避免义，用不结束类型寂。

再有详细区别义，直接书写样式寂。

默认参数可选义，问好修饰后边寂。


## 数字字符未定义，布尔对错空归寂。
   typescript 中定义的数据类型有
   number 数字
   string 字符串
   undefined 未定义
   boolean 布尔类型
   null 空
## 对象数组类型义，严格判空配置寂。
   object 对象类型
   undefined 和   null 可以赋值给任何类型
   如果在配置文件中配置了
   "strictNullChecks": true, 
   那么就不能赋值给任何值了
## 混合类型或字义，类型保护推断寂。
   还有混合类型即一个变量是我们规定的几个类型
   如
   let a:string|number|boolean 
## 字面类型约束义，基本对象均空寂。
   字面类型约束
   let sex:"男"|"女"
## 数组详情元祖义，类型所有约束寂。
   元祖类型 tuple 用来详细约束数组
   let x: [string, number];
## 函数返回避免义，用不结束类型寂。
   对于函数的返回值可以自己定义返回类型 如果
   没有返回值 那么就是 void
   还有就是 never 表示此函数永远不会结束
## 再有详细区别义，直接书写样式寂。
   如果对于函数的返回值类型是动态的根据参数类型来的话那么可以
   具体表明其类型
## 默认参数可选义，问好修饰后边寂。
   对于可选参数 使用 ？修饰即可
   如果书写了默认值 那么默认就被 ？ 修饰
   当然可选参数是不能作为第一个形参存在的
```js
    // 基本类型
    let name:string;
    let age:number;
    let xxx:undefined;
    let vvv:null;
    let isTrue:boolean;
    let user:object;
    let student:[];
    //混合类型
    let sex:number|string;
    // 字面量类型
    let gender:"男"|"女";
    let people:{name:string,age:number};
        people = {name:"小城贝尔",age:22};
    //元祖类型tuple
    let arr:[string,number];
        arr = ["你好",123];
    //函数参数返回值类型
    function add(a:number,b:number):number{
        return a +b;
    }
    add(2,2);
    //void 表示没得返回值
    function noReturn(a:string):void{
        console.log(a);
    }
    //never表示此函数永远不会结束
    function never():never{
        while(true){

        }
    }
    //返回值类型为根据参数动态返回
    function dynamic(a:number,b:number):number;
    function dynamic(a:string,b:string):string;
    function dynamic(a:number|string,b:number|string):number|string{
            if(typeof a == "number" && typeof b == "number"){
                return a + b;
            }
            if(typeof a == "string" && typeof b == "string"){
                return a + ' string '+ b ;
            }
            throw new Error("a b 类型不一样");
    }
    dynamic(1,4);
    dynamic("str","str");
```