import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from 'src/assets/theme';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Icon from 'src/components/common/Icon';
import PopularSearch from 'src/components/search/PopularSearch';
import RecentSearch from 'src/components/search/RecentSearch';
import SearchInput from 'src/components/common/SearchInput';

const SearchIndex = () => {
  const router = useRouter();

  const [value, setValue] = useState('');
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = ev.target;
    setValue(inputValue);
  };
  const onGoBack = () => router.back();

  const onKeydown = (ev: React.KeyboardEvent) => {
    if (ev.keyCode === 13) {
      return router.push({
        pathname: '/search/[searchQuery]',
        query: { searchQuery: value },
      });
    }
  };

  const onClickIcon = () =>
    router.push({
      pathname: '/search/[searchQuery]',
      query: { searchQuery: value },
    });

  return (
    <section css={wrapperCss}>
      <div css={searchFormCss}>
        <div role="button" tabIndex={0} onClick={onGoBack}>
          <Icon name="close" size="16" />
        </div>
        <div css={inputBoxCss}>
          <SearchInput
            style={css`
              height: 2rem;
            `}
            onClickIcon={onClickIcon}
            onChange={onChange}
            onKeydown={onKeydown}
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
