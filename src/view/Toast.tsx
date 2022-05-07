import { Button, FlexBox, Toast } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { useRef } from 'react';

export default function ToastView() {
  const toastRef = useRef<any>();
  const handleShow = () => {
    toastRef.current = Toast.info({
      message: '测试文案测试',
      duration: 10000,
      sx: {
        zIndex: 9999
      },
      onClose: () => {
        console.log('closed');
      }
    });
  };

  const handleShowSuccess = () => {
    toastRef.current = Toast.success({
      message: '成功文案'
    });
  };
  const handleShowFailure = () => {
    toastRef.current = Toast.fail({
      message: '失败文案'
    });
  };
  const handleShowCustomIcon = () => {
    toastRef.current = Toast.info({
      message: '测试文案',
      icon: IconAdd
    });
  };
  const handleShowLongContent = () => {
    toastRef.current = Toast.info({
      message:
        '这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案，这是一段很长的文案',
      duration: 0
    });
  };
  const handleShowTop = () => {
    toastRef.current = Toast.info({
      message: '测试文案',
      position: 'top'
    });
  };
  const handleShowBottom = () => {
    toastRef.current = Toast.info({
      message: '测试文案',
      position: 'bottom'
    });
  };
  const handleHide = () => {
    toastRef.current && toastRef.current.destroy();
  };
  const handleShowCountdown = () => {
    let wait = 4;

    function countdown() {
      setTimeout(() => {
        wait--;
        if (wait === 0) {
          toastRef.current.destroy();
        } else {
          toastRef.current.update(`倒数${wait}秒`);
          countdown();
        }
      }, 1000);
    }

    toastRef.current = Toast.info({
      message: `倒数${wait}秒`,
      duration: 0,
      onOpened: () => {
        countdown();
      }
    });
  };

  const handleShowLoading = () => {
    toastRef.current = Toast.loading({
      message: '加载中'
    });
  };

  return (
    <FlexBox container gap={2}>
      <FlexBox item>
        <Button onClick={handleShow}>显示</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowSuccess}>显示成功</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowFailure}>显示失败</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowCustomIcon}>显示自定义icon</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowLongContent}>显示长内容</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowTop}>显示在上面</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowBottom}>显示在下面</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleHide}>隐藏</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowCountdown}>显示倒计时</Button>
      </FlexBox>
      <FlexBox item>
        <Button onClick={handleShowLoading}>显示loading</Button>
      </FlexBox>
    </FlexBox>
  );
}
