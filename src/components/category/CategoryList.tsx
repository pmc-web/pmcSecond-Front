import { css } from '@emotion/react';
import CategoryItem from './CategoryItem';
import category from './mock';

const CategoryList = () => (
  <div
    css={(theme) => css`
      ${theme.commonStyle.flexCenter}
      justify-content: space-between;
      flex-wrap: wrap;
    `}
  >
    {category.map((v) => (
      <CategoryItem key={v.name} img={v.img} name={v.name} />
    ))}
  </div>
);

export default CategoryList;
