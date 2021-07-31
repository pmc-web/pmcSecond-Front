import { css, Theme } from '@emotion/react';
import { ReactElement, SyntheticEvent, useState } from 'react';
import Text from 'src/components/common/Text';
import TabItem, { SwitchTabItemProps } from './SwitchTabItem';

type TapProps = {
  children: ReactElement<SwitchTabItemProps>[];
  css?: ReturnType<typeof css>;
  initialTabIndex?: number;
  width?: number | string;
  onChage?: (event: SyntheticEvent) => void;
  title: string;
};

const Tab = ({ children, css: propCss, initialTabIndex, width, onChage, title }: TapProps) => {
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
          /* .tabItem {
            ${theme.commonStyle.flexCenter}
          } */
        `,
        containerCss,
        propCss,
      ]}
    >
      <p>{title}</p>
      <ul>
        {children.length > 0 &&
          children.map((child, i) => (
            <li key={(child?.props).label}>
              <span
                css={(theme) => css`
                  background-color: ${theme.color[i === currentTab ? 'purple050' : 'white']};
                  border: 1px solid ${theme.color[i === currentTab ? 'purple050' : 'grey040']};
                  border-radius: 6px;
                `}
                role="button"
                tabIndex={i}
                onClick={onTabClick(i)}
              >
                <Text.Title level={3} size="subtitle3" color={i === currentTab ? 'white' : 'grey040'}>
                  {child.props.label}
                </Text.Title>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

Tab.TabItem = TabItem;

const containerCss = (theme: Theme) => css`
  margin-bottom: 1.875em;
  > p {
    ${theme.fontSize.body2};
    margin-bottom: 10px;
  }
  > ul {
    ${theme.commonStyle.flexCenter}
    > li {
      width: 100%;
      cursor: pointer;
      margin-right: 15px;
    }
    > li:last-child {
      margin: 0;
    }
    span {
      ${theme.commonStyle.flexCenter};
      height: 3.5rem;

      color: ${theme.color.white};
      &:focus {
        outline: none;
      }
    }
  }
`;
export default Tab;
