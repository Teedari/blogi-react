import React from "react";
import CustomLayout from "../../layout";
import snowImage from "../../assets/images/snow.jpg";
import { Avatar, Typography } from "antd";
const ReadArticle = () => {
  return (
    <CustomLayout>
      <div className="article-read-hero-section position-relative d-flex flex-column justify-content-end pb-5 text-white">
        {/* <div className='image-background' style={{zIndex: '1'}}>
          <img src={snowImage} alt="" />
        </div> */}
        <div className="container ">
          <p>
            John / Inspiration /
            <span>Your Most Burning Questions About Light Lamp</span>
          </p>
          <hr />
          <Typography.Title>
            Your Most Burning Questions About Ligh Lamp
          </Typography.Title>
          <p>
            <Avatar src={snowImage} />
            <small className="text-muted">John Doe</small>
          </p>
        </div>
      </div>
      <div className='py-4'>
        <div className="container">
          <p>
            Quis mollit voluptate sit qui quis duis ipsum labore deserunt
            commodo duis non laborum aliquip. In do adipisicing do Lorem qui
            quis labore sint est exercitation. Proident commodo velit ex id
            reprehenderit. Aliqua exercitation ut reprehenderit aute fugiat eu
            do consectetur. Sint fugiat pariatur id
          </p>
          <p>Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          </p>
          <Typography.Title level={3}>Ridiculously expensive gadgets for the filthy rich</Typography.Title>
          <p>Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          Ullamco ad occaecat sunt eu pariatur aliquip.
          </p>
        </div>
      </div>
    </CustomLayout>
  );
};

export default ReadArticle;
