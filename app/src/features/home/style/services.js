import styled from "styled-components";

export const ServicesStyle = styled.div`
position: relative;

.main-container {
  padding-left: 80px;
  margin-left: 25%;
}

.theme-title {
  position: relative;
}

.background img{
  position: absolute;
  left:-20%;
  top:0;
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

.theme-title a{
  font-weight: 600;
  color: #00000a;
  padding-bottom: 2px;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  bottom: 20px;
}

.theme-title a:before {
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out; 
  content: '';
  width: 100%;
  height: 2px;
  background: #00000a;
  position: absolute;
  left:0;
  bottom: 0;
}

.theme-title p {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  margin:35px 0 20px 0;
  display: inline-block;
}

.services {
  margin-top: 30px;
}

.services img {
  width: 60px;
  height: 60px;
}

.services img:hover {
  -webkit-transform:scale(0.9);
  transform:scale(0.9);
}

.services .item-service{
  padding: 0 35px;
  margin-bottom: 90px;
  display: flex;
}

.services .item-service .content-service{
  margin-left: 30px;
}

.services .item-service h5 a{
  color: #00000a;
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 500;
}

.services .item-service p{
  line-height: 30px;
  font-weight: 500;
  line-height: 32px;
  font-size: 16px;
  color:rgba(0,0,0,0.65);
}

/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {

  .background img{
    display: none;
  }

  .main-container {
    padding-left: 0px;
    margin-left: 0px;
  }

  .theme-title h2 {
    font-size: 34px;
    line-height: 50px;
    width: 90%;
  }

  .theme-title p {
    margin:25px 0 20px 0;
  }

  .theme-title a{
    position: relative;
    top: 20px;
  }

  .services {
    margin-top: 120px;
  }

  .services .item-service{
    margin-bottom: 40px;
  }

  .services .item-service p{
    line-height: 30px;
  }
 
}
`
