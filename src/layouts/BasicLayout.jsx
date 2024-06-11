import React from 'react';
import { Link, Route, useHistory, Redirect } from 'react-router-dom';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';

import RightContents from 'components/RightContent';
import { route, flatRoutes } from './routes';
import logo from 'assets/dokdo-logo-black.png';

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} DOKDO VOLUNTEER FORCES. ALL RIGHTS RESERVED.`}
  />
);

const App = ({ settings, children, ...props }) => {
  const history = useHistory();

  const checkPermission = (path, target, Exception) => {
    return target;
  };

  const menuDataRender = (menuList) =>
    menuList.map((item) => {
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };

      return checkPermission(item.path, localItem, null);
    });

  if (history.location.pathname === '/') {
    return <Redirect to='/dashboard' />;
  }

  return (
    <ProLayout
      logo={<img src={logo} alt='' style={{ width: '100%', height: 'auto' }} />}
      title={''}
      onMenuHeaderClick={() => history.push('/')}
      navTheme='light'
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return (
          <Link to={menuItemProps.path}>
            <small>{defaultDom}</small>
          </Link>
        );
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: 'Home',
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => defaultFooterDom}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContents />}
      route={route}
      {...props}
      {...settings}
    >
      {flatRoutes.map(({ path, name, component: Component }) => (
        <Route
          key={path}
          path={path}
          render={(props) => <Component {...props} name={name} />}
        />
      ))}
    </ProLayout>
  );
};

export default App;
