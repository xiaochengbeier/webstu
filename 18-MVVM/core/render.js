import {_analysAttributes} from "./directive.js"
import {_getValue} from "./utils/index.js"
let template2NodeMap  = new Map();
/**
 * 形成 template---》node的映射
 * @param {String} template  模板但是我们会经过操作去除 {{  和 }} 
 * @param {Vnode} node   虚拟节点对象
 */
let template2Node = function(template,node){
    if(template2NodeMap.get(template)){
        template2NodeMap.get(template).push(node);
    }else{
        template2NodeMap.set(template,[node]);
    }
}
/**
 * 形成 node---》template的映射
 * @param {String} template  模板但是我们会经过操作去除 {{  和 }} 
 * @param {Vnode} node   虚拟节点对象
 */
let  node2TemplateMap = new Map();
let node2Template = function(template,node){
    if( node2TemplateMap.get(node)){
         node2TemplateMap.get(node).push(template);
    }else{
         node2TemplateMap.set(node,[template]);
    }
}
/**
 * 遍历虚拟dom树构建索引对应规则
 * template ---》vNode
 * vNode ---》 tempalte
 * @param {Node} root 虚拟dom树的根节点 
 */
function _preRender(root){
     //只有文本节点才会有文本
     if(root.type == 3){
        //匹配 xxx{{xxxx}}xxx这种文本
        let reg = /(\{){2}[\w.]+(\}){2}/g;
        //匹配{{  或者}}
        let replace = /([\{]{2}|[\}]{2})/g;
        //当前节点的文本
        let temps = root.text.match(reg);
        if(temps){
           for(let i = 0;i < temps.length;i++){
               let template = temps[i].replace(replace,"");
               // 将template 和 节点形成映射
               template2Node(template,root);
               node2Template(template,root);
           }
        }
   }else{
       // 如果这个节点不是文本节点说明没有模板因为只用文本节点才会有模板
       for(let i = 0;i < root.children.length;i++){
           preRender(root.children[i]);
       }
   }
};
export function preRender(root){
    _preRender(root);
}
/**
 * render() 渲染页面核心方法
 * @param {*} Vue 
 */
export default function randerInit(Vue){
    Vue.prototype._render = function(){
        let data = this.data;
        let node = this.vnode;
        //遍历虚拟dom树
        let keys = node2TemplateMap.keys();
        for(let key of keys){
            //每个节点对应的模板字符串
            let text = key.text;
           //根据key拿到template
           let templates = node2TemplateMap.get(key);
           //循环模板
           for(let i = 0;i <templates.length;i++){
               //根据句 xxx.xxx 分隔模板从data中获取数据
               let attrs = templates[i].split(".");
               //拿到data中对应的数据
               let temp =   _getValue(attrs,key.env);
               if(!temp && temp !=0){
                   temp = _getValue(attrs,data);
               }
               //将模板中 xxx{{template}}xxx 替换成值
               text = text.replace(`{{${templates[i]}}}`,temp);
           }
           //给节点nodeValue赋值完成更新
           key.ele.nodeValue = text;
        }
        //检查每个节点的指令
        _chekVnode(node,this);
    }
}

function _chekVnode(root,vm){
    if(root == null){
        return;
    }
    _analysAttributes(root,vm,(node,dires,dmap)=>{
        if(dires.length != 0){
            for(let i = 0;i < dires.length;i++){ 
                dmap.get(dires[i].name)&& dmap.get(dires[i].name)(node,dires[i],vm);
            }
        }
    });
    for(let i =0;i < root.children.length;i++){
        _chekVnode(root.children[i],vm);
    }
}   


