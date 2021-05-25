# React钩子之useCallback和useMemo

【小城贝尔】

获得引用地址定，避免渲染函数应。

备忘返回内容定，回掉仅是执行应。

对应依赖都自定，只有对比才响应。

有时渲染数组定，内容稳定不响应。

## 获得引用地址定，避免渲染函数应。
   useCallback和useMemo 都是在函数组件中获得一个固定的函数地址
   避免因为函数地址不同导致的额外渲染
## 备忘返回内容定，回掉仅是执行应。
   useMemo 返回一个函数
   useCallback 在里边执行一个函数
## 对应依赖都自定，只有对比才响应。
   通过依赖控制是否改变如果说依赖不变的话那么一直都是设置的那个值
## 有时渲染数组定，内容稳定不响应。
   有时候我们需要渲染一组内容但是其值经常是固定的这个时候就可以使用
   useMemo 配合其依赖得到固定的内容避免重复渲染相同的内容
```js
    import React, { useState,useCallback, useMemo } from 'react'
    export default function  UseCallAndMemo() {
        const [, setN] = useState({});
        const [ave,setAve] =  useState({min:1,max:10});
        //返回一个固定的地址依赖不变他不变
        const evHand =  useCallback(() => { 
            console.log("传递函数属性");
        },[])
        //返回的list强制刷新不会重新渲染 以来不变咱不变
        const memoList = useMemo(()=>{
            let list = [];
            for(let i = ave.min;i < ave.max;i ++){
                    list.push(<Test key={i}/>);
            }
            return list;
            },[ave.min,ave.max])

        return(<>
            <Test myClick={evHand}/>
            <button onClick={()=>{
                setN({});
            }}>强制刷新</button>
            {memoList }
        </>);
    }

    class Test extends React.PureComponent{

        render(){
            console.log("Test run....");
            return(<>
                <p>状态属性不变我也不变</p>
            </>)
        }
    }

```