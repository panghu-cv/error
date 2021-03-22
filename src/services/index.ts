import request from '@/utils/request'
export const loginReq=({username,password}:{username:string,password:string})=>request({
    url:'login',
    method:'post',
    data:{
        username,password
    }

})

// 获取用户列表 
export const userListReq=({query,pagenum,pagesize}:{query:string,pagenum:number,pagesize:number})=>
    request({
       url:'users',
       method:'get',
       data:{
           query,
           pagenum,
           pagesize
       }
    })

//添加用户数据 
export const addUserReq=({username,
    password,
    email,
    mobile}:{username:string,
        password:string,
        email:string,
        mobile:string})=>request({
    url:'users',
    method:'post',
    data:{
        username,
        password,
        email,
        mobile
    }
})

// 修改用户状态 
export const changeUserStateReq =(uid:number,type:boolean)=>request({

})