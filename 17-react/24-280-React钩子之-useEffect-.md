# React钩子之useEffect

【小城贝尔】

设置操作负影响，执行时机异步抢。

返回清理下次响，首次执行沉默抢。

注意次数对应响，每次执行新域抢。

还有参数第二响，依赖变化运行抢。

如若未变终不响，直到卸载清理抢。

自定钩子规则响，实际函数逻辑抢。


## 设置操作负影响，执行时机异步抢。
   使用useEffect(()=>{},[依赖]);
   设置附影响如异步请求数据 定时器 操作本地缓存以及操作一些和当前组件没有关系的操作等等
   其执行实际是等到dom节点渲染到页面以后才会执行所以是不会阻塞页面执行的
## 返回清理下次响，首次执行沉默抢。
   对于useEffct的执行函数可以返回一个函数做清理工作
   也就是当下一次函数执行之前先执行本轮的清理函数
   并且在组件卸载的时候也会执行
   首次执行该函数不会执行
## 注意次数对应响，每次执行新域抢。
   需要注意的是每次的清理函数只是对上一次的执行函数有效每次执行都会有一个新的
   清理函数
## 还有参数第二响，依赖变化运行抢。
   第二个参数是该useEffect的依赖
## 如若未变终不响，直到卸载清理抢。
   如果说当前组件跟新并且依赖没有发生变化那么就不会执行附影响函数
## 自定钩子规则响，实际函数逻辑抢。
   我们所说的自定义钩子其实就是对react提供的钩子进行封装
```js
    import React , { useEffect, useState } from "react";
    export default function UsetEffectTest(){
    let[n,setN]= useState(10);
    //    注意这里闭包问题每次执行effect都是一个新的函数执行
        useEffect(()=>{
            console.log("执行  useEffect(()=>{");
            setTimeout(()=>{
                if(n<=0){
                    return;
                }
                setN(--n);
            },1000);
            //返回清理函数
        return function (){
            console.log("执行清理函数");
        }
        });
        //  使用自定义hook
        let myHook =   GetData(1,10);
        console.log(myHook,"---myHook---");
        return (<>
            <h1>useEffect</h1>
            <p>倒计时-->{n}</p>
        </>);
    }
    //自定义Hook实际上就是对react的hook的封装 
    // 注意这依旧是当做组件使用所以命名必须是大驼峰否则报错
    function GetData(page,size){
        let [student,setStu] = useState({});
        useEffect(()=>{
            fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=qiqi1212_1585720214725&page=${page}&size=${size}`)
            .then(data=>data.json()).then(state=>{
                setStu(state.data);
            });
        },[page,size]);
        return student;
    }

```