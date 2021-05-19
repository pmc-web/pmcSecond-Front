import { ReactNode } from 'react';

export type TabItemProps = {
  children: ReactNode;
  label: string;
};

const TabItem = ({ children, label }: TabItemProps) => (
  <div id={label} className="tabItem">
    {children}
  </div>
);

export default TabItem;
