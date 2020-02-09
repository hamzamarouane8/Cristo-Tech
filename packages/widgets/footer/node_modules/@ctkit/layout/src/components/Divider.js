import React from 'react'
import {Divider} from "semantic-ui-react";
import {styled} from '@ctkit/theme'

export default ({fitted}) => (
  <div className="clearfix">
    <Root fitted={fitted}/>
  </div>
)

const Root = styled(Divider)`
  margin: 50px auto;
  border-radius: 10px;
  width: 80px;
  height: 6px;
`

