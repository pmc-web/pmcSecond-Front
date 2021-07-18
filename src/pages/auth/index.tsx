import { css } from '@emotion/react';
import Button from 'src/components/common/Button';
import Logo from 'src/components/common/logo/Logo';
import Text from 'src/components/common/Text';

import Icon from 'src/components/common/Icon';
import { useRouter } from 'next/router';

const AuthIndex = () => {
  const router = useRouter();
  const onEmailLogin = () => {
    router.push('/auth/emailLogin');
  };
  const onKakaoLogin = () => {
    window.open(`${process.env.API_URL}/auth/kakao`);
  };
  return (
    <section
      css={(theme) => css`
        padding: 1.9em;
        height: 100vh;
        ${theme.commonStyle.flexColomn};
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          margin-top: 3.8em;
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
            `
          }
        >
          환영합니다! 👍
        </h1>
        <Text size="subtitle1" color="grey050">
          나만을 위한 핸드메이드 상품,
          <br />
          마켓유니버스에서 만나보세요.
        </Text>
      </div>
      <div
        css={(theme) => css`
          width: 100%;
          ${theme.commonStyle.flexColomn};
          align-items: center;
          margin-bottom: 2em;
        `}
      >
        <Button
          htmlType="button"
          onClick={onKakaoLogin}
          type="default"
          size="large"
          style={css`
            width: 100%;
            padding: 15px;
            height: 54px;
            background-color: #fee500;
            border-radius: 6px;
            margin-bottom: 10px;
          `}
        >
          <div
            css={(theme) => css`
              ${theme.commonStyle.flexCenter};
            `}
          >
            <span
              css={css`
                margin-right: 6px;
              `}
            >
              <Icon name="kakao" size="18" />
            </span>
            <Text size="subtitle2">카카오톡으로 시작하기</Text>
          </div>
        </Button>

        <Button
          htmlType="button"
          onClick={onEmailLogin}
          type="default"
          size="large"
          style={css`
            margin-top: 10px;
            border-radius: 4px;
          `}
        >
          이메일 아이디로 로그인
        </Button>
      </div>
    </section>
  );
};

export default AuthIndex;
