import TopBar from 'src/components/common/layout/TopBar';
import SearchInput from 'src/components/common/SearchInput';
import { css, Theme } from '@emotion/react';
import { useState } from 'react';
import Button from 'src/components/common/Button';
import Select from 'src/components/common/Select';
import ProductList from 'src/components/market/productList';

const ProductAdmin = () => {
  const [value, setValue] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div css={conatinerCss}>
        <TopBar title="상품 관리" leftIcon="leftArrow" />
        <div
          css={(theme) => css`
            padding: 20px 1.2em;
            border-bottom: 10px solid ${theme.color.grey010};
          `}
        >
          <SearchInput value={value} onChange={onChange} label="search" placeholder="상품을 검색해보세요." />
        </div>
        <div className="allSelectBox">
          <input type="checkbox" name="all" value="all" />
          <div>
            <Button
              htmlType="button"
              type="ghost"
              size="small"
              style={btnCss()}
              // onClick={onRouter}
            >
              판매 변경
            </Button>
          </div>
          <div className="selectBox">
            <Select option={['10개씩 보기', '50개씩 보기', '100개씩 보기']} keys={['1', '2', '3']} />
          </div>
        </div>
        <ProductList />
      </div>
      <Button
        htmlType="button"
        type="primary"
        style={addBtnCss()}
        // onClick={onRouter}
      >
        상품 추가하기
      </Button>
    </>
  );
};
const conatinerCss = (theme: Theme) => css`
  .allSelectBox {
    display: flex;
    align-items: center;
    padding: 8px 1.2em;
    > input {
      border: 1px solid ${theme.color.grey040};
      margin-right: 20px;
      width: 16px;
      height: 16px;
    }
    > div:nth-child(2) {
      flex: 1;
    }
    .selectBox {
      select {
        padding: 0 20px 0 10px;
        height: 32px;
        border: 1px solid ${theme.color.grey030};
        border-radius: 3px;
        option {
          font-size: ${theme.fontSize.caption1};
          color: ${theme.color.grey060};
        }
      }
    }
  }
`;

const btnCss = () => css`
  width: 75px;
  border-radius: 3px;
`;

const addBtnCss = () =>
  css`
    width: calc(100% - 40px);
    height: 44px;
    margin: 20px 1.2em;
  `;

export default ProductAdmin;
