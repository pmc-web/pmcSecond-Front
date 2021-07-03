import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Container from 'src/components/common/layout/Container';
import ContainerHeader from 'src/components/search/ContainerHeader';
import CategoryList from 'src/components/category/CategoryList';
import SearchProductList from './SearchShopList';

const SearchShop = () => {
  const router = useRouter();

  return (
    <Container
      style={css`
        width: 100%;
        margin-bottom: 1.8rem;
      `}
    >
      <ContainerHeader title="상품 검색 결과" count="5" />

      <SearchProductList />
    </Container>
  );
};

export default SearchShop;
