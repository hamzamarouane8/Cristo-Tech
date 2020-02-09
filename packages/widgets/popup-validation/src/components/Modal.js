import React from 'react'
import Button from '@ctkit/button'
import {Col, Row} from '@ctkit/layout'
import {styled} from '@ctkit/theme'
import ReactCodeInput from 'react-code-input'
import classnames from 'classnames';
import Modal from '@ctkit/modal'
import isString from 'lodash.isstring'
//-----------------------------------------------------------------------------

export default ({open,closeModal,handleCode, onClick, messageError, header, description,numInputs,image,actions}) => {

  return (
    <Modal openModal={open} close={() => closeModal()} closeParam={false}>
    <Root className={classnames('clearfix')}>
      <div className="rui-content">
        {isString(image) ? <img src={image} alt="" width={100}/> : image}
        {header && <h4>{header}</h4>}
        <p>{description}</p>
        <div className="row">
          <div className="col-12">
            {<ReactCodeInput
              onChange={code => handleCode(code)}
              numInputs={numInputs}
            />}
            {messageError && <div> {messageError}</div>}
          </div>
        </div>
        {actions && (
          <>
          {actions.submit  &&<div className="mt-4 clearfix rui-actions">
              <Button size="large" primary onClick={actions.submit.onClick}>{actions.submit.text}</Button>
            </div>}
          {actions.cancel && <div className="mt-4 clearfix rui-actions">
              <a href="#">{actions.cancel.text}</a>
            </div>}
          </>
        )}
      </div>
    </Root>
    </Modal>
  )
}
const Root = styled.div`
margin: auto;
width:100%;
text-align:center;
`
