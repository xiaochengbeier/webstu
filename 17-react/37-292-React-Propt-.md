# React路由之阻止跳转

【小城贝尔】

阻止跳转小组件，当时消息布尔现。

莫忘回掉根组件，用户确认方法现。


## 阻止跳转小组件，当时消息布尔现。
    <Prompt/>阻塞路由跳转的组件
    when等于 true的时候阻塞
    message 表示getUserConfirmation 的消息
## 莫忘回掉根组件，用户确认方法现。
    使用Prompt组件其内部原理依旧是 history.block() 方法
    所以必须和 getUserConfirmation 配合
```js
    import React, { Component } from 'react'
    import {BrowserRouter,Link,Route,Prompt} from "react-router-dom"
    export default class PromptTest extends Component {
        render() {
            return (
                <BrowserRouter getUserConfirmation={(mess,next)=>{
                    next(window.confirm(mess));
                }}>     
                    <Link to="/a">/a</Link>
                    <Link to="/b">/b</Link>
                    <div>
                        <Route path="/a" component={A}/>
                        <Route path="/b" component={B}/>
                        {/* 当 when等于 true的时候阻塞 message 表示getUserConfirmation 的消息 */}
                        <Prompt when={true} message={"i am  prompt"}/>
                    </div>

                </BrowserRouter>
            )
        }
    }
    function A(){
        return "A"
    }
    function B(){
        return "B"
    }
```