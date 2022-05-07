import { Button, Sticky } from '@wemo-ui/marrs';
import React, { useRef } from 'react';

function StickyView() {
  const containerRef = useRef();
  const containerBottomRef = useRef();
  return (
    <div style={{ height: '200vh' }}>
      <Sticky>
        <Button face="filled" color="primary">
          基本用法
        </Button>
      </Sticky>
      <div style={{ marginLeft: 100 }}>
        <Sticky offset={50}>
          <Button face="filled" color="info">
            吸顶距离50px
          </Button>
        </Sticky>
      </div>
      <div
        ref={containerRef}
        style={{
          marginTop: 20,
          width: '100%',
          height: 200,
          background: '#eee',
          textAlign: 'right'
        }}
      >
        <Sticky container={containerRef}>
          <Button face="filled" color="success">
            指定容器
          </Button>
        </Sticky>
      </div>

      <div style={{ height: 400 }}></div>
      <Sticky offset={50} position="bottom">
        <Button face="filled" color="error">
          吸低距离50px
        </Button>
      </Sticky>

      <div
        ref={containerBottomRef}
        style={{
          marginTop: 20,
          width: '100%',
          height: 200,
          background: '#eee',
          textAlign: 'right'
        }}
      >
        <Sticky container={containerBottomRef} position="bottom">
          <Button face="filled" color="success">
            指定容器bottom
          </Button>
        </Sticky>
      </div>
    </div>
  );
}

export default StickyView;
