import React from 'react';
import {ResumeStyle} from '../style/resume';
import Button from '@ctkit/button';
import {Col, Row} from "reactstrap";

let assets = {
  sign: require('../../../assets/img/home/sign.png'),
  background: require('../../../assets/img/home/background_1.png'),
  arrow : require('../../../assets/img/home/icons/next.svg')
}
export default ({}) => {
  return (
  <ResumeStyle>
    <div className="image-box fadeInLeft">
        <img src={assets.background} alt="" />
    </div>
    <div className="container">
      <div className="row">
          <Col md={{ size: 6, offset: 6 }} className="main-content">
            <h2>We’r a dynamic team of creatives people innovation &amp; Marketing Expert.</h2>
            <div className="main-wrapper">
              <h4>Best Digital Agency in Asia</h4>
              <p>
                We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.
              </p>
              <img src={assets.sign} alt="" />
              <div className="button-wrapper">
                <span>Learn More</span>
                <a>more about us <img src={assets.arrow} alt="" /></a>
              </div>
            </div>
          </Col>
        </div>
    </div>
  </ResumeStyle>)
}
