import { css } from '@emotion/react';
import React, { useState } from 'react';
import Button from 'src/components/common/Button';
import CheckBox from 'src/components/common/CheckBox';
import Text from 'src/components/common/Text';
import { useRouter } from 'next/router';
import TopBar from 'src/components/common/layout/TopBar';
// import Modal from 'react-modal';
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };
type CheckType = {
  all: boolean;
  Term1: boolean;
  Term2: boolean;
  Term3: boolean;
};
const Terms = () => {
  // const [modalIsOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const [checked, setChecked] = useState<CheckType>({
    all: false,
    Term1: false,
    Term2: false,
    Term3: false,
  });
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    if (ev.target) {
      const { id } = ev.currentTarget;
      if (id === 'all') {
        if (checked.all) {
          setChecked({ all: false, Term1: false, Term2: false, Term3: false });
        } else {
          setChecked({ all: true, Term1: true, Term2: true, Term3: true });
        }
      } else {
        setChecked((prev) => ({ ...prev, all: false, [id]: !prev[id as keyof CheckType] }));
      }
    }
  };
  const onBack = (name: string) => () => {
    if (name === 'leftArrow') {
      router.push('/auth');
    }
  };

  const onRouter = () => {
    router.push('/auth/signup');
  };

  return (
    <>
      <TopBar onClick={onBack} leftIcon="leftArrow" title="약관동의" />
      <section
        css={(themes) => css`
          ${themes.commonStyle.flexColomn};
          justify-content: space-between;
        `}
      >
        <h1
          css={(themes) =>
            css`
              padding: 0 1.2em;
              margin-top: 2em;
              margin-bottom: -5em;
              ${themes.fontSize.h1};
            `
          }
        >
          서비스 이용을 위해
          <br />
          약관 동의가 필요해요.
        </h1>
        <ul
          css={(themes) => css`
            padding: 0 1.9em;
            justify-content: space-between;
            ${themes.commonStyle.flexColomn};
            margin-top: 15em;
            height: 35vh;
          `}
        >
          <li>
            <CheckBox title="모두 동의합니다." font="subtitle1" checked={checked.all} id="all" onClick={onClick} />
          </li>
          <li
            css={(themes) =>
              css`
                ${themes.commonStyle.flexCenter};
                justify-content: space-between;
              `
            }
          >
            <CheckBox title="서비스 이용 약관" checked={checked.Term1} id="Term1" onClick={onClick} />
            <Text size="body2" color="grey040">
              보기
            </Text>
          </li>
          <li
            css={(themes) =>
              css`
                ${themes.commonStyle.flexCenter};
                justify-content: space-between;
              `
            }
          >
            <CheckBox title="개인정보 수집 및 이용 안내" checked={checked.Term2} id="Term2" onClick={onClick} />
            <Text size="body2" color="grey040">
              보기
            </Text>
          </li>
          <li
            css={(themes) =>
              css`
                ${themes.commonStyle.flexCenter};
                justify-content: space-between;
              `
            }
          >
            <CheckBox title="마케팅 정보 수신 동의 (선택)" checked={checked.Term3} id="Term3" onClick={onClick} />
            <Text size="body2" color="grey040">
              보기
            </Text>
          </li>
        </ul>
        <Button
          htmlType="button"
          size="large"
          type="primary"
          style={css`
            position: fixed;
            bottom: 0;
          `}
          disabled={(!checked.Term1 || !checked.Term2) && true}
          onClick={onRouter}
        >
          다음
        </Button>
      </section>
    </>
  );
};

export default Terms;
