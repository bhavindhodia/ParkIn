import React from 'react'
import {Menu,Layout } from 'antd'
import {Logo} from '../atoms'
import { Link } from 'react-router-dom'
import isAuthenticated from '../utils/isAuthenticated'
import getAuthenticatedUser from '../utils/getUser'
function Navbar() {
 
  const user = getAuthenticatedUser()
  const userState = isAuthenticated() ? 'Welcome, '+ user?.name : "Login"
    return (
      <Layout.Header style={{margin:0,padding:0}} >
        <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key='0' style={{float:'left'}}><Logo size={22} /></Menu.Item>
            <Menu.Item key="1" style={{float:'left'}}>Home</Menu.Item>
            <Menu.Item key="2" style={{float:'left'}}>About</Menu.Item>
            <Menu.Item key="3" style={{float:'left'}}>Contact Us</Menu.Item>
              <Menu.Item key="4" style={{ float: 'right' }}>
            <Link to="/login" >
              {userState }
            </Link>
              </Menu.Item>
        </Menu>
      </Layout.Header>
   
    )
}

export default Navbar
