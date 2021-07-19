import { css } from '@emotion/react';
import ProductItem from './ProductItem';

const data = [{ id: 1 }, { id: 2 }];

const ProductList = () => (
  <ul
    css={css`
      padding: 0 1.2em;
    `}
  >
    {data.map((item) => (
      <ProductItem key={item.id} />
    ))}
  </ul>
);

export default ProductList;
