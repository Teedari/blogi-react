import React from "react";
import { Row, Col } from "antd";

const CustomTile = ({ dataSource, wrap, render: Component }) => {
  const RenderComponent = () => {
    if (wrap) {
      return (
        <Row gutter={[16, 16]}>
          {dataSource.map(((data, index) => (
            <Col key={index.toString()} lg={12}>
              <Component data={data} />
            </Col>
          )))}
        </Row>
      );
    }
    return (
      <>
        {dataSource.map((data, index) => (<Component key={index.toString()} data={data} />))}
      </>
    );
  };
  return (
    <ul className="custom-tile  d-flex flex-column gap-4 list-unstyled">
      <RenderComponent />
    </ul>
  );
};

export default CustomTile;
