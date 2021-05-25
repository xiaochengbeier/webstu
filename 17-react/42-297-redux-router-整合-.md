# connected-react-router

【小城贝尔】

路由信息状态中，合并处理有缓冲。

初始历史参数中，还有路由中间冲。

最后组件连接中，包裹元素路由冲。

手动跳转方法中，提供分发对象冲。



## 路由信息状态中，合并处理有缓冲。
   有时候我们需要将路由的状态也同步到redux中
   这个时候我们可以使用 connected-react-router
   【第一步是】 在reducer合并函数中添加一个router的reducer
```js
    combineReducers({
        router: connectRouter(history),
        ... 
    })
```
## 初始历史参数中，还有路由中间冲。
   传入history的作用是初始化路由信息到redux中
   【第二步是】添加路由中间件
```js
     applyMiddleware(
        routerMiddleware(history), 
      ),
```
## 最后组件连接中，包裹元素路由冲。
   【第三步是】使用提供的路由包裹组件包裹路由配置
```js
     <Provider store={store}>
        <ConnectedRouter history={history}> 
        <> {
            <Switch>
            <Route exact path="/" render={() => (<div>Match</div>)} />
            <Route render={() => (<div>Miss</div>)} />
            </Switch>
            

            .........
            ............
```
## 手动跳转方法中，提供分发对象冲。
    如果说需要手动跳转到某个路由为了能同步到redux所以必须使用
    dispatch进行分发的形式跳转

【store.js】
```js
    import {createStore,applyMiddleware,combineReducers} from "redux"
    import {connectRouter,routerMiddleware} from "connected-react-router"
    import {createBrowserHistory} from "history"
    export let history = createBrowserHistory();
    let reducer = combineReducers({
        router: connectRouter(history)
    });
    export  let store = createStore(reducer,applyMiddleware(routerMiddleware(history)));
            store.subscribe(()=>{
                console.log("查看状态中的路由信息--",store.getState());
            });

```

【整合文件】
```js
    import React, { Component } from 'react'
    import {Route,NavLink} from "react-router-dom"
    import {Provider,connect} from "react-redux"
    import {store,history} from "./store"
    import {ConnectedRouter,replace} from "connected-react-router"
    export default class ConnectReactRouter extends Component {
        render() {
            return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <div>
                            <NavLink to="/a">a</NavLink>
                            <NavLink to="/b">b</NavLink>
                            <NavLink to="/c">c</NavLink>
                        </div>
                        <div>
                            <Route path="/a" component={A}/>
                            <Route path="/b" component={B}/>
                            <Route path="/c" component={C}/>
                        </div>
                    </ConnectedRouter>
                </Provider>
            )
        }
    }
    function _A(props){
        return(<>
            <h1>路由A</h1>
            <button onClick={props.goToC}>点我去c</button>
        </>);
    }
    let A = connect(null,(dispatch)=>{
        return{
            goToC(){
                //这里的replace("/c") 返回的只是一个action交由 connect-react-router中间件处理
                dispatch(replace("/c"));
            }
        }
    })(_A);
    function B(){
        return(<h1>路由B</h1>);
    }
    function C(){
        return(<h1>路由C</h1>);
    }

```