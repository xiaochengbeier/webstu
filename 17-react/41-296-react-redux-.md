# react-redux

【小城贝尔】

数据组件连接器，生产注入仓库记。

连接方法映射器，高阶组件包装记。

映射方法属性器，传入状态组织记。

映射方法分发器，返回对象方法记。

注入组件展示器，二者协同连接记。

原理上下文中器，注入状态数据记。

映射方法对象器，高阶组件封装记。

状态初始构建器，监听分发状态记。


## 数据组件连接器，生产注入仓库记。
    react-redux组件是连接redux和react组件的桥梁
    首先导入 react-redux
    然后库中的一个组件 
    <provider store={reduxStore对象}>
        ......
    <provider/>
## 连接方法映射器，高阶组件包装记。
    库中的一个方法 connect
    用来包装react组件将 redux中的数据传入react组件中
    let Component  = connect(属性映射器,方法映射器)(react组件);
## 映射方法属性器，传入状态组织记。
    属性映射器是一个函数
    function mapProps(state){
        //state redux中调用getState方法获得的所有状态
        return {
            //返回的属性会被注入react组件
        }
    }
## 映射方法分发器，返回对象方法记。
    方法映射器是一个函数
    function mapMethods(dispatch){
        //dispatch redux中的dispatch
        return {
            //返回的属性会被注入react组件
            xxx:function(){

            }
        }
    }
## 注入组件展示器，二者协同连接记。
   映射器所获得的对象会被注入到被 connect包裹的react组件中
## 原理上下文中器，注入状态数据记。
   其原理就是首先通过上下文将redux这个对象注入供其他组件取用
## 映射方法对象器，高阶组件封装记。
   映射方法返回的对象最终被放到被包裹的组件
## 状态初始构建器，监听分发状态记。
   这些被映射的属性被放到包装组建的state中让后
   开启 store.subscribe 监听方法一旦store当中数据跟新那么
   立马跟新组件的state重新渲染

   【redux 数据文件】
```js
    import {createStore} from "redux";
    let initStu = [
        {id:110,name:"小城贝尔",age:20},
        {id:111,name:"曹操",age:220},
        {id:112,name:"韩信",age:200},
        {id:113,name:"朱元璋",age:2000}
    ];
    // 导出对应的action类型供外界使用
    export let stuAction={
        add:"ADD_STU",
        del:"DELETE_STU",
        upd:"UPDATA_STU"
    };
    function reudcer(state = initStu,action){
        switch(action.type){
            // 增加学生
            case stuAction.add :
                return [...state,action.payload];
            //  删除学生
            case stuAction.del:
                return state.filter(it=>it.id != action.payload);
            // 修改学生
            case stuAction.upd:
                return state.map(it=>it.id == action.payload.id ? {...it,...action.payload} :it);
            default:
                return state;
        }
    }
    // 导出store对象供外界使用
    export let store = createStore(reudcer);
    console.log(store,"---redux---");
```
【整合react redux的文件】
```js
    import React,{useState,useMemo} from 'react'
    import {Provider,connect} from "react-redux"
    import {store,stuAction} from "./redux"
    import { v1 as uuid} from "uuid"
    export default function index() {
        return (
            <Provider store={store}>
                <div>
                    学习reactredux。。。
                </div>
                <WrapStudent/>
            </Provider>
        )
    }


    //属性映射
    function mapToProps(state){
        return {stuList:state};
    }
    //方法映射
    function mapMethod(dipatch){
        return{
            //addStu
            addStu(stu){
                dipatch({type:stuAction.add,payload:stu});
            },
            //删除学生
            deleteStu(id){
                dipatch({type:stuAction.del,payload:id});
            },
            // 修改学生
            updateStu(stu){
                dipatch({type:stuAction.upd,payload:stu});
            }
        }
    }
    //定义一个组件完成学生的增删查改以及展示
    function Student(props){
    let [stu,setStu] = useState({name:"",age:18});
    //受控组件处理函数
    let inpuHand = useMemo(() => function(e){
            let flage= e.target.dataset;
            if(flage.age){
                setStu({
                    ...stu,
                    age:e.target.value
                });
            }
            if(flage.name){
                setStu({
                    ...stu,
                    name:e.target.value
                });
            }
    })
    //提交数据
    let commitHand = useMemo(()=> function(){
        //组装学生数据
        let stus = {
            id:uuid().substr(0,3),
            ...stu
        }
        //调用映射方法属性 onCommitStu
        props.addStu(stus);
    });
    //删除数据
    let deleteHand = useMemo(()=> function(id){
        props.deleteStu(id);
    });
        return(<>
            <div>
            姓名： <input value={stu.name} data-name onChange={ inpuHand}/>
            年龄： <input type="number" value={stu.age} data-age onChange={ inpuHand} />
                <button onClick={commitHand}>添加学生</button>
            </div>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>age</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.stuList && props.stuList.map(it =>(<tr key={it.id}>
                            <td>{it.id}</td>
                            <td>{it.name}</td>
                            <td>{it.age}</td>
                            <td><button onClick={deleteHand.bind(null,it.id)}>删除</button></td>
                    </tr>) )
                    }
                </tbody>
            </table>
        </>)
    }

    //connect包裹组件
    let WrapStudent = connect(mapToProps,mapMethod)(Student);
```