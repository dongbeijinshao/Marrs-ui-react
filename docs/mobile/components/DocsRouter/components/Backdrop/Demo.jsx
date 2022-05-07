import { Backdrop, Cell } from '@wemo-ui/marrs';
import { useState } from 'react';

import DemoContainer from '../DemoContainer/Demo';

const BackdropDemo = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleVisible = () => {
    setVisible(false);
  };

  return (
    <>
      <DemoContainer title="基本用法">
        <Cell title="背景板" showArrow onClick={handleClick} />
        <Backdrop visible={visible} onClick={handleVisible}></Backdrop>
      </DemoContainer>
    </>
  );
};

export default BackdropDemo;
