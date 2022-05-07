import { Toast, Cell, CellGroup, Icon } from '@wemo-ui/marrs';
import { IconAdd, IconLoading } from '@wemo-ui/marrs-icons';
import { useRef } from 'react';
import DemoContainer from '../DemoContainer/Demo';

const ToastDemo = () => {
  const toastRef = useRef();
  const handleShow = () => {
    toastRef.current = Toast.info({
      // message: '我是提示文案，建议不超过十五字~',
      message: '单行限制十二个的中文字符',
      duration: 2000,
      onClose: () => {}
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

  const handleShowCountdown = () => {
    let wait = 3;

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

    toastRef.current = Toast.loading({
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

  const handleShowLoading1 = () => {
    toastRef.current = Toast.loading({
      message: '加载中',
      icon: <Icon icon={<IconLoading />} />
    });
  };
  return (
    <>
      <DemoContainer title="基本用法">
        <CellGroup>
          <Cell title="文字提示" showArrow onClick={handleShow} />
          <Cell title="加载提示" showArrow onClick={handleShowLoading} />
          <Cell title="成功提示" showArrow onClick={handleShowSuccess} />
          <Cell title="失败提示" showArrow onClick={handleShowFailure} />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="自定义样式">
        <CellGroup>
          <Cell title="自定义图标" showArrow onClick={handleShowCustomIcon} />
          <Cell title="自定义加载提示" showArrow onClick={handleShowLoading1} />
          <Cell title="自定义位置:顶部" showArrow onClick={handleShowTop} />
          <Cell title="自定义位置:底部" showArrow onClick={handleShowBottom} />
        </CellGroup>
      </DemoContainer>

      <DemoContainer title="动态文字提示">
        <CellGroup>
          <Cell title="倒计时加载" showArrow onClick={handleShowCountdown} />
        </CellGroup>
      </DemoContainer>
    </>
  );
};

export default ToastDemo;
