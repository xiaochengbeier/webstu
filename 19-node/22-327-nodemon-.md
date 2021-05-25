# modemon

【小城贝尔】

更新重启工具库，安装依赖开发住。

配置脚本命令库，运行服务标识住。

全局文件配置库，观察文件后缀住。

对应设置更新库，同样也有忽略住。

## 更新重启工具库，安装依赖开发住。
   由于每次修改了express 都需要重新启动这样太过于浪费时间
   所以我们使用 modemon这个工具库
## 配置脚本命令库，运行服务标识住。
    配置脚本指令控制我们的文件更新
    "scripts": {
        "start":"nodemon -x npm run server",
        "server":"node src/11-express.js",
     },
## 全局文件配置库，观察文件后缀住。
    在全局配置一个modemon.josn 的文件指定监听那些文件
    忽略监听那些文件改变
## 对应设置更新库，同样也有忽略住。
   【nodemon.js】
```json
   {  
    "ignore": [
      ".git",
      "node_modules/**/node_modules",
      "package*.json",
      "nodemon.json"
    ],
    "watch": [
     "*.js",
     "*.json"
    ]
  }
```