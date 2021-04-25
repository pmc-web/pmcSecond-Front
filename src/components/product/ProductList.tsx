import ProductItem from './ProductItem';
import { ProductType } from './types';

type ProductListProps = {
  productList: ProductType[];
};

const ProductList = ({ productList }: ProductListProps) => (
  <div>
    {productList.map((v) => (
      <ProductItem key={v.name} name={v.name} img={v.img} price={v.price} />
    ))}
  </div>
);

export default ProductList;
