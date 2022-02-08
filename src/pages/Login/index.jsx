import React from 'react';
import CustomLayout from '../../layout';
import { Row, Col, Typography, Form, Input, Button } from 'antd'
const LoginPage = () => {
  return <CustomLayout noHeader noFooter>
    <div className='bg-primary' style={{height: '100vh'}}>
      <div className='container h-100 w-100'>
      <Row className='h-100 w-100'>
        <Col lg={12}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <div style={{ width: '400px'}}>
            <Typography.Title className='text-white text-shadow' >
              Create An Account With Us  <span className='logo-white text-shadow'>Blogi<span>.</span></span>
            </Typography.Title>
            <p>
              Ipsum ea laborum non nulla est proident dolore exercitation proident ea anim velit ullamco reprehenderit.
              Ipsum ea laborum non nulla est proident dolore exercitation proident ea anim velit ullamco reprehenderit.
            </p>
            </div>
          </div>
        </Col>
        <Col lg={12} className="d-flex align-items-center justify-content-center flex-column">
          <h3 className='text-white text-shadow'>Register</h3>
          <div className='account-container p-4 curvy-md'>
            <Form>
              <Form.Item label='Username'>
                <Input placeholder='username' bordered={false}  className='curvy-md'/>
              </Form.Item>
              <Form.Item label='Email'>
                <Input type='email' placeholder='email' bordered={false}  className='curvy-md'/>
              </Form.Item>
              <Form.Item label='Password' className='curvy'>
                <Input.Password type='email' placeholder='password' bordered={false}  />
              </Form.Item>
              <Form.Item label='Re-enter password' className='curvy'>
                <Input.Password type='email' placeholder='re-enter password' bordered={false}  />
              </Form.Item>
              <Button className='tee-btn mt-4 mx-auto'>Register</Button>
            </Form>
          </div>
        </Col>
      </Row>
      </div>
    </div>
  </CustomLayout>;
};

export default LoginPage;
