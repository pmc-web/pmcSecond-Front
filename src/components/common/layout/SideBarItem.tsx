import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';

import { FontSizeType } from 'src/interfaces/emotion';
import Text from '../Text';
import Icon, { IconKeyType } from '../Icon';

type SideBarItemProps = {
  label: string;
  onClick: ReactEventHandler;
  textSize?: keyof FontSizeType;
  rightIcon?: IconKeyType;
  onIconClick?: ReactEventHandler;
};

const SideBarItem = ({ label, onClick, textSize, rightIcon, onIconClick }: SideBarItemProps) => (
  <li
    css={(theme) => css`
      height: 3.5rem;
      ${theme.commonStyle.flexCenter}
      justify-content: space-between;
      padding: 0 1.25rem;
      border-bottom: 1px solid ${theme.color.grey020};
    `}
  >
    <span role="presentation" onClick={onClick}>
      <Text size={textSize ?? 'body1'}>{label}</Text>
    </span>
    {rightIcon && (
      <span role="presentation" onClick={onIconClick}>
        <Icon size="18" name={rightIcon} />
      </span>
    )}
  </li>
);

export default SideBarItem;
