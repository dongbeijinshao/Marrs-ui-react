import { Divider, Text } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const DividerDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式" background={false} padding>
        <Divider gap={0} lineColor="#F2F2F2" />
      </DemoContainer>

      <DemoContainer title="展示文本" background={false} padding>
        <Divider lineColor="#F2F2F2" sx={{ color: `#757575` }}>
          分割线
        </Divider>
      </DemoContainer>

      <DemoContainer title="自定义样式" background={false} padding>
        <Divider color="primary">自定义颜色</Divider>
        <Divider
          lineColor="#F2F2F2"
          gap={3}
          tipStart={20}
          sx={{ color: `#757575` }}
        >
          分割线
        </Divider>
        <Divider lineColor="#F2F2F2" tipStart={232} sx={{ color: `#757575` }}>
          分割线
        </Divider>
      </DemoContainer>

      <DemoContainer title="纵向分割" background={false} padding>
        <Text sx={{ fontSize: 12 }}>一级分类</Text>
        <Divider lineColor="#F2F2F2" vertical sx={{ margin: `0 10px` }} />
        <Text sx={{ fontSize: 12 }}>二级分类</Text>
      </DemoContainer>
    </>
  );
};

export default DividerDemo;
