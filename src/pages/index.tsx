import Link from 'next/link';
import { css } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from 'src/components/Layout';
import { useSampleMutation, useSampleQuery } from 'src/modules/sample';

import SampleChart from 'src/components/SampleChart';

const IndexPage = () => {
  const test = useSampleQuery(10);
  const postTest = useSampleMutation({ mutationKey: 'test' });

  const handleClick = () => {
    postTest.mutate(10, {
      onSuccess: ({ data }) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error.message);
      },
    });
  };
  return (
    <>
      <Layout title="Home | Next.js + TypeScript Example">
        <SampleChart />
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
          <div css={testStyle}>
            <p>자동배포될라나...안될라나 (배포완료👍)</p>
          </div>
          <button type="button" onClick={handleClick}>
            test
          </button>
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
