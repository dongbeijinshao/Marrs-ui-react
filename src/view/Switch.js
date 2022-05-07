import { FlexBox, Switch } from '@wemo-ui/marrs';
import Demo from './Demo';

// 模拟change事件
const handleChange = (e) => {
  console.log('模拟change事件', e);
};

// 模拟click事件
const handleClick = (e) => {
  console.log('模拟click事件', e);
};

const SwitchView = () => {
  return (
    <>
      <Demo title="基础样式" padding>
        <Switch
          checked
          color="info"
          onClick={handleClick}
          onChange={handleChange}
        />
      </Demo>

      <Demo title="自定义颜色" padding>
        <FlexBox container>
          <Switch onClick={handleChange} color="grey" onChange={handleChange} />
        </FlexBox>
      </Demo>

      <Demo title="自定义尺寸" padding>
        <Switch
          checkedColor="yellow"
          uncheckedColor="green"
          checked
          volume="large"
          onClick={handleChange}
          onChange={handleChange}
        />
      </Demo>

      <Demo title="禁用状态" padding>
        <Switch
          checked
          disabled
          onClick={handleChange}
          onChange={handleChange}
        />
      </Demo>

      <Demo title="加载状态" padding>
        <Switch
          checked
          loading
          onClick={handleChange}
          onChange={handleChange}
        />
      </Demo>
    </>
  );
};

export default SwitchView;
