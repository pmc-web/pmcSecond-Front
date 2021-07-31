import OrderItem from 'src/components/shopping/order/OrderItem';

const data = [
  { id: 1, productName: '상품명', productCount: 4, productOption: '상품 선택 옵션' },
  { id: 2, productName: '상품명', productCount: 2, productOption: '상품 선택 옵션' },
];

const OrderItemList = () => (
  <>
    <ul>
      {data.map((item) => (
        <OrderItem
          key={item.id}
          productName={item.productName}
          productCount={item.productCount}
          productOption={item.productOption}
        />
      ))}
    </ul>
  </>
);

export default OrderItemList;
