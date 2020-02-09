import styled from "styled-components";

import { FadeInLeft ,keyFrameExampleOne } from './keyFrames';

export const TestimonialStyle = styled.div`
padding: 130px 0 150px 0;
position: relative;
z-index: 9;

.theme-title {
  position: relative;
  margin-bottom: 60px;
}

.theme-title h6{
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  color: #483f3a;
  z-index: 1;
}

.theme-title h6:before{
  content:'';
  width: 100%;
  height:5px;
  position:absolute;
  background:#f9a198;
  border-radius: 2.5px;
  left:0;
  bottom:0;
  z-index: -1;
}

.theme-title h2 {
  line-height: 55px;
  margin-top: 20px;
  color: #483f3a;
}

.item-testimonial {
  position: relative;
}

.item-testimonial .quote-icon {
  width: 50px;
  height:50px;
  position: absolute;
  top:9px;
  left:0px;
}

.item-testimonial .wrapper {
  padding-left: 80px;
}

.item-testimonial .wrapper p {
  font-size: 18px;
  line-height: 42px;
  position: relative;
  margin-bottom: 55px;
  font-family: 'Poppins', sans-serif;
  color: rgba(0,0,0,0.65);
}

.image-box {
  position: absolute;
  top:130px;
  left:-20%;
  z-index: 1;
}

.testimonial-slider {
  padding-left: 80px;
}

.fadeInLeft {
  animation-name: ${keyFrameExampleOne} 2s;
  -webkit-animation: ${keyFrameExampleOne} 2s; 
     -moz-animation: ${keyFrameExampleOne} 2s;
        -ms-animation: ${keyFrameExampleOne} 2s;
         -o-animation: ${keyFrameExampleOne} 2s; 
            animation: ${keyFrameExampleOne} 2s;
}


/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {

  padding: 130px 0 10px 0;

  .image-box{
    display: none;
  }

  .item-testimonial .quote-icon {
    width: 35px;
    height:35px;
  }

  .item-testimonial .wrapper {
    padding-left: 50px;
  }
}
`
