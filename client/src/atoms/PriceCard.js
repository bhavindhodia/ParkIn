import React from 'react'
import {Button, Typography} from 'antd'
function PriceCard({price,subtext,name,info}) {
    return (
        <div className='price-card-box' >
            <div >
                <span className="sup-price" >Rs</span>
                <span className="price" >{price}</span>
                <span className="sub-price" >/{subtext}</span>
            </div>
            <Typography.Title >{name}</Typography.Title>
            <Typography.Text>{info}</Typography.Text>
            <br/>
            <Button style={{marginTop:'1.5rem'}} type="primary" >Book Now</Button>
        </div>
    )
}

export default PriceCard
