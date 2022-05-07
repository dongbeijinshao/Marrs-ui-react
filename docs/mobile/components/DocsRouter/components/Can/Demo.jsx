import { Can } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const CanDemo = () => {
  return (
    <>
      <DemoContainer title="基础用法" background={false} padding>
        <Can style={{ background: 'green', color: '#fff' }}>这是一块内容</Can>
      </DemoContainer>

      <DemoContainer title="圆形样式" background={false} padding>
        <Can
          style={{
            background: 'green',
            textAlign: 'center',
            lineHeight: '100px',
            color: '#fff'
          }}
          size={{ width: 100, height: 100 }}
          circle
        >
          圆形
        </Can>
      </DemoContainer>
    </>
  );
};

export default CanDemo;
