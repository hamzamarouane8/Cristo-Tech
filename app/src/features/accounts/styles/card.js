import styled from "styled-components";

export const CardStyle = styled.div`
.ui.pointing.dropdown>.menu:after{
width:11px;
height:11px;
top:-0.33em;
}
.ui.pointing.active.dropdown .menu{
z-index: 5;
margin-left: -114px!important;
    padding: 8px 10px!important;
    
   
}
.ui.dropdown .menu > .item{
font-size:12px;
padding-left:4px!important;
padding-top:8px!important;:
padding-bottom:4px!important;
color:#6D6D80;
&:hover, &:active, &:focus{
color:#010035;
        font-weight:700;
        background:none!important;
      }
}
.slick-initialized .slick-slide{
z-index: 1;
height:200px;
}

.slick-initialized button{
visibility:visible;
}
.ui.icon.button, .ui.icon.buttons .button{
background:#fff;

}

.account-ui {
    border: ${props => props.active ? '1px solid #010035': 'none'};
    box-shadow: ${props => props.active ? '0 10px 20px 0 rgba(153, 165, 185, 0.2)': '0 2px 20px rgba(0, 0, 0, 0.025)'};
    z-index: -1;
    background: #FFF;
    padding: 20px;
    margin-bottom: 20px;
    margin-right:10px;
    height:160px;
    border-radius: 6px;
=    .card-title{
        color:#010035;
        font-size:18px;
        margin-bottom:5px;
    }
    .icon{
        float:right;
        img,svg{
          width:20px;
          height:20px;
        }
    }
    .description{
        margin-top:30px;
        .card-balance{
          font-size:20px;
          font-weight: 700;
          color:#010035
        }
        .card-income{
          font-weight: 600;
          float:right;
          color:#f5930d;
          font-size:12px;
        }
    }
    .card-title.sub{
        font-size:12px;
        color:#6d6d80;
    } 
}

@media (max-width: 768px) {
  .account-ui {
    padding: 10px;
    margin-bottom: 20px;
    margin-right:10px;
    height:140px;
    border-radius: 6px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
    .card-title{
      font-size:13px;
      font-weight:600;
      margin-bottom:5px;
    }
    .icon{
      float:right;
      img,svg{
        width:20px;
        height:20px;
      } 
    }
    .description{
      margin-top:10px;
      .card-balance{
        font-size:19px;
        font-weight: 800;
      }
      .card-income{
        font-weight: 600;
        font-size:12px;
      }
    }
    .card-title.sub{
      font-size:11px;
    } 
  }
}

@media (max-width: 425px) {
  .account-ui {
    padding: 10px;
    margin-bottom: 20px;
    margin-right:10px;
    height:120px;
    .card-title{
      font-size:14px;
      font-weight:600;
      margin-bottom:5px;
    }
    .icon{
      float:right;
      img,svg{
        width:20px;
        height:20px;
      } 
    }
    .description{
      margin-top:10px;
      .card-balance{
        font-size:12px;
      }
      .card-income{
        font-size:10px;
      }
    }
    .card-title.sub{
      font-size:12px;
    } 
  }
}
`
