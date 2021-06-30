import { css } from '@emotion/react';
import newShops from '../mock';
import SearchProductItem from './SearchProductItem';

const SearchProductList = () => {
  console.log('hihi');
  return (
    <ul
      css={(theme) => css`
        ${theme.commonStyle.flexCenter};
        justify-content: space-between;
        flex-wrap: wrap;
      `}
    >
      {newShops.map((newShop) => (
        <SearchProductItem
          key={`${newShop.shopName}_${newShop.price}`}
          price={newShop.price}
          img={newShop.img}
          shopName={newShop.shopName}
        />
      ))}
    </ul>
  );
};

export default SearchProductList;
