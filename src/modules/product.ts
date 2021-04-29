import axios from 'axios';
import { useQuery } from 'react-query';
import { HotListItemType } from 'src/components/product/hotList/type';

export const getHotProductApi = async () => {
  const res = await axios.get('idk/hotlist');
  return res.data;
};

export const useHotProductList = () => useQuery<HotListItemType[]>(['product', 'hotlist'], getHotProductApi);

export const idk = null;
