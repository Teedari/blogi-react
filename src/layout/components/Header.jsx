import React, {useState} from 'react';
import { Avatar, Button, Layout } from 'antd';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faAlignRight, faThLarge, faCubes, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CustomHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return <Layout.Header className='custom-layout-header'>
    <div className='container'>
      <div className='d-flex align-items-center justify-content-between container mobile-nav'>
        <div className='logo'>Blogi<span>.</span></div>
        <Button 
          onClick={() => setMenuOpened(!menuOpened)}
          className='tee-primary-btn'>
            <FontAwesomeIcon icon={faAlignRight} />
        </Button>
      </div>
      <nav className={`d-flex gap-4 ${menuOpened === true ? 'active' : ''}`}>
          <div className='logo'>Blogi<span>.</span></div>
          <ul className='d-flex align-items-center gap-3 flex-grow-1'>
            <li className='active'><Link to={''} className=''>Home</Link></li>
            <li><a href="index.html">Features</a></li>
            <li><a href="index.html">Lifestyle</a></li>
            <li><a href="index.html">Inspiration</a></li>
            <li><a href="index.html">Contact</a></li>
          </ul>
      
        <div className=''>
          {/* <Button className='tee-accent-btn-outline'><FontAwesomeIcon icon={faCubes}/></Button> */}
          <Link to='/auth/login' className=''><Avatar icon={<FontAwesomeIcon icon={faUser}/>}/> Login</Link>
        </div>
      </nav>
    </div>
  </Layout.Header>;
};

export default CustomHeader;
