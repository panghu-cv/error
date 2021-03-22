import React, { useState, useEffect } from 'react'
import { Input, Space, Button, Modal, Form } from 'antd'
import { Dispatch } from 'umi'
const { Search } = Input

const UserListBtn = ({ dispatch }: { dispatch: Dispatch }) => {
    const [addFlag, setAddFlag] = useState<boolean>(false)
    const [userValues, setUserValues] = useState<any>({})
    // 添加用户开关
    //获取添加的用户信息
    const getAddValus = (changedValues: any, allValues: any) => {
        //   console.log('changedValues',changedValues)
        //   console.log('allValues',allValues)
        setUserValues(allValues)
    }

    // 确定逻辑  激活数据并且添加   
    const addUser = () => {
        dispatch({
            type: 'user/addUser',
            payload: userValues,
        })
    }


    // 搜索
    const onSearch = (value: string) => { console.log(value) }

    return <div>
        <Space>
            <Search placeholder="请输入你要搜的用户名"
                onSearch={onSearch}
                enterButton />
            <Button type='primary' onClick={() => setAddFlag(true)}>添加用户</Button>
            <Modal title="添加用户" visible={addFlag}
                onOk={addUser}
                okText='确定'
                onCancel={() => { setAddFlag(false) }}
                cancelText='取消'
            >
                <Form labelCol={{ span: 6 }}
                    wrapperCol={{ span: 15 }}
                    onValuesChange={getAddValus}
                >
                    <Form.Item name='username' label='用户名' rules={[{ required: true, message: '输入格式不正确', pattern: /^[a-zA-Z0-9_-]{4,16}$/ }]}>
                        <Input placeholder='请输入用户名' />
                    </Form.Item >
                    <Form.Item name='password' label='密码' rules={[{ required: true, message: '输入格式不正确' }]}>
                        <Input.Password placeholder='请输入密码' />
                    </Form.Item>
                    <Form.Item name='email' label='邮箱' rules={[{ required: true, message: '输入格式不正确', pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }]}>
                        <Input placeholder='请输入邮箱' />
                    </Form.Item>
                    <Form.Item name='mobile' label='手机号' rules={[{ required: true, message: '输入格式不正确', pattern: /^(?:(?:\+|00)86)?1\d{10}$/ }]}>
                        <Input placeholder='请输入手机号' />
                    </Form.Item>
                </Form>


            </Modal>
            <Button type='primary'>导出为excel表格</Button>
        </Space>
    </div>
}


export default UserListBtn