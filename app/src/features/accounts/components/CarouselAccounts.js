import React ,{useState} from "react";
import Slider from "react-slick";
import {CarouselStyle} from '../styles/carousel'
import {Col, Row} from "reactstrap";
import {CardStyle} from '../styles/card'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Loader} from '../../../components/Loader'

export default ({list, activeId, selectedAccount, loading, ...settings}) => {
  if(loading)return <Loader />;
  const [activeItem,setActiveItem]=useState(list[0]);
  const _settings = {
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },{
      breakpoint: 425,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      }
    }],
    ...settings
  };
  return (
    <CarouselStyle>
      <Row>
        <Col>
          <div className="widget-title">
            Mes Comptes
          </div>
          <div className="carousel-content">
            <Slider {..._settings}>
              {list.map((item, index) => (
                <SliderItem key={index}
                      item={item}
                            active={activeItem}
                      onClick={() => {
                        setActiveItem(item)
                        selectedAccount(item)}} />

              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </CarouselStyle>)
}

const  SliderItem = ({className, onClick, item,children,active }) => {
  return (
      <CardStyle active={active.id===item.id?true:false}>
        <div className={'account-ui '+className} onClick={onClick}>
          <Row>
            <Col md={10}>
              <div className="card-title">Compte Chèque</div>
              <div className="card-title sub">{item.accountNumber}</div>
            </Col>
            <Col md={2}>
              {children}
            </Col>
          </Row>
          <Row className="description">
            <Col md={6}>
              <div className="card-balance">{item.realTimeBalance} {item.currency}</div>
            </Col>
            <Col md={6}>
              <div className="card-income">A venir : {item.upcomingBalance} {item.currency}</div>
            </Col>
          </Row>
        </div>
      </CardStyle>
  );
}

