import { css, Theme } from '@emotion/react';
import Icon from './Icon';

type SelectProps = {
  option: string[];
  keys: string[];
  placeholder?: string;
  style?: ReturnType<typeof css>;
};

const Select = ({ option, keys, placeholder, style: selectss }: SelectProps) => (
  <div css={[conatinerCss, selectss]}>
    <select>
      {placeholder && (
        <option value="" hidden selected disabled>
          {placeholder}
        </option>
      )}
      {keys.map((item, index) => (
        <option key={item} selected={!placeholder && index === 0} value={item}>
          {option[index]}
        </option>
      ))}
    </select>
    <div>
      <Icon name="downArrow" size="8" />
    </div>
  </div>
);

const conatinerCss = (theme: Theme) => css`
  position: relative;
  select {
    height: 30px;
    padding: 0 50px 0 20px;
    margin: 0 9px;
    ${theme.fontSize.subtitle3}
    border: 1px solid ${theme.color.purple050};
    border-radius: 6px;
    ${theme.commonStyle.flexCenter}

    -webkit-appearance: none; /* 크롬 화살표 없애기 */
    -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
    appearance: none; /* 화살표 없애기 */
  }
  div {
    position: absolute;
    top: calc(50% - 8px);
    right: 20%;
  }
`;

export default Select;
