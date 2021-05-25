# 类型声明文件

【小城贝尔】

类型声明文件定，放置方位执行印。

模型类型位置定，编译文件容器印。

手动配制来指定，命名脚步文件印。

全局申明规则定，命名空间模块印。

局部模块也指定，导出操作约束印。

## 类型声明文件定，放置方位执行印。
   声明文件一般以xxx.d.ts 比如global.d.ts
   放置到指定的位置便可以自己执行给对应的js文件提供类型支持
## 模型类型位置定，编译文件容器印。
   声明文件可以放到 node_modules/@types 文件夹中
   或者是我们的存放ts的文件夹中也可以
## 手动配制来指定，命名脚步文件印。
    还可以在 tsconfig.json 中通过
    "typeRoots": [
      
    ] 
    来手动指定 一旦手动指定默认位置就失效了
## 全局申明规则定，命名空间模块印。
    全局声明方法约束
```ts
    declare function myLib(a: string): string;
```
    接口
```ts
    interface myLib {
        name: string;
        length: number;
        extras?: string[];
    }
```
    命名空间
```ts
    declare namespace myLib {
        //普通变量
        const version: string;
        //类
        class Cat {
            constructor(n: number);
        }
    }
```
## 局部模块也指定，导出操作约束印。
    模块化
```ts
    declare module 'someModule' {
      
        export function theNewMethod(x: m.foo): other.bar;

        
        export interface SomeModuleOptions {
            someModuleSetting?: string;
        }

        export interface MyModulePluginOptions {
            size: number;
        }
    }
```