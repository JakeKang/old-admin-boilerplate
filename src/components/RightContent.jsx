import React from 'react';
import { Dropdown, Avatar, Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from 'features/user/slice';

const { initUser } = actions;

const User = styled.div``;
const Username = styled.span`
  padding: 0 10px;
  color: black;
  font-weight: 600;
`;

const GlobalHeaderRight = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandle = () => {
    dispatch(initUser());
    history.push('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <Button type='link' onClick={logoutHandle}>
          <LogoutOutlined />
          로그아웃
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <User>
        <Avatar>A</Avatar>
        <Username>Admin</Username>
      </User>
    </Dropdown>
  );
};

export default GlobalHeaderRight;
