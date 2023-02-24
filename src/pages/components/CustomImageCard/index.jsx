import React from "react";
import { Avatar, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { data1 } from "../data/dataSource";

const CustomImageCard = () => {
  const imageUrl = data1[Math.floor(Math.random() * 6)].imgUrl
  return (
    <div className="image-card-1">
      <div className="image-container curvy">
        <img
          src={imageUrl}
          alt=""
        />
      </div>

      <Avatar
        className="card-tag-icon d-flex justify-content-center align-items-center position-absolute bottom-0 end-0"
        icon={<FontAwesomeIcon icon={faImage} color="white" />}
      />
      <Button className="card-tag-name tee-primary-btn sm position-absolute mt-3 ms-3 start-0" style={{width: '100px'}}>
        Lifestyle
      </Button>
    </div>
  );
};

export default CustomImageCard;
