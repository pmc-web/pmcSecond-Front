import { css } from '@emotion/react';
import Text from 'src/components/common/Text';
import getDateString from 'src/utils/getDateString';

type ReviewItemProps = {
  review: { title: string; reviewer: string; desc: string; createdDate: Date; images?: string[] };
};

const ReviewItem = ({ review }: ReviewItemProps) => (
  <div css={reviewItemCss} key={review.title}>
    <Text.Title level={5} size="body2">
      {review.title}
    </Text.Title>
    <Text color="grey050" size="caption1">{`${review.reviewer}/${getDateString(review.createdDate)}`}</Text>
    <Text size="caption1">{review.desc}</Text>
    {review.images && review.images.length > 0 && (
      <div css={imageContainer(review.images.length)}>
        {review.images.map((image, i) => (
          <img key={image} src={image} alt={`${review.title}_${i}`} />
        ))}
      </div>
    )}
  </div>
);

export default ReviewItem;

const reviewItemCss = css`
  margin: 1.8rem 0;
  p {
    :last-of-type {
      margin: 0.8rem 0;
    }
  }
`;

const imageContainer = (itemLength: number) => css`
  display: flex;
  justify-content: space-between;
  width: ${25 * itemLength}%;
  & > img {
    width: calc(95% / ${itemLength});
  }
`;
