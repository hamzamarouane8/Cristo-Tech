import styled from "styled-components";

export const SidebarStyle = styled.div`

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


.layout-sidebar {
    animation : go-left-right .4s;
    display:inline;
    background: #fff;
    ul li  {
      position: relative;
      margin-bottom: 38px;
      .img {
        width: 43px;
        height: 43px;
        display: inline;
        padding-top: 8px;
        margin-bottom: 2px;
            span {
                margin-left:10px;
                font-size: 13px;
                color: #8e8e8e;
                font-weight: 600;
            }
        img,svg {
          width: 25px;
          height: 25px;
                    fill: #8e8e8e;

        }        
      }
       
      .active .img {   
        span{
            font-size:16px;   
            color: #e9041e;
        } 
        svg {
          fill: #e9041e;
        }
      }
    }
    padding: 90px 14px ;
    text-align: left;
    position: fixed;
    top: 0px;
    left: 0;
    width: 240px;
    bottom: 0;
  }
`
