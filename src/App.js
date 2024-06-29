import React, { useState, useEffect } from 'react';
import { Layout, Switch } from 'antd';
// import 'antd/dist/antd.less';
import './App.css';
import ChartComponent from './components/ChartComponent';
import MapComponent from './components/MapComponent';
import SummaryComponent from './components/SummaryComponent';
import { getCovidData, getCountriesData } from './services/api';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [globalData, setGlobalData] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const fetchData = async () => {
      const globalData = await getCovidData();
      setGlobalData(globalData);
      const countriesData = await getCountriesData();
      setCountriesData(countriesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Layout>
      <Header>
        COVID-19 Tracker
        <Switch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          style={{ marginLeft: '20px' }}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ padding: '24px', minHeight: '80vh', }}>
          <SummaryComponent data={globalData} />
          <ChartComponent data={globalData} />
          <MapComponent countries={countriesData} />
        </div>
      </Content>
      <Footer className="footer">
        COVID-19 Tracker ©2024 Created by Oyem Tech
      </Footer>
    </Layout>
  );
};

export default App;
