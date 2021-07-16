import { css, Theme } from '@emotion/react';
import Link from 'next/link';
import Icon from '../common/Icon';
import Text from '../common/Text';

type ContainerHeaderProps = {
  title: string;
  subtitle?: string;
  href?: string;
};

const ContainerHeader = ({ title, subtitle, href }: ContainerHeaderProps) => {
  const renderContent = () => (
    <div css={(theme) => containerCss(theme)}>
      <span>
        <Text.Title level={2} size="subtitle1">
          {title}
        </Text.Title>
        {subtitle && <Text>{subtitle}</Text>}
      </span>
      {href && (
        <span>
          <Icon name="rightArrow" size="16" />
        </span>
      )}
    </div>
  );
  if (!href) {
    return renderContent();
  }
  return (
    <Link href={href || '/'}>
      <a>{renderContent()}</a>
    </Link>
  );
};

export default ContainerHeader;

const containerCss = (theme: Theme) => css`
  ${theme.commonStyle.flexCenter};
  justify-content: space-between;
  margin: 1.2rem 0;
`;
