import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import TopBar from 'src/components/common/layout/TopBar';

type FormData = {
  email?: string;
  pw?: string;
  pwCheck?: string;
};

const ChangeInfo = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  return (
    <>
      <TopBar title="회원정보 수정" leftIcon="leftArrow" />
      <section
        css={(themes) => css`
          padding: 0 1.2em;
          height: 100%;
          ${themes.commonStyle.flexColomn};
          justify-content: space-between;
        `}
      >
        <Input
          disabled
          label="이메일"
          name="email"
          setValue={setValue}
          register={register}
          style={css`
            margin-bottom: 1.875em;
          `}
        />
        <Input
          required
          label="닉네임"
          name="nickname"
          setValue={setValue}
          register={register}
          placeholder="부여번호"
          style={css`
            margin-bottom: 1.875em;
          `}
        />
        <Input
          required
          label="연락처"
          name="phone"
          setValue={setValue}
          register={register}
          placeholder="-를 제외하고 숫자만 입력해주세요."
          style={css`
            margin-bottom: 1.875em;
          `}
        />
        <Input
          required
          label="비밀번호"
          name="pw"
          setValue={setValue}
          register={register}
          placeholder="기존 비밀번호를 입력해주세요."
        />
      </section>
      <Button
        htmlType="button"
        size="large"
        type="primary"
        style={css`
          position: fixed;
          bottom: 0;
        `}
        // disabled={(!checked.Term1 || !checked.Term2) && true}
        // onClick={onRouter}
      >
        완료
      </Button>
    </>
  );
};

export default ChangeInfo;
