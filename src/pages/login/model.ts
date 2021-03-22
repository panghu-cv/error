//状态管理文件 

import { Effect, Subscription,history } from 'umi';
import * as services from '@/services'
import * as cookie from '@/utils/cookie'
import {message} from 'antd'
interface LoginModalType{
   namespace:'login',
   state:Object,
   effect:{
       getLogin:Effect
   },
   reducers:Object,
   subscriptions: { setup: Subscription },
}

const LoginModal={
     namespace:'login',//数据块起名
     state:{},//定义state
     effects: {
         *getLogin({payload},{call,put}){
        const {data,meta}= yield  call(services.loginReq,payload)
         if(meta.status==400){
             message.error(meta.msg)
             return
         }
         cookie.setCookie('username',data.username,7)
         cookie.setCookie('id',data.id,7)
         cookie.setCookie('mobile',data.mobile,7)
         cookie.setCookie('rid',data.rid,7)
         cookie.setCookie('token',data.token,7)
         cookie.setCookie('email',data.email,7)
         history.push('/')
         }

     },//定义动作 发送动作  写genentor函数  
     reducers:{},     //修改state
     subscriptions: { setup(){

     }}
}

export default LoginModal