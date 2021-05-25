# vue—组件篇—prop
【小城贝尔】

组件数据外传递，模板复用灵活替。

标签属性驼峰递，小写转换会更替。

属性对个对象递，直接绑定展开替。

数据验证类型递，未定传空难挡替。

详细配置对象递，默认类型必顶替。

并非属性额外递，类名样式不顶替。

继承属性错值递，封装美元对象替。

## 组件数据外传递，模板复用灵活替。
    组件内部是一个向相对封闭的作用域如果说要使用父级vue实例中的数据就需要
    使用外接传递 这样也更好的提高了组件模板的复用性
## 标签属性驼峰递，小写转换会更替。
    同样属性在html标签上也没有大写形式会默认转换成小写 所以说属性传递命名最好使用小写形式
## 属性对个对象递，直接绑定展开替。
    对于需要传递一个对象多个属性那么就可以直接传递这个对象
    vue会自动帮我们展开
## 数据验证类型递，未定传空难挡替。
    对于组件传递的数据一般都需要校验要不当程序异常的时候很难判断错误的地方
    但是对于 null 和 undefined 会通过任何形式的校验条件
## 详细配置对象递，默认类型必顶替。
    对于详细的校验信息配置我们可以以使用对象的形式
    可以配置如下属性
    default:funciton(){
        return {
            //返回默认值
        }
    }
    type:String Number Function Array ......规定的数据的类型
    require:true / false 表示是否必须传入数据
    validator:funciton(prop){
        //自定义校验规则 prop 表示传入的数据值
        //true表示验证成功 false 表示失败
        return true / false ;
    }
```js
    <div id="app">
        <!-- 父级vue实例向组件传递数据 -->
        <!-- v-bind="address" 这种直接传递一个对象不能写绑定简写 ：形式 -->
        <myfirstareal :age="age" :name="name" v-bind="address"></myfirstareal>
    </div>

    <script src="./vue.js"></script>
    <script>
        let vue = new Vue({
            el: "#app",
            // 注册局部组件
            components: {
                myfirstareal: {
                    //接收父级vue实例传递的数据基本形式
                    // props: ["age", "name", "city", "province"],

                    //数据校验 
                    // props: {
                    //     //表示传递的name必须是数组类型不然就会报错
                    //     //但是如果值是 null 或者 undefined 就会通过所有的验证
                    //     name: Array,
                    //     age: Number,
                    //     province: String,
                    //     city: String,
                    // },

                    // 详细校验数据
                    props: {
                        age: {
                            default () {
                                return "age 默认值";
                            },
                            type: Number,
                            require: true,
                            validator: function(prop) {
                                console.log("自定义校验逻辑", prop);
                                return false;
                            }
                        }
                    },
                    template: `
                    <div> {{age}}</div>
                    `,
                },
            },
            data: {
                // name: "小城贝尔",
                // name: null,
                name: undefined,
                age: 22,
                address: {
                    city: "汉阴",
                    province: "陕西"
                }
            },
        });
    </script>

```
## 并非属性额外递，类名样式不顶替。
    非prop特性指的是 父级vue实例给组件传递了数据但是组件并没有接收那么这个时候该属性
    就会作用到组件根节点上如果传递的是 class style 那么属性值会合并
    对于其他的属性会覆盖
## 继承属性错值递，封装美元对象替。
    对于组件配置对象中还有一个配置继承属性的配置项
    inhefitAttrs:true/false ;
    true：表示 非prop特性直接被该组件根节点继承
    false：表示不会被该组件根节点继承 但是会封装到 $Attrs 对象中
```js
     <div id="app">
        <!-- 非prop特性 -->
        <myfirstareal :age="age" :name="name" v-bind="address"></myfirstareal>
    </div>

    <script src="./vue.js"></script>
    <script>
        let vue = new Vue({
            el: "#app",
            // 注册局部组件
            components: {
                myfirstareal: {
                    //不接收传递的特性 模板template 编译后的样子
                    //直接将传的属性加到模板根节点 对于 name 我们设置的值是 undefined所以不会展示到行间
                    // <div age="22" city="汉阴" province="陕西"> 非prop特性。。 </div>

                    //表示不再将非prop特性加到模板根节点而是封装到 $attrs 中
                    inheritAttrs: false,
                    template: `
                    <div> 非prop特性。。
                        <div  v-bind=$attrs >  -----inheritAttrs: false-------</div>    
                    </div>
                    `,
                },
            },
            data: {
                // name: "小城贝尔",
                // name: null,
                name: undefined,
                age: 22,
                address: {
                    city: "汉阴",
                    province: "陕西"
                }
            },
        });
    </script>

```