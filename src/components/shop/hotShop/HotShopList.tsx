import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Button from 'src/components/common/Button';
import HotShopItem from './HotShopItem';
import hotShops from './mock';

const HotShopList = () => {
  const [topThree, setTopThree] = useState(hotShops.slice(0, 3));
  /* useEffect(() => {
    setTopThree(hotShops.slice(0, 3));
  }, [hotShops]); */
  return (
    <div>
      <ul>
        {topThree.map((v, i) => (
          <HotShopItem key={v.shopName} images={v.images} ranking={i + 1} shopName={v.shopName} tags={v.tags} />
        ))}
      </ul>
      <div
        css={(theme) => css`
          margin-top: 1.85rem;
          ${theme.commonStyle.flexCenter}
        `}
      >
        <Button htmlType="button" type="ghost">
          요즘 뜨는 마켓 더보기
        </Button>
      </div>
    </div>
  );
};

export default HotShopList;
