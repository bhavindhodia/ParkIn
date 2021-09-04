import React from 'react'
import {Row,Col,Typography} from 'antd'
import Wallet from '../assets/imgs/wallet.svg'
import Hourglass from '../assets/imgs/hourglass.svg'
import Thumbsup from '../assets/imgs/thumbsup.svg'
function SimpleCard({ icon, title, description}) {
    const {Title,Text} = Typography
    console.log(require(`../assets/imgs/wallet.svg`));
    return (
        <Row className="simpleCard">
            <Col xs={4}>
            <img 
            src={require(`../assets/imgs/${icon.toLowerCase()}.svg`).default}
            height={50} width={50}  
            className="simpleCard-img"
            alt="error"/>
            </Col>
            <Col xs={20}>
            <div className="simpleCard-content">
                <Title level={3}>
                    {title}
                </Title>
                <Text>
                    {description}
                </Text>
            </div>
            </Col>
        </Row>
    )
}

export default SimpleCard
