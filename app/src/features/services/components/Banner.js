import React from 'react';
import {BannerStyle} from '../style/banner';

const assets = {
    background : require('../../../assets/img/services/background.jpeg')
}

export default()=>{
    return(
        <BannerStyle background={assets.background}>
            <div className="opacity">
                <h1>Our Services</h1>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li>/</li>
                    <li>Services</li>
                </ul>
            </div>
        </BannerStyle>
    )
}