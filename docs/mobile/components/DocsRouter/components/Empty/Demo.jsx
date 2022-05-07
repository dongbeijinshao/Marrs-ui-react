import { Button, Empty, Image } from '@wemo-ui/marrs';
import demoImg1 from '@wemo-ui/marrs-docs/common/image/empty-1.png';
import demoImg2 from '@wemo-ui/marrs-docs/common/image/empty-2.png';
import demoImg3 from '@wemo-ui/marrs-docs/common/image/empty-3.png';
import DemoContainer from '../DemoContainer/Demo';

const EmptyDemo = () => {
  return (
    <>
      <DemoContainer
        title="基础样式"
        style={{ marginBottom: 10 }}
        background={false}
        padding
      >
        <Empty
          volume="small"
          description="空态页文案"
          contentControl={<Image src={demoImg1} />}
        />
      </DemoContainer>

      <DemoContainer
        title="操作按钮"
        style={{ marginBottom: 10 }}
        background={false}
        padding
      >
        <Empty
          volume="small"
          description="空态页文案"
          contentControl={<Image src={demoImg2} />}
          actionControl={
            <Button face="plain" color="#C4C4C4">
              立即前往
            </Button>
          }
        />
      </DemoContainer>

      <DemoContainer
        title="补充文案"
        style={{ marginBottom: 10 }}
        background={false}
        padding
      >
        <Empty
          volume="small"
          text="补充说明文案请尽量简短"
          description="空态页文案"
          contentControl={<Image src={demoImg3} />}
          actionControl={
            <Button face="plain" color="#C4C4C4">
              立即前往
            </Button>
          }
        />
      </DemoContainer>
    </>
  );
};

export default EmptyDemo;
