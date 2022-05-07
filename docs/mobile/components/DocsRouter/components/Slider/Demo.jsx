import { Slider, Can } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const SliderDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        <Slider value={30} />
        <Slider value={30} color="info" />
      </DemoContainer>

      <DemoContainer title="指定范围" background={false} padding>
        <Slider value={-30} min={-100} max={100} />
      </DemoContainer>

      <DemoContainer title="指定步长" background={false} padding>
        <Slider value={30} step={5} />
      </DemoContainer>

      <DemoContainer title="禁止样式" background={false} padding>
        <Slider value={30} disabled />
      </DemoContainer>

      <DemoContainer title="双滑块样式" background={false} padding>
        <Slider value={30} />
      </DemoContainer>

      <DemoContainer title="纵向模式" background={false} padding>
        <Can style={{ height: 100 }}>
          <Slider value={30} vertical />
        </Can>
      </DemoContainer>
    </>
  );
};

export default SliderDemo;
