# React状态深究

【小城贝尔】

设置状态方法硬，执行时机不一定。

元素事件回掉硬，异步执行规则定。

渲染一遍优化硬，线性执行函数定。

参数第二时机硬，渲染完毕触发定。


## 设置状态方法硬，执行时机不一定。
    setState();方法执行时机不一定都是同步的
## 元素事件回掉硬，异步执行规则定。
    在元素事件回调处理函数中setState()方法就是异步执行的
## 渲染一遍优化硬，线性执行函数定。
    对于异步执行 setState() 方法不管执行多少次 render() 方法只会执行一次
    如果我们需要线性执行 setState方法 那么就需要改变参数形式该对象为回调函数 
## 参数第二时机硬，渲染完毕触发定。
    setState()还有第二个参数作为render方法执行后的回调函数

```js
    import React from "react";
    export default class DeepState extends React.Component{
        state = {
            num:1
        }

        studyState=()=>{
            // 异步执行每次调用 num 加 1
            // this.setState({
            //     num:this.state.num +1
            // });
            // this.setState({
            //     num:this.state.num +1
            // });
            // this.setState({
            //     num:this.state.num +1
            // });
            // console.log("studyState=()=>");

            //整体是异步执行但是每个 setState 执行是同步的
            this.setState(state=>{
                console.log(state);
                return{num:state.num +1}
            },()=>{
                console.log("render 老铁执行完了就到我--");
            });
            this.setState(sta=>{
                console.log(sta);
                return{num:sta.num +1}
            });
            console.log("studyState=()=>");
        }
        render(){
            console.log("我被调用了");
            return(<>
                <button onClick={this.studyState}>点击</button>
                <div>{this.state.num}</div>
            </>);
        }
    }   
```