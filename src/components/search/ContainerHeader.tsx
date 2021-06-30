import { css } from '@emotion/react';
import Link from 'next/link';
import Icon from '../common/Icon';
import Text from '../common/Text';

type ContainerHeaderProps = {
  title: string;
  count: string;
  href?: string;
};

const ContainerHeader = ({ title, href, count }: ContainerHeaderProps) => (
  <Link href={href || '/'}>
    <a
      css={(theme) => css`
        ${theme.commonStyle.flexCenter};
        justify-content: flex-start;
        margin: 1.2rem 0;
      `}
    >
      <span>
        <Text.Title level={2} size="subtitle2">
          {title}
        </Text.Title>
      </span>
      <span
        css={css`
          margin-left: 0.5rem;
        `}
      >
        <Text.Title level={2} size="body1">
          {count}
        </Text.Title>
      </span>
      {href && (
        <span>
          <Icon name="rightArrow" size="16" />
        </span>
      )}
    </a>
  </Link>
);

export default ContainerHeader;
