import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect,Dispatch} from 'umi'
import {useHistory} from 'react-router-dom'
const LoginBox = ({dispatch}:{dispatch:Dispatch}) => {
  const history =useHistory()
  const onFinish = ({username,password}:any) => {
    // console.log('Received values of form: ', values);
    dispatch({
        type:'login/getLogin',
        payload:{
            username,password
        }
    })
  
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '用户名格式不正确',
            pattern:/^[a-zA-Z0-9_-]{4,16}$/
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '密码不正确',

          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>


      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>

      </Form.Item>
    </Form>
  );
};

export default connect()(LoginBox)