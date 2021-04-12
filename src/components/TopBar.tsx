import { css } from '@emotion/react';

type Props = {
  leftIcon?: Array<string>;
  rightIcon?: Array<string>;
  title?: string;
  onClick?: Function;
};

const TopBar = ({ leftIcon = ['왼쪽'], title, rightIcon = ['오른쪽'], onClick }: Props) => {
  return (
    <header css={topBarStyle}>
      <ul>
        {leftIcon.map((icon) => (
          <li key={icon} onClick={onClick && onClick(icon)}>
            <span>{icon}</span>
          </li>
        ))}
      </ul>
      <h1>{title}</h1>
      <ul>
        {rightIcon.map((icon) => (
          <li key={icon} onClick={onClick && onClick(icon)}>
            <span>{icon}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};

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
