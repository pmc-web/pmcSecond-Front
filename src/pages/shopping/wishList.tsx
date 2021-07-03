import TopBar from 'src/components/common/layout/TopBar';
import Tab from 'src/components/common/tab/Tab';
import WishItem from 'src/components/shopping/wish/WishItem';
import WishCount from 'src/components/shopping/wish/WishCount';

const productData = [
  { id: 1, name: '상품명', option: '상품 선택 옵션', price: '19,800원' },
  { id: 2, name: '상품명', option: '상품 선택 옵션', price: '29,800원' },
  { id: 3, name: '상품명', option: '상품 선택 옵션', price: '39,800원' },
];

const shopData = [
  { id: 1, name: '쇼핑몰' },
  { id: 2, name: '쇼핑몰' },
];

const wishList = () => (
  <>
    <TopBar title="찜한내역" leftIcon="leftArrow" />
    <Tab>
      <Tab.TabItem label="상품">
        {/* 찜한 상품 */}
        <WishCount count={productData.length} />
        {/* 찜한 리스트  */}
        {productData.map((item) => (
          <WishItem key={item.id} name={item.name} option={item.option} price={item.price} product />
        ))}
      </Tab.TabItem>
      <Tab.TabItem label="쇼핑몰">
        {/* 찜한 상품 */}
        <WishCount count={shopData.length} />
        {shopData.map((item) => (
          <WishItem key={item.id} name={item.name} />
        ))}
      </Tab.TabItem>
    </Tab>
  </>
);

export default wishList;
