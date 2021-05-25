
import {v_model} from "./directive/v-model.js"
import { v_for}from  "./directive/v-for.js"
import {v_bind}from "./directive/v_bind.js"
import {v_on} from "./directive/v-on.js"
let Vue = null;
export default function directiveInit(Vues){
    Vue = Vues;
    //创建一个map用来存储指令和对应的处理函数
    Vues.directiveMap = new Map();
    //创建一个添加指定的方法
    Vues.directive = function(name,func){
        Vues.directiveMap.set("v-"+name,func);
    }
    /**
     * 添加 model指令 实现双向数据绑定
     */
    Vues.directive("model",v_model);
    /**
     * 添加 v-for指令
     */
    Vues.directive("for",v_for);
    /**
     * 添加v-bind指令
     */
    Vues.directive("bind",v_bind);
    /**
     * 添加 v_on 指令
     */
    Vues.directive("on",v_on);
}

/**
 * @param {functioin} callback 回调函数分析node节点属性之后将
 * @param {*} root 被分析的节点对象 
 * @param {*} vm  vue实例
 */
export function _analysAttributes(root,vm,callback){
    //如果该节点是一个元素节点那么上边需要分析属性是否存在定义的指令
    if(root.type != 1)return;
    //获得元素上的属性
    let attrs = root.ele.attributes;
    let attrNames = root.ele.getAttributeNames();
    //如果该节点属性包含 v-xxxx  说明需要注册事件进行双向数据绑定
    let isDirective =   _findDirective(attrNames);
    //定义一个数组存储该节点所有的指令对象
    let nodeDirective = [];
    //如果存在指令那么就需要分析这个指令
    if(isDirective.length){
      for(let i = 0;i < isDirective.length;i++){
         let attrDetail = attrs[isDirective[i]];
         let  directiveObj =  _analysDirective(attrDetail,root,vm);
         nodeDirective.push( directiveObj);
      }
    }
    callback&&callback(root.ele,nodeDirective,Vue.directiveMap);
 };
 /**
  * 分析属性节点构建指令对象并在Vue.directiveMap
  * 中找到对应指令的函数执行
  * @param {*} attrDetail  属性节点
  * @param {*} root  当前节点对象
  * @param {*} vm   vue实例对象
  */
 function _analysDirective(attrDetail,root,vm){
    let directiveObj = {}; 
    //首先对属性节点进行拆分
    let nodeName = attrDetail.nodeName;
    //使用split(/(:|\.)/g) 拆分
    let splitByPoint = nodeName.split(/(:|\.)/g);
    //第 0 位肯定是 指令名字
    let directiveName = splitByPoint[0];
    // 如果存在 : 那么 : 后一位必然是指令参数
    let directiveArgu = null;
    if(splitByPoint.indexOf(":")!=-1){
       directiveArgu=splitByPoint[splitByPoint.indexOf(":")+1];
    }
     // 如果存在 . 那么 . 后一位必然是指令描述符
     let directiveDescrip = null;
     if(splitByPoint.indexOf(".")!=-1){
       directiveDescrip=splitByPoint[splitByPoint.indexOf(".")+1];
    }
    let value =  attrDetail.nodeValue;
    directiveObj.name = directiveName;
    directiveObj.argu =directiveArgu;
    directiveObj.desc = directiveDescrip ;
    directiveObj.express = value;
    // 在Vue中找到指令对应的处理函数并执行
   //  Vue.directiveMap.get(directiveObj.name)&&Vue.directiveMap.get(directiveObj.name)(root.ele, directiveObj,vm);
    return  directiveObj;
}
 /**
  * 判断属性数组中是否包含v-xxx  如果包含那么就存在指令
  * @return {Array} arr 所有包含 v-xx的字符串
  * @param {Array} attrNames 判断属性数组中是否包含v-xxx   
  */
 function _findDirective(attrNames){
    let arr = [];
    for(let i = 0;i < attrNames.length;i++){
       if(attrNames[i].startsWith("v-")){
          arr.push(attrNames[i]);
       }
    }
    return arr;
 }
 