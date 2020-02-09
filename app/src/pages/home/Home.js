import React, {useEffect, useState} from 'react';
import {Divider} from "@ctkit/layout";
import {Carousel1} from '@ctkit/w-carousel'
import {Footer1} from '@ctkit/w-footer'
import {Features1} from '@ctkit/w-features'
import {styled} from '@ctkit/theme';
import get from 'lodash.get'
import {Helmet} from 'react-helmet';
import {Slider,SecondHeader,Resume, Counter, Portfolio, Services, Testimonial, Pricing} from '../../features/home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default ({contentService}) => {

  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(null)

  useEffect(() => {

    setLoading(true)
   /* contentService.loadBaseContent().then((data) => {
      setContent(data)
      setLoading(false)
    })*/

  }, []);

  return (
    <>
      <div className="Container">

        <Slider />

        <SecondHeader />

        <Resume />

        <Counter />

        <Portfolio />

        <Services />

        <Testimonial />

        <Pricing />

      </div>
    </>
  )

}

const FeatureContainer = styled.div`
.ui-title{
  text-transform:uppercase;
  width: 40%;
	color: #010035;
	font-weight: 800;
	font-size: 24px;
	margin: 0 auto;
	text-align: center;
	line-height: 1.2;
	margin-top:40px;
}
.ui-sub-title {
	margin-top: 20px;
	color: #474752;
	text-align: center;
}
.item-iiimg{
img{
	width: 80px;
	height: 80px;
	margin-left: auto;
	margin-right: auto;
	display: block;
	}
}
.item-title{
  width:80%;
  margin: 0 auto;
	margin-top: 20px;
	color: #010035;
	font-size: 18px;
	text-align:center;
	font-weight: 800;
	margin-bottom: 20px;
}

.item-desc{
	color: #6D6D80;
	text-align: center;
	margin: 0 auto;
	width: 80%;
	font-size: 13px;
}
.ui-action{
  .ui.button{
    text-transform:uppercase;
    padding: 14px 40px;
    margin-left: auto;
    margin-right: auto;
    background: #E9041E;
    color: #fff;
    font-size: 12px;
    border-radius: 4px!important;
  }
}
`

const DividerRed = styled(Divider)`
  margin: 0 auto!important;
  width: 80px!important;
  height: 6px!important;
  background: #E84E61!important;
  border-radius: 6px!important;
  margin-top: 20px!important;
  margin-bottom:20px!important;
`


const CarouselContainer = styled.div`
.ui-title{
  font-size:26px;
  font-weight:700;
  margin-top:40px;
  line-height: 1.5;
  text-transform:uppercase;
  width:94%;
}
.ui-description{
}
.ui-action{
  .ui.button{
    padding: 15px 40px;
    margin-bottom:30px;
    display: block;
    margin-left: 0;
    background: #E9041E;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
  }
}
`
