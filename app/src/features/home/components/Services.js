import React from 'react';
import {ServicesStyle} from '../style/services'

let assets = {
  background: require('../../../assets/img/home/shape-2.png')
}

let services=[
  {icon:require('../../../assets/img/home/icons/account.svg'),title:'Business Consulting' , descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'},
  {icon:require('../../../assets/img/home/icons/layers.svg'),title:'Interface Design' , descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'},
  {icon:require('../../../assets/img/home/icons/bar-chart.svg'),title:'SEO &amp; SMM services' , descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'},
  {icon:require('../../../assets/img/home/icons/smartphone.svg'),title:'Apps Development' , descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'},
]
export default({})=>{
  return(
    <ServicesStyle>
      <div className="container">
        <div className="col-md-9 col-md-offset-3 main-container">
          <div className="theme-title">
            <h6>Our Services</h6>
            <h2>We provide wide range of web &amp; <br/>business services.</h2>
            <p>We’ve strong  work history with different business services</p>
            <a href="#" className="tran3s">See All Services</a>
          </div>
          <div className="row services">
            {(services || []).map(service=>(
              <div className="col-md-6 item-service">
                <img src={service.icon} alt="icon" />
                <div className="content-service">
                <h5><a>{service.title}</a></h5>
                <p>{service.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="background" >
      <img src={assets.background} alt="Image" />
      </div>
      </ServicesStyle>
  )
}
