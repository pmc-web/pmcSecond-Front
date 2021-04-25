import { css } from '@emotion/react';
import Text from 'src/components/common/Text';
import { ProductType } from './types';

const ProductItem = ({ name, price, img }: ProductType) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 40%;
    `}
  >
    <img
      src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" // TODO: 추후 교체{img}
      css={css`
        width: 100%;
        height: 14vh;
        object-fit: cover;
      `}
      alt={name}
    />
    <div
      css={css`
        margin-top: 0.3rem;
        margin-bottom: 0.12rem;
      `}
    >
      <Text.Title level={4} size="caption1">
        {name}
      </Text.Title>
    </div>
    <div>
      <Text size="subtitle3">{price}</Text>
    </div>
  </div>
);

export default ProductItem;
