# React钩子之useRef

【小城贝尔】

函数定义引用上，不变地址对象荡。

功能改变灵活上，核心不变地址荡。

## 函数定义引用上，不变地址对象荡。
   useRef() 返回一个地址保持稳定的 ref对象
## 功能改变灵活上，核心不变地址荡。
   当然可以利用去其地址不变的特性给 current赋值其他的东西
```js
    import React, { useRef, useState } from 'react'
    export default function UseRefTest(){
        console.log("run ...");
    let [,flash] = useState({});
    let ref =   useRef();
    return(<>
        <input ref={ref}></input>
        <button onClick={()=>{
                flash(state=>{
                    window.arr.push(ref);
                    return{}
                })
        }}>ref</button>
    </>)
    }
    // 到时候在控制台比较看看 arr中的ref是否相等
    window.arr = [];
```