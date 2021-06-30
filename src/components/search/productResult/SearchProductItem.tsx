import { css } from '@emotion/react';
import Text from 'src/components/common/Text';
import priceFormatter from 'src/utils/priceFormatter';

type SearchProductItemProps = {
  img: string;
  shopName: string;
  price: number;
};
const SearchProductItem = ({ img, shopName, price }: SearchProductItemProps) => (
  <li
    css={css`
      margin-bottom: 1.05rem;
    `}
  >
    <img
      src={img}
      alt={shopName}
      css={css`
        border-radius: 6px;
        width: 42vw;
        height: 13.3vh;
      `}
    />
    <Text.Title level={3} size="caption1">
      {shopName}
    </Text.Title>
    <Text.Title level={5} size="subtitle3">
      {`${priceFormatter(price)}원`}
    </Text.Title>
  </li>
);

export default SearchProductItem;
