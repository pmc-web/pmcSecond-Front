import TopBar from 'src/components/common/layout/TopBar';
import AddressCardList from 'src/components/setting/address/AddressCardList';
import Button from 'src/components/common/Button';
import { css, Theme } from '@emotion/react';

const AddressAdmin = () => (
  <>
    <TopBar title="주소지 관리" leftIcon="leftArrow" />

    <AddressCardList />
    {/* 배송지 추가하기 */}
    <div css={buttonCss}>
      <Button
        htmlType="button"
        size="normal"
        type="ghost"
        // disabled={(!checked.Term1 || !checked.Term2) && true}
        // onClick={onRouter}
      >
        배송지 추가하기
      </Button>
    </div>
  </>
);

const buttonCss = (theme: Theme) => css`
  margin: 1.825em 1.2em;
  > button {
    width: 100%;
    border-radius: 5px;
    font-weight: bold;
    height: 44px;
  }
`;

export default AddressAdmin;
