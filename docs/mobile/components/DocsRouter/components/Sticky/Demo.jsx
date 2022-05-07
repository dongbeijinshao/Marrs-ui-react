import { Sticky, Button, Can } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
import { useRef } from 'react';

const StickyDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式">
        <Can
          size={{ width: '100%', height: 100 }}
          sx={{ border: `1px solid red` }}
        >
          <Sticky>
            <Button>Sticky</Button>
          </Sticky>
        </Can>
      </DemoContainer>

      <DemoContainer title="自定义偏移量">
        <Can
          size={{ width: '100%', height: 100 }}
          sx={{ border: `1px solid red` }}
        >
          <Sticky offset={50}>
            <Button>Sticky</Button>
          </Sticky>
        </Can>
      </DemoContainer>

      <DemoContainer title="container">
        <Can>
          <Sticky>
            <Button>Sticky</Button>
          </Sticky>
        </Can>
      </DemoContainer>

      <DemoContainer title="position">
        <Can
          size={{ width: '100%', height: 100 }}
          sx={{ border: `1px solid red` }}
        >
          <Sticky position="bottom">
            <Button>Sticky</Button>
          </Sticky>
        </Can>
      </DemoContainer>
    </>
  );
};

export default StickyDemo;
