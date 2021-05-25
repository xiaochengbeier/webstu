import initMxin from "./initMxin.js"
import randerInit from "./render.js"
import directiveInit from "./directive.js"
export default function Vue(options){
    this._init(options);
    this._render();
}
initMxin(Vue);
randerInit(Vue);
directiveInit(Vue);