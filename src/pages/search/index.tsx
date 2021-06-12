import { css } from '@emotion/react';
import { useState } from 'react';
import theme from 'src/assets/theme';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Icon from 'src/components/common/Icon';
import SearchInput from '../../components/common/SearchInput';
import PopularSearch from './PopularSearch';
import RecentSearch from './RecentSearch';

const SearchIndex = () => {
  const [value, setValue] = useState('');
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = ev.target;
    setValue(inputValue);
  };
  const onInputRemove = () => {
    setValue('');
  };
  return (
    <section css={wrapperCss}>
      <div css={searchFormCss}>
        <div role="button" tabIndex={0} onClick={onInputRemove}>
          <Icon name="close" size="16" />
        </div>
        <div css={inputBoxCss}>
          <SearchInput
            style={css`
              height: 2rem;
            `}
            onChange={onChange}
            value={value}
            placeholder="마켓 또는 상품을 검색해보세요."
          />
        </div>
      </div>
      <RecentSearch />
      <div css={dividerBox}>
        <HorizontalDivider
          style={css`
            width: 90%;
            border-width: 1px;
          `}
        />
      </div>
      <PopularSearch />
    </section>
  );
};

export default SearchIndex;

const wrapperCss = css`
  width: 100%;
`;
const inputBoxCss = css`
  width: 100%;
  margin-left: 1rem;
`;

const searchFormCss = css`
  ${theme.commonStyle.flexCenter};
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 3.1rem;
`;

const dividerBox = css`
  margin: 1rem 0;
  width: 100%;
  ${theme.commonStyle.flexCenter};
`;
