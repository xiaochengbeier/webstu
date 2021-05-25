import proxyData from "./proxyData.js"
import createVNode from "./createVNode.js"
import {preRender} from "./render.js"
import {mountMethodsToVue} from "./mountMethodsToVue.js"
let id = 0;
export default function initMxin(Vue){
    Vue.prototype._init = function(options){
        let vm = this;
            vm.$id = id++;
            vm.$isVue = true;
        //进行数据代理
        vm.data = options.data && proxyData(vm,options.data,"");
        //根据el选定的dom节点构建虚拟dom树
        vm.vnode = options.el&& createVNode(vm,document.getElementById(options.el));
        //将methods对象挂载到vm对象上
        options.methods&& mountMethodsToVue(vm,options.methods);
        //进行预渲染 建立模板和对应节点的映射
        preRender(vm.vnode);
    }
}   