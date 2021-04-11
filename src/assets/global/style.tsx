import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      *, *::after, *::before {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
