import { css } from '@emotion/react';

import Spinner from 'src/components/common/Spinner';
import { useHotProductList } from 'src/modules/product';
import HotListItem from './HotListItem';

const hotList = [
  {
    productName: 'test1',
    img:
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    shopName: 'testshop',
    price: 40000,
  },
  {
    productName: 'test2',
    img:
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    shopName: 'testshop2',
    price: 3000,
  },
  {
    productName: 'test3',
    img:
      'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw',
    shopName: 'testshop',
    price: 10000,
  },
];

const HotList = () => {
  //const { data: hotList, isLoading } = useHotProductList();
  console.log('hot');
  return (
    <div
      css={(theme) => css`
        ${theme.commonStyle.flexCenter}
        justify-content: space-between;
      `}
    >
      {
        /* isLoading ? (
        <Spinner />
      ) : ( */
        hotList &&
          hotList.map((v) => (
            <HotListItem
              key={v.productName}
              productName={v.productName}
              img={v.img}
              shopName={v.shopName}
              price={v.price}
            />
          ))
        /* ) */
      }
    </div>
  );
};

export default HotList;
