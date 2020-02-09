import styled from "styled-components";

export const CounterStyle = styled.div`
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.07);
padding: 130px 0px 50px;
    
.single-box {
  text-align:center;
}

.single-box h2 span{
  font-size: 50px !important;
}

.single-box h2{
  font-size: 50px !important;
}

.single-box p {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  color: #aeaeae;
  margin: 5px 0px 40px;
}

/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {
  padding: 220px 0px 50px;

  .single-box p {
    font-size: 18px;
    margin: 5px 0px 40px;
  }
}

`
