import React from 'react';
import * as ICO from '@ant-design/icons';

import DashboardPage from 'pages/dashboard';

export const route = {
  routes: [
    {
      name: '페이지',
      icon: <ICO.ClusterOutlined />,
      children: [
        {
          path: '/dashboard',
          name: '대시보드',
          component: DashboardPage,
        },
      ],
    },
  ],
};

const makeFlatRoute = (routes = []) => {
  return routes.reduce((acc, { children, ...restProps }) => {
    if (children) {
      return [...acc, ...makeFlatRoute(children)];
    }
    return [...acc, ...makeFlatRoute(children), { ...restProps }];
  }, []);
};

export const flatRoutes = makeFlatRoute(route.routes);
