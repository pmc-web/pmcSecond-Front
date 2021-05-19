import { css } from '@emotion/react';
import ProductItem from './ProductItem';
import { ProductType } from './types';

type ProductListProps = {
  productList: ProductType[];
};

const ProductList = ({ productList }: ProductListProps) => (
  <div css={wrapperCss}>
    {productList.map((v) => (
      <ProductItem key={v.name} name={v.name} img={v.img} price={v.price} />
    ))}
  </div>
);

export default ProductList;

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2rem;
`;
