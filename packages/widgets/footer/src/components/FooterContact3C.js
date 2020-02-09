import React from 'react'
import { Col, Row } from '@ctkit/layout'

export default ({ contacts }) => {

  if (!contacts) return null

  return (
    <Row>
      {contacts.map((item, index) => (
        <Col md={4} key={index}>
          <div>
            <img src={item.icon} alt=""/>
            <span className="contact-text">{item.text}</span>
          </div>
        </Col>
      ))
      }
    </Row>
  )
}

