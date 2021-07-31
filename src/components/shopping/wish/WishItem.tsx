import { css, Theme } from '@emotion/react';

import Button from 'src/components/common/Button';

type WishProductItemProps = {
  name: string;
  option?: string;
  price?: string;
  product?: boolean;
};

const WishItem = ({ name, option, price, product }: WishProductItemProps) => (
  <div css={(theme) => containerCss(theme, product)}>
    {/* 이미지 영역 */}
    <div className="imageWrap" />
    {/* 컨텐츠 영역 */}
    <div className="contentWrap">
      <p className="productName">{name}</p>
      {product && (
        <>
          <p className="producOption">{option}</p>
          <p className="productPrice">{price}</p>
        </>
      )}

      <div className="buttonWrap">
        <Button htmlType="button" type="ghost">
          삭제
        </Button>
        {product && (
          <Button htmlType="button" type="primary">
            장바구니 담기
          </Button>
        )}
      </div>
    </div>
  </div>
);

const containerCss = (theme: Theme, product?: boolean) => css`
  display: flex;
  align-items: flex-end;
  padding: ${product ? '30px' : '20px'} 1.2em;
  border-bottom: 1px solid ${theme.color.grey030};

  > .imageWrap {
    width: ${product ? '96px' : '60px'};
    height: ${product ? '96px' : '60px'};
    background: ${theme.color.grey020};
  }
  > .contentWrap {
    margin-left: 10px;
    flex: 1;
    > .productName {
      ${theme.fontSize.subtitle4};
      color: ${theme.color.black};
    }
    > .producOption {
      ${theme.fontSize.caption1};
      color: ${theme.color.grey040};
    }
    > .productPrice {
      margin-top: 6px;
      ${theme.fontSize.subtitle4};
      color: ${theme.color.black};
    }
    > .buttonWrap {
      display: flex;
      margin-top: ${product ? '6px' : '10px'};
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
`;

export default WishItem;
