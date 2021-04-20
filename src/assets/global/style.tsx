import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
      }
      button {
        background-color: #fff;
        border: none;
        padding: 0;
        :focus {
          outline: none;
        }
      }
    `}
  />
);

export default GlobalStyle;
