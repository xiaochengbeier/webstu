# React入口

【小城贝尔】

创建入口新追加，页面元素容器家。

返回虚拟节点加，对应树形稳如家。

## 创建入口新追加，页面元素容器家。
   使用 ReacDOM.createRortal(react元素,容器);
   将react元素追加到另一个页面的dom节点中
## 返回虚拟节点加，对应树形稳如家。
   此方法返回的还是一个虚拟节点虽然导致真实dom树结构改变
   但是对于react虚拟dom树任然是没有改变的对于事件冒泡顺序依然走
   react节点树的顺序因为 react中对事件做了特殊处理

```js
    import React, { Component } from 'react'
    import ReactDOM from "react-dom"
    function PortalTest(){
        let h1 = <h1>我到别的容器去啦。。。</h1>;
    return ReactDOM.createPortal( h1,document.getElementById("portal"));
    }
    export default class index extends Component {
        render() {
            return (
                <div>
                    < PortalTest/>
                </div>
            )
        }
    }
```