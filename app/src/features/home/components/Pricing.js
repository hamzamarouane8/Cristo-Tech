import React from 'react';
import {PricingStyle,CardStyle} from '../style/pricing.js'
import {Col, Row,Container} from "reactstrap";
import { Button } from 'semantic-ui-react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default()=>{

  const _settings = {
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const[active , setActive] = React.useState(true);

  const handleAClick=({name})=>{
      setActive(name ==='monthly' ? true:false);
  }

  let listPackages = [
    {color:"#d3c4bd",title:"Pack Silver",price:5000,text:"lorem text example lorem",discount:"40% OFF", desciption:[{text:"24 hour support"},{text:"Business & financ Analysing"},{text:"Customer Management"},{text:"Graphic Design"}]},
    {color:"#ff6f61",title:"Pack Golden",price:7000,text:"lorem text example lorem",discount:"40% OFF", desciption:[{text:"24 hour support"},{text:"Business & financ Analysing"},{text:"Customer Management"},{text:"Graphic Design"}]},
    {color:"#d3c4bd",title:"Pack Golden",price:7000,text:"lorem text example lorem",discount:"40% OFF", desciption:[{text:"24 hour support"},{text:"Business & financ Analysing"},{text:"Customer Management"},{text:"Graphic Design"}]},
  ]
  return(
  <PricingStyle>
    <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="theme-title">
          <h6>Our pricing</h6>
          <h2>Not any hidden charge, Choose you pricing plan</h2>
          <p>We have differe type of pricing table to choose with your need with resonable price. </p>
        </div>
      </div>
    </div>
    <div className="row">
        <div className="col-12 d-none d-lg-block" >
          <div className="packages">
            {(listPackages || []).map(card=> 
          <PackageItem card={card} /> )}
          </div>
        </div>
        <div className="d-sm-none col-sm-12" >
        <Slider {..._settings}>
                      {(listPackages || []).map((card, index) => (
                        <PackageItem key={index}
                                    card={card}
                        />
                      ))}
                    </Slider>
      </div>
    </div>
    </div>
  </PricingStyle>);
}

const PackageItem = ({card}) => {
  return (
    <CardStyle color={card.color}>
<div class="card">
      <div class="card__side card__side--front card__side--front-1">
        <div class="card__description price">
          <h3>{card.title}</h3>
          <span>{card.price}<sup>MAD</sup></span>
          <h6>Business</h6>
        </div>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__description info">
          <h6>{card.discount}</h6>
          <h4>{card.title}</h4>
          <ul>
            {card.desciption && (card.desciption || []).map(item=>(
            <li>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </CardStyle>
    
  );
}
