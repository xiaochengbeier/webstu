# React生命周期新

【小城贝尔】

创建依旧构造器，挂载将要取消记。

更新派生静态器，返回状态覆盖记。

然后节点渲染器，快照之前更新记。

必须返回有容器，配合完毕跟新记。


## 创建依旧构造器，挂载将要取消记。
    在新的生命周期中创建初始化依然是在构造器中
    挂载阶段去除了 
    componentWillMount
## 更新派生静态器，返回状态覆盖记。
    新阶段去除了
    componentWillReceiveProps
    componentWillUpdate
    添加了一个静态生命周期函数无论是 state 还是 props 跟新都会被触发
    static getDerivedStateFromProps(props, state)
     会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
## 然后节点渲染器，快照之前更新记。
    然后执行 render 当然在render之前和老的生命周期一样
    可以设置
    shouldComponentUpdate
    由于取消了   componentWillUpdate
    所以添加了一个更新之前的快照
    getSnapshotBeforeUpdate()
## 必须返回有容器，配合完毕跟新记。
    次快照必须要有一个放回值
    并且这个返回值会传给 
     componentDidUpdate(prevProps, prevState, snapshot)

    【新的生命周期函数执行顺序】

    static getDerivedStateFromProps()
        |
        |
        ↓
    shouldComponentUpdate()
        |
        |
        ↓
    render()
        |
        |
        ↓
    getSnapshotBeforeUpdate()
        |
        |
        ↓
    componentDidUpdate()
