import { css, Theme } from '@emotion/react';
import { useRouter } from 'next/router';
import { useForm, DeepMap, FieldError } from 'react-hook-form';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import TopBar from 'src/components/common/layout/TopBar';

type FormData = {
  email?: string;
  nickname?: string;
  phone?: string;
  pw?: string;
};

const ChangeInfo = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const router = useRouter();

  const onValid = (name: keyof DeepMap<FormData, FieldError>) => {
    if (errors[name]) {
      return 'error';
    }
    return 'success';
  };
  // 비밀번호 수정 페이지 이동
  const onMoveToChangePw = () => {
    router.push('/setting/changePw');
  };

  return (
    <>
      <TopBar title="회원정보 수정" leftIcon="leftArrow" />
      <section css={sectionCss}>
        <Input
          disabled
          label="이메일"
          name="email"
          setValue={setValue}
          register={register}
          style={inputCss()}
          placeholder="info@marketuniverse.co.kr"
        />
        {/* 닉네임 */}
        <div className="btnInput">
          <div>
            <Input
              required
              label="닉네임"
              name="nickname"
              setValue={setValue}
              register={register}
              placeholder="부여번호"
            />
          </div>
          <Button
            htmlType="button"
            type="primary"
            // onClick={onRouter}
          >
            중복학인
          </Button>
        </div>
        <Input
          required
          label="연락처"
          name="phone"
          setValue={setValue}
          register={register}
          placeholder="-를 제외하고 숫자만 입력해주세요."
          style={inputCss()}
        />

        {/* 비밀번호 */}
        <div className="btnInput">
          <div>
            <Input
              required
              label="비밀번호"
              name="pw"
              type="password"
              setValue={setValue}
              register={register}
              placeholder="기존 비밀번호를 입력해주세요."
              valid={!getValues('pw') ? 'null' : onValid('pw')}
              pattern={/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/}
            />
          </div>
          <Button
            htmlType="button"
            type="primary"
            onClick={onMoveToChangePw}
            disabled={!getValues('pw')}
            // onClick={onRouter}
          >
            수정
          </Button>
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
        완료
      </Button>
    </>
  );
};

const sectionCss = (theme: Theme) => css`
  padding: 30px 1.2em 0 1.2em;
  height: 100%;
  ${theme.commonStyle.flexColomn};
  justify-content: space-between;

  .btnInput {
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
    margin-bottom: 1.875em;
    width: 100%;
    > div {
      flex: 1;
    }
    > button {
      border-radius: 5px;
      min-height: 3.3rem;
      margin-left: 1rem;
      width: 97px;
    }
  }
`;

const inputCss = () => css`
  margin-bottom: 1.875em;
`;

const successBtnCss = () => css`
  position: fixed;
  bottom: 0;
`;

export default ChangeInfo;
