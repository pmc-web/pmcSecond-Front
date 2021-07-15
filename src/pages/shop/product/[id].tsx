import { css } from '@emotion/react';
import Container from 'src/components/common/layout/Container';
import Text from 'src/components/common/Text';
import FilterButtonGroup from 'src/components/filter/FilterButtonGroup';
import ProductList from 'src/components/product/ProductList';
import HeadCard from 'src/components/shop/detail/HeadCard';

const ShopProduct = () => {
  console.log('test');
  return (
    <>
      <HeadCard title="판매 중인 상품" />
      <Container style={containerCss}>
        <div css={searchCountTextCss}>
          <Text.Title level={5} size="subtitle2">
            상품 검색 결과
          </Text.Title>
          <Text size="body1">14</Text>
        </div>
        <FilterButtonGroup containerStyle={buttonGroupCss} />
        <ProductList
          productList={[
            {
              name: 'test',
              price: 1200,
              img:
                'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
            },
            {
              name: 'test',
              price: 1200,
              img:
                'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
            },
            {
              name: 'test',
              price: 1200,
              img:
                'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
            },
          ]}
        />
      </Container>
    </>
  );
};

export default ShopProduct;

const containerCss = css`
  margin-top: 1.25rem;
`;

const searchCountTextCss = css`
  display: flex;
  & > p {
    margin-left: 0.2rem;
  }
`;

const buttonGroupCss = css`
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
`;
