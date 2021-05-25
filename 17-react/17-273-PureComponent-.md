# React纯组件

【小城贝尔】

属性状态不更新，被动渲染性能惊。

继承纯组规则新，浅渡比较效果惊。

底层操作理不新，应该跟新会掉惊。

对应函数难更新，备忘函数包装惊。

## 属性状态不更新，被动渲染性能惊。
    使用纯组件可以避免被动更新的问题即父组件更新子组件的数据以及
    状态都没有改变但是还是会跟着跟新这样浪费性能
## 继承纯组规则新，浅渡比较效果惊。
    想使用纯组件在自己定义组建的时候继承
    PureComponent 即可
## 底层操作理不新，应该跟新会掉惊。
    对于大实现的底层原理就使用了声明周期函数
    shouldComponentUpdate
    值得注意的是比较属性新旧以及状态新旧都是使用的浅比较
## 对应函数难更新，备忘函数包装惊。
    如果是一个函数组件由于没有生命周期函数如果想达到同样的效果
    必须使用高阶组件给函数外边套上一层类组件
```js
    import React, { PureComponent } from 'react'

    export default class index extends PureComponent {
        state = {
            num:1
        }
        render() {
            return (
                <div>
                    <TestPure/>
                    <h1>{this.state.num}</h1>
                    <button onClick={()=>{  
                        this.setState({
                            num:this.state.num +1
                        });
                    }}>点击更新当前组件状态</button>
                </div>
            )
        }
    }

    class TestPure extends PureComponent{
        state={
            name:"小城贝尔",
            age:22
        }
        render(){
            // 如果继承的是component那么每次父级组件跟新子组件会跟着更新
            console.log("---TestPure---");
            return(<h1>
                name:{this.state.name}
                <hr/>
                age:{this.state.age}
            </h1>);
        }
    }
```