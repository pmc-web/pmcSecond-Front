import TopBar from 'src/components/common/layout/TopBar';
import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';
import CheckBox from 'src/components/common/CheckBox';
import { useForm, DeepMap, FieldError } from 'react-hook-form';
import { css, Theme } from '@emotion/react';
import { useState } from 'react';

type FormData = {
  deliveryName?: string;
  name?: string;
  address?: string;
  detailAddress?: string;
  phone?: string;
};

const AddressAdd = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  // state
  const [checked, setChecked] = useState(false);

  // function
  const onChecked = () => {
    setChecked(!checked);
  };
  // 주소검색 팝업
  const onSearchAddress = () => {
    console.log('주소검색 팝업');
  };
  // 검사
  const onValid = (name: keyof DeepMap<FormData, FieldError>) => {
    if (errors[name]) {
      return 'error';
    }
    return 'success';
  };

  return (
    <div css={containerCss}>
      <TopBar title="배송지 등록/수정" leftIcon="leftArrow" />
      <section>
        <Input
          label="배송지 이름"
          name="deliveryName"
          setValue={setValue}
          register={register}
          placeholder="배송지 이름을 입력해주세요"
          style={inputCss()}
        />
        <Input
          label="수령인"
          name="name"
          setValue={setValue}
          register={register}
          placeholder="받으시는 분의 이름을 입력해주세요."
          style={inputCss()}
        />
        <div className="btnInput">
          <div>
            <Input
              label="주소"
              name="address"
              setValue={setValue}
              register={register}
              placeholder="주소지를 검색해주세요."
            />
          </div>
          <Button
            htmlType="button"
            type="primary"
            onClick={onSearchAddress}
            // onClick={onRouter}
          >
            주소검색
          </Button>
        </div>
        <Input
          label=""
          name="detailAddress"
          setValue={setValue}
          register={register}
          placeholder="상세 주소를 입력해주세요."
          style={inputCss()}
        />
        <Input
          label="연락처"
          name="phone"
          setValue={setValue}
          register={register}
          placeholder="-를 제외하고 숫자만 입력해주세요."
          valid={!getValues('phone') ? 'null' : onValid('phone')}
          pattern={/^[0-9]*$/}
        />
      </section>
      <div className="checkBox">
        <CheckBox
          title="이 배송지를 기본 배송지로 등록합니다."
          checked={checked}
          id="Term1"
          onClick={onChecked}
          font="body2"
        />
      </div>
      {/* 완료 버튼 */}
      <Button
        htmlType="button"
        size="large"
        type="primary"
        style={saveBtnCss()}
        // onClick={onRouter}
      >
        저장
      </Button>
    </div>
  );
};

const containerCss = (theme: Theme) => css`
  section {
    padding: 30px 1.2em;
    border-bottom: 10px solid ${theme.color.grey020};

    .btnInput {
      display: flex;
      /* justify-content: space-between; */
      align-items: flex-end;
      width: 100%;
      > div {
        flex: 3;
      }

      > button {
        border-radius: 5px;
        min-height: 3.3rem;
        margin-left: 1rem;
        flex: 1;
      }
    }
  }

  .checkBox {
    margin: 20px 1.2em;
  }
`;

const inputCss = () => css`
  margin-bottom: 1.875em;
`;

const saveBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

export default AddressAdd;
