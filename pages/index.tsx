import Link from "next/link";
import { css } from "@emotion/react";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div
        css={css`
          &p {
            font-size: 50px;
          }
        `}
      >
        <p>dddddd</p>
      </div>
    </p>
  </Layout>
);

export default IndexPage;
