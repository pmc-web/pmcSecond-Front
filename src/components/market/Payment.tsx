import { useForm, DeepMap, FieldError } from 'react-hook-form';
import { css, Theme } from '@emotion/react';
import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';
import SwitchTab from './SwitchTab/SwitchTab';

type FormData = {
  deliveryName?: string;
  name?: string;
  address?: string;
  detailAddress?: string;
  phone?: string;
};

const Payment = () => {
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
        <div>
          <Input
            label="배송지 이름"
            name="deliveryName"
            setValue={setValue}
            register={register}
            placeholder="배송지 이름을 입력해주세요"
            style={inputCss()}
          />
        </div>
        {/* 입금기한 */}
        <div className="selectBox">
          <p>입금 기한</p>
          <div>
            <p>주문 후</p>
            <select>
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p>일 이내 미입금 시 취소</p>
          </div>
        </div>
        {/* 환불계좌 */}
        <SwitchTab title="환불계좌">
          <SwitchTab.TabItem label="사용함" />
          <SwitchTab.TabItem label="사용안함" />
        </SwitchTab>

        {/* 반품 요청 가능 기간 */}
        <div className="selectBox">
          <p>반품 요청 가능 기간</p>
          <div>
            <p>주문 후</p>
            <select>
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p>일 이내</p>
          </div>
        </div>
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

    > div:nth-child(1) {
      border-bottom: 1px solid ${theme.color.grey020};
    }

    > div:nth-child(3) {
      padding: 30px 0;
      border-bottom: 1px solid ${theme.color.grey020};
    }

    > .selectBox {
      padding: 30px 0;
      border-bottom: 1px solid ${theme.color.grey020};
      > p {
        margin-bottom: 16px;
        ${theme.fontSize.body2}
      }
      > div {
        display: flex;
        align-items: center;
        > p {
          ${theme.fontSize.body2}
          color: ${theme.color.grey040};
        }
        select {
          height: 30px;
          padding: 0 30px 0 30px;
          margin: 0 9px;
          ${theme.fontSize.subtitle3}
          border: 1px solid ${theme.color.purple050};
          border-radius: 6px;
          ${theme.commonStyle.flexCenter}
        }
      }
    }

    > div:nth-child(4) {
      padding-top: 0;
    }
  }
`;

const inputCss = () => css`
  margin-bottom: 1.875em;
`;

const saveBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

export default Payment;
