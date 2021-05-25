# 小程序组件behavior

【小城贝尔】

组件构造参混入，字段覆盖生命渡。

服务规范外导入，对应文件执行渡。

自定组件扩展入，定义过滤方法渡。

参数第一调用入，修改数据先机渡。

参数第二依赖入，多个封装数组渡。



## 组件构造参混入，字段覆盖生命渡。
    behavior相当于一个共有的组件构造器参数
    如果同时引入了 behavior 对于对象字段如果相同那么就会覆盖
    如果是生命周期函数那么就不会覆盖   
## 服务规范外导入，对应文件执行渡。
```js
    var myBehavior = require('my-behavior')
     Component({
         behaviors: [myBehavior],
    })
```
```js  对应的 my-behavior.js 文件
    module.exports = Behavior({
        behaviors: [],
        properties: {
            myBehaviorProperty: {
            type: String
            }
        },
        data: {
            myBehaviorData: {}
        },
        attached: function(){},
        methods: {
            myBehaviorMethod: function(){}
        }
    })

```
## 自定组件扩展入，定义过滤方法渡。
    对于自定义组件扩展就是利用 behavior的特性
```js
   module.exports = Behavior({
    behaviors: [require('behavior3.js')],
        definitionFilter(defFields, definitionFilterArr) {
            // definitionFilterArr[0](defFields)
        },
    })
```
## 参数第一调用入，修改数据先机渡。
   definitionFilter中
   第一个参数:defFields  表示使用该behavior的组件或者是 另一个behavior对象
## 参数第二依赖入，多个封装数组渡。
   第二个参数:definitionFilterArr  表示当前behavior引入了那些其他behavior的数组集合