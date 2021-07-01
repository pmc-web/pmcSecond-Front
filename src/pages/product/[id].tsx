import { css } from '@emotion/react';

import ProductDesc from 'src/components/product/detail/ProductDesc';
import ProductInfo from 'src/components/product/detail/ProductInfo';
import ProductQnA from 'src/components/product/detail/ProductQnA';
import ProductReview from 'src/components/product/detail/ProductReview';

import Icon from 'src/components/common/Icon';
import Tab from 'src/components/common/tab/Tab';
import Button from 'src/components/common/Button';

const ProductDetail = () => {
  console.log('200');
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw"
        alt="test"
        css={imageCss}
      />
      <ProductDesc />
      <Tab>
        <Tab.TabItem label="상품 정보">
          <ProductInfo />
        </Tab.TabItem>
        <Tab.TabItem label="리뷰">
          <ProductReview />
        </Tab.TabItem>
        <Tab.TabItem label="문의/안내">
          <ProductQnA />
        </Tab.TabItem>
      </Tab>
      <div css={purchaseButtonContainer}>
        <Icon name="wishOff" size="1.2rem" />
        <Button type="primary" htmlType="button" size="large">
          구매하기
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;

const imageCss = css`
  width: 100vw;
  max-height: 60vh;
`;

const purchaseButtonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem;
  > svg {
    margin: 0 1.3rem;
  }
  > button {
    min-height: 2.5rem;
    border-radius: 0.4rem;
  }
`;
