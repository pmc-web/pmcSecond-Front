import { css, Theme } from '@emotion/react';
import { useForm, DeepMap, FieldError } from 'react-hook-form';
import Button from 'src/components/common/Button';
import TextArea from 'src/components/common/TextArea';
import Select from 'src/components/common/Select';
import SwitchTab from './SwitchTab/SwitchTab';

type FormData = {
  deliveryMemo?: string;
};

const Delivery = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  return (
    <div css={containerCss}>
      <section>
        <div className="selectBox">
          <p>택배회사</p>
          <Select
            option={['대한통운', '로젠택배', '롯데택배']}
            keys={['1', '2', '3']}
            placeholder="택배회사를 선택해주세요"
            style={selectCss()}
          />
        </div>
        {/* 배송메모 */}
        <TextArea
          label="배송 메모"
          name="deliveryMemo"
          setValue={setValue}
          register={register}
          placeholder="택배기사님께 전달할 배송 메모를 입력해주세요."
          style={textareaCss()}
        />
        <SwitchTab title="배송비 청구 방식">
          <SwitchTab.TabItem label="선불" />
          <SwitchTab.TabItem label="착불" />
        </SwitchTab>
        <SwitchTab title="도서 산간지역 추가 배송비">
          <SwitchTab.TabItem label="사용안함" />
          <SwitchTab.TabItem label="사용" />
        </SwitchTab>
      </section>
      <Button
        htmlType="button"
        size="large"
        type="primary"
        style={saveBtnCss()}
        // onClick={onRouter}
      >
        변경사항 저장
      </Button>
    </div>
  );
};

const containerCss = (theme: Theme) => css`
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
  }
`;

const textareaCss = () => css`
  margin-bottom: 1.875em;
`;

const saveBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

const selectCss = () => css`
  div {
    right: 5%;
  }
`;

export default Delivery;
