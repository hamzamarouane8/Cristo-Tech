import React, {useState} from 'react';
import Slider from "react-slick";
import {Row, Col} from '@ctkit/layout';
import Button from '@ctkit/button'
import Skeleton from '@ctkit/skeleton'
import {styled} from '@ctkit/theme'
import isEmpty from 'lodash.isempty'

const Loader = () => (
  <Skeleton height={180}>
    <rect x="272" y="22" rx="0" ry="0" width="105" height="99" radius={2}/>
    <rect x="103" y="33" rx="0" ry="0" width="1" height="15"/>

    <rect x="27" y="34" rx="0" ry="0" width="108" height="12"/>


    <rect x="27" y="60" rx="0" ry="0" width="182" height="3"/>
    <rect x="27" y="70" rx="0" ry="0" width="132" height="3"/>
    <rect x="27" y="80" rx="0" ry="0" width="132" height="3"/>

    <rect x="27" y="100" rx="0" ry="0" width="40" height="12"/>
  </Skeleton>
)

export default ({loading, messages}) => {

  if (!messages || isEmpty(messages)) return null
  if (loading) return <Loader />

  const [activeIndex, setActiveIndex] = useState(0)

  const activeMessage = messages[activeIndex];

  const _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (index) => setActiveIndex(index)
  };

  return (
    <Row>
      <Col md={5}>
        <MessageTitle className="ui-title">
          {activeMessage.title}
        </MessageTitle>
        <MessageContent className="ui-description">
          {activeMessage.description}
        </MessageContent>
        <div className="ui-action">
          <Button ghost>{activeMessage.action}</Button>
        </div>
      </Col>
      <Col md={6} offset={1}>
        <div>
          <Slider {..._settings}>
            {messages.map((item, index) => (
              <SliderItem key={index}>
                <SliderItemImg src={item.img} alt={""}/>
              </SliderItem>
            ))
            }
          </Slider>
        </div>
      </Col>
    </Row>
  )
}

const MessageTitle = styled.div`
  font-weight: 600;
  line-height: 1.2;
  margin-top: 40px;
  height: 130px;
  overflow: hidden;
`

const MessageContent = styled.p`
  height: 120px;
  line-height: 1.6;
  text-align: justify;
  overflow: hidden;
`

const SliderItem = styled.div`
  height: 370px;
  overflow: hidden;
  padding: 5px
`

const SliderItemImg = styled.img`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`
