import { Theme } from '@emotion/react';
import color from './color';
import fontSize from './fontSize';

const button = {
  primary: {
    'background-color': color.purple050,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

const commonStyle = {
  flexCenter: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
  flexColomn: {
    display: 'flex',
    'flex-direction': 'column',
  },
};

const theme: Theme = { color, button, fontSize, commonStyle };

export default theme;
