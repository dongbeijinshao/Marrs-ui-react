import { Radio, RadioGroup, Icon } from '@wemo-ui/marrs';
import { IconMine } from '@wemo-ui/marrs-icons';
import DemoContainer from '../DemoContainer/Demo';

const RadioDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        <RadioGroup defaultValue={1}>
          <Radio value={1} className="demo-margin-r-10" label="选项 A" />
          <Radio value={2} className="demo-margin-r-10" label="选项 B" />
        </RadioGroup>
      </DemoContainer>

      <DemoContainer title="禁用状态" background={false} padding>
        <RadioGroup defaultValue={1} disabled>
          <Radio value={1} className="demo-margin-r-10" label="选项 A" />
          <Radio value={2} className="demo-margin-r-10" label="选项 B" />
        </RadioGroup>
      </DemoContainer>

      <DemoContainer title="自定义样式" background={false} padding>
        <RadioGroup defaultValue={1} className="demo-margin-b-10">
          <Radio
            value={1}
            className="demo-margin-r-10"
            label="选项 A"
            iconStyle="checkbox"
          />
          <Radio
            value={2}
            className="demo-margin-r-10"
            label="选项 B"
            iconStyle="checkbox"
          />
        </RadioGroup>
        <RadioGroup defaultValue={1} className="demo-margin-b-10">
          <Radio
            value={1}
            className="demo-margin-r-10"
            label="选项 A"
            color="info"
          />
          <Radio
            value={2}
            className="demo-margin-r-10"
            label="选项 B"
            color="info"
          />
        </RadioGroup>
        <RadioGroup defaultValue={1}>
          <Radio
            value={1}
            sx={{ marginRight: '8px !important' }}
            label="选项 A"
            volume="large"
          />
          <Radio
            value={2}
            className="demo-margin-r-10"
            label="选项 B"
            volume="large"
          />
        </RadioGroup>
      </DemoContainer>

      <DemoContainer title="自定义图标" background={false} padding>
        <RadioGroup defaultValue={1} icon={<Icon icon={<IconMine />} />}>
          <Radio value={1} className="demo-margin-r-10" label="选项 A" />

          <Radio value={2} className="demo-margin-r-10" label="选项 B" />
        </RadioGroup>
      </DemoContainer>

      <DemoContainer title="禁用文本点击" background={false} padding>
        <RadioGroup defaultValue={1}>
          <Radio
            value={1}
            className="demo-margin-r-10"
            label="选项 A"
            labelDisabled
          />
          <Radio
            value={2}
            className="demo-margin-r-10"
            label="选项 B"
            labelDisabled
          />
        </RadioGroup>
      </DemoContainer>
    </>
  );
};

export default RadioDemo;
