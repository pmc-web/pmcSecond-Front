import { css } from '@emotion/react';

type Props = {
  leftIcon?: Array<string>;
  rightIcon?: Array<string>;
  onClick?: any;
};

const TopBar = ({ leftIcon = ['왼쪽'], rightIcon = ['오른쪽'], onClick }: Props) => {
  return (
    <header css={topBarStyle}>
      <div>
        {leftIcon.map((icon) => (
          <div key={icon} onClick={() => onClick(icon)}>
            {icon}
          </div>
        ))}
      </div>
      <div>
        {rightIcon.map((icon) => (
          <div key={icon} onClick={() => onClick(icon)}>
            {icon}
          </div>
        ))}
      </div>
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
`;
