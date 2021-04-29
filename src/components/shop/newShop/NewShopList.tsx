import { css } from '@emotion/react';
import newShops from './mock';
import NewShopItem from './NewShopItem';

const NewShopList = () => {
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
        <NewShopItem
          key={`${newShop.shopName}_${newShop.category}`}
          category={newShop.category}
          img={newShop.img}
          shopName={newShop.shopName}
        />
      ))}
    </ul>
  );
};

export default NewShopList;
