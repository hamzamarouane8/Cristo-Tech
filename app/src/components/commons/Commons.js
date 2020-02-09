import React from 'react';
import {Header} from 'semantic-ui-react'

export default {

   mapOptions :(data) => {
    return (data || []).map((item) => ({
      key: item.id,
      value: item.id,
      text: <Header content={item.label} subheader={item.iban}/>,
      content: <Header content={item.label} subheader={item.iban}/>
    }))
  },
   extractMonthFromDate : (value) => {
    return value.slice(5, 7)
  },
   chartFilter : (list, type, flag) => {
    return list.filter((it) => it.type === type).map((it) => flag ? this.extractMonthFromDate(it.balanceDate) : it.amount)
  }

};
