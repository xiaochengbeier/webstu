# vue-jsx  
【小城贝尔】

渲染函数语法糖，返回括号标签狂。

插值表达括号糖，脚本语法里边狂。

部分指令苦味糖，不被支持自定狂。

内部文本标签糖，特殊属性配置狂。

条件渲染杂陈糖，自定实现三元狂。

列表渲染苦涩糖，数组地图钥匙狂。

引用指令美味糖，数组封装消息狂。

属性绑定甜心糖，赋值脚本括号狂。

事件绑定可口糖，驼峰本地中划狂。

双向绑定粘性糖，语法支持操作狂。

插槽指令如意糖，域中作用数据狂。

## 渲染函数语法糖，返回括号标签狂。
    jsx 是渲染函数 render的语法糖
    使用基本语法
    render(){
        return (//括号的作用是为了防止换行而返回空的问题
            <div>{js数据}</div>
        )
    }
## 插值表达括号糖，脚本语法里边狂。
    在jsx中使用 插值表达式使用 {js数据}
## 部分指令苦味糖，不被支持自定狂。
    在jsx中部分vue指令是不被支持的 需要自己实现对应的功能
## 内部文本标签糖，特殊属性配置狂。
    v-html 使用  domPropsInnerHTML = "<XX></XX>"
    v-text 使用  domPropsTextContent = "文本内容"
## 条件渲染杂陈糖，自定实现三元狂。
    条件渲染只支持 v-show={js数据}
    对于v-if v-else-if v-else 只有自己实现
    我们可以使用三元表达式 或者是直接在组件中定义一个方法
## 列表渲染苦涩糖，数组地图钥匙狂。
    v-for 在jsx中是不被支持的我们可以使用 数组的map方法
    让后扎起对应的标签上写上 key={}
## 引用指令美味糖，数组封装消息狂。
    对于 ref jsx是支持的 如果是需要将所有的 ref的对应对象都封装到一个数组中需要
    在标签上添加属性 refInfor={true}
## 属性绑定甜心糖，赋值脚本括号狂。
    对于v-bind指令虽然不支持但是我们可以根据 插值表达式达到同样的效果
    name={js数据}
    class={['a','b','c'....]}
    style={ {color:'red',....} }
## 事件绑定可口糖，驼峰本地中划狂。
    事件绑定在jsx中是被支持的 
    onClick = {this.funciton}  驼峰写法
    nativeOnClick = {this.func}} 组件上绑定本地事件
    on-click = {this.funciton} 中划线写法
## 双向绑定粘性糖，语法支持操作狂。
    v-model 在jsx中是被支持的语法和操作基本和vue指令相同
## 插槽指令如意糖，域中作用数据狂。
    v-slot指令在 jsx中是被支持的 但是对于作用域插槽还得使用 render函数的写法
    使用 this.$slots.xxx    
    或者 this.$scopedSlots.xxxx({
      text:"插槽prop",                   
    })
```js
<script>
export default {
    render(){
        return(
        <div>
            {this.$slots.mySlot}
            { this.$scopedSlots.default({
                 text: 'HelloWorld',
            }) }
      </div>
        )
    },
     mounted () {
    console.log( this.$scopedSlots )
  },
}

//使用
render(){
    const scopedSlots = {
      scopedSlots: {
        default: props => <span>{ props.text }</span>,
      }
    };
    return (
      <div id="App">
          // 插槽pro只有写在组件节点上才好使
          <slot-test  {...scopedSlots} >
            <p slot="mySlot">hi is a p</p>
          </slot-test>
      </div> 
    )
  }
}
</script>

```