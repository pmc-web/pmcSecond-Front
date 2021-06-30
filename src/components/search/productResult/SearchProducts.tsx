import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Container from 'src/components/common/layout/Container';
import ContainerHeader from 'src/components/search/ContainerHeader';
import Button from 'src/components/common/Button';
import SearchProductList from './SearchProductList';
import theme from 'src/assets/theme';

const SearchProducts = () => {
  const router = useRouter();
  const onClickFilter = (valueType: string) => () =>
    router.push({
      pathname: '/search/filter/[filterQuery]',
      query: { filterQuery: valueType, searchQuery: router.query.searchQuery },
    });
  return (
    <Container
      style={css`
        margin-bottom: 1.8rem;
      `}
    >
      <ContainerHeader title="상품 검색 결과" count="5" />
      <div css={filterCss}>
        <Button htmlType="button" size="small" style={chipCss} onClick={onClickFilter('카테고리')}>
          카테고리
        </Button>
        <Button htmlType="button" size="small" style={chipCss} onClick={onClickFilter('가격대')}>
          가격대
        </Button>
        <Button htmlType="button" size="small" style={chipCss} onClick={onClickFilter('색상')}>
          색상
        </Button>
      </div>
      <SearchProductList />
    </Container>
  );
};

export default SearchProducts;

const filterCss = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.05rem;
`;

const chipCss = css`
  width: 20%;
  margin-right: 0.6rem;
  border: 1px solid ${theme.color.grey030};
  border-radius: 6px;
  ${theme.fontSize.body2};
  color: ${theme.color.grey080};
`;
