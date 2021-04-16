import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';

type ButtonProps = {
  id?: string;
  title: string;
  css?: ReturnType<typeof css>;
  onClick?: ReactEventHandler;
  disabled?: boolean;
};

const Button = ({ id, title, css: btnCss, onClick, disabled = false }: ButtonProps) => (
  <button
    type="button"
    id={id}
    disabled={disabled}
    onClick={onClick}
    css={(theme) => [
      btnCss,
      css`
        cursor: pointer;
        border: none;
        padding: 0.3em 1.5em;
        color: white;
        background-color: ${theme.color.purple050};
        &:active {
          color: white;
          background-color: ${theme.color.grey030};
        }
        &:focus {
          outline: 0;
        }
      `,
    ]}
  >
    {title}
  </button>
);

export default Button;
