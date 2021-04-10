import Link from 'next/link';
import { css } from '@emotion/react';

import Layout from 'src/components/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useSample from 'src/hooks/selectors/sample/useSample';
import { sampleActions } from 'src/modules/sample/slice';

const IndexPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sampleActions.getRequest());

    dispatch(sampleActions.postRequest('test'));
  }, [dispatch]);
  const sample = useSample();
  console.log(sample);
  return (
    <>
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
          <div css={testStyle}>
            <p>자동배포될라나...안될라나</p>
          </div>
        </p>
      </Layout>
    </>
  );
};

const testStyle = css`
  &p {
    font-size: 50px;
  }
`;

export default IndexPage;
