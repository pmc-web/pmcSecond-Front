import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';
import Icon from './Icon';

// doc사이트 https://react-hook-form.com/get-started
type SearchInputProps = {
  disabled?: boolean;
  style?: ReturnType<typeof css>;
  label?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: ReactEventHandler;
  onKeydown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchInput = ({
  disabled = false,
  label,
  style: SearchInputCss,
  onChange,
  onKeydown,
  value,
  placeholder,
  onClickIcon,
}: SearchInputProps) => (
  <div
    css={[
      css`
        width: 100%;
        display: inline;
        position: relative;
      `,
    ]}
  >
    <span
      role="button"
      tabIndex={0}
      onClick={onClickIcon}
      css={css`
        position: absolute;
        left: 1em;
        bottom: 50%;
        transform: translate(-50%, 50%);
        cursor: pointer;
      `}
    >
      <Icon name="search" size="12" color={value !== '' ? 'purple050' : 'grey040'} />
    </span>
    <input
      id={label}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeydown}
      value={value}
      css={(themes) => [
        css`
          width: 100%;
          border: 2px solid ${themes.color.grey010};
          border-radius: 6px;
          padding: 0.5em 2em 0.5em 2em;
          background-color: ${themes.color.grey010};
          color: ${themes.color.black};
          ${themes.fontSize.body2};
          &::placeholder {
            ${themes.fontSize.body2};
            color: ${themes.color.grey040};
          }
          &:focus {
            outline: 0;
          }
          &:hover {
            outline: 0;
            border: 2px solid ${themes.color.purple050};
          }
        `,
        SearchInputCss,
      ]}
      disabled={disabled}
    />
  </div>
);

export default SearchInput;
