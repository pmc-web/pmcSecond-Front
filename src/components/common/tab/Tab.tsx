import { css } from '@emotion/react';
import { ReactElement, SyntheticEvent, useState } from 'react';
import Text from '../Text';
import TabItem, { TabItemProps } from './TabItem';

type TapProps = {
  children: ReactElement<TabItemProps>[];
  css?: ReturnType<typeof css>;
  initialTabIndex?: number;
  width?: number | string;
  onChage?: (event: SyntheticEvent) => void;
};

const Tab = ({ children, css: propCss, initialTabIndex, width, onChage }: TapProps) => {
  const [currentTab, setCurrentTab] = useState(initialTabIndex || 0);
  const onTabClick = (index: number) => (event: SyntheticEvent) => {
    setCurrentTab(index);
    if (onChage) {
      onChage(event);
    }
  };
  return (
    <div
      css={(theme) => [
        css`
          width: ${width ?? 'inherit'};
          .tabItem {
            ${theme.commonStyle.flexCenter}
            margin-top: 1rem;
          }
        `,
        propCss,
      ]}
    >
      <ul
        css={(theme) => css`
          ${theme.commonStyle.flexCenter}
        `}
      >
        {children.length > 0 &&
          children.map((child, i) => (
            <li
              css={css`
                width: 100%;
              `}
              key={(child?.props).label}
            >
              <span
                css={(theme) => css`
                  ${theme.commonStyle.flexCenter};
                  height: 3.5rem;
                  background-color: white;
                  border: none;
                  border-bottom: 2px solid ${theme.color[i === currentTab ? 'purple050' : 'purple010']};
                  &:focus {
                    outline: none;
                  }
                `}
                role="button"
                tabIndex={i}
                onClick={onTabClick(i)}
              >
                <Text.Title level={3} size="subtitle2" color={i === currentTab ? 'purple050' : 'grey040'}>
                  {child.props.label}
                </Text.Title>
              </span>
            </li>
          ))}
      </ul>
      {children[currentTab]}
    </div>
  );
};

Tab.TabItem = TabItem;

export default Tab;
