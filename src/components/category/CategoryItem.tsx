import { css } from '@emotion/react';
import Text from '../common/Text';

type CategoryItemProps = {
  img: string;
  name: string;
};

const CategoryItem = ({ img, name }: CategoryItemProps) => (
  <li
    css={(theme) => css`
      width: 18vw;
      margin: 0 0.2rem;
      ${theme.commonStyle.flexCenter}
    `}
  >
    <div>
      <img
        css={css`
          height: 12vw;
          width: 12vw;
          object-fit: cover;
        `}
        src={img}
        alt={name}
      />
      <div
        css={(theme) => css`
          ${theme.commonStyle.flexCenter}
        `}
      >
        <Text size="caption1">{name}</Text>
      </div>
    </div>
  </li>
);

export default CategoryItem;
