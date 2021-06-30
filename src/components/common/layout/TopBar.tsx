import { css, Theme } from '@emotion/react';
import { ReactEventHandler } from 'react';
import useTopBarClickHandler from 'src/hooks/useTopBarClickHandler';
import Icon from '../Icon';
import Text from '../Text';
import { LeftIconType, RightIconType } from './types';

type TopBarProps = {
  leftIcon?: LeftIconType;
  rightIcon?: Array<RightIconType>;
  title?: string;
  backgroundColor?: 'white' | 'grey080';
  handleSideBar?: () => void;
};

const TopBar = ({ leftIcon, title, rightIcon, backgroundColor = 'white', handleSideBar }: TopBarProps) => {
  const onClick = useTopBarClickHandler(handleSideBar);
  return (
    <header css={(theme) => headerCss(theme, backgroundColor)}>
      <span>
        {leftIcon && (
          <button type="button" onClick={onClick(leftIcon)}>
            <Icon name={leftIcon} size="18" color={backgroundColor === 'white' ? 'black' : 'white'} />
          </button>
        )}
      </span>
      <span>
        <Text.Title level={1} size="subtitle2" color={backgroundColor === 'white' ? 'black' : 'white'}>
          {title}
        </Text.Title>
      </span>
      <span>
        <ul>
          {rightIcon &&
            rightIcon.map((icon) => (
              <li key={icon}>
                <button type="button" onClick={onClick(icon)}>
                  <Icon name={icon} size="18" color={backgroundColor === 'white' ? 'black' : 'white'} />
                </button>
              </li>
            ))}
        </ul>
      </span>
    </header>
  );
};

export default TopBar;

const headerCss = (theme: Theme, backgroundColor: 'white' | 'grey080') => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  padding: 0px 1rem;
  background-color: ${theme.color[backgroundColor]};
  > span {
    ${theme.commonStyle.flexCenter}
    width: 30%;
    :first-of-type {
      justify-content: flex-start;
    }
    > ul {
      width: 100%;
      ${theme.commonStyle.flexCenter}
      justify-content: space-between;
    }
  }
`;
