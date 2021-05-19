import { css } from '@emotion/react';
import Text from 'src/components/common/Text';
import { ProductType } from './types';

const ProductItem = ({ name, price, img }: ProductType) => (
  <div css={wrapperCss}>
    <img src={img} css={imgCss} alt={name} />
    <div css={containerCss}>
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

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const imgCss = css`
  width: 100%;
  height: 14vh;
  object-fit: cover;
`;

const containerCss = css`
  margin-top: 0.3rem;
  margin-bottom: 0.12rem;
`;
