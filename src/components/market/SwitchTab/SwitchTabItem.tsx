export type SwitchTabItemProps = {
  label: string;
};

const SwitchTabItem = ({ label }: SwitchTabItemProps) => <div id={label} className="tabItem" />;

export default SwitchTabItem;
