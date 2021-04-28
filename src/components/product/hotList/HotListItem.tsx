import { css } from '@emotion/react';
import Link from 'next/link';
import priceFormatter from 'src/utils/priceFormatter';
import Text from '../../common/Text';
import { HotListItemType } from './type';

type HotListItemProps = HotListItemType;

const HotListItem = ({ img, shopName, productName, price }: HotListItemProps) => (
  <li
    css={css`
      //width: 30%;
    `}
  >
    <Link href="/productName">
      <a>
        <img
          src={img}
          alt={productName}
          css={css`
            width: 26vw;
            height: 26vw;
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
      </a>
    </Link>
  </li>
);

export default HotListItem;
