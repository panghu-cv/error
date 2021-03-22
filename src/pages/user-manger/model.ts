

// 数据模块

import {Effect,ImmerReducer,Subscription} from 'umi'
import { userListReq,addUserReq} from '@/services'
import {message} from 'antd'
// 给对象定义类型 
//list的类型
export interface ElementType{
   readonly id:number,
   username:string,
   mobile:string,
   type:number,
   email:string,
   create_time:string,
   mg_state:boolean,
   role_name:string
}
export interface userModleStateType{
    list:ElementType[],
    total:number
}
interface  userModleType{
    namespace:string,
    state:userModleStateType,
    effects:{
        getList: Effect,
        addUser: Effect,
        exportExcel: Effect,
        edit: Effect,
        del: Effect,
        setting: Effect,
        stateChange: Effect,
    },
    reducers:{
        GET_LIST: ImmerReducer,
        ADD_USER: ImmerReducer,
        EXPORT_EXCEL: ImmerReducer,
        EDIT: ImmerReducer,
        DEL: ImmerReducer,
        SETTING: ImmerReducer,
        STATE_CHANGE: ImmerReducer,
    },
    subscriptions:{
       setup:Subscription
    }

}
//开始调用
const userModle:userModleType={
       namespace:'user',
       state:{
           list:[],
           total:1
       },
       effects:{
        *getList ({payload},{call,put}) {
           const {data,meta}=  yield  call(userListReq,payload)
        //    console.log('r',r)
        if(meta.status===400){
            message.error(meta.msg)
            return;
        }
           yield put({
               type:'GET_LIST',
               payload:{
                   users:data.users,
                   total: data.total
               }
           })      

        },
        *addUser ({payload},{call,put}) {
     const    {data,meta}=  yield call(addUserReq,payload)
        //   console.log(r)
        if(meta.status===400){
            message.error(meta.msg)
            return
        }
        message.success(meta.msg)

        },
        *exportExcel ({payload},{call,put}) {},
        *edit ({payload},{call,put}) {},
        *del ({payload},{call,put}) {},
        *setting ({payload},{call,put}) {},
        *stateChange ({payload},{call,put}) {},
       },
       reducers:{
        GET_LIST(state,action){
            state.list=action.payload.users,
            state.total=action.payload.total
        },
        ADD_USER (state,action) {
            state.
        },
        EXPORT_EXCEL () {},
        EDIT () {},
        DEL () {},
        SETTING () {},
        STATE_CHANGE () {}
       },
       subscriptions:{
           setup(){}
       }
}
export default userModle