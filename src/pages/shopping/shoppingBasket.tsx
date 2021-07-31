import { useState } from 'react';
import { css, Theme } from '@emotion/react';
import TopBar from 'src/components/common/layout/TopBar';
import CheckBox from 'src/components/common/CheckBox';
import BasketProductList from 'src/components/shopping/basketProduct/BasketProductList';
import Button from 'src/components/common/Button';

const ShoppingBasket = () => {
  // state
  const [checked, setChecked] = useState(false);
  // function
  const onChecked = () => {
    setChecked(!checked);
  };
  return (
    <>
      <section css={containerCss}>
        <TopBar title="장바구니" leftIcon="leftArrow" />
        {/* 선택해더 */}
        <div className="headerBox">
          <CheckBox title="전체 선택 (1/2)" id="Term1" font="body2" checked={checked} onClick={onChecked} />
        </div>
        <BasketProductList />
        {/* 가격출력  */}
        <div className="priceBox">
          <div>
            <p>총 상품 금액</p>
            <p>19,800원</p>
          </div>
          <div>
            <p>총 배송비</p>
            <p>0원</p>
          </div>
          <div>
            <p>할인금액</p>
            <p>-2,000원</p>
          </div>
          <div className="endPrice">
            <p>결제예상 금액</p>
            <p>17,800원</p>
          </div>
        </div>
      </section>
      {/* 완료 버튼 */}
      <Button
        htmlType="button"
        size="large"
        type="primary"
        style={successBtnCss()}
        // onClick={onRouter}
      >
        17,800원 결제하기
      </Button>
    </>
  );
};

const containerCss = (theme: Theme) => css`
  .headerBox {
    ${theme.commonStyle.flexCenter}
    padding: 0 1.2em 0;
    border-bottom: 10px solid ${theme.color.grey010};
    height: 52px;
    justify-content: space-between;
  }

  .priceBox {
    padding: 20px 1.2em 60px;

    > div {
      ${theme.commonStyle.flexCenter}
      justify-content: space-between;
      > p:nth-child(1) {
        ${theme.fontSize.caption1}
        color:${theme.color.grey040};
        margin-bottom: 10px;
      }
      > p:nth-child(2) {
        ${theme.fontSize.subtitle2}
        color:${theme.color.black}
      }
    }
    > div:nth-child(3) {
      padding-bottom: 20px;
    }
    .endPrice {
      padding: 20px 1.2em;
      border-top: 1px solid ${theme.color.grey030};
      > p:nth-child(1) {
        ${theme.fontSize.body1}
        color:${theme.color.black};
        margin-bottom: 0;
      }
    }
  }
`;

const successBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;
export default ShoppingBasket;
