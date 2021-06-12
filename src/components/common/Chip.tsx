import { css } from '@emotion/react';
import { ReactEventHandler, ReactNode } from 'react';
import theme from 'src/assets/theme';

type ChipProps = {
  children: ReactNode;
  onClick: ReactEventHandler;
};

const Chip = ({ children, onClick }: ChipProps) => (
  <div tabIndex={0} role="button" onClick={onClick} css={chipCss}>
    {children}
  </div>
);

export default Chip;

const chipCss = css`
  ${theme.commonStyle.flexCenter};
  margin: 0.2rem;
  padding: 0 0.8rem;
  height: 1.5rem;
  border-radius: 24px;
  background-color: ${theme.color.grey010};
  ${theme.fontSize.subtitle4};
  cursor: pointer;
`;
