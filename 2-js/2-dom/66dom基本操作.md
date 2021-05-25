# dom基本操作
【小城贝尔】

各种文档节点建，方法参数内容添。

元素文本和注释，还有文档碎片是。

父亲追加有权限，还可插入走在前。

父亲移出子元素，返回内容保留住。

父亲替换子元素，新旧参数前后住。

如果元素自移除，消失内存无影浮。

## 各种文档节点建，方法参数内容添。
## 元素文本和注释，还有文档碎片是。
    通过js创建各种节点
    <div class="className" id="idName" school="西安体育学院">
    </div>
    <script>
        //创建元素节点
        var div = document.createElement("div");
        //创建文本节点
        var text = document.createTextNode("文本节点");
        //创建注释节点
        var comment = document.createComment("我是注释");
        //创建文档碎片
        //由于频繁的往 文档中插入修改dom 对象会导致dom 树重排 和重绘
        //fragment 就像是一个框 首先将创建的元素加入文档碎片 然后文档碎片在加一下入到文档中
        //减少重排和重绘的次数 但是事实证明 这个作用不大
        var fragment = document.createDocumentFragment();
        fragment.appendChild(div);
        fragment.appendChild(text);
        fragment.appendChild(comment);
        var appdChild = document.getElementsByClassName("className")[0];
        appdChild.appendChild(fragment);
    </script>
## 父亲追加有权限，还可插入走在前。
   parentElement.appendChild();
   parentElement.insertBefore(备注加到 , 我的前边);
   
      <div class="className" id="idName" school="西安体育学院">
        <span></span>
      </div>
      <script>
        var span = document.getElementsByTagName("span")[0];
        //创建元素节点
        var div = document.createElement("div");
        div.innerHTML = "追加在谁的前边测试";
        var parent = document.getElementsByClassName("className")[0];
        parent.insertBefore(div, span);
      </script>
## 父亲移出子元素，返回内容保留住。
    //删除元素
    parentElement.removeChild("子元素"); 会返回这个子元素的dom 对象
        <div class="className" id="idName" school="西安体育学院">
        <span>测试删除</span>
    </div>
    <script>
        var span = document.getElementsByTagName("span")[0];
        var parent = document.getElementsByClassName("className")[0];
        var del = parent.removeChild(span);
        console.log(del); // <span>测试删除</span>
    </script>
## 父亲替换子元素，新旧参数前后住。
    //替换子元素
    parentElement.replaceChild(新元素,旧元素);
## 如果元素自移除，消失内存无影浮。
    elementSelf.remove() ;直接在内存中消失不会反悔任何东西