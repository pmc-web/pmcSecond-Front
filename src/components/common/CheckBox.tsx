import { css } from '@emotion/react';
import { ReactEventHandler } from 'react';
import { FontSizeType } from 'src/interfaces/emotion';
import Icon from './Icon';

type CheckBoxProps = {
  onClick: ReactEventHandler;
  checked: boolean;
  title?: string;
  id: string;
  font?: keyof FontSizeType;
};

// const [check, setCheck] = useState({ test: false, test2: false });

//   const { id, checked } = ev.target as HTMLInputElement;
//     setCheck((prev) => ({ ...prev, [id]: checked }));
//   };

// <CheckBox id="test" checked={check.test} onClick={onClick} />
// <CheckBox id="test2" checked={check.test2} onClick={onClick} />

const CheckBox = ({ title, id, font = 'body1', onClick, checked }: CheckBoxProps) => (
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
      id={id}
      onClick={onClick}
    />
    <label
      css={css`
        cursor: pointer;
        margin-right: 1em;
      `}
      htmlFor={id}
    >
      {checked ? (
        <Icon name="checkBox" size="24" color="purple050" />
      ) : (
        <Icon name="checkBox" size="24" color="grey030" />
      )}
    </label>
    <label
      htmlFor={id}
      css={(theme) =>
        css`
          cursor: pointer;
          user-select: none;
          ${theme.fontSize[font]}
        `
      }
    >
      {title}
    </label>
  </div>
);

export default CheckBox;
