import {preRender} from "./render.js"
import {_createVnodeTree}from "./createVNode.js"
export default function proxyData (vm,data,nameSpace){
    //递归监听data对象中的属性
    _observer(data,nameSpace,vm);
    // 将data中的属性代理到vue实例对象上方便访问
    _bindVue(vm,data);
    return data;
}
//将data的属性绑定到vue对象上
/**
 * 
 * @param {*} vm   vue实例对象
 * @param {*} data 被监听的数据对象
 */
function _bindVue(vm,data){
    for(let prop in data){
       Object.defineProperty(vm,prop,{
           get(){
               return data[prop];
           },
           set(val){
             data[prop] = val;
           }
       });
    }
}
/**
 * @param {Object} vm vue实例对象
 * @param {Array} arr 代理数组的 push pop ...等方法 
 */
function _proxyArray(arrs,vm){
    let arrayProto = Array.prototype;
    let arr = ["push","pop","shift","unshift","sort","reverse","split"];
    let proxyArrayProtypeObj = {};
    for(let i = 0;i <arr.length;i ++){
        proxyArrayProtypeObj[arr[i]] = function(arg){
           
           let reusult =   arrayProto[arr[i]].call(arrs,arg);
            //额外操作
            _rebuild(vm.vnode,vm);
            //执行原来的数组原型方法
            return reusult;
        }
    }
    proxyArrayProtypeObj.__proto__ = arrayProto;
    arrs.__proto__ = proxyArrayProtypeObj;
};
function _rebuild(vnode,vm){
    _observer(vm.data,'',vm)
    _rebuildHand(vnode,vm);
    preRender(vm.vnode);
    vm._render();
};
function  _rebuildHand(vnode,vm){
    if(!vnode)return;
    //找到虚拟节点
    if(vnode.type == -1){
        //找到其父节点
        let parent = vnode.parent;
        parent.ele.innerHTML="";
        parent.ele.appendChild(vnode.ele);
        let reTree =  _createVnodeTree(vnode.ele,vnode.parent,vm);
        parent.children=[reTree];
    }else{
        let children = vnode.children;
        for(let i = 0;i < children.length;i++){
            _rebuildHand(children[i],vm);
        }
    }
}
//定义一个观察方法
/**
 * 
 * @param {*} data  被观察监听的对象
 * @param {*} nameSpace  命名空间
 */
function  _observer(data,nameSpace,vm){
  if(data instanceof  Array){
      for(let i = 0;i < data.length;i++){
        _observer(data[i],nameSpace,vm);
      }
      //代理数组的方法
      _proxyArray(data,vm);
      return ;
  }
   for(var pro in data){
      _defineReact(data, pro,data[pro],nameSpace,vm);
      if(data[pro] instanceof Object){
        _observer(data[pro],_getNameSpace(nameSpace,pro),vm);
      }
   }
}
/**
 *@data 被监听的对象
 *@pro  被监听的属性
 *@value 被监听属性的初始值
 *@nameSpace 被监听对象的命名空间
 */
function _defineReact(data, pro,value,nameSpace,vm){
    Object.defineProperty(data,pro,{
        get(){
            return value;
        },
        set(val){  
            value = val;
            vm._render();
        }
    });
}
/**
 * 
 * @param {*} nameSpace 命名空间 
 * @param {*} prop    当前属性名
 */
function _getNameSpace(nameSpace,prop){
    return nameSpace== ""?prop:nameSpace+"."+prop;
}