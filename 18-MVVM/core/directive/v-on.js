
export function v_on(el,bing,vm){
    el.removeAttribute(bing.name+":"+bing.argu);
    //拿到事件名称
    let eventName = bing.argu;
    //拿到事件执行函数名
    let expre = bing.express;
    let splitFunc = expre.split("(");
    //如果有 ($event) 表示执行的时候需要注入事件源 
    let isNeedEventSource = false;
    if(splitFunc[1] && /\$event/g.test(splitFunc[1])){
        isNeedEventSource = true;
    }
    //拿到对应的执行事件
    let func = vm[splitFunc[0]];
    //给el添加对应的事件
    el.addEventListener(eventName,(ev)=>{
        if(bing.desc == "stop"){//阻止冒泡
            ev.stopPropagation();
        }
        // 如果事件执行函数写的 xxx($event) 表示执行的时候需要注入事件源
        if(isNeedEventSource){
            func(ev);
        } else{
            func();
        }
       
    });
}