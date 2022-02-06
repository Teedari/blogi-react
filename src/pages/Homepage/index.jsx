import { Avatar, Button, Card, Col, Row, Space, Tag, Typography } from "antd";
import React from "react";
import CustomLayout from "../../layout";
import twilightImage from "../../assets/images/twilight.jpg";
// import snowImage from '../../assets/images/snow.jpg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import CustomTile from "../components/CustomTile";
import CustomImageCard from "../components/CustomImageCard";
import { data1 } from "../components/data/dataSource";
import Tile from "../components/CustomTile/Tile";
const Homepage = () => {
  return (
    <CustomLayout>
      <div className="container">
        <Row gutter={[16, 16]}>
          {/** Left side Col */}
          <Col md={24} lg={16}>
            <div className="hero-block hero-section">
              <div className="image-container overlap-img shadow curvy">
                <img src={twilightImage} alt="" />
              </div>
              <div
                className="position-absolute bottom-0  p-4 text-white "
                style={{ zIndex: "3" }}>
                <Tag color="orange">Lifestyle</Tag>
                <Typography.Title level={1} className="text-white m-0">
                  5 Easy ways you can turn future into success
                </Typography.Title>
                <small>John Doe . 31 February 2022</small>
              </div>
            </div>
            {/** Editors pick */}
            <div className="editor-pick-section">
              <div className="heading">
                <h4>Editor's Pick</h4>
              </div>
              <Card className="curvy-sm">
                <Row gutter={[16, 16]}>
                  <Col lg={12}>
                    <CustomImageCard />
                    <Space className="" size="middle">
                      <Avatar src="https://images.unsplash.com/photo-1643222379794-949f3e120a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                      <small>John Doe</small>
                      <small>2019 January 12</small>
                    </Space>
                    <Typography.Title level={3} className="mt-3">
                      15 Unheard Ways to Achieve Greater Walker
                    </Typography.Title>
                    <Typography>
                      Qui amet nostrud Lorem aliqua et irure ea incididunt anim
                      aliquip non. Nostrud Lorem aliqua et irure ea incididunt
                      anim
                    </Typography>
                  </Col>
                  <Col lg={12}>
                    <CustomTile
                      dataSource={data1.slice(0, 5)}
                      render={({ data }) => (
                        <Tile
                          id={data.id}
                          title={data.title}
                          created_at={data.created_at}
                          imageUrl={data.imgUrl}
                        />
                      )}
                    />
                  </Col>
                </Row>
              </Card>
            </div>
            {/** Trending pick */}
           
            <div>
              <div className="heading">
                <h4>Trending</h4>
              </div>
              <Card className="curvy-sm">
                <div className='row'>
                  <div className="col-md-6">
                    <CustomImageCard />
                  </div>
                  <div className="col-md-6">
                    <CustomImageCard />
                  </div>
                </div>
                <CustomTile
                  dataSource={data1.slice(0, 4)}
                  wrap
                  render={({ data }) => (
                    <Tile
                      id={data.id}
                      title={data.title}
                      created_at={data.created_at}
                      imageUrl={data.imgUrl}
                    />
                  )}
                />
              </Card>
            </div>
          </Col>
          {/** Right side Col */}
          <Col md={24} lg={8}>
            <Card className="curvy-sm">
              <div className="hero-block">
                <Space size='large' className="mb-4">
                  <Button className='tee-primary-btn'>Popular</Button>
                  <Button className="tee-btn">Recent</Button>
                </Space>
                <CustomTile
                  dataSource={data1.slice(0, 4)}
                  
                  render={({ data }) => (
                    <Tile
                      id={data.id}
                      title={data.title}
                      created_at={data.created_at}
                      imageUrl={data.imgUrl}
                    />
                  )}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </CustomLayout>
  );
};

export default Homepage;
