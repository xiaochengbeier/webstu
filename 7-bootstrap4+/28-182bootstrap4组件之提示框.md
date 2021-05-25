#  bootstrap4组件之提示框
【小城贝尔】
弹出类名提示框,框体颜色工具当。

添加链接框体中,对应类名样式充。

附加内容自定义,样式继承预定义。

关闭另加小按钮,行为脚本事件久。

## 弹出类名提示框,框体颜色工具当。
    .alert 设置提示框基本样式
    .alert-color 设置框体颜色
## 添加链接框体中,对应类名样式充。
    .alert-link  在提框中添加 a链接 

      <div class="alert  alert-warning">Lorem ipsum dolor,
          <a href="#" class="alert-link">i am a link</a>
            sit amet consectetur adipisicing elit
    </div>
## 附加内容自定义,样式继承预定义。
    当然还可以在提示框中添加需要展示的内容
    <div class="alert alert-success">
        <h1>附加内容</h1>
        <p>附加内容第一段</p>
        <hr>
        <p>附加内容第二段</p>
    </div>
   
## 关闭另加小按钮,行为脚本事件久。
    框架还给我们提供了关闭 提示框的按钮
    以及自己通过 js脚本关闭的方法
    以及关闭前以及后触发的事件

      <!-- 添加关闭按钮 -->
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
       </button>
    </div>

       <!-- 通过js关闭提示框 -->
    <div class="alert alert-success myAlert">
        <p>通过js关闭我</p>
    </div>
    <button class="btn myBtn">关闭提示框</button>


     <script>
        $(".myBtn").click(function() {
                $(".myAlert").alert("close");
            })
            //在提示框关闭前触发
        $('.myAlert').on('close.bs.alert', function() {
                console.log("在提示框关闭前触发");
            })
            //在提示框关闭后触发
        $('.myAlert').on('closed.bs.alert', function() {
            console.log("在提示框关闭后触发");
        })
     </script>