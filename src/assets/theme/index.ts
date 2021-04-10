import { Theme } from '@emotion/react';

const color = { white: '#fff' };

const button = {
  primary: {
    color: color.white,
    'background-color': 'red',
    'border-color': 'red',
  },
};

const fontSize = {
  title: {
    'font-size': '2rem',
    'font-weight': 'bold',
    'line-height': '2rem',
  },
  body: {
    'font-size': '2rem',
    'font-weight': 'bold',
    'line-height': '2rem',
  },
  largeTitle: {
    'font-size': '2rem',
    'font-weight': 'bold',
    'line-height': '2rem',
  },
};

const commonStyle = {
  flexCenter: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
};

const theme: Theme = { color, button, fontSize, commonStyle };

export default theme;
