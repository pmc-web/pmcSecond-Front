import TopBar from 'src/components/common/layout/TopBar';
import Tab from 'src/components/common/tab/Tab';
import MarketSettingDefault from 'src/components/market/MarketSettingDefault';
import Payment from 'src/components/market/Payment';

const MarketSetting = () => (
  <>
    <TopBar title="쇼핑몰 설정" leftIcon="leftArrow" />
    <Tab>
      <Tab.TabItem label="기본 정보">
        <MarketSettingDefault />
      </Tab.TabItem>
      <Tab.TabItem label="결제">
        <Payment />
      </Tab.TabItem>
      <Tab.TabItem label="배송">
        <div>배송</div>
      </Tab.TabItem>
    </Tab>
  </>
);

export default MarketSetting;
