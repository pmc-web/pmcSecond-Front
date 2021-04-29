import { css } from '@emotion/react';
import Text from 'src/components/common/Text';

type NewShopItemProps = {
  img: string;
  shopName: string;
  category: string;
};
const NewShopItem = ({ img, shopName, category }: NewShopItemProps) => (
  <li>
    <img
      src={img}
      alt={shopName}
      css={css`
        width: 42vw;
        height: 42vw;
      `}
    />
    <Text.Title level={5} size="subtitle3">
      {shopName}
    </Text.Title>
    <Text size="caption1" color="grey050">
      {category}
    </Text>
  </li>
);

export default NewShopItem;
