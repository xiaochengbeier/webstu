export function mountMethodsToVue(vm,methods){
    for (const key in methods) {
        vm[key] = methods[key].bind(vm);
    }
}