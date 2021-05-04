import React, { useState } from 'react';
import { Row, Col } from 'antd';
import HoprAddressTable from '../../components/tables/HoprAddress';
import InputFilter from '../../components/entry/InputFilter';
import SettingsModal from '../../components/layout/SettingsModal';
//Assets
import BrandLogo from '../../assets/brand/logo.svg';
//Hooks
import { useI18n } from '../../hooks/i18n.hook';

function generateData() {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      hopr_address: '10x' + parseInt(Math.random() * 1000000000000),
      hopr_staked_amount: parseInt(Math.random() * 100),
      hopr_total_amount: parseInt(Math.random() * 1000),
    });
  }
  return data;
}
const HomeScreen = () => {
  const [, t] = useI18n();
  const [total] = useState(37648);
  const [data] = useState(generateData());
  return (
    <div className="home-screen fadeIn">
      <SettingsModal />
      <div className="wrapper">
        <Row justify="space-between" gutter={[40]}>
          <Col xs={12} xl={12}>
            <img src={BrandLogo} alt="HOPR" />
          </Col>
          <Col xs={12} xl={7} className="align-center">
            <div className="token-total">
              <div className="title-head">
                <h3>{t('HOPR_TOTAL_COUNT')}</h3>
                <h1>{total}</h1>
              </div>
            </div>
          </Col>
        </Row>
        <InputFilter />
        <div className="hopr-table">
          <HoprAddressTable dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
