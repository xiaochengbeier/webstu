# React钩子之useContext

【小城贝尔】

使用钩子上下文，传入对象参数囤。

取消组件消费文，直接数据拿取囤。

## 使用钩子上下文，传入对象参数囤。
   使用useContext(上下文对象);
   可以让我们很轻松的拿到上下文的数据
## 取消组件消费文，直接数据拿取囤。
   并且去掉了 使用 ctx.Consumer 标签的步骤
   可以直接从对象拿数据
```js
    import React,{useContext} from 'react'
    let cxt = React.createContext({
        name:"默认值名字",
        age:"默认值年龄"
    });
    export default function UseContextTest(){
        const context = useContext(cxt)
        return(<>
            <p>name:{context.name}</p>
            <p>age:{context.age}</p>
        </>)
    }
```