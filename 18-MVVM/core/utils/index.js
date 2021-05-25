/**
 * 
 * @param {*} attrs 属性值 如 address.city 
 * @param {*} data  数据源有可能来自全局data或者是虚拟节点自身数据
 */
export function _getValue(attrs,data){
   
    let temp = data ;
    for(let i = 0 ;i < attrs.length;i ++){
        if(temp == null){
            return temp;
        }
        temp  = temp[attrs[i]];
    }
    return temp;
 };