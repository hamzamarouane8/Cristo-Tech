import React, {useState} from 'react';
import Button from '../test/react/button/src'
import {Divider} from 'semantic-ui-react'
import {Col, Row} from '@ryokit/layout'
import {IcCar, IcDirectionWalk} from '../test/react/icons/src';
import styled from 'styled-components';

const assets = {
  logo: require('../assets/img/Logo-société-generale.png'),

}

export default ({marker}) => {
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    <>
      <div className="modal-wrapper">
        <EllipseLogo>
          <div style={{zIndex: 1, padding: '18px', width: '60px', height: '60px'}}>
            <img src={assets.logo} alt=""/>
          </div>
        </EllipseLogo>
        <Container-fluid>
          <Row className="ui-header" style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}}>
            <Col>
              {marker.name}
              <span>{marker.description}</span>
            </Col>
          </Row>
          <Row style={{marginBottom: '14px'}}>
            <Col md={6}>
              <ButtonItinerary active={activeFilter} icon={<IcDirectionWalk/>} onClick={() => {
                setActiveFilter(true)
              }}>90km</ButtonItinerary>
            </Col>
            <Col md={6}>
              <ButtonItinerary active={!activeFilter}
                               icon={<IcCar/>} onClick={() => {
                setActiveFilter(false)
              }}>100km</ButtonItinerary>
            </Col>
          </Row>
          <Divider fitted/>
          <Row style={{marginTop: '1px', padding: '0', textAlign: 'center'}}>
            <Col md={6}>
              Lundi au vendredi
              <span>08:30 - 16:00</span>
            </Col>
            <Col md={6}>
              Samedi
              <span>Fermée</span>
            </Col>
          </Row>
          <Row style={{marginTop: '1px', padding: '0', textAlign: 'center'}}>
            <Col md={6}>
              Téléphone
              <span>+212 522 853 095</span>
            </Col>
            <Col md={6}>
              Fax
              <span>+212 522 853 098</span>
            </Col>
          </Row>
          <Row style={{margin: '0 auto'}}>
            <Col md={12}>
              <IteniraryButton>ITINERAIRE</IteniraryButton>
            </Col>
          </Row>
        </Container-fluid>
      </div>
    </>
  )
}
/*-------------PopUp---------------*/

// TODO: Migration styled(baseui) -> styled-components

/*
position: absolute,
  zIndex: 1,
  marginLeft: '35%',
  marginTop: '-90px',
  display: 'inline-block',
  width: '60px',
  height: '60px',
  borderRadius: '50px',
  boxShadow: '0 10px 20px 0 rgba(194, 200, 221, 0.3)',
  background: '#ffffff'
 */

const EllipseLogo = styled.div`
  
`

/*
 width: '100%',
  background: active ? '#f5930d!important' : '#fff!important',
  borderRadius: '20px!important',
  color: active ? '#FFF!important' : '#a3a6b1!important',
  border: !active ? '1px solid #a3a6b1!important' : 'none',
 */
const ButtonItinerary = styled(Button)`
 
`

/*
width: '100%!important',
  background: '#4285f4!important',
  borderRadius: '4px!important',
  color: '#FFF!important',
  boxShadow: '0 10px 30px 0 rgba(109, 109, 128, 0.2)!important'
 */

const IteniraryButton = styled(Button)`
  
`
