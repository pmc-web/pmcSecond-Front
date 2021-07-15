import { css, Theme } from '@emotion/react';
import Button from '../common/Button';
import SwitchButton from './SwitchButton';

const Delivery = () => (
  <div css={containerCss}>
    <section>
      <div className="selectBox">
        <p>택배회사</p>
        <select>
          <option value="" hidden selected disabled className="test">
            택배 회사를 선택해주세요.
          </option>
          <option value="1">대한통운</option>
          <option value="2">로젠택배</option>
          <option value="3">롯데택배</option>
        </select>
      </div>
      {/* 배송메모 */}
      <div className="textAreaBox">
        <label>배송메모</label>
        <textarea placeholder="택배기사님께 전달할 배송 메모를 입력해주세요." />
      </div>
      <SwitchButton title="배송비 청구 방식" onText="선불" offText="착불" />
      <SwitchButton title="도서 산간지역 추가 배송비" onText="사용안함" offText="사용" />
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

const containerCss = (theme: Theme) => css`
  section {
    padding: 30px 1.2em;

    .selectBox {
      border-bottom: 1px solid ${theme.color.grey020};
      > p {
        margin-bottom: 6px;
        ${theme.fontSize.body2}
        color: ${theme.color.grey040};
      }
      select {
        width: 100%;
        border-radius: 6px;
        border: 1px solid ${theme.color.grey030};
        height: 54px;
        padding: 0 12px;
      }
    }

    .textAreaBox {
      margin-top: 1.875em;
      > label {
        display: block;
        ${theme.fontSize.body2}
        color: ${theme.color.grey030};
      }
      > textArea {
        width: 100%;
        min-height: 108px;
        margin-top: 6px;
        border: 2px solid ${theme.color.grey030};
        padding: 1.05em;
        border-radius: 6px;
        color: ${theme.color.black};
        ${theme.fontSize.body2};
        ::placeholder {
          color: ${theme.color.grey040};
          font-weight: normal;
        }
      }
    }
  }
`;

const saveBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

export default Delivery;
