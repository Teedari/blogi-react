import { Typography } from "antd";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const Tile = ({id, imageUrl, title, created_at}) =>{
const navigate = useNavigate();

return (
  <li key={id} className="d-flex gap-2 tile">
        <div className="" style={{ width: "150px", height: "80px" }}>
          <div className="image-container curvy-md">
            <img
              src={imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className=''>
          <Typography.Title level={4} onClick={() => navigate(`/posts/${id}`)}  className="m-0 hoverable-link">
           {title.slice(0, 25) + '...'}
          </Typography.Title>
          <small className="text-muted">{created_at}</small>
        </div>
      </li>
);
}

Tile.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  created_at: PropTypes.string,
  
}


export default Tile;