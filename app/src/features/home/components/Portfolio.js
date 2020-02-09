import React from 'react';
import {PortfolioStyle} from '../style/portfolio';
import {CardStyle} from "../../accounts/styles/card";
import {Col, Row} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let listPortfolio = [
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
  {img: require('../../../assets/img/home/Capture.PNG'),},
]

export default ({settings}) => {
  const _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },{
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }],
    ...settings
  };
  return (
    <PortfolioStyle>
      <div className="container">
        <div className="theme-title">
          <h6>Recent work</h6>
          <h2>We’ve done lot’s of work, Let’s <br/>Check some from here</h2>
          <a href="#">See All projects</a>
        </div>
      </div>
      <div className="wrapper">
        <Row>
          <Col md="12">
            <Slider {..._settings}>
              {(listPortfolio || []).map((item, index) => (
                <SliderItem key={index}
                            item={item}
                />
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </PortfolioStyle>
  )
}

const SliderItem = ({item}) => {
  return (
    <div className="item-portfolio">
        <img src={item.img} alt="" />
    </div>
  );
}
