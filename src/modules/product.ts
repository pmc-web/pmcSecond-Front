import axios from 'axios';
import { useQuery } from 'react-query';
import { HotListItemType } from 'src/components/product/hotList/type';

export const useHotProductList = () =>
  useQuery<HotListItemType[]>(['product', 'hotlist'], async () => {
    const res = await axios.get('idk/hotlist');
    return res.data;
  });

export const idk = null;
