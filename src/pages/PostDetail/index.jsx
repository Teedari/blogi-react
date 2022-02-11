import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button, Space, Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import CustomLayout from "../../layout";
import CustomImageCard from "../components/CustomImageCard";
const PostDetail = () => {
  const params = useParams();
  return (
    <CustomLayout noHeader>
      <div className="container">
        <div className="text-center py-3 shadow mt-4 curvy-full position-sticky top-0 d-flex justify-content-between px-3 bg-light" style={{ zIndex: 2}}>
          <Button className="tee-primary-btn-outline sm">Lifestyle</Button>
          <div className="logo">
            Blogi<span>.</span>
          </div>
          <Avatar
            size="large"
            className="bg-primary d-flex align-items-center justify-content-center"
            icon={
              <FontAwesomeIcon style={{ fontSize: "1rem" }} icon={faSearch} />
            }
          />
        </div>
        <br />
        <br />
        <br />
        <div className="mx-auto" style={{ width: "70%" }}>
          <Space className="" size="middle">
            <Avatar src="https://images.unsplash.com/photo-1643222379794-949f3e120a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <small>John Doe</small>
            <small>2019 January 12</small>
          </Space>
          <Typography.Title level={3} className="mt-3">
            15 Unheard Ways to Achieve Greater Walker
          </Typography.Title>
        </div>
        <div className="mx-auto" style={{width: '80%'}}>
          <CustomImageCard />
        </div>
        <div className="mx-auto pt-4" style={{ width: "70%" }}>
          <Typography level={3} className="mt-3">
            Cupidatat ad eu labore tempor eu aliquip et. Consequat pariatur exercitation in fugiat sunt duis ex consequat nostrud nostrud sint incididunt deserunt. Sunt id voluptate culpa aute esse ea eu magna cillum.

            Sit anim labore ipsum aute. In nostrud consectetur proident eu ut reprehenderit nulla pariatur elit minim occaecat consequat. Ipsum eiusmod in et reprehenderit nisi non esse amet enim duis nulla laborum est. Non sunt anim mollit sit tempor ut sint minim anim occaecat nulla amet cupidatat ipsum. Est sint nulla veniam fugiat eiusmod id deserunt minim adipisicing id eiusmod tempor officia.
          </Typography>
          <br/><br/><hr/>
          <div>
            <Button className='tee-btn gap-1 float-end' style={{border: ''}}><span>Continue Reading</span> <FontAwesomeIcon icon={faChevronRight} /></Button>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default PostDetail;
