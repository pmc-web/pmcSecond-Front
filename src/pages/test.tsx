import { css } from '@emotion/react';
import { useState } from 'react';
import Icon from 'src/components/common/Icon';
import Loading from 'src/components/common/logo/Loading';
import Splash from 'src/components/common/logo/Splash';
import SideBar from 'src/components/common/SideBar';
import Tab from 'src/components/common/tab/Tab';

const Test = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div>
      <Loading />
      <SideBar visible={showSideBar} onClickBackground={toggleShowSideBar}>
        <div
          css={css`
            width: 100%;
            background-color: red;
          `}
        >
          test
        </div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </SideBar>
      <div
        css={css`
          background-color: black;
        `}
      >
        <Icon name="kakao" size="20" color="white" />
      </div>
      <button type="button" onClick={toggleShowSideBar}>
        sidebar
      </button>
      <Tab>
        <Tab.TabItem label="test1">te1t</Tab.TabItem>
        <Tab.TabItem label="test2">test</Tab.TabItem>
      </Tab>
      <Splash />
    </div>
  );
};

export default Test;
