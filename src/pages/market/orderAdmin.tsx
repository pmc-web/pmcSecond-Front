import { css, Theme } from '@emotion/react';
import TopBar from 'src/components/common/layout/TopBar';
import Select from 'src/components/common/Select';
import Button from 'src/components/common/Button';
import OrderAdminList from 'src/components/market/orderAdminList';

const OrederAdmin = () => (
  <div css={containerCss}>
    <TopBar title="주문 관리" leftIcon="leftArrow" />
    <section>
      <div className="selectBox">
        <Select option={['배송상품']} keys={['1']} style={selectCss()} />
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
      <OrderAdminList />
    </section>
  </div>
);

const containerCss = (theme: Theme) => css`
  section {
    padding: 30px 0;

    > .selectBox {
      padding: 0 1.2em 1.875em;
      border-bottom: 10px solid ${theme.color.grey020};

      select {
        margin: 0;
        width: 100%;
        border-radius: 6px;
        border: 1px solid ${theme.color.grey030};
        height: 54px;
      }
    }

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
  }
`;

const selectCss = () => css`
  div {
    right: 5%;
  }
`;

const btnCss = () => css`
  width: 75px;
  border-radius: 3px;
`;

export default OrederAdmin;
