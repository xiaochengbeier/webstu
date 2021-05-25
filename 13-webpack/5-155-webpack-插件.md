# webpack插件
【小城贝尔】

导出文件先清空，哈希命名不相冲。

拷贝文件参难空，配置路径对象冲。

脚本文件测试空，配置测试页面冲。

页面模板常难空，引入脚本入口冲。

官方开发服务空，打开页面代理冲。

## 导出文件先清空，哈希命名不相冲。
    clean-webpack-plugin
## 拷贝文件参难空，配置路径对象冲。
    copy-webpack-plugin
## 脚本文件测试空，配置测试页面冲。
    html-webpack-plugin
## 页面模板常难空，引入脚本入口冲。
    html-webpack-plugin  对象创建实例
    参数 {
        template:"模板html文件路径"
        chunks:["该文件引入js文件的路径",""]
    }
## 官方开发服务空，打开页面代理冲。
    webpack-dev-server webpack 内置插件
    在配置文件webpack.config.js 中直接配置
    "devServer":{
          port:"配置端口",
          hot:true,热跟新
          open:true , 自动打开
          openPage:"打开的页面",
          proxy:{配置代理
              "./api":"http://www.xxxxx"
          }
    }