import React from 'react';
import CustomLayout from '../../layout';
import { Row, Col, Typography, Form, Input, Button } from 'antd'
import accountSvg from '../../assets/svgs/account.svg'
const RegistrationPage = () => {
  const [form] = Form.useForm()
  const registrationSubmitForm = async values => {
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
            <Typography.Title className='text-white text-shadow' >
              Create An Account With Us  <span className='logo-white text-shadow'>Blogi<span>.</span></span>
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
          <h3 className='text-white text-shadow'>Register</h3>
          <div className='account-container p-4 curvy-md'>
            <Form form={form} onFinish={registrationSubmitForm}>
              <Form.Item label='Username' required
              name='username'
                rules={[
                  {
                    required: true,
                    message: 'Username is required'
                  },
                  ({getFieldValue}) => ({
                    validator(_, value){
                      if(value.length > 10){
                        return Promise.reject(new Error('username character must not exceed 10'))
                      }
                      return Promise.resolve()
                    }
                  })
                ]}
              >
                <Input placeholder='username' bordered={false}  className='curvy-md'/>
              </Form.Item>
              <Form.Item label='Email' required name='email' rules={[
                {
                  required: true,
                  message: 'Email is required'
                }
              ]}>
                <Input type='email' placeholder='email' bordered={false}  className='curvy-md'/>
              </Form.Item>
              <Form.Item label='Password' name='password' className='curvy' required 
              fee
              rules={[
                {
                  required: true,
                  message: 'Password is required'
                }
              ]}>
                <Input.Password type='email' placeholder='password' bordered={false}  />
              </Form.Item>
              <Form.Item label='Re-enter password' 
              name='confirm-password' className='curvy' required
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Confirm password is required'
                },
                ({getFieldValue}) => ({
                  validator(_, value){
                    if(getFieldValue('password') === value){
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  }
                })
              ]}
              >
                <Input.Password type='email' placeholder='re-enter password' bordered={false}  />
              </Form.Item>
              <Button htmlType='submit' className='tee-btn mt-4 mx-auto'>Register</Button>
            </Form>
          </div>
        </Col>
      </Row>
      </div>
    </div>
  </CustomLayout>;
};

export default RegistrationPage;
