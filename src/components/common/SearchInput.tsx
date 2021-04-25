import { css } from '@emotion/react';
import { FormEvent } from 'react';
import useInput from 'src/hooks/useInput';
import Icon from './Icon';

type SearchInputProps = {
  disabled?: boolean;
  css?: ReturnType<typeof css>;
  label?: string;
  placeholder?: string;
  onFinishHandler: (value: string) => void;
};

const SearchInput = ({
  disabled = false,
  label,
  css: SearchInputCss,
  placeholder,
  onFinishHandler,
}: SearchInputProps) => {
  const [value, onChangeHandler] = useInput('');
  const onFinish = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onFinishHandler(value);
  };
  return (
    <form
      css={[
        css`
          display: inline;
          position: relative;
        `,
      ]}
      onSubmit={onFinish}
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
        onChange={onChangeHandler}
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
    </form>
  );
};

export default SearchInput;
