import { css } from '@emotion/react';
import Button from 'src/components/common/Button';
import Container from 'src/components/common/layout/Container';
import Text from 'src/components/common/Text';
import HorizontalDivider from 'src/components/common/HorizontalDivider';

const ProductQnA = () => {
  console.log('test');
  return (
    <div css={wrapperCss}>
      <Container style={containerCss}>
        <Text.Title level={3} size="subtitle2">
          상품 문의
        </Text.Title>
        <div css={textContainer}>
          <Text size="caption1" color="grey070">
            리뷰는 이렇게 작성해주세요!
          </Text>
          <Text size="caption1" color="grey070">
            · 상품의 사이즈 및 옵션에 대해 궁금해요.
          </Text>
          <Text size="caption1" color="grey070">
            · 상품 재입고가 언제 되는지 궁금해요.
          </Text>
        </div>
        <Button style={buttonCss} htmlType="button" size="large" type="ghost">
          문의하기
        </Button>
      </Container>
      <HorizontalDivider />
      <Container style={containerCss}>
        <Text.Title level={3} size="subtitle2">
          배송 / 결제 / 교환 / 반품 안내
        </Text.Title>
        <div css={textContainer}>
          <Text size="caption1" color="grey070">
            1. 무통장 입금 후 2시간 이내에 입금 확인 메시지를 받지 못하신 경우에는 고객센터로 연락주시기 바랍니다.
          </Text>
        </div>
        <div css={textContainer}>
          <Text size="caption1" color="grey070">
            2. 무통장 입금 시, 주문 금액과 입금 금액이 다른 경우, 주문 시 기재한 입금자 성함과 실제 입금자 성함이 다른
            경우 등에는 배송이 지연됩니다.
          </Text>
        </div>
        <div css={textContainer}>
          <Text size="caption1" color="grey070">
            3. 주문 후 24시간 이내에 결제과 확인되지 않을 경우, 주문은 자동으로 취소됩니다.
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default ProductQnA;

const wrapperCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const containerCss = css`
  margin-bottom: 1.9rem;
`;

const textContainer = css`
  margin: 0.55rem 0;
`;

const buttonCss = css`
  flex: 1;
  max-height: 2.85rem;
  min-height: 2.85rem;
  border-radius: 0.35rem;
`;
