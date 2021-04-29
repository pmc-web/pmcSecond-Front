import { css } from '@emotion/react';

type CssReturnType = ReturnType<typeof css>;

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
  grey005: string;
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

export type ButtonType = {
  primary: CssReturnType;
  default: CssReturnType;
  disabled: CssReturnType;
  ghost: CssReturnType;
};

export type ButtonSizeType = {
  large: CssReturnType;
  normal: CssReturnType;
  small: CssReturnType;
};

export type FontSizeType = {
  h1: CssReturnType;
  subtitle1: CssReturnType;
  subtitle2: CssReturnType;
  subtitle3: CssReturnType;
  subtitle4: CssReturnType;
  body1: CssReturnType;
  body2: CssReturnType;
  caption1: CssReturnType;
  caption2: CssReturnType;
};

type CommonStyleType = {
  flexCenter: CssReturnType;
  flexColomn: CssReturnType;
};

declare module '@emotion/react' {
  export interface Theme {
    color: ColorType;
    button: ButtonType;
    buttonSize: ButtonSizeType;
    fontSize: FontSizeType;
    commonStyle: CommonStyleType;
  }
}
