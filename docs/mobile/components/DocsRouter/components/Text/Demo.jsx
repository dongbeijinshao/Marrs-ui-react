import { Text, Can } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const TextDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        <Can>
          <Text>文本</Text>
        </Can>
      </DemoContainer>

      <DemoContainer title="自定义字体" background={false} padding>
        <Can>
          <Text tl="t1">文本内容</Text>
        </Can>
        <Can>
          <Text tl="t2">文本内容</Text>
        </Can>
        <Can>
          <Text tl="t3">文本内容</Text>
        </Can>
        <Can>
          <Text tl="t4">文本内容</Text>
        </Can>
        <Can>
          <Text tl="t5">文本内容</Text>
        </Can>
        <Can>
          <Text tl="t6">文本内容</Text>
        </Can>
      </DemoContainer>
    </>
  );
};

export default TextDemo;
