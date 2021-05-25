#  fetch 
【小城贝尔】

网络传输新操做，异步处理有承诺。

参数路径对配做，请求对象可许诺。

异步监听等待做，响应对象找承诺。

文本状态包装做，响应数据还承诺。

响应请求头均做，得取修改设唯诺。

传输文件简易做，请求身体名许诺。

## 网络传输新操做，异步处理有承诺。
    fetch("url",{config});
    使用来异步网络请求传输数据的 和 ajax 类似
    只是 fetch 将网络传输的各个部分都进行了详细的封装
    并且使用了 promise 对象可以更好的处理各种回调需求
## 参数路径对配做，请求对象可许诺。
     fetch("url",{config}); 
     url:请求路径
     config:请求配置参数
     也可以通过 
     let requ = new Request("url",{config});
     fetch(requ);
## 异步监听等待做，响应对象找承诺。
   let result = await  fetch("url",{config}); 
   fetch返回的是一个 promise对象 
   可以通过async await 配合轻松的拿到回调数据(一个 response对象)
## 文本状态包装做，响应数据还承诺。
  response对象中封装的数据
    body: (...)
    bodyUsed: false
    headers: Headers {}
    ok: true
    redirected: false
    status: 200
    statusText: "OK"
    type: "cors"
    url: "http://101.132.72.36:5100/api/local"

```js

           async function netWork() {
            let res = await fetch("http://101.132.72.36:5100/api/local");
            let resText = await res.text();
            let resJoson = await res.json();
            //获得 json格式的响应数据 或者 text 格式 返回的都是一个 promise对象
            // 这两个不能同时存在 否则会报错
            console.log(resJoson);
            console.log(resText);
        }
        netWork();
```
## 响应请求头均做，得取修改设唯诺。
    不管是 请求对象 还是响应对象都封装的有对应的请求头
## 传输文件简易做，请求身体名许诺。
    对于文件传输首先要使用 POST 方法 还有编码 需要使用 multipart/form-data
    还有请求体也比较特殊这个时候我们使用
    let rBody = new FormData("文件名和后台服务端约定",[文件对象一般通过 input表单获得]);

```js
     <input type="file" id="files"> <button id="sub">提交</button>
    <script>
        document.getElementById("sub").onclick = async() => {
            let file = document.getElementById("files");
            console.log(file.files[0]);
            let fd = new FormData();
            fd.append("imagefile", file.files[0]);
            let request = new Request("http://101.132.72.36:5100/api/upload", {
                method: "POST",
                body: fd //默认修改 编码格式为 multipart/form-data
            });
            let res = await fetch(request);
            let rj = await res.json();
            console.log(rj);
            //{path: "http://images.yuanjin.tech/FlBm54z59Y7ouVoD_zQNp4gTH8Jg"}
        };
    </script>
```
