import { css as emotionCss } from '@emotion/react';
import { ReactNode } from 'react';
import { inFromLeftToRight } from 'src/assets/animations/transform';

type SideBarProps = {
  children: ReactNode;
  css?: ReturnType<typeof emotionCss>;
  width?: string;
  visible: boolean;
  onClickBackground: () => void;
};

const SideBar = ({ children, css, width, visible, onClickBackground }: SideBarProps) => (
  <aside
    role="presentation"
    css={emotionCss`
      display: ${visible ? 'inherit' : 'none'};
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.2);
    `}
    onClick={onClickBackground}
  >
    <div
      css={[
        css,
        emotionCss`
          height: 100%;
          position: relative;
          background-color: white;
          width: ${width || '70vw'};
          display: flex;
          flex-direction: column;
          animation: ${inFromLeftToRight} 0.3s ease;
        `,
      ]}
    >
      {children}
    </div>
  </aside>
);

export default SideBar;
