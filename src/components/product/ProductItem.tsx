import Text from 'src/components/common/Text';

type ProductItemProps = {
  name: string;
  price: string | number;
  img: string;
};

const ProductItem = ({ name, price, img }: ProductItemProps) => (
  <div>
    <div>
      <img src={img} alt={name} />
    </div>
    <div>
      <Text.Title level={4}>{name}</Text.Title>
    </div>
    <div>
      <Text>{price}</Text>
    </div>
  </div>
);

export default ProductItem;
