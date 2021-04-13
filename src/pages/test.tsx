import { useState } from 'react';
import SideBar from 'src/components/common/SideBar';

const Test = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div>
      <SideBar visible={showSideBar} onClickBackground={toggleShowSideBar}>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </SideBar>
      <button type="button" onClick={toggleShowSideBar}>
        sidebar
      </button>
    </div>
  );
};

export default Test;
