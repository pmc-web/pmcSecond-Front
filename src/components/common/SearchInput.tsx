import { css } from '@emotion/react';
import Icon from './Icon';

// doc사이트 https://react-hook-form.com/get-started
type SearchInputProps = {
  disabled?: boolean;
  css?: ReturnType<typeof css>;
  label?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchInput = ({
  disabled = false,
  label,
  css: SearchInputCss,
  onChange,
  value,
  placeholder,
}: SearchInputProps) => (
  <div
    css={[
      css`
        display: inline;
        position: relative;
      `,
    ]}
  >
    <span
      css={css`
        position: absolute;
        left: 1em;
        bottom: 50%;
        transform: translate(-50%, 50%);
      `}
    >
      <Icon name="search" size="12" color={value !== '' ? 'purple050' : 'grey040'} />
    </span>
    <input
      id={label}
      placeholder={placeholder}
      onChange={onChange}
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
