import React from 'react';
import CustomLayout from '../../layout';
import { Row, Col, Typography, Form, Input, Button } from 'antd'
import accountSvg from '../../assets/svgs/account.svg'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const onFinishSignin = async values => {
    const validate = await form.validateFields()
    if(validate){
      console.log(validate)
    }
  }
  return <CustomLayout noHeader noFooter>
    <div className='bg-primary' style={{minHeight: '100vh'}}>
      <div className='container h-100 w-100'>
      <Row className='h-100 w-100'>
        <Col lg={12}>
          <div className=" pt-4 d-flex flex-column align-items-center justify-content-center h-100">
            <div style={{ width: '400px'}}>
            <Typography.Title
            onClick={() => navigate('/')} className='text-white text-shadow' >
              Access you   <span className='logo-white text-shadow hoverable'>Blogi<span>.</span></span>
              account
            </Typography.Title>
          </div>
            <div>
              <img width='70%' src={accountSvg} alt="" />
            </div>
            <p className='py-4'>
              Ipsum ea laborum non nulla est proident dolore exercitation proident ea anim velit ullamco reprehenderit.
              Ipsum ea laborum non nulla est proident dolore exercitation proident ea anim velit ullamco reprehenderit.
            </p>
            </div>
        </Col>
        <Col lg={12} className="d-flex align-items-center justify-content-center flex-column">
          <h3 className='text-white text-shadow'>Sign In</h3>
          <div className='account-container p-4 curvy-md'>
            <Form form={form} onFinish={onFinishSignin}>
              <Form.Item
                label='Username'
                name='username'
                rules={[{
                  required: true,
                  message: 'username is required'
                }]}
              >
                <Input 
                  placeholder='username' 
                  bordered={false}
                />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[{
                  required: true,
                  message: 'password is required'
                }]}
              >
                <Input.Password 
                  placeholder='password' 
                  bordered={false}
                />
              </Form.Item>
              <Button loading={false} htmlType='submit' className='tee-btn mx-auto mt-4'>access</Button>
            </Form>
          </div>
        </Col>
      </Row>
      </div>
    </div>
  </CustomLayout>;
};

export default LoginPage;
