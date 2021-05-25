# React路由link和redirect

【小城贝尔】

切换路径不刷新，路由目标对象惊。

路径名称状态新，查询参数哈希惊。

默认压入历史新，内部引用元素惊。

还有链接服务新，匹配类型活跃惊。

活跃类名自定新，样式匹配属性惊。

严格模式斜杠新，大小敏感无需惊。

重定路由导向新，来着路径参数惊。


## 切换路径不刷新，路由目标对象惊。
    使用Link 或者是 NavLink 或者是 Redirect 组件通过改变
    地址或者是hash实现页面无刷新组件切换
    使用 to属性设置点击需要切换的对应路由组件
## 路径名称状态新，查询参数哈希惊。
    对于to属性还可以是一个对象
    {
        pathname:路由路径
        state:转态数据
        search:路径参数
        hash:锚点
    }
## 默认压入历史新，内部引用元素惊。
   对于Link组件默认切换方式是history.push()
   可以显式定义属性 replace 切换为 history.replace() 方式
   innerRef属性是对于Link组件真实生成的dom元素的引用 一般指的就是生成的a标签
```JS
        import React, { Component } from 'react'
        import {Route,BrowserRouter,Link} from "react-router-dom"
        export default class OtherCom extends Component {

            render() {
                return (
                    <BrowserRouter>
                        <div>
                            <div>
                                <Link to="/a">A</Link>
                                <Link to={
                                {
                                    pathname:"/b",
                                    state:"状态",
                                    search:"age=10&name=cheng",
                                    hash:"myHash"
                                }
                                }>B</Link>
                                <Link  to="/c" innerRef={el=>{
                                    console.log("innerRef===>",el);
                                }} >C</Link>

                            </div>
                            <Route path="/a" component={A}/>
                            <Route path="/b" component={B}/>
                            <Route path="/c" component={C}/>
                        </div>
                    </BrowserRouter>
                )
            }
        }
        function A(){
            return(<>
                <h1>我是组件A</h1>
            </>);
        }
        function B(){
            return(<>
                <h1>我是组件B</h1>
            </>);
        }
        function C(){
            return(<>
                <h1>我是组件C</h1>
            </>);
        }

```
## 还有链接服务新，匹配类型活跃惊。
   NavLink 组件如果类型匹配那么会加上一个类名 active
## 活跃类名自定新，样式匹配属性惊。
   当然可以通过 activeClassName=""属性自定义类名
   还可以通过 activeStyle={ {
       color:red;
       ....
   } }
   自定义匹配后的样式
```js
    ......
        <NavLink to="/a" activeClassName="myActiveClass">A</NavLink>
        <NavLink
            activeStyle={{
                color:"red",
                fontSize:"20px",
                backgroundColor:"pink"
            }}
            to={{
                pathname:"/b",
                state:"状态",
                search:"age=10&name=cheng",
                hash:"myHash"
            }}>B</NavLink>
    ......
```
## 严格模式斜杠新，大小敏感无需惊。
   strict属性用于说明是否严格匹配后一个斜杠
   如 /a/  非严格模式等价于 /a 如果是严格模式那么就会严格匹配后一个斜杠
   对于 sensitive大小写敏感和Route使用一样
## 重定路由导向新，来着路径参数惊。
   Redirect 表示重定向组件 其中to属性和Link用法一样
   其还有 from属性 如果配置了那么就只有来自from的路由才会重定向来自于其他路由不会
   重定向
```js
     <BrowserRouter>
                <div>
                    <div>
                        {/* 点击/c跳转到/b */}
                        <Link to="/c">/c</Link>
                        <Link to="/b">/b</Link>
                    </div>
                    <Switch>
                        <Route path="/a" component={A}/>
                         {/* 点击/c跳转到/b */}
                        <Redirect from="/c" to="/b"/>
                        <Route path="/b" component={B}/>
                        <Route path="/c" component={C}/>
                    </Switch>
                   
                </div>
            </BrowserRouter>
```