import React from 'react'
import {Layout,Row,Col,Typography,Radio,TimePicker,DatePicker,Button} from 'antd'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import CarParking from '../assets/imgs/carParking.svg'
import './page.style.less'
import { FooterPage, PriceCard, SimpleCard } from '../atoms';
import { homepageIntro, priceCardInfo } from '../data/content';

const {  Footer,  Content } = Layout;
const {Title,Text} = Typography
const dateFormat = 'YYYY/MM/DD';
const timeFormat = 'YYYY/MM/DD HH:mm';
function Homepage() {
    return (
        <Layout>

            <Navbar/>
            <Content>
               <div className="homepage-header" >
                    <Row>
                        <Col lg={{ span: '12', order: '2' }}  >
                            <img src={CarParking} height="auto" width="90%" alt="Car Parking Img" />
                        </Col>
                        <Col lg={{ span: '12', order: '1' }}  >
                           <div className="header-text">
                                <Title level={2} style={{color:"#fff"}} >
                                    Find amazing parking space near you
                                </Title>
                                <Text style={{textAlign:'center',color:"#fff"}} >
                                    Short stay and smart parking options are just few minutes away from terminal.
                                    We have best deals for parking lots. Instantly book your deal today !!
                                </Text>
                           </div>
                        </Col>
                    </Row>
                </div>  
            
                <Row className="booking-container" style={{ margin: '0 auto', marginTop: '-3.5rem' }} gutter={[12, 12]} >
                    <Col xs={24} lg={8} className='gutter-row' span={8}  >
                        <Radio.Group defaultValue="daily" size="large"
                           // onChange={setBookingType}
                            style={{ width: "100%" }}
                            name="bokingType"
                            buttonStyle="solid">
                            <Radio.Button value="daily" >Daily</Radio.Button>
                            <Radio.Button value="monthly" >Monthly</Radio.Button>
                        </Radio.Group>
                    </Col>

                    <Col xs={24} lg={8} className='gutter-row' span={8}  >
                        SPACE
                        {/* {state.bookingType === "monthly" ?
                            <DatePicker.RangePicker
                                size="large"
                                onChange={onTimeHandler}
                                format={dateFormat}
                            />
                            :
                            <TimePicker.RangePicker
                                size="large"
                                onChange={onTimeHandler}
                                format={timeFormat}
                            />} */}
                    </Col>
                    <Col xs={24} lg={8} className='gutter-row' span={8}  >
                        <Link to="/userDashboard/bookTab/">
                            <Button type="primary" size="large" style={{ width: "100%" }}>
                                Book Now
                            </Button>
                        </Link>
                    </Col>
                </Row>

            <div style={{ width: "80%", margin: "3rem auto" }} >
                <Title style={{ textAlign: 'center' }} > Parking Made Easy </Title>
                <Row gutter={[12, 24]} justify="center" >
                    {homepageIntro.map((item,key)=>(
                        < Col key={key} style={{ display: 'flex' }} xs={24} lg={8} className="row-gutter" >
                            <SimpleCard
                            icon={item.icon}
                            title={item.title}
                                description={item.description}
                            />
                        </Col>
                    ))
                }
                </Row>
            </div>

            <div className="parking-charges-container" >
                <Title style={{textAlign:'center' , color:'#fff'}} >Parking Options and Rates</Title>
                <Row gutter={[24,24]} justify="center" >
                    {
                        priceCardInfo.map((item, key) => (
                            < Col key={key} 
                        
                            style={{ display: 'flex' }} xs={24} lg={6} 
                            className="row-gutter" >
                            <PriceCard  
                            price={item.price}
                            name={item.name}
                            info = {item.info}
                            subtext={item.subtext}                        
                            />
                            </Col>
                        ))
                    }
                </Row>
            </div>


    <Row className="banner">
                   <Col xs={24} lg={18}>
                        <Title>
                            Save some money by pre-booking online
                        </Title>
                    </Col> 
                    <Col xs={24} lg={6}>
                        <Button size="large" type="primary" >
                            Pick your parking date
                        </Button>
                    </Col>
    </Row>
    </Content>
          
           <FooterPage/>
    
        </Layout>
    )
}

export default Homepage
