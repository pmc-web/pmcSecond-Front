import { css, Theme } from '@emotion/react';
import Text from '../../common/Text';

type ReviewListItemProps = {
  reviewer: string;
  date: Date;
  desc: string;
};

const ReviewListItem = ({ reviewer, date, desc }: ReviewListItemProps) => {
  console.log('test');
  return (
    <div css={wrapperCss}>
      <div>
        <Text.Title level={3} size="subtitle4">
          리뷰작성자
        </Text.Title>
        <Text size="caption2" color="grey040">
          2021.05.11
        </Text>
      </div>
      <div>
        <Text size="caption1" color="grey050">
          tttttttttttttttttttttttttttttttttttt
        </Text>
      </div>
    </div>
  );
};

export default ReviewListItem;

const wrapperCss = (theme: Theme) => css`
  height: 7rem;
  border: solid 1px ${theme.color.grey020};
  border-radius: 0.3rem;
  padding: 1.25rem;
  > div:first-of-type {
    display: flex;
    align-items: center;
    > h3 {
      margin-right: 0.5rem;
    }
  }
`;
