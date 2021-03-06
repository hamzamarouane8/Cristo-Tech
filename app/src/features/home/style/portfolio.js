import styled from "styled-components";

export const PortfolioStyle = styled.div`
padding: 180px 0 200px 0;

.theme-title {
  position: relative;
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
  left:20px;
  bottom:0;
  z-index: -1;
}

.container .theme-title:before {
  content:'C';
  font-size: 300px;
  position: absolute;
  top:0;
  color: rgba(9,9,19,0.03);
  left: -20px;
  font-weight: 600;
  line-height: 175px;
}

.theme-title h2 {
  line-height: 55px;
  margin-top: 20px;
  color: #483f3a;
}

.theme-title a{
  position:absolute;
  right:0;
  bottom:0;
  width: 200px;
  line-height: 51px;
  border: 2px solid rgba(0,0,0,0.07);
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  color: #00000a;
}

.theme-title a:hover {-webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;color: #fff;border-style: solid;
  border-color:#00d747;background: #00d747;}

.our-portfolio .wrapper .image {
  position: relative;
  overflow: hidden;
}

.slick-slide img {
  width: 430px !important;
  height: 431px !important;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}

.our-portfolio .wrapper .image:hover .opacity {
  opacity: 1;
  border-radius: 0;
  -webkit-transform:scale(1);
          transform:scale(1);
}

.item-portfolio {
  border: 1px solid #aeaeae;
  object-fit: cover;
  padding: 10px 10px !important;
  width: 300px!important;
  height: 301px;
}

.item-portfolio:hover {
  padding : 0!important;
}

.wrapper {
  padding: 0 35px;
  margin-top: 130px;
}

/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {

  padding: 100px 0 100px 0;

  .theme-title {
    position: relative;
  }

  .theme-title h2 {
    font-size: 34px;
    line-height: 60px;
    width: 90%;
  }

  .theme-title a{
    position:relative;
    padding: 20px 30px;
    top: 30px;
  }

}

`
