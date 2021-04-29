import { Theme, css } from '@emotion/react';
import color from './color';
import fontSize from './fontSize';

const button = {
  primary: css`
    background-color: ${color.purple050};
    color: ${color.white};
    border: none;
  `,
  default: css`
    background-color: ${color.white};
    color: ${color.black};
    border: none;
  `,
  disabled: css`
    background-color: ${color.grey030};
    color: ${color.purple010};
    border: none;
  `,
  ghost: css`
    background-color: ${color.white};
    color: ${color.purple050};
    border: 1px solid ${color.purple050};
  `,
};
const buttonSize = {
  large: css`
    min-height: 3.5rem;
    width: 100%;
  `,
  normal: css`
    min-height: 2.5rem;
    width: 80%;
    border-radius: 0.5rem;
  `,
  small: css`
    min-height: 2rem;
    width: 70%;
  `,
};

const commonStyle = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColomn: css`
    display: flex;
    flex-direction: column;
  `,
};

const theme: Theme = { color, button, buttonSize, fontSize, commonStyle };

export default theme;
