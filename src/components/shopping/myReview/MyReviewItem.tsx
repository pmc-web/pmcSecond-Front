import { css, Theme } from '@emotion/react';
import Rating from 'src/components/common/Rating';
import Button from 'src/components/common/Button';

type MyReviewItemProps = {
  productName: string;
  productOption: string;
  comment: string;
  rating: number;
};

const MyReviewItem = ({ productName, productOption, comment, rating }: MyReviewItemProps) => (
  <div css={containerCss}>
    <div className="titleWrap">
      <div className="imageWrap" />
      <div>
        <p>{productName}</p>
        <p>{productOption}</p>
      </div>
    </div>
    <Rating rating={rating} />
    <p className="reviewText">{comment}</p>
    <div className="buttonWrap">
      <Button htmlType="button" type="ghost">
        수정
      </Button>

      <Button htmlType="button" type="primary">
        삭제
      </Button>
    </div>
  </div>
);

const containerCss = (theme: Theme) => css`
  padding: 30px 1.2em;
  border-bottom: 1px solid ${theme.color.grey030};
  .titleWrap {
    display: flex;
    align-items: center;

    > .imageWrap {
      width: 40px;
      height: 40px;
      background: ${theme.color.grey020};
      margin-right: 10px;
    }
    > div:nth-child(2) {
      > p:nth-child(1) {
        ${theme.fontSize.subtitle3}
        color: ${theme.color.black};
      }
      > p:nth-child(2) {
        ${theme.fontSize.caption1}
        color: ${theme.color.grey050};
      }
    }
  }

  > ul {
    margin-top: 20px;
  }

  .reviewText {
    ${theme.fontSize.caption1};
    color: ${theme.color.black};
    margin: 8px 0 20px;
  }

  .buttonWrap {
    display: flex;
    button {
      height: 30px;
      min-height: 30px;
      border-radius: 3px;
    }
    button:nth-child(1) {
      width: 46px;
    }
    button:nth-child(2) {
      width: 46px;
      margin-left: 10px;
    }
  }
`;

export default MyReviewItem;
