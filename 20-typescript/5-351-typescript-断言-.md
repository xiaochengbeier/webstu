# 类型断言

【小城贝尔】

类型明确自定义，强制规定语法记。

尖角括号前定义，字符好像后边记。

## 类型明确自定义，强制规定语法记。
   当我们给某个变量赋值可手动指定其类型
## 尖角括号前定义，字符好像后边记。
   写在变量值前的语法 <类型> 值
   写在变量值后边的语法 值 as 类型
```ts
   function func(val:string|number):number{
      if((val as string).length){//断言此处val就是string类型
         return (val as string).length
      }else{
         return val.toString().length;
      }
   }

   let win:any = 123;
   let length = (<string>win).length;//断言为string类型
```