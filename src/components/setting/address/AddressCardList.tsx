import AddressCardItem from './AddressCardItem';

const data = [
  {
    id: 1,
    title: '회사 1',
    mainAddress: '서울특별시 영등포구 여의대로 14 KT여의도타워 14층 A회사',
    detailAdress: '상세주소',
    phone: '010-1234-1234',
  },
  {
    id: 2,
    title: '우리집',
    mainAddress: '서울특별시 영등포구 여의대로 14 KT여의도타워 14층 A회사',
    detailAdress: '상세주소',
    phone: '010-3412-1234',
  },
];

const AddressCardList = () => (
  <ul>
    {data.map((item) => (
      <AddressCardItem
        key={item.id}
        title={item.title}
        mainAddress={item.mainAddress}
        detailAdress={item.detailAdress}
        phone={item.phone}
      />
    ))}
  </ul>
);

export default AddressCardList;
