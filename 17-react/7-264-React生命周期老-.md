# React声明周期

【小城贝尔】

生命周期四阶段，生死挂载更新伴。

对象构造出生段，执行一次无相伴。

将要挂载渲染段，注意状态设置伴。

挂在已成过去段，状态请求资源伴。

将要接收更新段，是否更新布尔伴。

更新前后回掉段，中间必有渲染伴。

最后回掉销毁段，清除定时常相伴。


## 生命周期四阶段，生死挂载更新伴。
    声明周期主要分为四个大阶段 
    出生  constructor 
    死亡  componentWillUnmount   componentDidMount
    
    挂载  componentWillMount 
          --->render   
          componentDidMount
   
    更新  componentWillReceiveProps
          shouldComponentUpdate
          componentWillUpdate
          --->render
          componentDidUpdate
## 对象构造出生段，执行一次无相伴。
    对于构造函数 constructor  在一个声明周期中只会执行一次
    在里边不能 使用 setState 因为此时该组件还未挂载
## 将要挂载渲染段，注意状态设置伴。
     componentWillMount  在一个声明周期中只会执行一次
                         此时将虚拟节点挂载到节点树上
                         可以使用 setState但是不建议使用

      render            在一个声明周期中只会执行多次
                         如果使用 setState 会导致死循环
## 挂在已成过去段，状态请求资源伴。
     componentDidMount   在一个声明周期中只会执行一次
                         在此函数里可以使用setState
                         网络加载资源应该放在此阶段
## 将要接收更新段，是否更新布尔伴。
     componentWillReceiveProps 在一个声明周期中只会执行多次
                               会接收到新的state值但是state还未改变

     shouldComponentUpdate    如果 shouldComponentUpdate() 返回 false，则不会调用 render()。
## 更新前后回掉段，中间必有渲染伴。
    componentWillUpdate
     --->render
    componentDidUpdate
## 最后回掉销毁段，清除定时常相伴。
     componentWillUnmount 销毁阶段一般我们如果开启了定时器在这里清除