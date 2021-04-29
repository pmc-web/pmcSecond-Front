import { css } from '@emotion/react';
import { ReactEventHandler, ReactNode } from 'react';
import { ButtonSizeType, ButtonType } from 'src/interfaces/emotion';
import Spinner from './Spinner';

type ButtonProps = {
  children: ReactNode;
  size?: keyof ButtonSizeType;
  type?: keyof ButtonType;
  htmlType: 'submit' | 'button' | 'reset';
  style?: ReturnType<typeof css>;
  onClick?: ReactEventHandler;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  children,
  size = 'normal',
  type = 'default',
  htmlType = 'button',
  style: btnCss,
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) => (
  <button
    type={htmlType}
    disabled={disabled || loading}
    onClick={onClick}
    css={(theme) => [
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
          ${theme.button[type]}
          top: calc(50% - 10px);
          right: 0.5rem;
        }
      `,
      btnCss,
    ]}
  >
    {children}
    {loading && <Spinner size="20" />}
  </button>
);

export default Button;
