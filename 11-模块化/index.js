// 导入默认导出对象方式一
import { a, default as def, newG } from "./a.js";
//default 表示导入导出的默认对象 这种方式必须加别名
console.log(def); //小城贝尔
// 导入默认导出对象方式二
import def, { a, f, newG } from "./a.js";
console.log(def); //小城贝尔
//导入默认导入方式三
import * as all from "./a.js";
console.log(all.default); //小城贝尔