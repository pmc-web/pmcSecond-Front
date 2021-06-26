import { css, Theme } from '@emotion/react';
import { DeepMap, FieldError, useForm } from 'react-hook-form';
import TopBar from 'src/components/common/layout/TopBar';
import Input from 'src/components/common/Input';
import Button from 'src/components/common/Button';

type FormData = {
  pw?: string;
  pwCheck?: string;
};

const ChangePw = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

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

  return (
    <div css={sectionCss}>
      <TopBar title="비밀번호 수정" leftIcon="leftArrow" />

      <section>
        <Input
          required
          label="새로운 비밀번호"
          name="pw"
          type="password"
          register={register}
          setValue={setValue}
          valid={!getValues('pw') ? 'null' : onValid('pw')}
          pattern={/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/}
        />
        <Input
          required
          type="password"
          label="새로운 비밀번호 확인"
          name="pwCheck"
          register={register}
          setValue={setValue}
          valid={!getValues('pwCheck') ? 'null' : onValid('pwCheck')}
          pattern={new RegExp(String(getValues('pw')))}
        />
      </section>

      <Button
        htmlType="submit"
        size="large"
        type="primary"
        disabled={onValid('pw') !== 'success' || onValid('pwCheck') !== 'success'}
      >
        완료
      </Button>
    </div>
  );
};

const sectionCss = (theme: Theme) => css`
  section {
    ${theme.commonStyle.flexColomn};
    padding: 30px 1.2em 0 1.2em;
    height: 100%;
    justify-content: space-between;

    input {
      margin-bottom: 1.875em;
    }
  }
  button {
    position: fixed;
    bottom: 0;
  }
`;

export default ChangePw;
