import { css } from '@emotion/react';
import TopBar from 'src/components/common/layout/TopBar';
import SideBarItem from 'src/components/common/layout/SideBarItem';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const SettingIndex = () => {
  const router = useRouter();
  // 회원정보 이동
  const onChangeInfo = useCallback(() => {
    router.push('/setting/changeInfo');
  }, [router]);
  // 주소관리 이동
  const onAddressAdmin = useCallback(() => {
    router.push('/setting/addressAdmin');
  }, [router]);
  return (
    <section>
      {/* 헤더 */}
      <TopBar title="개인정보 수정" leftIcon="leftArrow" />
      {/* 유저 정보 */}
      <div
        css={(theme) => css`
          display: flex;
          align-items: center;
          background-color: ${theme.color.white};
          padding: 20px;
        `}
      >
        <div
          css={(theme) =>
            css`
              width: 48px;
              height: 48px;
              margin-right: 20px;
              background-color: ${theme.color.grey020};
              border-radius: 100%;
            `
          }
        />
        <div>
          <p
            css={(theme) =>
              css`
                ${theme.fontSize.body1}
                margin-bottom: 3px;
                color: ${theme.color.grey070};
              `
            }
          >
            부여번호
          </p>
          <p
            css={(theme) =>
              css`
                ${theme.fontSize.body1}
              `
            }
          >
            info@marketuniverse.co.kr
          </p>
        </div>
      </div>
      {/* 라인 */}
      <div
        css={(theme) => css`
          height: 10px;
          background-color: ${theme.color.grey020};
          border-top: 1px solid ${theme.color.grey030};
          border-bottom: 1px solid ${theme.color.grey030};
        `}
      />
      {/* 회원정보 수정 & 주소관리 */}
      <SideBarItem label="회원정보" onClick={onChangeInfo} rightIcon="rightArrow" />
      <SideBarItem label="주소관리" onClick={onAddressAdmin} rightIcon="rightArrow" />
    </section>
  );
};

export default SettingIndex;
