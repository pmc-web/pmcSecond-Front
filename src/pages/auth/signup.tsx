import { css } from '@emotion/react';
import Button from 'src/components/common/Button';
import { DeepMap, FieldError, useForm } from 'react-hook-form';
import Input from 'src/components/common/Input';
import TopBar from 'src/components/common/layout/TopBar';
import { useRouter } from 'next/router';

type FormData = {
  email?: string;
  pw?: string;
  pwCheck?: string;
};
const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  console.log(errors);
  const onSubmit = (data: FormData) => console.log(data);

  const onValid = (name: keyof DeepMap<FormData, FieldError>) => {
    if (errors[name]) {
      return 'error';
    }
    if (name === 'pwCheck') {
      if (getValues('pw') === getValues('pwCheck')) {
        return 'success';
      }
      return 'error';
    }
    return 'success';
  };
  const onClick = (name: string) => () => {
    if (name === 'leftArrow') {
      router.push('/auth/terms');
    }
  };
  return (
    <form
      css={css`
        width: 100%;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TopBar onClick={onClick} leftIcon="leftArrow" title="회원가입" />
      <section
        css={(themes) => css`
          height: 100%;
          ${themes.commonStyle.flexColomn};
          justify-content: space-between;
        `}
      >
        <h1
          css={(themes) =>
            css`
              padding: 0 1em;
              margin-top: 2em;
              margin-bottom: -5em;
              ${themes.fontSize.h1};
            `
          }
        >
          회원가입에 필요한
          <br />
          정보를 입력해주세요.
        </h1>

        <div
          css={(themes) => css`
            ${themes.commonStyle.flexColomn};
            justify-content: space-between;
            margin-top: 15em;
            height: 20em;
            padding: 0 1.2em;
          `}
        >
          <Input
            required
            label="이메일"
            name="email"
            valid={!getValues('email') ? 'null' : onValid('email')}
            pattern={/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i}
            register={register}
          />
          <Input
            required
            label="비밀번호"
            name="pw"
            type="password"
            valid={!getValues('pw') ? 'null' : onValid('pw')}
            pattern={/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/}
            register={register}
          />
          <Input
            valid={!getValues('pwCheck') ? 'null' : onValid('pwCheck')}
            pattern={new RegExp(String(getValues('pw')))}
            required
            type="password"
            label="비밀번호 확인"
            name="pwCheck"
            register={register}
          />
        </div>

        <Button
          style={css`
            position: fixed;
            bottom: 0;
          `}
          htmlType="button"
          size="large"
          type="primary"
        >
          다음
        </Button>
      </section>
    </form>
  );
};

export default SignUp;
