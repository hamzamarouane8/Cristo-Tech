import React from "react";
import Chart from '../../../components/chart'
import {Col, Row} from "reactstrap";
import isEmpty from "lodash/isEmpty";
import {Image, List} from 'semantic-ui-react'
import {ChartStyle} from '../styles/chart'

const ChartIndicator = ({items, className}) => {
  if (isEmpty(items)) return null
  return (
    <List horizontal>
      {items.map((item, id) => (
          <List.Item>
            <Image avatar src={item.img}/>
            <List.Content>
              <List.Header >{item.text}</List.Header>
            </List.Content>
          </List.Item>))
      }
    </List>
  )
}
const HeaderChart = ({messages}) => (
  <>
    <Row>
      <Col md={12}>
        <ChartIndicator items={messages.indicators}/>
      </Col>
    </Row>
  </>
)
export const ChartBar = ({categories, series, type, title, messages}) => {
  if (!categories || !series) {
    //TODO: Afficher un loader
    return null
  }
  let options = {
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '10%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories,
    },
    colors: ['#0fbe74', '#e7041a'],
    yaxis: {},
    fill: {
      opacity: 1
    }
  }
  return (
    <ChartStyle>
      <div className="chart">
      <Row>
        <Col>
          <HeaderChart messages={messages}/>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Chart options={options} series={series} type={type} title={title} height="300"/>
        </Col>
      </Row>
      </div>
    </ChartStyle>
  )
}

export const ChartLine = ({categories, series, type, messages}) => {
  if (!categories || !series) {
    //TODO: Afficher un loader
    return null
  }
  let options = {
    chart: {
      height: 600
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 6,
      colors: ['#0fbe74', '#f8f8f8'],
      strokeColor: '#0fbe74',

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
          ranges: [
            {
              from: -12000,
              to: -0,
              color: '#F15B46'
            }, {
              from: 1000,
              to: 0,
              color: '#FEB019'
            }
          ]
        },
      }
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {},
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  }
  return (
    <ChartStyle>
      <div className="chart">
        <Row>
          <Col>
            <HeaderChart messages={messages}/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
      <Chart  options={options} series={series} type={type} />
          </Col>
        </Row>
      </div>
    </ChartStyle>
  )
}
