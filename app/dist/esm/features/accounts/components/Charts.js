import React from "react";
import Chart from '../../../components/chart';
import { Col, Row } from "reactstrap";
import isEmpty from "lodash/isEmpty";
import { Image, List } from 'semantic-ui-react';
import { ChartStyle } from '../styles/chart';

var ChartIndicator = function ChartIndicator(_ref) {
  var items = _ref.items,
      className = _ref.className;
  if (isEmpty(items)) return null;
  return React.createElement(List, {
    horizontal: true
  }, items.map(function (item, id) {
    return React.createElement(List.Item, null, React.createElement(Image, {
      avatar: true,
      src: item.img
    }), React.createElement(List.Content, null, React.createElement(List.Header, null, item.text)));
  }));
};

var HeaderChart = function HeaderChart(_ref2) {
  var messages = _ref2.messages;
  return React.createElement(React.Fragment, null, React.createElement(Row, null, React.createElement(Col, {
    md: 12
  }, React.createElement(ChartIndicator, {
    items: messages.indicators
  }))));
};

export var ChartBar = function ChartBar(_ref3) {
  var categories = _ref3.categories,
      series = _ref3.series,
      type = _ref3.type,
      title = _ref3.title,
      messages = _ref3.messages;

  if (!categories || !series) {
    //TODO: Afficher un loader
    return null;
  }

  var options = {
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '10%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: categories
    },
    colors: ['#0fbe74', '#e7041a'],
    yaxis: {},
    fill: {
      opacity: 1
    }
  };
  return React.createElement(ChartStyle, null, React.createElement("div", {
    className: "chart"
  }, React.createElement(Row, null, React.createElement(Col, null, React.createElement(HeaderChart, {
    messages: messages
  }))), React.createElement(Row, null, React.createElement(Col, {
    md: 12
  }, React.createElement(Chart, {
    options: options,
    series: series,
    type: type,
    title: title,
    height: "300"
  })))));
};
export var ChartLine = function ChartLine(_ref4) {
  var categories = _ref4.categories,
      series = _ref4.series,
      type = _ref4.type,
      messages = _ref4.messages;

  if (!categories || !series) {
    //TODO: Afficher un loader
    return null;
  }

  var options = {
    chart: {
      height: 600
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 6,
      colors: ['#0fbe74', '#f8f8f8'],
      strokeColor: '#0fbe74'
    },
    stroke: {
      show: true,
      curve: 'smooth',
      colors: ['#0fbe74', '#d3d3d8'],
      lineCap: 'round',
      width: [3, 2]
    },
    plotOptions: {
      bar: {
        columnWidth: '6%',
        endingShape: 'rounder',
        horizontal: false,
        colors: {
          ranges: [{
            from: -12000,
            to: -0,
            color: '#F15B46'
          }, {
            from: 1000,
            to: 0,
            color: '#FEB019'
          }]
        }
      }
    },
    xaxis: {
      categories: categories
    },
    yaxis: {},
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft',
        // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      }
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  };
  return React.createElement(ChartStyle, null, React.createElement("div", {
    className: "chart"
  }, React.createElement(Row, null, React.createElement(Col, null, React.createElement(HeaderChart, {
    messages: messages
  }))), React.createElement(Row, null, React.createElement(Col, {
    md: 12
  }, React.createElement(Chart, {
    options: options,
    series: series,
    type: type
  })))));
};