import { Card, Col, Row, Tag, Typography } from 'antd';
import React from 'react';
import CustomLayout from '../../layout';
import twilightImage from '../../assets/images/twilight.jpg'
import snowImage from '../../assets/images/snow.jpg'
const Homepage = () => {
  return <CustomLayout>
   <div className='container'>
     <Row  gutter={[16, 16]}>
        {/** Left side Col */}
       <Col md={24} lg={16}>
         <div className='hero-block hero-section'>
           <div className='image-container overlap-img shadow curvy'>
             <img src={twilightImage} alt="" />
           </div>
            <div className='position-absolute bottom-0  p-4 text-white ' style={{zIndex: '3',}}>
              <Tag color='orange'>Lifestyle</Tag>
              <Typography.Title level={1} className='text-white m-0'>5 Easy ways you can turn future into success</Typography.Title>
              <small>John Doe . 31 February 2022</small>
            </div>
         </div>
         {/** Editors pick */}
         <div className='editor-pick-section'>
           <div className='heading'>
             <h4>Editor's Pick</h4>
           </div>
           <Card className='curvy-sm'>
             <Row gutter={[16, 16]}>
               <Col lg={12}>
                 <div style={{ 
                   height: '250px'
                 }}>
                  <div className="image-container curvy">
                    <img src={snowImage} alt="" />
                  </div>

                 </div>
                 <div className='placeholder mt-3'></div>
               </Col>
               <Col lg={12}>
                 <div className='placeholder'></div>

               </Col>
             </Row>
           </Card>
         </div>
       </Col>
       {/** Right side Col */}
       <Col md={24} lg={8}>
        <div className='placeholder'></div>
       </Col>
     </Row>
   </div>
  </CustomLayout>;
};

export default Homepage;
