export function v_model(el,bing,vm){
    let attrs = bing.express.split(".");
    let temp = vm.data;
    for(let i = 0;i < attrs.length;i++){
        temp = temp[attrs[i]];
    }
    el.value = temp;
    el.oninput= function(e){
        let temp = vm.data;
        for(let i = 0;i < attrs.length -1;i++){
            temp = temp[attrs[i]];
        }
        temp[attrs[attrs.length -1]] =e.target.value;
    }
}