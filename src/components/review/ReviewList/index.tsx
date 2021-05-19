import { css } from '@emotion/react';
import ReviewListItem from './ReviewListItem';

const ReviewList = () => {
  const mock = new Array(3).fill(0);
  return (
    <div css={wrapperCss}>
      {mock.map((v) => (
        <ReviewListItem key={v} />
      ))}
    </div>
  );
};

export default ReviewList;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
