import { css, Theme } from '@emotion/react';
import { useForm, DeepMap, FieldError } from 'react-hook-form';
import TopBar from 'src/components/common/layout/TopBar';
import Rating from 'src/components/common/Rating';
import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';

type FormData = {
  review?: string;
};

const ReviewAdd = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  return (
    <>
      <TopBar title="구매 후기 남기기" leftIcon="leftArrow" />
      <section css={sectionCss}>
        <div className="titleWrap">
          <div className="imageWrap" />
          <div>
            <p>상품명</p>
            <p>상품 선택 옵션</p>
          </div>
        </div>
        <div className="starWrap">
          <p className="plusline">상품은 어떠셨나요?</p>
          <p className="plusline">상품에 대한 별점을 매겨주세요</p>
          <Rating rating={5} fix />
        </div>
        <div className="selectImageWrap">
          <div>
            <div />
            <div />
          </div>
        </div>
        <div className="reviewWrap">
          <Input label="구매 후기" name="review" setValue={setValue} register={register} />
        </div>
      </section>
      {/* 완료 버튼 */}
      <Button
        htmlType="button"
        size="large"
        type="primary"
        style={successBtnCss()}
        // onClick={onRouter}
      >
        작성 완료
      </Button>
    </>
  );
};

const sectionCss = (theme: Theme) => css`
  .titleWrap {
    display: flex;
    align-items: center;
    padding: 30px 1.2em 20px;
    border-bottom: 1px solid ${theme.color.grey030};
    > .imageWrap {
      width: 40px;
      height: 40px;
      background: ${theme.color.grey020};
      margin-right: 10px;
    }
    > div:nth-child(2) {
      > p:nth-child(1) {
        ${theme.fontSize.subtitle3}
        color: ${theme.color.black};
      }
      > p:nth-child(2) {
        ${theme.fontSize.caption1}
        color: ${theme.color.grey050};
      }
    }
  }

  .starWrap {
    padding: 20px 1.2em;
    border-bottom: 1px solid ${theme.color.grey030};
    > p:nth-child(1) {
      ${theme.fontSize.subtitle2}
      color: ${theme.color.black};
    }
    > p:nth-child(2) {
      ${theme.fontSize.body2}
      color: ${theme.color.grey050};
    }
    > ul {
      margin-top: 12px;
    }
  }

  .selectImageWrap {
    padding: 20px 1.2em;
    border-bottom: 1px solid ${theme.color.grey030};
    > div {
      width: 80px;
      height: 80px;
      background: rgba(42, 38, 53, 0.5);
      position: relative;
      > .plusline {
        position: absolute;
        background: ${theme.color.white};
      }

      > div:nth-child(1) {
        top: calc(50% - 8px);
        left: calc(50% - 0.75px);
        width: 1.5px;
        height: 16px;
      }
      > div:nth-child(2) {
        top: calc(50% - 0.75px);
        left: calc(50% - 8px);
        width: 16px;
        height: 1.5px;
      }
    }
  }

  .reviewWrap {
    padding: 20px 1.2em;
  }
`;

const starCss = () => css`
  margin-top: 12px;
`;

const successBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

export default ReviewAdd;
