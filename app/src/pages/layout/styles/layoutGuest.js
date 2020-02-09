import styled from "styled-components";


export const LayoutGuestStyle = styled.div`
font-family: Museo;

.ui.brand img{
  width:120px;
  height:40px!important;
}

 .navbar-light .navbar-toggler{
  border-color:none!important;
 }

.nav-link .sg-login{
  opacity:1!important;
  margin-left:20px;
  padding-left:25px!important;
  padding-right:25px!important;
  padding-bottom:10px;
  padding-top:10px;
  background:#e9041e;
  margin-right:6px;
  border-radius:4px;
  font-size:10px;
  text-transform: uppercase;
  color:#fff!important;
}

.sg-subscribe{
  text-transform: uppercase;
  padding-left:25px!important;
  padding-right:25px!important;
  padding-bottom:10px;
  padding-top:10px;
  border-radius: 4px;
  box-shadow: 0 10px 30px 0 rgba(109, 109, 128, 0.2);
  border: solid 1px #000000;
  font-size:10px;
  color:#000!important;
}

.nav-item .nav-link.active{
  color:#ff6f61!important;
  font-weight: bold;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: center;
  opacity:1;
}

.nav-item .nav-link{
  opacity: 0.30;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #483f3a;
}

.footer{
  width: 100%;
  background: #000;
  color: #fff;
  text-align:center;
  padding: 20px 0;
}

@media (max-width: 768px) {
  .sg-action{
  width:90%;
  background:#e9041e;
  margin-right:6px;
  border-radius:5px;
  font-size:10px;
  text-transform: uppercase;
  color:#fff!important;
}
.sg-navItem{
  text-transform: uppercase;
  font-size:14px;
}
.navbar-start{
  margin-left:80px;
}
.nav-item .nav-link.active{
  color:#010035!important;
  font-weight: bold;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: center;
  opacity:1;
}
.nav-item .nav-link{
  opacity: 0.30;
  font-weight: bold;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: center;
  color: #010035;
}
}
@media (max-width: 425px) {
 
 
}
`
