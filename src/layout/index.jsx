import React from 'react';
import { Layout } from 'antd';
import CustomHeader from './components/Header';


const { Content, Footer} = Layout;


const CustomLayout = ({children}) => {
  return <Layout>
    <CustomHeader />
    <Content className='custom-layout-content'>
      {children}
    </Content>
    <Footer className='custom-layout-footer'/>
  </Layout>;
};

export default CustomLayout;
