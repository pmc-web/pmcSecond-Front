import Input from 'src/components/common/Input';
import { css, Theme } from '@emotion/react';
import Button from 'src/components/common/Button';
import { useForm, DeepMap, FieldError } from 'react-hook-form';
import TextArea from 'src/components/common/TextArea';

type FormData = {
  shopName?: string;
  shopUrl?: string;
  address?: string;
  detailAddress?: string;
  license?: string;
  phone?: string;
  email?: string;
  shopThumnail?: string;
  shopDescrtion?: string;
};

const MarketSettingDefault = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  // 주소검색 팝업
  const onSearchAddress = () => {
    console.log('주소검색 팝업');
  };
  // 사업자등록증 업데이트
  const onUploadLicense = () => {
    console.log('사업자등록증 업데이트');
  };
  // 썸네일 업로드
  const onUploadThum = () => {
    console.log('쇼핑몰 썸네일 업로드');
  };
  return (
    <>
      <section css={containerCss}>
        <Input
          label="쇼핑몰 이름*"
          name="shopName"
          setValue={setValue}
          register={register}
          disabled
          placeholder="쇼핑몰 명"
          style={inputCss()}
        />
        <Input
          label="쇼핑몰 URL"
          name="shopUrl"
          setValue={setValue}
          register={register}
          disabled
          placeholder="쇼핑몰명 주소를 입력해주세요."
          style={inputCss()}
        />
        {/* 주소 */}
        <div className="btnInput">
          <div>
            <Input label="주소*" name="address" setValue={setValue} register={register} placeholder="입력된 주소지" />
          </div>
          <Button htmlType="button" type="primary" onClick={onSearchAddress}>
            주소변경
          </Button>
        </div>
        <Input
          label=""
          name="detailAddress"
          setValue={setValue}
          register={register}
          placeholder="입력된 상세주소"
          disabled
          style={inputCss()}
        />
        {/* 사업자 등록증 */}
        <div className="btnInput" css={inputCss()}>
          <div>
            <Input
              label="사업자등록증"
              name="license"
              setValue={setValue}
              register={register}
              placeholder="이미지 파일을 업로드해주세요."
            />
          </div>
          <Button htmlType="button" type="primary" onClick={onUploadLicense}>
            업로드
          </Button>
        </div>
        <Input
          label="연락처"
          name="detailAddress"
          setValue={setValue}
          register={register}
          placeholder="-를 제외하고 숫자만 입력해주세요."
          disabled
          style={inputCss()}
        />
        <Input
          label="이메일 주소"
          name="email"
          setValue={setValue}
          register={register}
          placeholder="이메일 주소를 입력해주세요."
          disabled
          style={inputCss()}
        />
        {/* 쇼핑몰 썸네일 */}
        <div className="btnInput thumnail">
          <div>
            <Input
              label="쇼핑몰 썸네일"
              name="shopThumnail"
              setValue={setValue}
              register={register}
              placeholder="이미지 파일을 업로드해주세요."
            />
          </div>
          <Button htmlType="button" type="primary" onClick={onUploadThum}>
            업로드
          </Button>
        </div>
        {/* 쇼핑몰 설명 */}
        <TextArea
          label="쇼핑몰 설명*"
          name="shopDescrtion"
          setValue={setValue}
          register={register}
          placeholder="쇼핑몰을 소개하는 짧은 글을 입력해주세요."
        />
      </section>

      <Button
        htmlType="button"
        size="large"
        type="primary"
        style={btnCss()}
        // onClick={onRouter}
      >
        변경사항 저장
      </Button>
    </>
  );
};

const containerCss = () => css`
  padding: 30px 1.2em 100px 1.2em;

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

  .thumnail {
    margin-bottom: 1.875em;
  }
`;

const inputCss = () => css`
  margin-bottom: 1.875em;
`;

const btnCss = () => css`
  position: fixed;
  bottom: 0;
`;

export default MarketSettingDefault;
