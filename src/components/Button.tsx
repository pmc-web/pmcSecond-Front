import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';

type Props = {
  id?: string;
  title: string;
  disabled?: boolean;
  style?: (theme: any) => any;
  onClick?: ReactEventHandler;
};

/* 사용법
<Button
id={'2'}
onClick={(ev) => console.log(ev)}
title={'버튼'}
style={(theme) => css`
  ${theme.button.primary}
`}
/>

**/
const Button = ({ id, title, style, disabled = false, onClick }: Props) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      css={[
        style,
        css`
          padding: 0.3em 1.5em;
          border-radius: 0.3em;
          &:hover {
            color: white;
            background-color: skyblue;
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
};

export default Button;
