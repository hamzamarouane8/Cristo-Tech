import styled from "styled-components";

export const LayoutGuestStyle = styled.div`
.layout-main {  
  margin-left: 260px;
  width: 80%;
  margin-top: 30px;
}
.sg-logout{
  img{
    width:20px;
  }
}
.sg-navItem{
  text-transform: uppercase;
  font-size:14px;
}
.navbar-start{
  margin-left:80px;
}

.nav-item{
  margin-left:20px;
  .sg-notification{
    img{
      margin-right:6px;
      width:16px; 
    }
  }
  .sg-logout{
    img{
      width:16px;
    }
  }
}
@keyframes go-left-right{
  from{
  opacity:0;
  transform:translateX(-200px);
  }
  to{
  opacity:1;
    transform:translateX(0);
  }
}
@media (max-width: 768px) {
  .navbar-brand{
        animation : go-left-right .4s;
  } 
  .layout-main {  
    margin-left: 20px;
    width: 90%;
    margin-top: 30px;
  }
}
@media (max-width: 425px) {
  .layout-main {  
    margin-left: 20px;
    width: 90%;
    margin-top: 30px;
  }
  .navbar-collapse{
    flex-basis:0!important;
  }
  .navbar-nav{
    width: 50px;
  }
}

`
