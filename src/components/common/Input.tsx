import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue, ValidationRule } from 'react-hook-form';
import theme from 'src/assets/theme';
import Icon from './Icon';

// doc사이트 https://react-hook-form.com/get-started
type InputProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  style?: ReturnType<typeof css>;
  label?: string;
  type?: 'text' | 'password';
  valid?: 'success' | 'error' | 'close' | 'null';
  placeholder?: string;
};

const Input = ({
  disabled = false,
  valid,
  name,
  type,
  label,
  style: inputCss,
  defaultValue,
  register,
  required,
  pattern,
  setValue,
  placeholder,
}: InputProps) => {
  const [validate, setValiDate] = useState(valid);

  const [close, setClose] = useState(false);
  const focus = useRef<HTMLLabelElement>(null);
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.value !== '') {
      if (validate !== 'error') {
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
    return setClose(true);
  };

  const onFocus = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (ev.target.value !== '') {
      if (validate !== 'error') {
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
    setTimeout(() => setClose(false), 100);
  };

  const onVaildate = () => {
    if (validate === 'success') return <Icon name="check" size="18" color="green020" />;
    if (validate === 'error') return <Icon name="error" size="18" color="red040" />;
    return null;
  };

  const onClose = () => {
    setValiDate('null');
    setValue(name, '');
  };
  useEffect(() => {
    setValiDate(valid);
  }, [valid]);
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
          type={type}
          placeholder={placeholder}
          css={(themes) => [
            css`
              width: 100%;
              margin-top: 0.5em;
              border: 2px solid ${validate !== 'error' ? themes.color.grey030 : themes.color.red040};
              padding: 1.05em;
              border-radius: 6px;
              color: ${themes.color.black};
              ${themes.fontSize.subtitle3};
              &:focus {
                outline: 0;
                border: 2px solid ${validate !== 'error' ? themes.color.purple050 : themes.color.red040};
              }
              ::placeholder {
                color: ${themes.color.grey040};
                ${themes.fontSize.body2}
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
          {close ? (
            <span
              role="button"
              onClick={onClose}
              tabIndex={0}
              css={css`
                cursor: pointer;
              `}
            >
              <Icon name="closeBox" size="18" color="grey030" />
            </span>
          ) : (
            onVaildate()
          )}
        </span>
      </div>
    </div>
  );
};

export default Input;
