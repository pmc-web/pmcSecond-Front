import MyReviewItem from './MyReviewItem';

const data = [
  {
    id: 1,
    productName: '상품명',
    productOption: '상품 선택 옵션',
    commnet: '실물이 더 귀여워요!! 다른 컬러도 사고싶어요!',
  },
  {
    id: 2,
    productName: '상품명',
    productOption: '상품 선택 옵션',
    Comment: '실물이 더 귀여워요!! 다른 컬러도 사고싶어요!',
  },
];

const MyReviewList = () => (
  <ul>
    {data.map((item) => (
      <MyReviewItem
        key={item.id}
        productName={item.productName}
        productOption={item.productOption}
        commnet={item.commnet}
      />
    ))}
  </ul>
);

export default MyReviewList;
