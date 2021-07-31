import { css, Theme } from '@emotion/react';
import CheckBox from 'src/components/common/CheckBox';

const BasketProductItem = () => (
  <li css={containerCss}>
    <div className="contentsWrap">
      <CheckBox title="" id="Term1" font="body2" checked={false} onClick={() => console.log('')} />
      <div className="imageBox" />
      <div className="productBox">
        <p>상품명</p>
        <p>상품 선택 옵션</p>
      </div>
      <button>삭제</button>
    </div>
    <div className="priceWrap">
      <select>
        <option value="1" selected>
          1
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p>19,800원</p>
    </div>
  </li>
);

const containerCss = (theme: Theme) => css`
  margin-bottom: 30px;

  > div:nth-child(1) {
    display: flex;
    padding: 20px 1.9em 20px 1.2em;
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

    .productBox {
      flex: 1;
      p:nth-child(1) {
        ${theme.fontSize.subtitle3}
        color: ${theme.color.black};
      }
      p:nth-child(2) {
        ${theme.fontSize.caption1}
        color: ${theme.color.grey050};
      }
    }

    > button {
      ${theme.fontSize.body2}
      color: ${theme.color.grey050};
    }
  }

  .priceWrap {
    padding: 0 1.9em 0 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > select {
      height: 30px;
      padding: 0 35px 0 25px;
      -webkit-appearance: none; /* 크롬 화살표 없애기 */
      -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
      appearance: none; /* 화살표 없애기 */
      ${theme.fontSize.subtitle3}
      border: 1px solid ${theme.color.purple050};
      border-radius: 6px;
      ${theme.commonStyle.flexCenter}
    }
    > p {
      ${theme.fontSize.subtitle3}
    }
  }
`;

export default BasketProductItem;
