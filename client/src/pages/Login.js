import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { Form, Input, Button, Checkbox,Row,Col, notification } from 'antd';
import LoginImg from '../assets/imgs/loginImg.jpg'
import isAuthenticated from '../utils/isAuthenticated'
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom';

function Login() {

    const [userToken,setUserToken] = useState()
const history =useHistory()

    React.useEffect(() =>{
     
        setUserToken(isAuthenticated())
    },[])

    const openNotification = (type,msg) => {
  notification[type]({
    message: 'Error',
    description:
      msg,
  });
};

    const onFinish =async(values) => {
        try {
            const res = await axios.post('/auth/login', { ...values },{credentials:"include"})
            console.log("res", res)
           localStorage.setItem("access_token",res.data.tokens.access.token)
           //localStorage.setItem("refresh_token",res.data.tokens.refresh.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            history.push('/userDashboard')
        } catch (error) {
            console.log("err", error.response.data.message);
            openNotification('error', error.response.data.message)
        }
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div  >
            {
                userToken !=null ?
                <Redirect to='/userDashboard'/>
                :
            <>
            <Navbar/>
            <Row style={{ height: '100vh' }} >
               <Col md={24} lg={8} >
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{display:"flex" ,height:'100%',marginTop:"-2rem" ,flexDirection:'column',justifyContent:"center",alignItems:'center'}}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
 */}
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                       
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                    
                        </Form.Item>
                    </Form>
               </Col>
                <Col md={24} lg={16} >
               <img src={LoginImg} width="100%" height="100%"  alt="error"/>
               </Col>
           </Row>
           </>
}
        </div>
    )
}

export default Login
