import { css } from '@emotion/react';
import newShops from '../mock';
import SearchShopItem from './SearchShopItem';

const SearchProductList = () => {
  console.log('hihi');
  return (
    <ul
      css={(theme) => css`
        ${theme.commonStyle.flexCenter};
        flex-direction: column;
      `}
    >
      {newShops.map((newShop) => (
        <SearchShopItem
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
