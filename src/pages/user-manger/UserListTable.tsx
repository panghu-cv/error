import React from 'react'
import { Table ,Button,Space,Switch} from 'antd';
import {EditOutlined,DeleteOutlined,SettingOutlined} from '@ant-design/icons'
import {ElementType} from './model'
import {Dispatch} from 'umi'

const   UserListTable=({list,total,dispatch}:{list:ElementType[],total:number,dispatch:Dispatch})=>{
 const   onSwitchChange=(checked:boolean)=>{
       console.log(checked)
    }
    const columns= [
        {
          title: 'ID',
          width: 50,
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
        },
        {
          title: '用户名',
          width:80,
          dataIndex: 'username',
          key: 'username',
          fixed: 'left',
        },
        { title: '邮箱', dataIndex: 'email', key: 'email' },
        { title: '电话', dataIndex: 'mobile', key: 'mobile' },
        { title: '角色', dataIndex: 'role_name', key: 'role_name' },
        { title: '状态', key: 'id' , render:(currentData:any)=>{
            return null
          return <Switch checked={currentData.mg_state} onChange={onSwitchChange}/>
        }},
      
        {
          title: '操作',

          fixed: 'right',
          width: 150,
          render: (currentData:any) => <div>
        <Space>
        <Button type='primary' icon={<EditOutlined />}></Button>
             <Button type='primary' danger icon={<DeleteOutlined />}></Button>
             <Button type='primary' icon={<SettingOutlined />} style={{backgroundColor:'yellow',borderColor:'yellow'}}></Button>
        </Space>
          </div>,
        },
      ];
    return<Table columns={columns} dataSource={list} scroll={{ x: 1300 }} pagination={
        {position:['bottomLeft'],total}
      
    }/>}
export default UserListTable