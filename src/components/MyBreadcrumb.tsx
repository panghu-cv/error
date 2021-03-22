import React,{useState,useEffect} from 'react';
import {Breadcrumb}  from 'antd'
import {Link,useLocation}  from 'react-router-dom'
import routes from '../../config/routes'
const   MyBreadcrumb=({index}:{index:Number})=>{
    const {pathname}=useLocation()
    const [route,setRoute]=useState({})
    useEffect(()=>{
        const arr =routes.filter((item:any)=>
            item.path!='/'&&pathname.indexOf(item.path)!=-1
        )
        setRoute(arr[0])
    },[route])
    if(!route.name){
        return <div>加载中.........</div>
    }
    return (
        <div>
             <Breadcrumb>
    <Breadcrumb.Item>
    <Link to='/'>Home</Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
    {route.name}
    </Breadcrumb.Item>
    <Breadcrumb.Item>
   {route.routes[index].name}
    </Breadcrumb.Item>

  </Breadcrumb>
        </div>
    )
        
    
}
export default MyBreadcrumb