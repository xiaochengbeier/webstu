# React初接触

【小城贝尔】

引入核心依赖库，语言标准环境素。

创建元素虚拟库，名称配置子元素。

另外浏览操作库，渲染方法假元素。

创建虚拟语法库，操作难度比元素。

引入通天编译库，转换标签假元素。

## 引入核心依赖库，语言标准环境素。
    在页面中使用React 不使用构建工具首先引入其核心库
    此库仅仅是符合 js 语言规范所以可以在任何环境下使用
```html
     <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
``` 
## 创建元素虚拟库，名称配置子元素。
    使用核心库中的 React对象创建虚拟节点对象
```js
    let vNode = React.createElement("a",{href:"http://www.badu.com"},"我是标签中文字"); 
```
## 另外浏览操作库，渲染方法假元素。
    另外引入操作dom的库这个库依赖核心库
```html
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
``` 
    其核心方法 ReactDOM.render(vNode,container);
    将虚拟节点真正渲染到页面中
```js
      let vNode = React.createElement("a",{href:"http://www.badu.com"},"我是标签中文字"); 
      ReactDOM.render(vNode, document.getElementById("dom"));
```
## 创建虚拟语法库，操作难度比元素。
    创建虚拟节点使用 React.createElement()方法过于复杂难操作所以我们使用 JSX语法
## 引入通天编译库，转换标签假元素。
    需要引入 babel.js 将JSX语法最终转换成vNode 
```html
   <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

```js
    <script type="text/babel">
        let a = <a href="http://www.taobao.com"> 去淘宝</a>; 
        console.log(a); 
        ReactDOM.render(a, document.getElementById("dom"));
    </script>
```