import TopBar from 'src/components/common/layout/TopBar';
import MyReviewList from 'src/components/shopping/myReview/MyReviewList';

const MyReview = () => (
  <>
    <TopBar title="작성한 리뷰" leftIcon="leftArrow" />
    <MyReviewList />
  </>
);

export default MyReview;
