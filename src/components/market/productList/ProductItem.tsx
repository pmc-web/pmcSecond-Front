import { css, Theme } from '@emotion/react';

const ProductItem = () => (
  <li css={conatinerCss}>
    <input type="checkbox" name="all" value="all" className="checkBox" />
    <div className="productBox">
      {/* 이미지 영역 */}
      <div className="imageWrap" />
      {/* 컨텐츠 영역 */}
      <div className="contentWrap">
        <p className="productName">상품명</p>
        <>
          <p className="producOption">19,800원</p>
          <p className="productPrice">판매중 | 품절</p>
        </>
      </div>
    </div>
  </li>
);

const conatinerCss = (theme: Theme) => css`
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.color.grey010};

  .checkBox {
    border: 1px solid ${theme.color.grey040};
    margin-right: 20px;
    width: 16px;
    height: 16px;
  }

  .productBox {
    display: flex;
    align-items: flex-end;
    .imageWrap {
      width: 60px;
      height: 60px;
      background: ${theme.color.grey020};
    }
    .contentWrap {
      margin-left: 10px;
      flex: 1;
      > .productName {
        ${theme.fontSize.caption1};
        color: ${theme.color.black};
      }
      > .producOption {
        ${theme.fontSize.subtitle4};
        color: ${theme.color.black};
      }
      > .productPrice {
        margin-top: 6px;
        ${theme.fontSize.caption1};
        color: ${theme.color.grey040};
      }
      > .buttonWrap {
        display: flex;
        margin-top: 10px;
        button {
          height: 30px;
          min-height: 30px;
          border-radius: 3px;
        }
        button:nth-child(1) {
          width: 46px;
        }
        button:nth-child(2) {
          width: 92px;
          margin-left: 10px;
        }
      }
    }
  }
`;

export default ProductItem;
