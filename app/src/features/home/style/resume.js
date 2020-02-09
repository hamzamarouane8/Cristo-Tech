import styled from "styled-components";

export const ResumeStyle = styled.div`

font-family :Poppins, sans-serif;
display: flex;
flex-direction: row;
background: #fff;
position: relative;

.main-content {
  margin-top: 60px;
}

.image-box img {
    position:absolute;
    top: 10%;
    left:-30%;
}

.main-content h2{
 font-size: 40px;
 font-weight:600;
 color: #483f3a;
 width: 80%;
}

.main-content .main-wrapper {
  padding: 52px 0px 0px 65px;
}

.main-content .main-wrapper h4 {
  font-size: 24px;
  font-weight: 500;
  color: #483f3a;
}

.main-content .main-wrapper h4:before {
  content: "";
    font-family: Flaticon;
    font-size: 40px;
    position: absolute;
    top: -8px;
    left: -65px;
    font-weight: bold;
}

.main-content .main-wrapper p {
    line-height: 35px;
    font-size: 16px;
    margin: 32px 0px 40px;
}

.main-content .main-wrapper .button-wrapper {
    width: 348px;
    position: absolute;
    right: -20%;
    bottom: 0;
    background: #ff6f61;
    padding: 35px 0 40px 65px;
}

.main-content .main-wrapper .button-wrapper span {
  color:#f9a198;
  font-size: 18px;
  font-weight: 500;
}

.main-content .main-wrapper .button-wrapper a {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  display: block;
  margin-top: 2px;
}

.main-content .main-wrapper .button-wrapper a img {
  width: 20px;
  height: 20px;
}

.main-content .main-wrapper .button-wrapper a:hover img{
 transform: translateX(50%);
}

/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {

  .image-box img{
    display: none;
  }
  
  .main-content h2{
    font-size: 34px;
    line-height: 60px;
    width: 80%;
   }

   .main-content .main-wrapper {
    padding: 30px 0px 0px 40px;
   }

   .main-content .main-wrapper h4 {
    font-size: 24px;
    font-weight: 500;
    color: #2d2d43;
  }

  .main-content .main-wrapper img {
    max-width: 100%;
  }

  .main-content .main-wrapper .button-wrapper {
    width: 348px;
    position: absolute;
    left: 10%;
    bottom: -16%;
    background: #ff6f61;
    padding: 20px 0 20px 30px;
  }

  .main-content .main-wrapper .button-wrapper span {
    font-size: 14px;
    font-weight: 400;
  }
  
  .main-content .main-wrapper .button-wrapper a {
    font-size: 14px;
    font-weight: 500;
    margin-top: 2px;
  }
  
  .main-content .main-wrapper .button-wrapper a img {
    width: 20px;
    height: 20px;
  }
  
}

`
