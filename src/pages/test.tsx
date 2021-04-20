import { css } from '@emotion/react';
import { useState } from 'react';
import Layout from 'src/components/common/layout/Layout';
import Logo from 'src/components/common/logo/Logo';
import Tab from 'src/components/common/tab/Tab';

const Test = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <Layout title="test" leftIcon="menu" rightIcon={['search', 'alarm']}>
      <button type="button" onClick={toggleShowSideBar}>
        sidebar
      </button>
      <Tab>
        <Tab.TabItem label="test1">te1t</Tab.TabItem>
        <Tab.TabItem label="test2">test</Tab.TabItem>
      </Tab>
      <Logo />
    </Layout>
  );
};

export default Test;
