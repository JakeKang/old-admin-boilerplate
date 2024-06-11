import React from 'react';
import { Form, Button, Input, Row, Col, Space } from 'antd';

const Step2 = ({ setRoute }) => {
  const [form] = Form.useForm();

  const onFinish = (data) => {
    setRoute('Step3');
  };
  const onCancel = () => {
    form.resetFields();
    setRoute('login');
  };
  return (
    <>
      <p style={{ margin: 0 }}>
        입력하신 메일에서 비밀번호 재설정 코드를 확인해주세요.
      </p>
      <p>비밀번호 재설정 코드와 새 비밀번호를 입력하여 주세요.</p>
      <Form
        style={{ marginTop: 30 }}
        name='forgotPassword'
        className='login-form'
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        labelAlign='left'
      >
        <Form.Item
          name='code'
          label='코드'
          rules={[{ required: true, message: '코드를 입력해주세요.' }]}
        >
          <Input placeholder='Code' />
        </Form.Item>
        <Form.Item
          name='new'
          label='새 비밀번호'
          rules={[{ required: true, message: '새 비밀번호를 입력해주세요.' }]}
        >
          <Input
            placeholder='New Password'
            type='password'
            autocomplete='new-password'
          />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='새 비밀번호 확인'
          rules={[{ required: true, message: '새 비밀번호를 입력해주세요.' }]}
        >
          <Input
            placeholder='New Password Confirm'
            type='password'
            autocomplete='new-password'
          />
        </Form.Item>

        <Row justify='end' style={{ marginTop: 30 }}>
          <Space>
            <Col>
              <Button
                type='default'
                className='login-form-button'
                style={{ width: '100%' }}
                onClick={onCancel}
              >
                취소
              </Button>
            </Col>
            <Col>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                style={{ width: '100%' }}
              >
                확인
              </Button>
            </Col>
          </Space>
        </Row>
      </Form>
    </>
  );
};

export default Step2;
