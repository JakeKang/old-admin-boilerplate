import React from 'react';
import { Row, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

const LoginView = ({ onFinish, setRoute, emailReset, emailRef }) => {
  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: false }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
      >
        <Input
          prefix={
            <UserOutlined
              style={{ color: '#034691' }}
              className='site-form-item-icon'
            />
          }
          placeholder='Username'
          autoComplete='username'
          ref={emailRef}
          onFocus={emailReset}
        ></Input>
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
      >
        <Input
          prefix={
            <LockOutlined
              style={{ color: '#034691' }}
              className='site-form-item-icon'
            />
          }
          type='password'
          placeholder='Password'
          autocomplete='current-password'
        />
      </Form.Item>
      <Form.Item>
        <Row justify='space-between'>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>이메일 저장</Checkbox>
          </Form.Item>
          <Button
            type='link'
            style={{ color: '#034691' }}
            onClick={() => {
              setRoute('Step1');
            }}
          >
            비밀번호 찾기
          </Button>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          className='login-form-button'
          style={{ width: '100%' }}
        >
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginView;
