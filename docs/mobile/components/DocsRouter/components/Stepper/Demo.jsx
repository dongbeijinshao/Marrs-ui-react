import { Stepper, Toast } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const handleChange = () => {
  Toast.success({
    message: '事件触发'
  });
};

const StepperDemo = () => {
  return (
    <>
      <DemoContainer title="基本样式" padding background={false}>
        <Stepper defaultValue={2} />
      </DemoContainer>

      <DemoContainer title="数字多样式" padding background={false}>
        <Stepper decimal="0" defaultValue={999} />
        <Stepper decimal="1" defaultValue={2.2} sx={{ marginTop: 4 }} />
      </DemoContainer>

      <DemoContainer title="步长设置" padding background={false}>
        <Stepper step="2" defaultValue={15} />
      </DemoContainer>

      <DemoContainer title="限制范围" padding background={false}>
        <Stepper max={20} min={4} defaultValue={4} />
      </DemoContainer>

      <DemoContainer title="异步变更" padding background={false}>
        <Stepper onChange={handleChange} />
      </DemoContainer>
    </>
  );
};

export default StepperDemo;
