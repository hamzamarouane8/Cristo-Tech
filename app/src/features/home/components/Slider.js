import React from 'react';
import{SliderStyle} from '../style/silder';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Row} from "reactstrap";
import Button from '@ctkit/button';

const assets = {
  background: require('../../../assets/img/home/slide-1.jpg'),
  slider1: require('../../../assets/img/home/slider_3.png'),

  slider_1: require('../../../assets/img/home/1.jpg')
}

let listItems = [
  {img: require('../../../assets/img/home/slider_3.png'),},
  {img: require('../../../assets/img/home/slider_4.png'),},
]

export default({})=>{
  const _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return(
    <div>
      <div className="wrapper">
        <Row>
          <Col md="12">
            <Slider {..._settings}>
              {(listItems || []).map((item, index) => (
                <SliderItem key={index}
                            item={item}
                />
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>


    )
}

const SliderItem = ({item}) => {
  return (
    <SliderStyle src={assets.background}>
      <div className="banner-one">
        <div className="camera_caption">
          <div className="container">
            <h5 className="fadeInDown">We're Awsome</h5>
            <h1 className="fadeInDown"><span>Digital Agency</span><br/><span>That Help You to</span><br/><span>Go Ahead</span></h1>
            <div className="action-wrapper">
              <Button >explore</Button>
            </div>
            <div className="wow fadeInRight animated image-shape-one" data-wow-delay="0.33s">
              { item.img && <img src={item.img} alt="slider" />}
            </div>
          </div>

        </div>
      </div>
    </SliderStyle>
  );
}
