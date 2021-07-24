import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from 'src/assets/theme';
import Icon from 'src/components/common/Icon';
import Tab from 'src/components/common/tab/Tab';
import SearchProducts from 'src/components/search/productResult/SearchProducts';
import SearchShops from 'src/components/search/shopResult/SearchShops';
import SearchInput from 'src/components/common/SearchInput';

const SearchResult = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = ev.target;
    setValue(inputValue);
  };

  const onGoBack = () => router.back();

  const onKeydown = (ev: React.KeyboardEvent) => {
    return;
  };

  console.log(router);

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
            onChange={onChange}
            onKeydown={onKeydown}
            value={value}
            placeholder="마켓 또는 상품을 검색해보세요."
          />
        </div>
      </div>
      <Tab>
        <Tab.TabItem label="상품">
          <SearchProducts />
        </Tab.TabItem>
        <Tab.TabItem label="쇼핑몰">
          <SearchShops />
        </Tab.TabItem>
      </Tab>
    </section>
  );
};

export default SearchResult;

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
