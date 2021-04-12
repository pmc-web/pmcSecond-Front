import { Theme } from '@emotion/react';

const color = { white: '#fff', skyblue: '#87CEEE' };

const button = {
  primary: {
    'background-color': 'white',
    color: color.skyblue,
    border: '1px solid #87CEEE',
    cursor: 'pointer',
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
