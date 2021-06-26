import { css, Theme } from '@emotion/react';
import Button from 'src/components/common/Button';

type OrderItemProps = {
  productName: string;
  productCount: number;
  productOption: string;
};

const OrderItem = ({ productName, productCount, productOption }: OrderItemProps) => (
  <li css={containerCss}>
    {/* 타이틀 */}
    <div className="titleWrap">
      <p>배송상태</p>
      <p>삭제</p>
    </div>
    {/* 컨텐츠 영역 */}
    <div className="contentsWrap">
      <div className="imageBox" />
      <div>
        <p>
          {productName} 외 {productCount}건
        </p>
        <p>{productOption}</p>
      </div>
    </div>
    {/* 버튼 영역 */}
    <div className="btnWrap">
      <Button
        htmlType="button"
        size="normal"
        type="ghost"
        // onClick={onRouter}
      >
        교환, 반품 신청
      </Button>
      <Button
        htmlType="button"
        size="normal"
        type="ghost"
        // onClick={onRouter}
      >
        배송 조회
      </Button>
    </div>
    {/* 구매후기 버튼 */}
    <Button
      htmlType="button"
      size="normal"
      type="ghost"
      style={buttonCss()}
      // onClick={onRouter}
    >
      구매 후기 남기기
    </Button>
  </li>
);

const containerCss = (theme: Theme) => css`
  padding: 20px 1.2em 30px;
  border-bottom: 10px solid ${theme.color.grey020};

  .titleWrap {
    ${theme.commonStyle.flexCenter}
    justify-content: space-between;
    p:nth-child(1) {
      ${theme.fontSize.subtitle2}
      color: ${theme.color.black};
    }
    p:nth-child(2) {
      ${theme.fontSize.body2}
      color: ${theme.color.black};
    }
  }

  .contentsWrap {
    display: flex;
    padding: 20px 0;
    .imageBox {
      width: 40px;
      height: 40px;
      background: ${theme.color.grey020};
      margin-right: 10px;
    }

    div:nth-child(2) {
      p:nth-child(1) {
        ${theme.fontSize.subtitle3}
        color: ${theme.color.black};
      }
      p:nth-child(2) {
        ${theme.fontSize.caption1}
        color: ${theme.color.grey050};
      }
    }
  }

  .btnWrap {
    display: flex;
    justify-content: space-between;

    button {
      border-color: ${theme.color.grey030};
      color: ${theme.color.grey080};
    }

    button:nth-child(2) {
      margin-left: 15px;
    }
  }
`;

const buttonCss = () => css`
  width: 100%;
  margin-top: 12px;
`;

export default OrderItem;
