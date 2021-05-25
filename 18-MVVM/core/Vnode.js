
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
