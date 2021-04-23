import { Theme } from '@emotion/react';
import color from './color';
import fontSize from './fontSize';

const button = {
  primary: {
    'background-color': color.purple050,
    color: color.white,
    border: 'none',
  },
  default: {
    'background-color': color.white,
    color: color.black,
    border: 'none',
  },
  disabled: {
    'background-color': color.grey030,
    color: color.purple010,
    border: 'none',
  },
};
const buttonSize = {
  large: {
    'min-height': '3.5rem',
    'min-width': '23.5rem',
  },
  normal: {
    'min-height': '2.5rem',
    'min-width': '21rem',
    'border-radius': '0.5rem',
  },
  small: {
    'min-height': '1.5rem',
    'min-width': '18.5rem',
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

const theme: Theme = { color, button, buttonSize, fontSize, commonStyle };

export default theme;
