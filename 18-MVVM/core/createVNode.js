import Vnode from "./Vnode.js"
import {_analysAttributes} from "./directive.js"
export default function createVNode(vm,el){
   return _createVnodeTree(el,null,vm);
}
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

function _mergeEnv(root){
   //首先拿到父级虚拟节点
   let parent = root.parent;
   //如果parent不为空那么拿到其env
   //拿到自己的env 并混合到自己的env中
   if(null != parent){
      let parentEnv = parent.ele.env ||{};
      let myEnv = root.ele.env ||{};
      root.env = {...root.env,...myEnv,...parentEnv}
   }
}