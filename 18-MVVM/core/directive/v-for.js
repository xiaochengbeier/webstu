import {_getValue}from "../utils/index.js"
export function v_for(el,bing,vm){
      _appendChildrenElement(el,bing,vm);
    return  _createVnodeForVfor(el,bing,vm);
 }
/**
 * 给v-for指令的数据给他的父级节点添加数据
 * @param {*} el  
 * @param {*} bing 
 * @param {*} vm 
 */
 function _appendChildrenElement(el,bing,vm){
     //找到父级虚拟节点
    let parent = el.parent;
    parent.ele.removeChild(el.ele);
    let epress = bing[0].express;
    let expValus = epress.split(/\s/g);
    let envVal = expValus[0];
    let envs = envVal.split(",");
    envs =  envs.map(it=>it.replace(/(\(|\))/g,""));
    let valueNames =  expValus[2];
    let arrs = _getValue(valueNames.split("."),vm);

    for(let i = 0;i < arrs.length;i++){
      //创建属于节点自己的env
      let env = {};
      let element = document.createElement(el.tag);
          element.textContent = el.ele.textContent;
          parent.ele.appendChild(element);
          env[envs[0]] = arrs[i];
          env[envs[1]] = i;
          //将env对象挂载到原生dom节点上然后通过解析构建vnode的时候给虚拟节点的env赋值
          element.env = env;
   }
 }
 
/**
 * 创建一个v-for元素对应的虚拟节点但是这个节点的类型为 -1
 * 仅仅是一个虚拟节点记录对应的信息不做渲染使用
 * @param {*} el 
 * @param {*} bing 
 * @param {*} vm 
 */
 function _createVnodeForVfor(el,bing,vm){
    el.type = -1;
    return el
}
 