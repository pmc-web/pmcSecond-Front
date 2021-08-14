import { useState, useEffect } from 'react';

import { useDeletAdress, useGetAdressList } from 'src/modules/auth';
import AddressCardItem from './AddressCardItem';

type ItemTypes = {
  id: number;
  address: string;
  detail: string;
  addressName: null | string;
  phone?: string;
};

const AddressCardList = () => {
  const mutaiton = useGetAdressList();
  const delMutaion = useDeletAdress();
  const [data, setData] = useState([]);
  // 주소지역 가져오기
  const getAddressList = async () => {
    try {
      const result = await mutaiton.mutateAsync({ id: 10 });
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  // 주소 삭제하기
  const onDelete = async (addressId: number): Promise<void> => {
    try {
      await delMutaion.mutateAsync({ id: 10, addresId: addressId });
      getAddressList();
    } catch (error) {
      console.error(error);
      window.alert(error.response?.data.message);
    }
  };
  useEffect(() => {
    getAddressList();
  }, []);
  return (
    <ul>
      {data.map((item: ItemTypes) => (
        <AddressCardItem
          key={item.id}
          title={item.addressName || '미구현'}
          mainAddress={item.address}
          detailAdress={item.detail}
          phone={item.phone || '010-1234-5678'}
          addressId={item.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default AddressCardList;
