import React from 'react'
import './atom.style.less'

function Logo({size}) {
    return (
        <div className="logo">
            <h3 style={{ fontSize: size }}>
                <span className="logo-start" >Park</span>
                <span className="logo-end">In</span> 
            </h3>
        </div>
    )
}

export default Logo
