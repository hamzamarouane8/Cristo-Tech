import React from 'react';
import {TestimonialStyle} from '../style/testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Row} from "reactstrap";

let assets= {
  background: require('../../../assets/img/home/slider_2.png'),
  quote: require('../../../assets/img/home/icons/quote-left.svg')
}

let listTestimonials = [
  {img:require('../../../assets/img/home/profile4.jpg'),author:'Zubayer Hasan',text:'Their testimonial videos aren\'t production quality, but they get the message across, cover useful & relevant information which goes to show you don\'t need to invest thousands in production get some testimonial videos up with quality.'},
  {img:require('../../../assets/img/home/profile4.jpg'),author:'jhon smith',text:'Their testimonial videos aren\'t production quality, but they get the message across, cover useful & relevant information which goes to show you don\'t need to invest thousands in production get some testimonial videos up with quality.'},

]

export default ({settings}) => {
  const _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
    <TestimonialStyle>
      <div className="image-box fadeInLeft">
        <img src={assets.background} alt="" />
      </div>
      <div className="container">
        <Col md={{ size: 6, offset: 6 }} className="testimonial-main">
          <div className="theme-title">
            <h6>Testimonials</h6>
            <h2>Check what’s our client <br/>Say about us</h2>
          </div>
          <Row>
            <Col md="12">
              <Slider {..._settings}>
                {(listTestimonials || []).map((testimonial, index) => (
                  <SliderItem key={index}
                              item={testimonial}
                  />
                ))}
              </Slider>
            </Col>
          </Row>
        </Col>
      </div>
    </TestimonialStyle>
  )
}

const SliderItem = ({item}) => {
  return (
    <div className="item-testimonial">
      <img src={assets.quote} alt="quote" className="quote-icon" />
      <div className="wrapper">
        <p>{item.text}</p>
        <div className="name clearfix">
          <img src={item.img} alt="" />
          <h5>{item.author}</h5>
          <span></span>
        </div>
      </div>
    </div>
  );
}
