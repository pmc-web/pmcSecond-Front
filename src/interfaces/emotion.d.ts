import '@emotion/react';

export type ColorType = {
  white: string;
  purple010: string;
  purple020: string;
  purple030: string;
  purple040: string;
  purple050: string;
  purple060: string;
  purple070: string;
  purple080: string;
  magenta010: string;
  magenta020: string;
  magenta030: string;
  magenta040: string;
  magenta050: string;
  magenta060: string;
  magenta070: string;
  magenta080: string;
  grey010: string;
  grey020: string;
  grey030: string;
  grey040: string;
  grey050: string;
  grey060: string;
  grey070: string;
  grey080: string;
  black: string;
  white: string;
  green020: string;
  green030: string;
  yellow060: string;
  yellow070: string;
  red040: string;
};

type ButtonProps = {
  color: string;
  'background-color': string;
  border: string;
  cursor: string;
};

export type ButtonType = {
  primary: ButtonProps;
};

type FontProps = {
  'font-size': string;
  'font-weight'?: string;
  'line-height': string;
};

export type FontSizeType = {
  h1: FontProps;
  subtitle1: FontProps;
  subtitle2: FontProps;
  subtitle3: FontProps;
  subtitle4: FontProps;
  body1: FontProps;
  body2: FontProps;
  caption1: FontProps;
  caption2: FontProps;
};

type CommonStyleProps = {
  display: string;
  'flex-direction'?: string;
  'justify-content': string;
  'align-items': string;
};

type CommonStyleType = {
  flexCenter: CommonStyleProps;
};

declare module '@emotion/react' {
  export interface Theme {
    color: ColorType;
    button: ButtonType;
    fontSize: FontSizeType;
    commonStyle: CommonStyleType;
  }
}
