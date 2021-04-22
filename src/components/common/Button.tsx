import { css } from '@emotion/react';
import { ReactEventHandler, ReactNode } from 'react';
import { ButtonSizeType, ButtonType } from 'src/interfaces/emotion';
import Spinner from './Spinner';

type ButtonProps = {
  children: ReactNode;
  size?: keyof ButtonSizeType;
  type?: keyof ButtonType;
  htmlType: 'submit' | 'button' | 'reset';
  css?: ReturnType<typeof css>;
  onClick?: ReactEventHandler;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  children,
  size = 'normal',
  type = 'default',
  htmlType = 'button',
  css: btnCss,
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) => (
  <button
    type={htmlType}
    disabled={disabled || loading}
    onClick={onClick}
    css={(theme) => [
      btnCss,
      css`
        position: relative;
        cursor: pointer;
        ${theme.button[type]}
        ${theme.buttonSize[size]}
        ${disabled && theme.button.disabled}
        opacity: ${loading ? 0.5 : 1};
        &:active {
          opacity: 0.3;
        }
        & > .spinner {
          position: absolute;
          color: ${theme.button[type].color};
          top: calc(${theme.buttonSize[size]['min-height']} / 2 - 10px);
          right: 0.5rem;
        }
      `,
    ]}
  >
    {children}
    {loading && <Spinner size="20" />}
  </button>
);

export default Button;
