import { css } from '@emotion/react';
import Text from 'src/components/common/Text';

type HotShopItemProps = {
  ranking: number;
  shopName: string;
  tags: string[];
  images: string[];
};

const HotShopItem = ({ ranking, shopName, tags, images }: HotShopItemProps) => (
  <li
    css={(theme) => css`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid ${theme.color.grey020};
    `}
  >
    <span
      css={css`
        display: flex;
      `}
    >
      <span
        css={css`
          margin-right: 0.8rem;
        `}
      >
        <Text color="purple050" size="subtitle2">
          {ranking}
        </Text>
      </span>
      <span>
        <Text.Title level={4} size="subtitle2">
          {shopName}
        </Text.Title>
        <Text size="caption1" color="grey050">
          {tags.join('·')}
        </Text>
      </span>
    </span>
    <span
      css={(theme) => css`
        ${theme.commonStyle.flexCenter};
        justify-content: space-between;
        width: 31.5vw;
      `}
    >
      {images.slice(0, 2).map((image) => (
        <img
          css={css`
            height: 20vw;
            width: 15vw;
          `}
          key={image}
          src={image}
          alt={shopName}
        />
      ))}
    </span>
  </li>
);

export default HotShopItem;
