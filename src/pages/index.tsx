import { css } from '@emotion/react';

import Layout from 'src/components/common/layout/Layout';
import HorizontalDivider from 'src/components/common/HorizontalDivider';
import Container from 'src/components/common/layout/Container';
import HotList from 'src/components/product/hotList/HotList';
import CategoryList from 'src/components/category/CategoryList';

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
          margin-top: 1.25rem;
        `}
      >
        <CategoryList />
      </Container>
    </Layout>
  );
};

export default IndexPage;
