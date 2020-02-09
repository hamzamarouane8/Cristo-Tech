import React from 'react'
import isString from 'lodash.isstring'

export default ({brand}) => {
  let content = null
  if (isString(brand)) {
    content = brand
  } else {
    content = <img src={brand.image} style={{width: 'auto', height: 22}} alt={brand.name}/>
  }
  return <div className="ui brand">{content}</div>
}
