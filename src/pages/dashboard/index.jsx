import React from 'react';
import { Row, Col, Card, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import {
  ChartCard,
  Field,
  MiniArea,
  MiniBar,
  MiniProgress,
  Bar,
} from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';

import numeral from 'numeral';
import moment from 'moment';

import styled from 'styled-components';

const Wrapper = styled.div`
  .antd-pro-charts-chart-card-meta,
  .antd-pro-number-info-numberInfoSubTitle,
  .antd-pro-charts-chart-card-footer {
    color: rgba(0, 0, 0, 1);
  }
  .antd-pro-charts-chart-card-total,
  .antd-pro-charts-field-number,
  .antd-pro-trend-trendItem span:first-child {
    color: black;
  }
  .antd-pro-number-info-numberInfo {
    span {
      color: rgba(0, 0, 0, 1);
    }
    .antd-pro-number-info-numberInfoSubTitle {
      color: rgba(0, 0, 0, 1) !important;
    }
    .antd-pro-number-info-numberInfoTitle {
      color: rgba(0, 0, 0, 1) !important;
    }
    .antd-pro-number-info-numberInfoValue {
      span:first-child {
        color: black !important;
      }
      .antd-pro-number-info-subTotal {
        color: rgba(0, 0, 0, 1) !important;
      }
    }
  }
`;

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
      'YYYY-MM-DD',
    ),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}월`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const DashboardPage = () => {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title='전체' bordered={false}>
            <Bar height={200} title='월별통계' data={salesData} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Wrapper>
            <ChartCard
              title='전체'
              total={numeral(8846).format('0,0')}
              contentHeight={134}
            >
              <NumberInfo
                subTitle={<span>현재</span>}
                total={numeral(12321).format('0,0')}
                status='up'
                subTotal={17.1}
              />
              <MiniArea line height={45} data={visitData} />
            </ChartCard>
          </Wrapper>
        </Col>
        <Col span={8}>
          <Wrapper>
            <ChartCard
              title='전체'
              action={
                <Tooltip title='정보'>
                  <InfoCircleOutlined />
                </Tooltip>
              }
              total={numeral(8846).format('0,0')}
              footer={
                <Field label='현재' value={numeral(1234).format('0,0')} />
              }
              contentHeight={46}
            >
              <MiniBar height={46} data={visitData} />
            </ChartCard>
          </Wrapper>
        </Col>
        <Col span={8}>
          <Wrapper>
            <ChartCard
              title='전체'
              action={
                <Tooltip title='정보'>
                  <InfoCircleOutlined />
                </Tooltip>
              }
              total='78%'
              footer={
                <div>
                  <span>
                    상승폭
                    <Trend
                      flag='up'
                      style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}
                    >
                      12%
                    </Trend>
                  </span>
                  <span style={{ marginLeft: 16 }}>
                    하강폭
                    <Trend
                      flag='down'
                      style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}
                    >
                      11%
                    </Trend>
                  </span>
                </div>
              }
              contentHeight={46}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} />
            </ChartCard>
          </Wrapper>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
