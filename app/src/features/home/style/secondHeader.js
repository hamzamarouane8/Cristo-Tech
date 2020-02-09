import styled from "styled-components";

export const HeaderStyle = styled.div`

.single-block {
  text-align:center;
  margin-bottom: 50px;
  padding: 0px 25px;
}

.single-block h6 {
  color: rgba(37, 47, 62, 0.5);
  font-size: 18px;
  margin: 30px 0px 20px;
}

.single-block h5 {
  margin: 0 auto;
  width: 70%;
  color: #2d2d43;
  font-size: 20px;
  line-height: 30px;
}

.block-icon {
  height: 121px;
  width: 121px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.08);
  line-height: 119px;
  font-size: 45px;
  margin: 0 auto;
  position: relative;
  text-align: center
}

.single-block img{
  height: 60px;
  width: 60px;
}

/************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {

  padding-bottom: 70px;

  .single-block {
    margin-bottom: 0px;
  }

  .single-block h6 {
    font-size: 18px;
    margin: 30px 0 20px 0;
  }
  
  .single-block h5 {
    font-size: 20px;
    line-height: 30px;
  }
  
}

`

export const ContainerWhatWeDo = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  background: #fff;
  
  h3 {
    font-size: 38px;
    color: #2d2d43;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    line-height: 54px;
    width: 75%;
    margin: 0px auto;
  }
  
  h6 {
    color: rgba(37, 47, 62, 0.8);
    margin: 50px 0px 110px;
    font-size: 20px;
  }

  /************************** RESPONSIVE DESGIN *****************************/

@media (max-width: 475px) {
  margin-top: 40px;

  h3 {
    font-size: 28px;
    line-height: 48px;
    width: 90%;
    font-weight: 300;
    margin: 0px auto;
  }

  h6 {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 80px;
    font-weight: 400;
  }
}
`
