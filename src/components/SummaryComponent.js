import React from 'react';
import { Card, Col, Row } from 'antd';

const SummaryComponent = ({ data }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8}>
        <Card title="Total Cases" bordered={false}>
          {formatNumber(data.cases)}
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card title="Total Recovered" bordered={false}>
          {formatNumber(data.recovered)}
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <Card title="Total Deaths" bordered={false}>
          {formatNumber(data.deaths)}
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryComponent;
