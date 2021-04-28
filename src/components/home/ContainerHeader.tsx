import { css } from '@emotion/react';
import Link from 'next/link';
import Icon from '../common/Icon';
import Text from '../common/Text';

type ContainerHeaderProps = {
  title: string;
  href?: string;
};

const ContainerHeader = ({ title, href }: ContainerHeaderProps) => (
  <Link href={href || '/'}>
    <a
      css={(theme) => css`
        ${theme.commonStyle.flexCenter};
        justify-content: space-between;
        margin: 1.2rem 0;
      `}
    >
      <span>
        <Text.Title level={2} size="subtitle1">
          {title}
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
