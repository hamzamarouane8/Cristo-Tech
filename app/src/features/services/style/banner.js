import styled from "styled-components";

export const BannerStyle = styled.div`
background: url(${props=> props.background}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  margin-bottom: 190px;

  .opacity {
    text-align: center;
    background: rgba(0,0,10,0.55);
    padding: 305px 0 210px 0;
  }

  .opacity h1 {
    color: #fff;
    text-transform: capitalize;
    font-family: Museo;
    font-size: 60px;
    font-weight: 700;
  }

  .opacity ul li {
    display: inline-block;
    font-weight: 500;
    font-size: 18px;
    margin: 40px 2px 0 2px;
    text-transform: uppercase;
    color: #929292;
    letter-spacing: 1.1px;
  }
  .opacity ul li a {color: #fff;}
`