import MyReviewItem from './MyReviewItem';

const data = [
  {
    id: 1,
    productName: '상품명',
    productOption: '상품 선택 옵션',
    comment: '실물이 더 귀여워요!! 다른 컬러도 사고싶어요!',
    rating: 4,
  },
  {
    id: 2,
    productName: '상품명',
    productOption: '상품 선택 옵션',
    comment: '실물이 더 귀여워요!! 다른 컬러도 사고싶어요!',
    rating: 3,
  },
];

const MyReviewList = () => (
  <ul>
    {data.map((item) => (
      <MyReviewItem
        key={item.id}
        productName={item.productName}
        productOption={item.productOption}
        comment={item.comment}
        rating={item.rating}
      />
    ))}
  </ul>
);

export default MyReviewList;
