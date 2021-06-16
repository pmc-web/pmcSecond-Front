import { css } from '@emotion/react';
import Icon from 'src/components/common/Icon';
import Container from 'src/components/common/layout/Container';
import Rating from 'src/components/common/Rating';
import Text from 'src/components/common/Text';
import priceFormatter from '../../../utils/priceFormatter';

const data = {
  title: '상품명',
  price: 19800,
  rating: 4.5,
};

const ProductInfo = () => {
  const handleLinkClick = () => {
    // TODO: 링크 공유 기능 추가
  };
  return (
    <Container style={wrapperCss}>
      <span>
        <Text.Title level={3} size="body1">
          {data.title}
        </Text.Title>
        <Text size="subtitle1">{priceFormatter(data.price)}</Text>
        <div css={ratingContainerCss}>
          <Rating rating={data.rating} size="1rem" />
          <Text>{data.rating}</Text>
        </div>
      </span>
      <span onClick={handleLinkClick} role="button" tabIndex={0}>
        <Icon name="share" size="1.15rem" />
      </span>
    </Container>
  );
};

export default ProductInfo;

const wrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ratingContainerCss = css`
  display: flex;
  align-items: center;
  & > p {
    margin-left: 0.45rem;
  }
`;
