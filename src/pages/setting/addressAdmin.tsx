import TopBar from 'src/components/common/layout/TopBar';
import AddressCardList from 'src/components/setting/address/AddressCardList';
import Button from 'src/components/common/Button';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const AddressAdmin = () => {
  const router = useRouter();

  const onMoveAddressAdd = () => {
    router.push('/setting/addressAdd');
  };
  return (
    <>
      <TopBar title="주소지 관리" leftIcon="leftArrow" />
      <section>
        <AddressCardList />
        {/* 배송지 추가하기 */}
        <div css={buttonCss}>
          <Button htmlType="button" size="normal" type="ghost" onClick={onMoveAddressAdd}>
            배송지 추가하기
          </Button>
        </div>
      </section>
    </>
  );
};

const buttonCss = () => css`
  margin: 1.825em 1.2em;
  > button {
    width: 100%;
    border-radius: 5px;
    font-weight: bold;
    height: 44px;
  }
`;

export default AddressAdmin;
