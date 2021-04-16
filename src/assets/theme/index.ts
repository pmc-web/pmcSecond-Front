import { Theme } from '@emotion/react';

const color = { white: '#fff', purple050: '#6040FF', grey030: '#EBE5F9' };

const button = {
  primary: {
    'background-color': color.purple050,
    color: 'white',
    border: 'none',
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
