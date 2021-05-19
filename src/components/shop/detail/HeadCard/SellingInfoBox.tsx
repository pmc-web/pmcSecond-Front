import { css } from '@emotion/react';
import Text from 'src/components/common/Text';

const SellingInfoBox = () => {
  const info = {
    productCount: 110,
    reviewCount: 20,
    satisfactionRate: 20,
  };
  return (
    <div css={flexCss}>
      <span>
        <Text size="subtitle2" color="grey070">
          {info.productCount}
        </Text>
        <Text size="caption1" color="grey040">
          상품 개수
        </Text>
      </span>
      <span>
        <Text size="subtitle2" color="grey070">
          {info.reviewCount}
        </Text>
        <Text size="caption1" color="grey040">
          리뷰 수
        </Text>
      </span>
      <span>
        <Text size="subtitle2" color="grey070">
          {info.satisfactionRate}
        </Text>
        <Text size="caption1" color="grey040">
          구매만족도
        </Text>
      </span>
    </div>
  );
};

export default SellingInfoBox;

const flexCss = css`
  padding: 0.5rem 1rem;
  display: flex;
  > span {
    width: 5rem;
  }
`;
