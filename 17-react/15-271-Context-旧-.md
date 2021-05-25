#  React上下文老

【小城贝尔】

获得孩子上下文，返回对象子孙囤。

孩子类型校验文，静态属性类型囤。

使用上下类型文，数据封装传参囤。

修改数据上下文，对应方法值中囤。

后代定义冲突文，就近得取数据囤。

## 获得孩子上下文，返回对象子孙囤。
   使用 getChildContext(){
            return{
                //提供上下文的数据子组件都可以访问
                name:"小城贝尔",
                age:22,
                changeMess(argu){
                    //修改上下文的数据
                }
            }
       }
    值得注意的是上下文中的数据只能子组件访问当前定义上下文的组件是访问不了的
## 孩子类型校验文，静态属性类型囤。
   必须使用类型校验提供的数据类型
   static childContextTypes:{
        name:PropTypes.string
        age:PropTypes.number
        changeMess:PropTypes.func    
   }
## 使用上下类型文，数据封装传参囤。
   当子组件要使用上下文的数据的时候会将上下文对作为参数传递给子组件
   如果是函数子组件那么传递给 第二个参数
   如果是对象子组件难么传递给构造函数的第二个参数
   还必须在子类上通过静态属性 contexTypes 明确需要上下问的那个属性
   以及对应的类型
## 修改数据上下文，对应方法值中囤。
   如果需要修改上下文中的数据将修改的方法放在上下文中调用即可
## 后代定义冲突文，就近得取数据囤。
    如果子组件也定义的有上下文那么后代取值参考就近原则
```js
    import React, { Component } from 'react'
    import PropTypes from "prop-types"
    export default class index extends Component {
        static childContextTypes = {
            name:PropTypes.string,
            age:PropTypes.number,
            changeMessage:PropTypes.func
        }
        state = {  
            name:"小城贝尔",
            age:20,
        }
        getChildContext(){
            return{
                name:this.state.name,
                age:this.state.age,
                // 注意该函数this指向
                changeMessage:(newName)=>{
                this.setState({
                    name:newName
                });
                }
            }
        }
        render() {
            return (
                <div>
                    <Son1/>
                </div>
            )
        }
    }
    class Son1 extends Component {
        static contextTypes ={
            name:PropTypes.string,
            age:PropTypes.number,
            changeMessage:PropTypes.func
        };
        changeContext=()=>{
            this.context.changeMessage("大成贝尔");
        }
        render(){
            return (<>
                name:{this.context.name}
                <hr/>
                age:{this.context.age}
                <hr/>
                <button  onClick={this.changeContext}>点击修改上下文数据</button>
            </>);
        };
    }


```