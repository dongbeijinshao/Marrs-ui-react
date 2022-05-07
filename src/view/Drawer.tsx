import { Button, Drawer } from '@wemo-ui/marrs';
import { useState } from 'react';

export default function DrawerView() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('left');

  const handleShow = () => {
    setVisible(true);
  };

  const handleHide = () => {
    setVisible(false);
  };

  const handleTogglePosition = () => {
    setPosition(position === 'left' ? 'right' : 'left');
  };

  return (
    <>
      <Button onClick={handleShow}>展示</Button>
      <Button onClick={handleTogglePosition}>切换左右</Button>
      <Drawer
        classes={{ root: 'aaa', backdrop: 'bbb', popupRoot: 'cccc' }}
        visible={visible}
        position={position}
        onClose={handleHide}
      >
        这是内容
      </Drawer>
    </>
  );
}
