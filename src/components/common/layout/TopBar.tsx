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
  onLeftIconClick?: () => void;
};

const TopBar = ({ leftIcon, title, rightIcon, backgroundColor = 'white', onLeftIconClick }: TopBarProps) => {
  const onClick = useTopBarClickHandler(onLeftIconClick);
  return (
    <header css={(theme) => headerCss(theme, backgroundColor)}>
      <span>
        {leftIcon && (
          <button type="button" onClick={onClick(leftIcon)}>
            <Icon name={leftIcon} size="18" color={backgroundColor === 'white' ? 'black' : 'white'} />
          </button>
        )}
      </span>
      <span css={titleCss}>
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
    width: 20%;
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

const titleCss = css`
  width: 40% !important;
`;
