import { Cell, CellGroup, Dialog } from '@wemo-ui/marrs';
import { useState } from 'react';
import DemoContainer from '../DemoContainer/Demo';

const content = '这是一段内容';

const DialogDemo = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState();
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [confirmText, setConfirmText] = useState();
  const [cancelText, setCancelText] = useState();

  const handleTitle = () => {
    setTitle('标题');
    handleShow();
  };

  const handleNoTitle = () => {
    setTitle('');
    handleShow();
  };

  const handleConfirm = () => {
    setTitle('');
    handleShow();
    setShowCancelButton(true);
  };

  const handleClose = () => {
    setVisible(false);
    setShowCancelButton(false);
    setConfirmText();
    setCancelText();
  };

  const handleShow = () => {
    setVisible(true);
  };

  const handleText = () => {
    setVisible(true);
    setShowCancelButton(true);
    setConfirmText('yes');
    setCancelText('cancel');
  };

  return (
    <>
      <DemoContainer title="基本用法">
        <CellGroup>
          <Cell title="带标题样式" showArrow onClick={handleTitle} />
          <Cell title="无标题样式" showArrow onClick={handleNoTitle} />
          <Cell title="确认样式" showArrow onClick={handleConfirm} />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="自定义文本内容">
        <CellGroup>
          <Cell title="自定义文本内容" showArrow onClick={handleText} />
        </CellGroup>
      </DemoContainer>

      <Dialog
        visible={visible}
        title={title}
        confirmText={confirmText}
        cancelText={cancelText}
        showCancelButton={showCancelButton}
        onClose={handleClose}
        onCancel={handleClose}
        onConfirm={handleClose}
      >
        {content}
      </Dialog>
    </>
  );
};

export default DialogDemo;
