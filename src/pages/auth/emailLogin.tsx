import { css } from '@emotion/react';
import Button from 'src/components/common/Button';
import { DeepMap, FieldError, useForm } from 'react-hook-form';
import Input from 'src/components/common/Input';
import TopBar from 'src/components/common/layout/TopBar';
import { useRouter } from 'next/router';
import Logo from 'src/components/common/logo/Logo';
import Link from 'next/link';
import { useLoginMutation, useUserDataQuery } from 'src/modules/auth';
import { useQueryClient } from 'react-query';

type FormData = {
  email?: string;
  pw?: string;
  pwCheck?: string;
};
const EmailLogin = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const { data } = useUserDataQuery();

  const mutation = useLoginMutation();

  const onSubmit = async (data: FormData) => {
    if (data.email && data.pw) {
      const postData = { email: data.email, password: data.pw };
      const datas = await mutation.mutateAsync(postData);
      queryClient.setQueryData(['auth', 'user'], datas);
    } else {
      window.alert('빈칸이 존재합니다.');
    }
  };

  const onValid = (name: keyof DeepMap<FormData, FieldError>) => {
    if (errors[name]) {
      return 'null';
    }
    if (name === 'pwCheck') {
      if (getValues('pw') === getValues('pwCheck')) {
        return 'success';
      }
      return 'null';
    }
    return 'success';
  };
  const onClick = (name: string) => () => {
    if (name === 'leftArrow') {
      router.push('/auth');
    }
  };
  return (
    <form
      css={css`
        width: 100%;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TopBar onClick={onClick} leftIcon="leftArrow" title="이메일로 로그인" />
      <section
        css={(themes) => css`
          padding: 0 1.2em;
          height: 100%;
          ${themes.commonStyle.flexColomn};
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            margin-top: 3em;
          `}
        >
          <Logo />
          <h1
            css={(theme) =>
              css`
                color: ${theme.color.black};
                font-size: 32px;
                font-weight: bold;
                margin: 1em 0em;
                line-height: 1.3;
              `
            }
          >
            가입하신 이메일로
            <br />
            로그인해주세요.
          </h1>
        </div>

        <div
          css={(themes) => css`
            ${themes.commonStyle.flexColomn};
            justify-content: space-between;
            margin-top: 1em;
            height: 11.5em;
          `}
        >
          <Input
            required
            label="이메일"
            name="email"
            setValue={setValue}
            valid={!getValues('email') ? 'null' : onValid('email')}
            pattern={/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i}
            register={register}
          />
          <Input required label="비밀번호" name="pw" type="password" setValue={setValue} register={register} />
        </div>

        <Button
          style={css`
            margin-top: 3em;
            border-radius: 4px;
          `}
          size="large"
          htmlType="submit"
          type="primary"
        >
          로그인
        </Button>
        <div
          css={(theme) => css`
            ${theme.fontSize.body2}
            margin-top: 1.2em;
            display: flex;
            justify-content: space-between;
          `}
        >
          <Link href="./">
            <a>비밀번호를 잊으셨나요?</a>
          </Link>
          <Link href="./signup">
            <a>회원가입</a>
          </Link>
        </div>
      </section>
    </form>
  );
};

export default EmailLogin;
