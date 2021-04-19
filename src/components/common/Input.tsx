import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form';
import theme from 'src/assets/theme';
import Icon from './Icon';
import Text from './Text';
// doc사이트 https://react-hook-form.com/get-started
type InputProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  defaultValue?: string;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  css?: ReturnType<typeof css>;
  label?: string;
  icon?: 'success' | 'error';
};

const Input = ({ icon, name, label, css: inputCss, defaultValue, register, required, pattern }: InputProps) => {
  const focus = useRef<HTMLLabelElement>(null);
  const onFocus = () => {
    if (focus.current) {
      focus.current.style.color = theme.color.purple050;
    }
  };
  const onBlur = () => {
    if (focus.current) {
      focus.current.style.color = theme.color.grey030;
    }
  };
  return (
    <div onFocus={onFocus} onBlur={onBlur}>
      <label
        ref={focus}
        htmlFor={label}
        css={(themes) =>
          css`
            display: block;
            color: ${themes.color.grey030};
          `
        }
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
            inputCss,
            css`
              margin-top: 0.5em;
              border: 1px solid ${themes.color.grey030};
              padding: 1.05em;
              border-radius: 6px;
              color: ${themes.color.black};
              ${themes.fontSize.subtitle3};
              &:focus {
                outline: 0;
                border: 1px solid ${themes.color.purple050};
              }
            `,
          ]}
          {...register(name, { required, pattern })}
          defaultValue={defaultValue}
        />
        <span
          css={css`
            position: absolute;
            right: 1.5em;
            top: 50%;
            transform: translate(50%, -50%);
          `}
        >
          {icon === 'success' ? <Icon name="check" size="18" color="green020" /> : null}
          {icon === 'error' ? <Icon name="error" size="18" color="red040" /> : null}
        </span>
      </div>
    </div>
  );
};

export default Input;
