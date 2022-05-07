import { Button, Dialog, FlexBox, Text } from '@wemo-ui/marrs';
import { mock } from 'mockjs';
import { useState } from 'react';

export default function DialogView() {
  const [visible, setVisible] = useState(false);

  const [showCancelButton, setShowCancelButton] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleShowCancelButton = () => {
    setShowCancelButton(true);
    handleOpen();
  };

  const handleHideCancelButton = () => {
    setShowCancelButton(false);
    handleOpen();
  };

  const handlleShowCustom = () => {
    setShowCancelButton(false);

    console.log('hideFooter', hideFooter);
    setHideFooter(true);
    handleOpen();
  };

  const handleShowAlert = () => {
    Dialog.alert({
      content: '这是内容',
      onConfirm: () => {
        console.log('alert confirm');
      }
    });
  };

  const handleShowConfirm = () => {
    Dialog.confirm({
      title: '测试',
      content: '这是内容',
      classes: { backdrop: 'aaa', popupRoot: 'bbb' },
      onCancel: () => {
        console.log('confirm cancel');
      },
      onConfirm: () => {
        console.log('confirm ok');
      }
    });
  };

  const [content] = useState(mock('@csentence(200)'));
  const [title] = useState(mock('@ctitle(10)'));

  console.log(hideFooter);

  return (
    <FlexBox container gap={2}>
      <FlexBox item>
        <Button onClick={handleOpen}>显示</Button>
        <Button onClick={handleShowCancelButton}>显示取消按钮</Button>
        <Button onClick={handleHideCancelButton}>隐藏取消按钮</Button>
        <Button onClick={handleShowAlert}>alert</Button>
        <Button onClick={handleShowConfirm}>confirm</Button>

        <Button onClick={handlleShowCustom}>自定义内容</Button>
      </FlexBox>

      <Dialog
        visible={visible}
        title={title}
        showCancelButton={showCancelButton}
        hideFooter={hideFooter}
        onClose={handleClose}
      >
        <Text>{content}</Text>
        {hideFooter && (
          <div
            style={{
              display: 'grid',
              width: '100%',
              gap: 10,
              gridTemplateColumns: '1fr 1fr'
            }}
          >
            <Button color="primary" fullWidth>
              确认
            </Button>
            <Button color="info" fullWidth>
              取消
            </Button>
          </div>
        )}
      </Dialog>
    </FlexBox>
  );
}
