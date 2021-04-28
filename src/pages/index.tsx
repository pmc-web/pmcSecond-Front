import { css } from '@emotion/react';

import Layout from 'src/components/common/layout/Layout';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Container from 'src/components/common/layout/Container';
import HotList from 'src/components/product/hotList/HotList';
import CategoryList from 'src/components/category/CategoryList';
import HotShopList from 'src/components/shop/hotShop/HotShopList';
import NewShopList from 'src/components/shop/newShop/NewShopList';

const IndexPage = () => {
  console.log('hihi');
  return (
    <Layout leftIcon="menu" rightIcon={['search', 'alarm']}>
      <Container
        style={css`
          margin-top: 2rem;
          margin-bottom: 2.5rem;
        `}
      >
        <div
          css={css`
            height: 5rem;
            width: 100%;
            background-color: green;
          `}
        >
          banner
        </div>
      </Container>
      <Container
        style={css`
          margin-bottom: 1.8rem;
        `}
      >
        <HotList />
      </Container>
      <HorizontalDivider />
      <Container
        style={css`
          margin-top: 1.8rem;
          margin-bottom: 1.8rem;
        `}
      >
        <CategoryList />
      </Container>
      <HorizontalDivider />
      <Container
        style={css`
          margin-top: 1.8rem;
          margin-bottom: 1.8rem;
        `}
      >
        <HotShopList />
      </Container>
      <HorizontalDivider />
      <Container
        style={css`
          margin-top: 1.8rem;
          margin-bottom: 1.8rem;
        `}
      >
        <NewShopList />
      </Container>
    </Layout>
  );
};

export default IndexPage;
