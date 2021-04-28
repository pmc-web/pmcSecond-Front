import { css } from '@emotion/react';
import Text from '../common/Text';

type CategoryItemProps = {
  img: string;
  name: string;
};

const CategoryItem = ({ img, name }: CategoryItemProps) => (
  <li
    css={(theme) => css`
      width: 20vw;
      margin: 0 0.2rem;
      ${theme.commonStyle.flexCenter}
    `}
  >
    <div>
      <img
        css={css`
          height: 3rem;
          width: 3rem;
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
