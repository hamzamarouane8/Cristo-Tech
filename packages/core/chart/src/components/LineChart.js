import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    'id': 'Redevances',
    'color': 'hsl(304, 70%, 50%)',
    'data': [
      {
        'x': 'août',
        'y': 41,
      },
      {
        'x': 'septembre',
        'y': 205,
      },
      {
        'x': 'octobre',
        'y': 283,
      },
      {
        'x': 'novembre',
        'y': 155,
      },
      {
        'x': 'decembre',
        'y': 94,
      },
      {
        'x': 'janvier',
        'y': 62,
      },
      {
        'x': 'fevrier',
        'y': 249,
      },
      {
        'x': 'mars',
        'y': 138,
      },
      {
        'x': 'avril',
        'y': 122,
      },
      {
        'x': 'mai',
        'y': 110,
      },
    ],
  },
  {
    'id': 'Paiements',
    'color': 'hsl(304, 70%, 50%)',
    'data': [
      {
        'x': 'août',
        'y': 41,
      },
      {
        'x': 'septembre',
        'y': 205,
      },
      {
        'x': 'octobre',
        'y': 283,
      },
      {
        'x': 'novembre',
        'y': 155,
      },
      {
        'x': 'decembre',
        'y': 94,
      },
      {
        'x': 'janvier',
        'y': 62,
      },
      {
        'x': 'fevrier',
        'y': 249,
      },
      {
        'x': 'mars',
        'y': 138,
      },
      {
        'x': 'avril',
        'y': 122,
      },
      {
        'x': 'mai',
        'y': 110,
      },
    ],
  },
];

export default () => (
  <ResponsiveLine
    data={data}
    margin={{
      'top': 50,
      'right': 110,
      'bottom': 50,
      'left': 60,
    }}
    xScale={{
      'type': 'point',
    }}
    yScale={ {
      'type': 'linear',
      'stacked': true,
      'min': 'auto',
      'max': 'auto',
    }}
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      'orient': 'bottom',
      'tickSize': 5,
      'tickPadding': 5,
      'tickRotation': 0,
      'legend': 'Mois',
      'legendOffset': 36,
      'legendPosition': 'middle',
    }}
    axisLeft={{
      'orient': 'left',
      'tickSize': 5,
      'tickPadding': 5,
      'tickRotation': 0,
      'legend': 'Montant',
      'legendOffset': -40,
      'legendPosition': 'middle',
    }}
    dotSize={10}
    dotColor="inherit:darker(0.3)"
    dotBorderWidth={2}
    dotBorderColor="#ffffff"
    enableDotLabel={true}
    dotLabel="y"
    dotLabelYOffset={-12}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        'anchor': 'bottom-right',
        'direction': 'column',
        'justify': false,
        'translateX': 100,
        'translateY': 0,
        'itemsSpacing': 0,
        'itemDirection': 'left-to-right',
        'itemWidth': 80,
        'itemHeight': 20,
        'itemOpacity': 0.75,
        'symbolSize': 12,
        'symbolShape': 'circle',
        'symbolBorderColor': 'rgba(0, 0, 0, .5)',
        'effects': [
          {
            'on': 'hover',
            'style': {
              'itemBackground': 'rgba(0, 0, 0, .03)',
              'itemOpacity': 1,
            },
          },
        ],
      },
    ]}
  />
)
