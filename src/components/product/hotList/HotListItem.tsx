import { css } from '@emotion/react';
import Link from 'next/link';
import priceFormatter from 'src/utils/priceFormatter';
import Text from '../../common/Text';
import { HotListItemType } from './type';

type HotListItemProps = HotListItemType;

const HotListItem = ({ img, shopName, productName, price }: HotListItemProps) => (
  <Link href="/productName">
    <div
      css={css`
        width: 30%;
      `}
    >
      <img
        src={img}
        alt={productName}
        css={css`
          width: 100%;
          height: 10vh;
          object-fit: cover;
        `}
      />
      <div>
        <Text size="caption2" color="grey050">
          {shopName}
        </Text>
      </div>
      <div>
        <Text size="caption1">{productName}</Text>
      </div>
      <div>
        <Text size="subtitle3">{priceFormatter(price)}</Text>
      </div>
    </div>
  </Link>
);

export default HotListItem;
