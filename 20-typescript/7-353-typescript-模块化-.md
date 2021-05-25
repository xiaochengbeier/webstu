# 模块化

【小城贝尔】

模块书写浏览化，导入导出规范挂。

编译结果配置化，浏览不变结果挂。

若是目标服务化，编译结果必转挂。

导出模块属性化，默认导出字段挂。

导入结果对象化，对应功能属性挂。

解决导出默认化，星号别名配置挂。

非要操作服务化，支持操作语法挂。


## 模块书写浏览化，导入导出规范挂。
   在ts中模块化标准统一使用 es标准
   使用 es标准进行导入导出
## 编译结果配置化，浏览不变结果挂。
   如果说配置的编译目标也是es 那么编译结果和ts没有什么变化
## 若是目标服务化，编译结果必转挂。
   如果说编译目标是 "CommonJS" 那么就需要转换语法
## 导出模块属性化，默认导出字段挂。
   对于导出基本导出会转换为 "CommonJS" 会将导出的
   内容作为 exports.xxx 的属性
   如果是默认导出则会生成一个 default 属性
    exports.default
## 导入结果对象化，对应功能属性挂。
   对于导入转换模式是导入一个对象使 es导入的内容成为这个对象的一个属性
## 解决导出默认化，星号别名配置挂。
    如果需要导入一些不太支持的默认导出比如 fs 模块
    可以使用别名 或者是 通过配置解决
    import * as  fs from "fs";
## 非要操作服务化，支持操作语法挂。
    在ts中推荐使用es模块化标准如果说非要使用
    "CommonJS" 也是可以的
    比如导入
    import zip = require("./ZipCodeValidator");
    导出
    export = ZipCodeValidator;

【导入】
```ts
    import me , {add,PI} from "./5-module-hand"
    //默认导入问题
    import  * as fs from "fs"
    import * as path from "path"
    console.log(me);
    console.log(PI);
    console.log(add(10,10));
    fs.readFileSync(path.resolve(__dirname,"./test.ts"));

    Object.defineProperty(exports, "__esModule", { value: true });
    const _5_module_hand_1 = require("./5-module-hand");
    //默认导出问题
    // const fs = require("fs");
    // const path = require("path");
    // console.log(_5_module_hand_1.default);
    // console.log(_5_module_hand_1.PI);
    // console.log(_5_module_hand_1.add(10, 10));
    // fs.readFileSync(path.resolve(__dirname, "./test.ts"));
    //  "module": "CommonJS", 编译结果
    // "use strict";  如果想要取到 这个严格模式  
    // 去除严格编译结果模式  在 tsconfig.json 中配置"noImplicitUseStrict": true,  
    // exports.__esModule = true;
    // var _5_module_hand_1 = require("./5-module-hand");
    // console.log(_5_module_hand_1["default"]);
    // console.log(_5_module_hand_1.PI);
    // console.log(_5_module_hand_1.add(10, 10));
```
    【导出】
```js
    export function add(a:number,b:number){
        return a+b;
    }
    export const PI = 3.1415

    export default {
        name:"小城贝尔",
        age:22
    }
    // 编译后的结果
    // Object.defineProperty(exports, "__esModule", { value: true });
    // exports.PI = exports.add = void 0;
    // function add(a, b) {
    //     return a + b;
    // }
    // exports.add = add;
    // exports.PI = 3.1415;
    // exports.default = {
    //     name: "小城贝尔",
    //     age: 22
    // };
```