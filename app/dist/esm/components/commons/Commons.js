var _this = this;

import React from 'react';
import { Header } from 'semantic-ui-react';
export default {
  mapOptions: function mapOptions(data) {
    return (data || []).map(function (item) {
      return {
        key: item.id,
        value: item.id,
        text: React.createElement(Header, {
          content: item.label,
          subheader: item.iban
        }),
        content: React.createElement(Header, {
          content: item.label,
          subheader: item.iban
        })
      };
    });
  },
  extractMonthFromDate: function extractMonthFromDate(value) {
    return value.slice(5, 7);
  },
  chartFilter: function chartFilter(list, type, flag) {
    return list.filter(function (it) {
      return it.type === type;
    }).map(function (it) {
      return flag ? _this.extractMonthFromDate(it.balanceDate) : it.amount;
    });
  }
};