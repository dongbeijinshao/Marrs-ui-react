import { Backdrop, Button, FlexBox } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { styled } from '@wemo-ui/marrs/styles';
import { useCallback, useState } from 'react';

const IconWrapper = styled('div')({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
});

const Icon = styled(IconAdd)({
  fontSize: 48,
  color: '#ffffff'
});

export default function BackdropView() {
  const [visible, setVisible] = useState(false);
  const [thenable, setThenable] = useState(false);

  const showBackdrop = useCallback(() => {
    setVisible(true);
  }, []);

  const setTrue = () => setThenable(true);

  const setFalse = () => setThenable(false);

  const onBeforeOpen = () => {
    console.log('before open');
    return thenable
      ? new Promise((resolve) => {
          resolve(true);
        })
      : true;
  };

  const onOpened = useCallback(() => {
    console.log('opened');
  }, []);

  const onBeforeClose = useCallback(() => {
    console.log('before close, theneable', thenable);
    return thenable
      ? new Promise((resolve, reject) => {
          resolve({});
        })
      : true;
  }, [thenable]);

  const onClosed = useCallback(() => {
    console.log('closed');
    setVisible(false);
  }, []);

  const handleInnerClick = () => {
    console.log('setvisible false');
    setVisible(false);
  };

  return (
    <FlexBox container gap={2}>
      <FlexBox item>
        <Button onClick={showBackdrop}>展示背景板</Button>
        <Button onClick={setFalse}>直接返回 True</Button>
        <Button onClick={setTrue}>返回 Promise</Button>
      </FlexBox>

      <Backdrop
        visible={visible}
        beforeOpen={onBeforeOpen}
        afterOpen={onOpened}
        beforeClose={onBeforeClose}
        afterClose={onClosed}
      >
        <IconWrapper onClick={handleInnerClick}>
          <Icon />
        </IconWrapper>
      </Backdrop>
    </FlexBox>
  );
}
