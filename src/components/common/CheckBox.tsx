import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';
import { FontSizeType } from 'src/interfaces/emotion';
import Icon from './Icon';

type CheckBoxProps = {
  onClick: ReactEventHandler;
  checked: boolean;
  title?: string;
  font?: keyof FontSizeType;
};

const CheckBox = ({ title, font = 'body1', onClick, checked }: CheckBoxProps) => (
  <div
    css={(theme) =>
      css`
        ${theme.commonStyle.flexCenter}
        justify-content:flex-start;
      `
    }
  >
    <input
      css={css`
        display: none;
      `}
      type="checkbox"
      id="check"
      onClick={onClick}
    />
    <label
      css={css`
        cursor: pointer;
        margin-right: 1em;
      `}
      htmlFor="check"
    >
      {checked ? (
        <Icon name="checkBox" size="24" color="purple050" />
      ) : (
        <Icon name="checkBox" size="24" color="grey030" />
      )}
    </label>
    <p
      role="presentation"
      onClick={onClick}
      css={(theme) =>
        css`
          cursor: pointer;
          user-select: none;
          ${theme.fontSize[font]}
        `
      }
    >
      {title}
    </p>
  </div>
);

export default CheckBox;
