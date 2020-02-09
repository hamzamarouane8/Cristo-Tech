import styled from "styled-components";
import { keyFrameExampleOne } from './keyFrames';

export const SliderStyle = styled.div`
.banner-one {
    height: 700px;
    background: url(${props =>props.src}) no-repeat center center;
}

.camera_caption {
    position: relative;
    height: 100%;
    padding-top: 60px;
}

.fadeInDown {
  animation-name: ${keyFrameExampleOne};
  -webkit-animation: ${keyFrameExampleOne} 2s; 
     -moz-animation: ${keyFrameExampleOne} 2s;
        -ms-animation: ${keyFrameExampleOne} 2s;
         -o-animation: ${keyFrameExampleOne} 2s; 
            animation: ${keyFrameExampleOne} 2s;
}


.banner-one h5 {
  font-size: 22px;
  font-weight: normal;
  color: rgba(0,0,0,0.4);
}

h1 {
  text-transform: capitalize;
  line-height: 78px;
  margin:25px 0 55px 0;
  font-size:70px;
  color: #483f3a;
}

.banner-one h1 span {position: relative;z-index: 9;}

.banner-one h1 span:before {
  content: '';
  width: 97%;
  height: 7px;
  position: absolute;
  background: #f9a198;
  border-radius: 2.5px;
  left:3px;
  bottom: 17px;
  z-index: -1;
}
.banner-img-one {
  -webkit-clip-path: url(#shape-one);
          clip-path: url(#shape-one);
}

.banner-one .image-shape-one {
  display: inline-block;
  position: absolute;
  right: -96px;
  top: 6%;
  z-index: 1;
}

.action-wrapper {
  .ui.button {
    padding: 20px 60px;
    background:#ff6f61;
    color: #fff;
    font-size: 20px;
    border-radius: 50px !important;
  }
}

/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {
  .banner-one .image-shape-one {
    display: none;
  }

  h1 {
    text-transform: capitalize;
    line-height: 60px;
    margin:2px 0 15px 0;
    font-size:40px;
    color: #2d2d43;
  }

  .banner-one h1 span:before {
    content: '';
    width: 97%;
    height: 7px;
    position: absolute;
    border-radius: 2.5px;
    left:3px;
    bottom: 6px;
    z-index: -1;
  }

  .action-wrapper {
    .ui.button {
      padding: 14px 40px;
      background:#ff6f61;
      color: #fff;
      font-size: 14px;
      border-radius: 50px !important;
    }
  }

  .banner-one {
    height: 400px;
}
}

`
