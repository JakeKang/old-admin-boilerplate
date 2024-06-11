import React from 'react';
import { Form, Button, Input, Row, Col, Space } from 'antd';

const Step1 = ({ setRoute }) => {
  const [form] = Form.useForm();

  const onFinish = (data) => {
    setRoute('Step2');
  };
  const onCancel = () => {
    form.resetFields();
    setRoute('login');
  };
  return (
    <>
      <p style={{ margin: 0 }}>
        관리자 계정 추가에 입력하셨던 정보를 입력하여 주세요.
      </p>
      <p>해당 이메일 주소로 비밀번호 재설정 코드가 전송됩니다.</p>
      <Form
        style={{ marginTop: 60 }}
        name='forgotPassword'
        className='login-form'
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        labelAlign='left'
      >
        <Form.Item
          name='email'
          label='이메일'
          rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Row justify='end' style={{ marginTop: 60 }}>
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
                전송
              </Button>
            </Col>
          </Space>
        </Row>
      </Form>
    </>
  );
};

export default Step1;
