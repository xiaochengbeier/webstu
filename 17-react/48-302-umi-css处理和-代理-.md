# umi的css处理和代理

【小城贝尔】

样式处理加载器，局部编译模块记。

对象键值转换器，类名唯一结果记。

代理模式辅助器，目标对象跨域记。

底层基于构建器，基础知识应牢记。

## 样式处理加载器，局部编译模块记。
   umi对于局部的样式文件处理是用了 css-loder 的module形式
   即会将设置的类名转换
## 对象键值转换器，类名唯一结果记。
   通过键值对的形式
   {自己的类名:转换后的类名}

   对于全局的 global.css umi不会进行处理保留原始设置
## 代理模式辅助器，目标对象跨域记。
   配置代理
```js
    "proxy": {
        "/api": {
            "target": "http://jsonplaceholder.typicode.com/",
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }
     }

```
## 底层基于构建器，基础知识应牢记。
   基于webpack的devserver