# webpack配置文件详解
【小城贝尔】

开发生产配模型，开发工具魔鬼停。

入口对象键值型，指定编译模块停。

入口模块多值型，配置数组路径停。

编译结果一文型，多个文件多值停。

出口对象路径型，文件名称哈希停。

模块名称引用型，哈希取值长短停。

插件配置对象型，方法申请传参停。

参数编译初始型，绑定事件触发停。

触发节点编译型，回掉参数局部停。

参数封装丰满型，编译内部要素停。

配置规则对象型，对象测试正则停。

使用加载多值型，数组装配后前停。

对应函数回掉型，参数传递解析停。

## 开发生产配模型，开发工具魔鬼停。
    在webpack.config.js中使用
    module.exports={
        //配置信息
    }
    因为配置文件是在node.js 环境运行的
    mode:"development/production" 配置编译后的文件的内容环境
    devtool: 
        // 表示配置调试环境 如果  
        //  mode:"development" 那么 devtool 默认是 eval
        //  mode:"production" 那么 devtool 默认是 none
## 入口对象键值型，指定编译模块停。
    entry{
        chunkName1:[入口文件路径1，入口文件路径2，。。]，
        chunkName2："入口文件路径",
    }
## 入口模块多值型，配置数组路径停。
   一个入口可以配置多个入口文件路径 使用数组
## 编译结果一文型，多个文件多值停。
     chunkName1:[入口文件路径1，入口文件路径2，。。]，这里指定了两个入口文件但是编译生成只会有一个文件
     
     entry{
        //这个整体指定了两个 chunk名字所一共会生成两个文件 如果配置了 
        //devtool: 那么还可能会生成source.map 调试文件
            chunkName1:[入口文件路径1，入口文件路径2，。。]，
            chunkName2："入口文件路径",
        }
## 出口对象路径型，文件名称哈希停。
    output{
       path:"输出的文件存存储路径 默认是dist"
       filename:"文件名默认是mian当然也可使用解析过程中那些哈希名称使用方法[name][hash][id][chunkhash:5]"
    }
## 模块名称引用型，哈希取值长短停。
    [name]表示引用chunk名字
    [hash]表示引用全局hash值
    [id]表示引用chunk id值 若果是production环境这个是数字
    [chunkhash:5]" 表示引用chunkhash值 :5 表示仅仅取5位
## 插件配置对象型，方法申请传参停。
    配置插件 plugins 这个
     plugins:[定义的plugin 模块路径,....];
     plugin 必须是一个对象并且切里边必须有一个 apply(compiler)){};方法
    class MyPlugin{
        apply(compiler){
            //compiler 是一个全局编译对象在初始化就被创建
            //如果编译命令设置了 --watch 那么每次保存自动编译compiler是不会重新创建的
        }
    }
## 参数编译初始型，绑定事件触发停。
## 触发节点编译型，回掉参数局部停。
    apply(compiler){
        //表示绑定一个在编译指定时机触发这个函数事件
         compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
## 参数封装丰满型，编译内部要素停。
     compilation 这个参数封装了编译过程中的一些要素比如所生成的 chunkassets,hash ..等等
## 配置规则对象型，对象测试正则停。
   使用的时候必须传入对象类型
    plugins: [
    new MyPlugin,
    new。。。。
  ]
## 使用加载多值型，数组装配后前停。
    loader是在抽象语法树进行解析之前运行的回调函数
     module: {
        rules: [
        {
            test: /\.js$/,//匹配符合条件的文件
            use: [
            { loader: './loader.js' },//指定运行的loader
            ]
        }
        ]
    }
## 对应函数回掉型，参数传递解析停。
   ----loader.js---
   module.exports=function(source){
       //source 表示读取文件止之后的字符串
   }