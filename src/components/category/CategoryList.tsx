import { css } from '@emotion/react';
import CategoryItem from './CategoryItem';
import category from './mock';

const CategoryList = () => (
  <ul
    css={(theme) => css`
      ${theme.commonStyle.flexCenter}
      justify-content: space-between;
      flex-wrap: wrap;
    `}
  >
    {category.map((v) => (
      <CategoryItem key={v.name} img={v.img} name={v.name} />
    ))}
  </ul>
);

export default CategoryList;
