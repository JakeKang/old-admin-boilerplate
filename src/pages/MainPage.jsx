import React from 'react';
import BasicLayout from 'layouts/BasicLayout';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  if (!user.token) history.push('/login');

  return (
    <div style={{ height: '100vh' }}>
      <BasicLayout />
    </div>
  );
};

export default MainPage;
