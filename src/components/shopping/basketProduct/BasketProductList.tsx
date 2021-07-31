import BasketProductItem from 'src/components/shopping/basketProduct/BasketProductItem';
import { css, Theme } from '@emotion/react';

const data = [{ id: 1 }, { id: 2 }];

const BasketProductList = () => (
  <div css={containerCss}>
    {/* 쇼핑몰 */}
    <div className="shopTitle">
      <div />
      <p>쇼핑몰 명</p>
    </div>
    <ul>
      {data.map((item) => (
        <BasketProductItem key={item.id} />
      ))}
    </ul>
    {/* 가격 */}
    <div className="priceWrap">
      <div>
        <p>총 상품 금액</p>
        <p>19,800원</p>
      </div>
      <div>
        <p>배송비</p>
        <p>0원</p>
      </div>
    </div>
  </div>
);

const containerCss = (theme: Theme) => css`
  border-bottom: 10px solid ${theme.color.grey010};
  > .shopTitle {
    display: flex;
    align-items: center;
    padding: 0 1.2em;
    border-bottom: 1px solid ${theme.color.grey030};
    height: 52px;
    > div {
      width: 24px;
      height: 24px;
      background: ${theme.color.grey010};
    }
    > p {
      ${theme.fontSize.body2}
      margin-left: 10px;
    }
  }

  > .priceWrap {
    padding: 20px 1.9em 25px 58px;
    border-top: 1px solid ${theme.color.grey030};
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
  }
`;

export default BasketProductList;
