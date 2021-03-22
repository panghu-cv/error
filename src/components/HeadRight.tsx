import React,{FC} from 'react';
import {Space,Button} from 'antd'
import * as cookie from '@/utils/cookie'
import {history} from 'umi'
const   HeadRight:FC=()=>{
    return (
        <div>
          <Space>
              <span>{cookie.getCookie('username')}</span>
              <Button type='primary' onClick={()=>{history.push('/login')}}>退出登录</Button>
          </Space>
        </div>
    )
        
    
}
export default HeadRight