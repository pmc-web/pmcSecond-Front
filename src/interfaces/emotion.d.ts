import '@emotion/react';

type ColorType = {
  white: string;
  purple050: string;
  grey030: string;
};

type ButtonProps = {
  color: string;
  'background-color': string;
  border: string;
  cursor: string;
};

type ButtonType = {
  primary: ButtonProps;
};

type FontProps = {
  'font-size': string;
  'font-weight': string;
  'line-height': string;
};

type FontSizeType = {
  title: FontProps;
  body: FontProps;
  largeTitle: FontProps;
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
