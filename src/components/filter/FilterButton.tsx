import { css, Theme } from '@emotion/react';
import { ReactNode } from 'react';

type FilterButtonProps = {
  children: ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const FilterButton = ({ children, htmlType = 'button', onClick }: FilterButtonProps) => (
  <button css={buttonCss} onClick={onClick} type={htmlType}>
    {children}
  </button>
);

export default FilterButton;

const buttonCss = (theme: Theme) => css`
  width: 5rem;
  height: 2rem;
  border: 1px solid ${theme.color.grey030};
  border-radius: 0.4rem;
`;
