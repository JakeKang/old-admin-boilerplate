import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import moment from 'moment';

import createStore from './store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { ConfigProvider as AntdProvider } from 'antd';
import koKR from 'antd/es/locale/ko_KR';
import {
  ConfigProvider as ProProvider,
  koKRIntl,
} from '@ant-design/pro-provider';

import 'moment/locale/ko';

moment.locale('ko');

const store = createStore();
let persistor = persistStore(store);

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AntdProvider locale={koKR}>
        <ProProvider value={{ intl: koKRIntl }}>
          <App />
        </ProProvider>
      </AntdProvider>
    </PersistGate>
  </ReduxProvider>,

  document.getElementById('root'),
);
