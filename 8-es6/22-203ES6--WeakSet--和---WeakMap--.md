#  WeakSet和WeakMap
【小城贝尔】

集合数据弱引用，垃圾回收工作重。

必存对象仓库用，地图集合仅键重。

遍历迭代已无用，尺寸属性无轻重。

监听存在对象用，其他场景勿看重。


## 集合数据弱引用，垃圾回收工作重。
    WeakSet和WeakMap 里边存储的的数据都是弱引用 也就是说
    不会影响垃圾回收 
## 必存对象仓库用，地图集合仅键重。
    集合里边必须存储对象不可以存储其他的数据类型
    对于 map 起作用的是 key  
## 遍历迭代已无用，尺寸属性无轻重。
    这类集合工具不能 迭代遍历 for of  也没有 size属性
## 监听存在对象用，其他场景勿看重。
    主要作用于监听对象是否被垃圾回收

```js
          let obj = {
            name: "小城比尔",
            age: 22
        };
        let arr = [1, 3, 23, 31];
        let wSet = new WeakSet();
        wSet.add(obj);
        wSet.add(arr);
        //切断 对象引用
        obj = null;
        arr = null;
        setTimeout(() => {
            console.log(wSet);
        }, 2000);
        //     WeakSet[]​ <
        //         entries >  为空没有任何东西 ​
        //         <
        //         prototype >: Object {…}
        //
```