import { Drawer, Cell, CellGroup, Text } from '@wemo-ui/marrs';
import { useState } from 'react';
import DemoContainer from '../DemoContainer/Demo';

const DrawerDemo = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleShow = () => {
    setVisible(true);
  };

  return (
    <>
      <DemoContainer title="基本用法">
        <CellGroup>
          <Cell title="基本用法" showArrow onClick={handleShow} />
        </CellGroup>
      </DemoContainer>

      <Drawer
        visible={visible}
        position="top"
        contentSpace="20%"
        onClose={handleClose}
      >
        这是内容
      </Drawer>
    </>
  );
};

export default DrawerDemo;
