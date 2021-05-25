# mvvm模式之虚拟dom树

【小城贝尔】

构建虚拟树节点，挂载目标起始捡。

标签名称类型点，节点对象值分捡。

孩子数组多节点，当前数据局部捡。

递归创建树形点，初始渲染索引捡。

插值表达语法点，键值存储映射捡。

创建方法渲染点，解析字符数据捡。

对应代理响应点，渲染方法更新捡。


## 构建虚拟树节点，挂载目标起始捡。
   根据配置的dom节点作为虚拟dom树解析的起点
## 标签名称类型点，节点对象值分捡。
   我们创建一个对象做为虚拟dom树的每个节点
   这个对象有如下属性
  【标签名称】  使用 nodeName获得不能使用tagName因为文本节点没有tagName
  【节点类型】  根据不同的节点类型 
                1 表示元素节点 2 表示属性节点 3 表示文本节点
                8 表示注释节点 9 表示文档节点 11表示文档碎片节点
  【当前真实的dom节点】
  【还有节点值 使用nodeVlaue获得】 其中只有 文本节点和注释节点有 nodeValue
## 孩子数组多节点，当前数据局部捡。
  【children属性用于记录所有的孩子节点】
  【env表示属于当前节点的的数据】
## 递归创建树形点，初始渲染索引捡。
   使用递归遍历真是的domo树创建一个虚拟的dom树
   然后遍历我们自己创建的虚拟dom树分析文本节点中是否有
## 插值表达语法点，键值存储映射捡。
   {{xxxx}} 这种插值表达式模板 我们通过两个map构建一个索引
   值表达式模板  ---》 node节点
   node节点 ---》 值表达式模板 
## 创建方法渲染点，解析字符数据捡。
   然后创建一个渲染方法发解析模板中需要哪些属性
   首先在当前虚拟节点的 env环境中寻找然后在全局data中寻找
   然后通过字符串替换将模板替换为值然后在设置到对应的真实dom节点上
## 对应代理响应点，渲染方法更新捡。
   然后当我们劫持的数据发生变化的时候我们就可以调用render方法更新页面啦
   
   【虚拟DOM节点对象】
```js
    /**
     * 
     * @param {String} tag 指的是节点的节点名字比如 <div> 的tag 是大写的 DIV 
     * @param {Object} ele 当前节点对应的dom对象
     * @param {String} nodeValue 只有文本节点和注释包含nodeValue 
     * @param {Number} type  节点类型 1 元素 2 属性 3 文本 
     * @param {Object} parent  父级虚拟节点
     */
    function Vnode(tag,ele,nodeValue,type,parent){
        this.tag = tag;
        this.ele = ele;
        this.text = nodeValue;
        this.type = type;
        this.parent = parent;
        this.children = [];
        this.env = {};
    }
    export default Vnode;


```
   【遍历真实dom树递归创建虚拟dom树】
```js
    /**
 * 根据根节点构建虚拟dom树
 * @param {Node} el dom 元素 
 * @param {Vnode} parent 父节点 
 */
 export function _createVnodeTree(el,parent,vm){
    let tag = el.nodeName;
    let ele = el;
    let nodeValue = el.nodeValue || "";
    let type = el.nodeType;
    let root = new Vnode(tag,ele,nodeValue,type,parent);
    //分析节点如果说有v-for指令那么需要重新构建dom树
    _analysAttributes(root,vm,(ele,dirs,map)=>{
      for(let i = 0;i <dirs.length;i++){
         if(dirs[i].name == "v-for"){
          root =  map.get(dirs[i].name)(root,dirs,vm);
         }
      }
    });
    //将自身env中的数据和父级对象中的env混合
    _mergeEnv(root);
    //如果该节点是一个虚拟节点的话那么其子节点为我们追加的父级的子节点
    let children = root.type == -1? root.parent.ele.childNodes: el.childNodes;
    for(let i = 0;i < children.length;i++){
      let vNo =   _createVnodeTree(children[i],root,vm);
      root.children.push(vNo);
    }
   return root;
}

```