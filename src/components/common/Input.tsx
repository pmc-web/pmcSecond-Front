import { css } from '@emotion/react';
import { useRef } from 'react';
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form';
import theme from 'src/assets/theme';
import Icon from './Icon';

// doc사이트 https://react-hook-form.com/get-started
type InputProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  style?: ReturnType<typeof css>;
  label?: string;
  valid?: 'success' | 'error';
};

const Input = ({
  disabled = false,
  valid,
  name,
  label,
  style: inputCss,
  defaultValue,
  register,
  required,
  pattern,
}: InputProps) => {
  const focus = useRef<HTMLLabelElement>(null);
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.value !== '') {
      if (valid !== 'error') {
        if (focus.current) {
          focus.current.style.color = theme.color.purple050;
        }
      }
    }
    if (ev.target.value === '') {
      if (focus.current) {
        focus.current.style.color = theme.color.grey030;
      }
    }
  };

  const onFocus = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (ev.target.value !== '') {
      if (valid !== 'error') {
        if (focus.current) {
          focus.current.style.color = theme.color.purple050;
        }
      }
    }
  };

  const onBlur = () => {
    if (focus.current) {
      focus.current.style.color = theme.color.grey030;
    }
  };
  return (
    <div onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
      <label
        ref={focus}
        htmlFor={label}
        css={(themes) => css`
          display: block;
          color: ${themes.color.grey030};
        `}
      >
        {label}
      </label>
      <div
        css={css`
          display: inline;
          position: relative;
        `}
      >
        <input
          id={label}
          css={(themes) => [
            css`
              margin-top: 0.5em;
              border: 2px solid ${valid !== 'error' ? themes.color.grey030 : themes.color.red040};
              padding: 1.05em;
              border-radius: 6px;
              color: ${themes.color.black};
              ${themes.fontSize.subtitle3};
              &:focus {
                outline: 0;
                border: 2px solid ${valid !== 'error' ? themes.color.purple050 : themes.color.red040};
              }
            `,
            inputCss,
          ]}
          {...register(name, { required, pattern })}
          disabled={disabled}
          defaultValue={defaultValue}
        />
        <span
          css={css`
            position: absolute;
            right: 1.5em;
            bottom: -50%;
            transform: translate(50%, -50%);
          `}
        >
          {valid === 'success' ? <Icon name="check" size="18" color="green020" /> : null}
          {valid === 'error' ? <Icon name="error" size="18" color="red040" /> : null}
        </span>
      </div>
    </div>
  );
};

export default Input;
