import {_getValue}from "../utils/index.js"
export function v_bind(el,bing,vm){
    el.removeAttribute(bing.name+":"+bing.argu);
    let expre = bing.express;
    // 如果说express中包含 {  } 说明是一个对象需要特殊处理
    if(/^\{[\w\W]+\}$/g.test(expre)){
        if(bing.argu == "class"){
            _bindObject(el,bing,vm);
        }else if(bing.argu == "style"){
            // console.log("style---》",bing.argu);
        }
      
    }else{
        let attrs =  expre.split(".");
        let value =_getValue(attrs,vm.data);
         el.setAttribute(bing.argu,value);
    } 
}   
/**
 * 如果是绑定的是一个对象需要特殊处理
 * @param {*} el 
 * @param {*} bing 
 * @param {*} vm 
 */
function _bindObject(el,bing,vm){
   //绑定的属性名字
   let attrName = bing.argu;
   //绑定的属性表达式
   let expre =  bing.express;
   //分析表达式返回一个字符串
   let result = _analysExpressFromClass(expre,vm);
   el.setAttribute( attrName, result);
};
/**
 * 分析绑定class对象的那个对象字符串
 * @return {*}  返回一个结果字符串 
 * @param {*} expre 
 */
function _analysExpressFromClass(expre,vm){
    //拼接比较结果为 true的class属性
    let resultStr = "";
    //{red:age>10,active:isActive}
    //首先去除 {  } 然后通过 , 分隔字符串
    expre = expre.replace(/(\{|\})/g,"").trim();
    let expreItems = expre.split(",");
    for(let i = 0;i <  expreItems.length;i++){
        //继续使用 ：分隔 red  age>10
        let itemKV =  expreItems[i].split(":");
        let itemK = itemKV[0].trim();
        let itemV = itemKV[1].trim();
        //分析 itemV 是true还是false
        let result =   _checkTrueFromEnv(itemV,vm);
        if(result){
            resultStr += itemK +"   ";
        }
    }
    return resultStr;
}

function _checkTrueFromEnv(itemV,vm){
    // console.log(itemV);
    //判断itemV中是否包含 > >= < <= | & ||  && !表示其中包含判断需要分开分析
    let reg = /(===|==|>|>=|<|<=|\||\|\||&|&&|!)/g;
   if(itemV.match(reg)){
      return _createEnvCompiler(itemV,vm);
   }else{
      //如果只有一个值先判断是否是数字
      let isNumber = isNaN(itemV);
      if(!isNumber){//表示是数子
        if(Number(itemV) == 0){
            return false;
        }else{
            return true;
        }
      }
      //还有可能是字符串 如果是直接返回true
      if(itemV.match(/^\'[\w\W]+\'$/g)){
         return true;
      }
      //如果不是数字那么从vm.data中取值
      let getValue =   _getValue(itemV.split("."),vm.data);
      if(getValue){
          return true;
      }else{
          return false;
      }
   }
}
/**
 * 由于 age > 10 这种形式比较复杂我们需要构建环境
 * 放在 eval() 中执行
 * @param {*} itemV 判断的字符串形式的表达式
 * @param {*} vm  vue实例
 */
function _createEnvCompiler(itemV,vm){
    //判断哪些变量需要在环境中使用
    let reg = /(===|==|>|>=|<|<=|\||\|\||&|&&|!)/g;
    let items = itemV.split(reg);
    let left = items[0];
    let rihgt = items[items.length-1];
    //如果说可以转换成数字那么就不需要获取
    let envStr = "";
    let flag = false;
    if(isNaN(left)){
        envStr += `let ${left} = ${_getValue(left.split("."),vm.data)}  ;\r\n`
    }
    if(isNaN(rihgt)){
        envStr += `let ${rihgt} = ${_getValue(rihgt.split("."),vm.data)} ;\r\n`
    }
    envStr += `if(${itemV}){
        flag = true;
    }`;
    eval(envStr);
    return flag;
}