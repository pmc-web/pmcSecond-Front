import { css } from '@emotion/react';
import Tab from 'src/components/common/tab/Tab';
import ProductInfo from 'src/components/product/detail/ProductInfo';

const ProductDetail = () => {
  console.log('200');
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw"
        alt="test"
        css={imageCss}
      />
      <ProductInfo />
      <Tab>
        <Tab.TabItem label="상품 정보">test1</Tab.TabItem>
        <Tab.TabItem label="리뷰">test2</Tab.TabItem>
        <Tab.TabItem label="문의/안내">test3</Tab.TabItem>
      </Tab>
    </div>
  );
};

export default ProductDetail;

const imageCss = css`
  width: 100vw;
  max-height: 60vh;
`;
