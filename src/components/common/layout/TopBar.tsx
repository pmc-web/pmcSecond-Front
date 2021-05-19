import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import { LeftIconType, RightIconType } from './types';

type Props = {
  leftIcon?: LeftIconType;
  rightIcon?: Array<RightIconType>;
  title?: string;
  onClick?: (icon: LeftIconType | RightIconType) => ReactEventHandler;
};

const TopBar = ({ leftIcon, title, rightIcon, onClick }: Props) => (
  <header
    css={(theme) => css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3em;
      margin: 0px 1rem;
      > span {
        ${theme.commonStyle.flexCenter}
        :first-of-type {
          justify-content: flex-start;
        }
        > ul {
          width: 100%;
          ${theme.commonStyle.flexCenter}
          justify-content: space-between;
        }
      }
    `}
  >
    <span>
      {leftIcon && (
        <button type="button" onClick={onClick && onClick(leftIcon)}>
          <Icon name={leftIcon} size="18" />
        </button>
      )}
    </span>
    <span>
      <Text.Title level={1} size="subtitle2">
        {title}
      </Text.Title>
    </span>
    <span>
      <ul>
        {rightIcon &&
          rightIcon.map((icon) => (
            <li key={icon}>
              <button type="button" onClick={onClick && onClick(icon)}>
                <Icon name={icon} size="18" />
              </button>
            </li>
          ))}
      </ul>
    </span>
  </header>
);

export default TopBar;
