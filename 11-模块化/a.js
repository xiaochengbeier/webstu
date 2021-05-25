//基本导出
export var a = 3;
export function demo() {
    console.log("基本导出导出函数");
}
export const obj = { message: "基本导出导出对象" };
export class Clazz {
    constructor() {
        this.message = "基本导出导出类"
    }
}

var e = 3;
var f = function() {};
var g = {};
//使用具名符号导出配置别名
export { e, f, g as newG };
//duplicate {重复的}  : Duplicate export of 'e'
//不能重复导出一个东西否则报错
// export { e };
//默认导出
let age = 18;
let name = "小城贝尔";
export { age, name as default }; //表示name 按照默认导出的方式导出
// export default " 默认导出只能";
//Duplicate export of 'default'  默认导出只能有一次所以这个冲突了

//导出其他文件导出的内容
export { default as myObj }
from "./b.js";