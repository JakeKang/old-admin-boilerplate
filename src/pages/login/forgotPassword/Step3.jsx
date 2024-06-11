import React from 'react';
import { Button, Row, Col, Space } from 'antd';

const Step3 = ({ setRoute }) => {
  return (
    <>
      <p style={{ margin: '40px 0' }}>변경된 정보로 재로그인 해주세요. </p>
      <Row justify='end' style={{ marginTop: 30, marginBottom: 60 }}>
        <Space>
          <Col>
            <Button
              type='primary'
              className='login-form-button'
              style={{ width: '100%' }}
              onClick={() => {
                setRoute('login');
              }}
            >
              확인
            </Button>
          </Col>
        </Space>
      </Row>
    </>
  );
};

export default Step3;
