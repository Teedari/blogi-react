import React from "react";
import { BackTop, Layout } from "antd";
import CustomHeader from "./components/Header";

const { Content, Footer } = Layout;

const CustomLayout = ({ noHeader, noFooter, children }) => {
  return (
    <Layout>
      {!noHeader ? <CustomHeader /> : <></>}
      <Content className="custom-layout-content">{children}</Content>
      {!noFooter ? (
        <Footer className="custom-layout-footer">
          <BackTop />
        </Footer>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default CustomLayout;
