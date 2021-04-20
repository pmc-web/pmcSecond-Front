import { css } from '@emotion/react';
import bounce from 'src/assets/animations/bounce';
import Logo from './Logo';

const Splash = () => (
  <div
    css={(theme) => css`
      ${theme.commonStyle.flexCenter}
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      animation: ${bounce} 1s ease infinite;
      background-color: ${theme.color.white};
    `}
  >
    <Logo withText />
  </div>
);

export default Splash;
