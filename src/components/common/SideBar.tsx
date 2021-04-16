import { css } from '@emotion/react';
import { ReactNode, useEffect, useState } from 'react';
import { fadeIn, fadeOut } from 'src/assets/animations/fades';
import { inFromLeftToRight, outRightToLeft } from 'src/assets/animations/transform';

type SideBarProps = {
  children: ReactNode;
  css?: ReturnType<typeof css>;
  width?: string;
  visible: boolean;
  onClickBackground: () => void;
};

const SideBar = ({ children, css: propCss, width, visible, onClickBackground }: SideBarProps) => {
  const [wrapperClassName, setWrapperClassName] = useState('none');
  useEffect(() => {
    if (visible) {
      setWrapperClassName('visible');
    } else if (wrapperClassName === 'visible') {
      setWrapperClassName('hidden');
      setTimeout(() => setWrapperClassName('none'), 500);
    }
  }, [visible, wrapperClassName]);
  return (
    <aside
      className={wrapperClassName}
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        &.none {
          display: none;
        }
        &.visible {
          animation: ${inFromLeftToRight} 0.3s ease;
        }
        &.hidden {
          animation: ${outRightToLeft} 0.3s ease;
          transform: translateX(-100%);
        }
      `}
    >
      <div
        role="presentation"
        onClick={onClickBackground}
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
          .visible & {
            animation: ${fadeIn} 1s ease;
          }
          .hidden & {
            animation: ${fadeOut} 10ms ease;
            opacity: 0;
          }
        `}
      />
      <div
        css={[
          propCss,
          css`
            height: 100%;
            position: relative;
            height: 100vh;
            background-color: white;
            width: ${width || '70vw'};
            display: flex;
            flex-direction: column;
          `,
        ]}
      >
        {children}
      </div>
    </aside>
  );
};

export default SideBar;
