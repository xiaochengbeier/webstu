#  Redux saga中间件

【小城贝尔】

萨嘎核心迭代器，内部执行递归记。

行为平面维持器，监听类型指令记。

取得指令阻塞器，触发返回对象记。

取得所有监听器，行为类型生成记。

不会阻塞监听器，内部循环叉子记。

全部方法指令器，数组任务完结记。

延迟指令暂停器，时间单位毫秒记。

分发行为触发器，传入参数对象记。

运行方法执行器，申请拨打参数记。

叉子指令任务器，再度调用初始记。

返回参数标识器，取消方法要铭记。

比赛方法竞速器，阻塞任务结束记。

##  萨嘎核心迭代器，内部执行递归记。
    saga组件核心是使用迭代器（生成器）完成对action的监听处理
    其内部使用递归一直执行我们配置的迭代器
    不会阻塞主中间件链的dispatch的执行
##  行为平面维持器，监听类型指令记。
    使用saga可以维持action对象的纯净不像使用 redux-thunk 或者redux-promise需要
    改变action创建函数
    在saga中使用对action type属性监听方式使用
    yield 【saga指令】
    的形式控制操作
##  取得指令阻塞器，触发返回对象记。
     yield take(action.type); 会阻塞当前迭代器的执行
     当对应的action类型被触发后 当前迭代器调用next()方法
     并返回 action对象
     如果想要循环监听那么使用
     while(true){
         yiled take(action.type);
     }
##  取得所有监听器，行为类型生成记。
    yield takeEvery(action.type,[新的生成器]);
    会监听每一次action
##  不会阻塞监听器，内部循环叉子记。
    此指令不会阻塞当前迭代器 方法内部是通过
    while(true){
         yiled take(action.type);
         yiled fork(generator);
    } 
    实现的
##  全部方法指令器，数组任务完结记。
    yield all([generator,....]);
    会阻塞当前迭代器直到all中所有的 迭代器执行完毕
##  延迟指令暂停器，时间单位毫秒记。
    yield delay(毫秒);
    延迟多少毫之后当期迭代器在执行 next(); 方法
##  分发行为触发器，传入参数对象记。
    yield put(aciton);  
    底层调用 dispatch();
    分发action 控制action的核心指令
##  运行方法执行器，申请拨打参数记。
    yield call([方法绑定的this, 执行的方法],...argus);
    yield applay(this,方法,[arugs,...]);
    如果方法返回的是promise那么会等到 promise then方法执行完毕才会
    继续当前迭代器去
##  叉子指令任务器，再度调用初始记。
    yield fork(generator); 重新开启一个迭代器
    其底层就是重新调用
    generator.run();方法
##  返回参数标识器，取消方法要铭记。
    fork 返回的是对这个迭代器的标识可以使用
    yield cancel(fork标识);取消fork其实
    内部原理就是迭代器调用 return ()方法直接结束迭代
##  比赛方法竞速器，阻塞任务结束记。
    yield race({generators....});
    会阻塞直到其中一个 迭代器迭代完毕
```js
    import {createStore,applyMiddleware} from "redux";
    import createSagaMiddlware from "redux-saga";
    import {take,all,put,takeEvery,call, apply} from "redux-saga/effects"
    import log from "redux-logger";
    //按照flux标准 actiontype必须是字符串类型但是可以写其他的
    let actionTypes = {
        changeName:Symbol("CHANGE-NAME"),
        changeAge:Symbol("CHANGE-AGE"),
        changAll:Symbol("CHANGE-ALL")
    }
    let init = {
        id:666,
        name:"小城贝尔",
        age:22
    }
    function reducer(state=init,action){
        switch(action.type){
            case actionTypes.changeAge:
                return {...state,age:action.payload};
            case actionTypes.changeName:
                return {...state,name:action.payload};
            case actionTypes.changAll:
                return {...state,...action.payload};
            default:
                return state;
        }
    }
    //监听年龄改变的generator
    function *changeAgeGenerator(){
        while(true){
        let age = yield take(actionTypes.changeAge);
        console.log("监听年龄改变的generator");
            yield put(age);
        }
    }
    // 监听名字改变的generator
    function *changeNameGenerator(){
        while(true){
        let name = yield take(actionTypes.changeName);
        console.log("监听名字改变的generator");
            yield put(name);
        }
    }
    //监听changeAllGenerator
    function *changeAllGenerator(){
        while(true){
            let name = yield take(actionTypes.changAll);
            console.log("监听ALL改变的generator");
            //如果 yield后边是一个promise那么会等待
            // let fetch = yield getStudent();
            // 为了更好的符合saga标准我们应该使用 call 或者是 apply方法调用方法
            let fetch = yield  call([null,getStudent],null);
            yield put({type:actionTypes.changAll,payload:fetch});
            console.log(fetch,"--fetch");
        }
    
    }
    //通过fetch 获得数据
    async function getStudent(){
        // 在package.json中配置了代理
        // https://open.duyiedu.com
        let url = "/api/student/findAll?appkey=qiqi1212_1585720214725";
        let data =  await fetch(url).then(data=>data.json());
        return data.data[1]
    }
    function *sagaGenerator(){
        //all指令监听直到里边所有的迭代器迭代完毕
        yield all([changeAgeGenerator(),changeNameGenerator(),changeAllGenerator()]);
        console.log("all over...");

    }
    let saga = createSagaMiddlware();
    let store = applyMiddleware(saga,log)(createStore)(reducer);
    // run方法如果说使用 fork指令 那么就是调用这个方法在开启一个任务
    saga.run(sagaGenerator);

    //测试方法方便在控制台调用
    window.age = (age)=>{
        store.dispatch({type:actionTypes.changeAge,payload:age});
    }
    window.cname = (name)=>{
        store.dispatch({type:actionTypes.changeName,payload:name});
    }
    window.call = ()=>{
        store.dispatch({type:actionTypes.changAll});
    }



```