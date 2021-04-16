import { Theme } from '@emotion/react';

const color = {
  purple010: '#D6C8fE',
  purple020: '#B9A4FF',
  purple030: '#9A7DFF',
  purple040: '#7F5EFF',
  purple050: '#6040FF',
  purple060: '#513BF8',
  purple070: '#3933EF',
  purple080: '#001FE2',
  magenta010: '#FFE2FF',
  magenta020: '#FFBF5FE',
  magenta030: '#FF7BFE',
  magenta040: '#FF00FF',
  magenta050: '#FC00FE',
  magenta060: '#ED00F2',
  magenta070: '#DA00EF',
  magenta080: '#C000EB',
  grey010: '#FCF8FC',
  grey020: '#FFF8FF',
  grey030: '#EBE5F9',
  grey040: '#C9C3D7',
  grey050: '#ABA5B8',
  grey060: '#817B8D',
  grey070: '#6C6778',
  grey080: '#4C4858',
  black: '#2A2635',
  white: '#ffffff',
  green020: '#51F0B0',
  green030: '#00E792',
  yellow060: '#FFDE52',
  yellow070: '#FFC94C',
  red040: '#FF3D71',
};

const button = {
  primary: {
    'background-color': color.purple050,
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

const fontSize = {
  h1: {
    'font-size': '24px',
    'font-weight': 'bold',
    'line-height': '32px',
  },
  subtitle1: {
    'font-size': '18px',
    'font-weight': 'bold',
    'line-height': '24px',
  },
  subtitle2: {
    'font-size': '16px',
    'font-weight': 'bold',
    'line-height': '24px',
  },
  subtitle3: {
    'font-size': '14px',
    'font-weight': 'bold',
    'line-height': '20px',
  },
  subtitle4: {
    'font-size': '12px',
    'font-weight': 'bold',
    'line-height': '18px',
  },
  body1: {
    'font-size': '16px',
    'line-height': '24px',
  },
  body2: {
    'font-size': '14px',
    'line-height': '20px',
  },
  caption1: {
    'font-size': '12px',
    'line-height': '18px',
  },
  caption2: {
    'font-size': '10px',
    'line-height': '12px',
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
