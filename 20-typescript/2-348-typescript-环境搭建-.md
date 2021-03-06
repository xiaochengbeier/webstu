# typescript环境搭建

【小城贝尔】

安装全局依赖包，编译文件指令抛。

默认环境假设包，浏览环境执行抛。

变量作用全局包，代码转译三板抛。

修改环境配置包，初始指令文件抛。

运行环境配置包，辅助安装类型抛。

模块配置标准包，编译结果目标抛。

开发效率依赖包，直接执行指令抛。

监控改变文件包，指令参数脚本抛。

监控指定文件包，特定后缀参数抛。

编译文件指定包，输出文件位置抛。


## 安装全局依赖包，编译文件指令抛。
   npm install -g typescript
   一般会全局安装这个包这样便于使用 其 tsc编译指令
## 默认环境假设包，浏览环境执行抛。
   当我们执行 tsc typescript会做出如下假设
   ① js代码运行环境是浏览器环境
## 变量作用全局包，代码转译三板抛。
   ② 所有的代码的作用域是全局 即相当于 使用 script标签直接引入
   ③ 编译代码对应的版本是 es3
## 修改环境配置包，初始指令文件抛。
   如果说我们要修改这些假设可以通过其配置文件修改
   使用 tsc init 便可以生成一个配置文件
## 运行环境配置包，辅助安装类型抛。
   修改运行环境 修改 lib字段即可
   如 lib:["es2016"]  表示运行环境 但是这样我们就没有
   办法使用 console 等全局对象了 这个时候我们可以安装
   @types/node 这个辅助包专门用于 node环境

   npm install --save-dev @types/node
   
## 模块配置标准包，编译结果目标抛。
   modules:[] 配置表示模块化标准要么是 es6 或者是 commonjs标准
## 开发效率依赖包，直接执行指令抛。
   由于typescript只是一个类型校验的工具是不参与执行的那么每次执行代码前都需要
   通过 tsc 编译成js代码执行这样不利于开发调试
   所以我们可以安装一个 ts-node 这个包 到时候就可以直接在内存中完成编译和执行两个步骤
## 监控改变文件包，指令参数脚本抛。
   为了实现热跟新的效果我们还需要安装nodemon 包监控文件内容改变
## 监控指定文件包，特定后缀参数抛。
   使用modemon的指令 
   nodemon  --watch 监控指定的文件夹 --ex 表示监控指定的文件后缀 --execu  其他脚本指令
## 编译文件指定包，输出文件位置抛。
   使用 includes 配置我们指定的编译文件夹目录
   使用 outDir 指定编译之后的输出文件夹

【tsconfig】
```json
{
   "compilerOptions": {
      // 表示运行环境是es6只是基础环境如果要校验其他的需要安装对应的包
      //  比如node环境安装 @typesnpm/node
      "lib": ["ES6"],
      //  表示编译后的代码版本目标
      "target": "ES2016",   
      // 模块化标准                    
      "module": "commonjs",
      // 编译后放到哪个文件夹
      "outDir": "./dist",                    
   },
   //编译指定文件夹下的文件
   "include": ["./src"],
   }
```

【配置的脚本命令】
```json
    "scripts": {
      "start":"nodemon --watch src --ext ts --exec ts-node src/test.ts",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
     --watch src  表示只监听 src目录中的文件修改 
     --ext ts     表示只监听ts文件后缀的文件
     --exec       表示每次更新执行的指令
```