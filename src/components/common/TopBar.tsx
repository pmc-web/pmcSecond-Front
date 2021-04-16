import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';

type Props = {
  leftIcon?: Array<string>;
  rightIcon?: Array<string>;
  title?: string;
  onClick?: (icon: string) => ReactEventHandler;
};

const TopBar = ({ leftIcon = ['왼쪽'], title, rightIcon = ['오른쪽'], onClick }: Props) => (
  <header css={topBarStyle}>
    <ul>
      {leftIcon.map((icon) => (
        <li key={icon}>
          <button type="button" onClick={onClick && onClick(icon)}>
            {icon}
          </button>
        </li>
      ))}
    </ul>
    <h1>{title}</h1>
    <ul>
      {rightIcon.map((icon) => (
        <li key={icon}>
          <button type="button" onClick={onClick && onClick(icon)}>
            {icon}
          </button>
        </li>
      ))}
    </ul>
  </header>
);

export default TopBar;
const topBarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hotpink;
  height: 3em;
  padding: 0px 20px;
  &li {
    list-style: none;
  }
`;
