import { Switch } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';

const SwitchDemo = () => {
  return (
    <>
      <DemoContainer title="基础用法" padding background={false}>
        <Switch checked />
      </DemoContainer>

      <DemoContainer title="禁用状态" padding background={false}>
        <Switch disabled checked />
      </DemoContainer>

      <DemoContainer title="加载状态" padding background={false}>
        <Switch loading checked />
      </DemoContainer>

      <DemoContainer title="自定义颜色值" padding background={false}>
        <Switch className="demo-margin-r-10" checkedColor="#2A6AE9" checked />
        <Switch className="demo-margin-r-10" checkedColor="#07C160" checked />
      </DemoContainer>
    </>
  );
};

export default SwitchDemo;
