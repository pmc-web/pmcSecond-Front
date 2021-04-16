import { css } from '@emotion/react';
import { useState } from 'react';
import Icon from 'src/components/common/Icon';
import SideBar from 'src/components/common/SideBar';

const Test = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div>
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
    </div>
  );
};

export default Test;
