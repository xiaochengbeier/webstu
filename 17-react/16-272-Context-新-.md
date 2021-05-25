# React上下文新

【小城贝尔】

创建上下文独立，生产消费坐落递。

生产组件包裹立，强制更新值传递。

坐落其中组件立，消费获得标签递。

孩子函数回掉立，也可使用老传递。

上下类型校验立，共享数据参数递。


## 创建上下文独立，生产消费坐落递。
    在新的API中创建上下文
    const ctx = React.createContext({
        //上下文属性默认值非必须
    });
    上下文对象中包括有两个组件
    Provider:生产者用于向子组件提供数据
    Consumer:消费者在子组件中使用用于接收数据
## 生产组件包裹立，强制更新值传递。
    如果子组件想使用该上下文的数据那么就必须使用
    <ctx.Provider  value={}>
        ...子组件
    </ctexProvider>
    如果说value中的数据跟新了【使用Object.is()比较】那么会导致强制渲染
    不管 shouldComponentUpdate 返回值是不是false
## 坐落其中组件立，消费获得标签递。
    坐落在provider标签包裹中的子组件如果说想使用上下文中的数据
    在组件内使用
    <ctx.Consumer>
        (contexValue)=>{
            return(.....);
        }
    </ctx.Consumer>
## 孩子函数回掉立，也可使用老传递。
    在consumer标签中传递一个回调函数上下文对象会将上下文数据传给方法形参
## 上下类型校验立，共享数据参数递。
    还有一种获得上下文数据的方式通过设置
    static contentType = {};
    然后通过函数或者构造函数传入上下文数据

```JS
    import React, { Component } from 'react'
    import PropTypes from "prop-types"
    //创建上下文
    const ctx =  React.createContext();
    export default class index extends Component {
        state = {
            name:"小城贝尔",
            age:22,
        }
        changeData=(newName)=>{
            this.setState({
                name:newName
            })
        }
        render() {
            let ctxDate = {name:this.state.name,
                           age:this.state.age,
                           changeData:this.changeData};
            return (
                <div>
                <ctx.Provider  value={ctxDate}>
                    <SonContxt/>
                </ctx.Provider>  
                </div>
            )
        }
    }

    class SonContxt extends Component{
        render(){
            return(<>
                <ctx.Consumer>
                    {
                        (value)=>{
                            return(<>
                                <p>name:{value.name}</p>
                                <p>age:{value.age}</p>
                                <Son2Contex/>
                            </>);
                        }
                    }
                </ctx.Consumer>
            </>);
        }
    }

    //函数组件使用上下文
    function Son2Contex(props,context){
        return (<>
            <ctx.Consumer>
                {
                    (value)=>{
                    return( <button onClick={()=>{
                        value.changeData("--大城贝尔--");
                    }}>点击改变上下文数据</button>);
                    }
                }
            </ctx.Consumer>
        </>);
    }
```