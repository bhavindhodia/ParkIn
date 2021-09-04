import React from 'react'
import { Layout, Menu,  Button } from 'antd';
import {
    FormOutlined,
    PieChartOutlined,
    CarOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Link,useHistory,Route,Redirect } from 'react-router-dom';
import UDashboard from './UDashboard'
import { UserProfile, Vehicle } from '../components';
function UserDashboard() {
    
    const [collapsed,setCollapsed] = React.useState(false)
    const history= useHistory()
    const { Header, Content, Footer, Sider } = Layout;

    const logout=()=>{
        localStorage.removeItem("access_token")
        localStorage.removeItem("user")
        history.push('/login')
    }


    const onCollapse=collapsed=>{
        setCollapsed(collapsed)
    }

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                            <Link to='/userDashboard'/>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            Profile
                            <Link to='/profile'/>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CarOutlined />}>
                            Vehicle
                            <Link to='/vehicle'/>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FormOutlined />}>
                            Booking
                            <Link to='/booking'/>
                        </Menu.Item>
                       
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <Link to="/">
                            <Button type="dashed" style={{ float: 'left', margin: '1rem' }} >Homepage</Button>
                        </Link>

                        <Button type="ghost" onClick={logout} style={{ float: 'right', margin: '1rem' }} >Logout</Button>

                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route exact path="/userDashboard" component={UDashboard} />
                        <Route path="/profile" component={UserProfile} />
                        <Route path="/vehicle" component={Vehicle} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Smart Car Parking System</Footer>
                </Layout>
            </Layout>
        </Router>
    )
}

export default UserDashboard
