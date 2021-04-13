import Text from 'src/components/common/Text';

type ShopItemProps = {
  img: string;
  shopName: string;
  category: string;
};

const ShopItem = ({ img, shopName, category }: ShopItemProps) => (
  <div>
    <div>
      <img src={img} alt={shopName} />
    </div>
    <Text.Title level={5}>{shopName}</Text.Title>
    <Text>{category}</Text>
  </div>
);

export default ShopItem;
