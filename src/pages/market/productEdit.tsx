import { css, Theme } from '@emotion/react';
import TopBar from 'src/components/common/layout/TopBar';
import { useForm, DeepMap, FieldError } from 'react-hook-form';
import Select from 'src/components/common/Select';
import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';
import TextArea from 'src/components/common/TextArea';
import SwitchTab from 'src/components/market/SwitchTab/SwitchTab';

type FormData = {
  deliveryName?: string;
  name?: string;
  domain?: string;
  price?: string;
  discountPrice?: string;
  productDescrtion?: string;
  keyword?: string;
};

const ProductEdit = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  // 썸네일 업로드
  const onUploadImg = () => {
    console.log('이미지 업로드');
  };
  return (
    <div css={containerCss}>
      <TopBar title="상품 편집" leftIcon="leftArrow" />
      <section>
        <div className="selectBox">
          <p>택배회사</p>
          <Select option={['배송상품']} keys={['1']} style={selectCss()} />
        </div>
        <Input
          label="이름"
          name="name"
          setValue={setValue}
          register={register}
          placeholder="상품명을 입력해주세요."
          style={inputCss()}
        />
        <Input
          label="하위주소"
          name="domain"
          setValue={setValue}
          register={register}
          placeholder="주소 뒤에 붙을 내용을 입력해주세요."
          description="도메인/product/ 뒤에 붙는 짧은 주소입니다."
          style={inputCss()}
        />
        <Input
          label="정가"
          name="price"
          setValue={setValue}
          register={register}
          placeholder="0"
          description="(소비자가)"
          style={inputCss()}
        />
        <Input
          label="판매가"
          name="discountPrice"
          setValue={setValue}
          register={register}
          placeholder="0"
          description="(할인가)"
          style={inputCss()}
        />
        <div className="btnInput thumnail">
          <div>
            <Input
              label="대표 이미지"
              name="shopThumnail"
              setValue={setValue}
              register={register}
              placeholder="이미지 파일을 업로드해주세요."
              description="가로 900px 이상, 확대기능 사용하면 2000px 이상"
            />
          </div>
          <Button htmlType="button" type="primary" onClick={onUploadImg}>
            업로드
          </Button>
        </div>
        {/* 요약설명 */}
        <div className="selectBox bottomZero">
          <p>요약설명</p>
          <Select
            option={['상품마다 배송요금 추가됩니다']}
            placeholder="머리글을 선택해주세요"
            keys={['1']}
            style={selectCss()}
          />
        </div>
        <TextArea
          label=""
          name="productDescrtion"
          setValue={setValue}
          register={register}
          placeholder="상품을 설명할 수 있는 글을 간단히 작성해주세요."
          style={inputCss()}
        />
        {/* 배송정책 */}
        <div className="selectBox bottomZero">
          <p>배송정책</p>
          <Select option={['선불']} placeholder="기본 정책" keys={['1']} style={selectCss()} />
        </div>
        <p className="selectDesc">선불 / 동일배송 정책을 가진 모든 상품 / 무료</p>
        {/* 상태  */}
        <SwitchTab title="상태">
          <SwitchTab.TabItem label="판매중" />
          <SwitchTab.TabItem label="판매중지" />
          <SwitchTab.TabItem label="품절" />
        </SwitchTab>
        <TextArea
          label="검색 키워드"
          name="keyword"
          setValue={setValue}
          register={register}
          description="쉼표를 입력해서 구분해주세요"
          placeholder="상품을 검색할 수 있는 키워드를 입력해주세요."
          style={inputCss()}
        />
      </section>
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
  margin-bottom: 60px;
  section {
    padding: 30px 1.2em;

    .selectBox {
      margin-bottom: 1.875em;
      border-bottom: 1px solid ${theme.color.grey020};
      > p {
        margin-bottom: 6px;
        ${theme.fontSize.body1}
        color: ${theme.color.grey030};
      }
      select {
        margin: 0;
        width: 100%;
        border-radius: 6px;
        border: 1px solid ${theme.color.grey030};
        height: 54px;
      }
    }
    .bottomZero {
      margin-bottom: 0;
    }

    .btnInput {
      display: flex;
      margin-bottom: 1.875em;
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

    .selectDesc {
      margin: 6px 0 1.875em;
      ${theme.fontSize.body2};
      color: ${theme.color.grey050};
    }
  }
`;

const saveBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

const inputCss = () => css`
  margin-bottom: 1.875em;
`;

const selectCss = () => css`
  div {
    right: 5%;
  }
`;

export default ProductEdit;
