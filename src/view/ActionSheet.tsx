import { ActionSheet, Button } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { useCallback, useState } from 'react';

export default function ActionSheetView() {
  const [visible, setVisible] = useState(false);

  const handleToggle = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  // const handleSelectItem = useCallback((value) => {
  //   console.log('111', value);
  // }, []);

  const items = [
    {
      title: '标题',
      label: '副标题',
      txt: '22'
    },
    {
      title: '标题',
      label: '副标题'
    },
    {
      title: '标题',
      label: '副标题',
      icon: IconAdd
    },
    {
      title: '标题',
      label: '副标题',
      disabled: true
    }
  ];

  const handleClickItem = (item, i) => {
    console.log(item, i);
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleToggle}>切换</Button>
      <ActionSheet
        visible={visible}
        title="测试标题"
        description="这个一段描述文字"
        onClickItem={handleClickItem}
        closeable={true}
        // onSelect={handleSelectItem}
        onClose={handleClose}
        items={items}
        radius={10}
        classes={{ backdrop: 'aaaa', popupRoot: 'bbb' }}
      />
    </div>
  );
}
