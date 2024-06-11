import React, { useEffect, useState, useRef } from 'react';
import { message } from 'antd';
import { instance } from 'api/index';
import { useHistory } from 'react-router-dom';
import { actions } from 'features/user/slice';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Space } from 'antd';
import logoImg from 'assets/dokdo-logo-black.png';
import { AdminFormContainer, FormHeader, LoginPage } from 'assets/style';
import LoginView from './LoginView';
import Step1 from './forgotPassword/Step1';
import Step2 from './forgotPassword/Step2';
import Step3 from './forgotPassword/Step3';

const { setUser } = actions;

const LogIn = () => {
  const emailRef = useRef();
  const emailSave = localStorage.getItem('email');

  const pageData = {
    login: { height: 310, header: '관리자 계정 로그인' },
    Step1: { height: 350, header: '비밀번호 찾기' },
    Step2: { height: 410, header: '비밀번호 찾기' },
    Step3: { height: 230, header: '비밀번호 찾기' },
  };
  const [route, setRoute] = useState('login');
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (emailSave) {
      emailRef.current.value = emailSave;
    }
  }, [emailSave]);

  const emailReset = () => {
    localStorage.removeItem('email');
  };

  useEffect(() => {
    const { token } = user;
    if (token) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = ({ username, password, remember }) => {
    if (remember) {
      if (emailSave) {
        localStorage.setItem('email', username);
      } else {
        localStorage.removeItem('email');
        localStorage.setItem('email', username);
      }
    }

    (async () => {
      try {
        const { data } = await instance.post('/api/auth/local', {
          identifier: username,
          password,
        });

        if (!data.jwt) {
          message.error('접근 권한이 없습니다.');
          return;
        }

        dispatch(
          setUser({
            token: data.jwt,
            ...data.user,
          }),
        );
        history.push('/');
      } catch (error) {
        message.error('이메일 계정 혹은 비밀번호를 확인해주세요.');
      }
    })();
  };

  const routeOnFrontPage = () => {
    switch (route) {
      case 'Step1':
        return <Step1 setRoute={setRoute} />;
      case 'Step2':
        return <Step2 setRoute={setRoute} />;
      case 'Step3':
        return <Step3 setRoute={setRoute} />;
      default:
        return (
          <LoginView
            onFinish={onFinish}
            setRoute={setRoute}
            emailReset={emailReset}
            emailRef={emailRef}
          />
        );
    }
  };

  return (
    <LoginPage
      type='flex'
      justify='center'
      style={{ height: '100vh', background: `#F0F2F5` }}
    >
      <Col xs={20} sm={20} lg={12} xl={10} style={{ paddingTop: 100 }}>
        <div style={{ textAlign: 'center' }}>
          <Space size={30} direction='vertical' style={{ width: '100%' }}>
            <Col span={10} style={{ margin: 'auto', width: '30%' }} offset={18}>
              <img src={logoImg} alt='' style={{ width: '100%' }} />
            </Col>

            <Row justify='center'>
              <Col xs={24} lg={18}>
                <AdminFormContainer
                  style={{
                    transition: 'all 0.3s',
                    maxHeight: 700,
                    height: pageData[route].height,
                  }}
                >
                  <FormHeader>{pageData[route].header}</FormHeader>
                  {routeOnFrontPage()}
                </AdminFormContainer>
              </Col>
            </Row>
          </Space>
        </div>
      </Col>
    </LoginPage>
  );
};

export default LogIn;
