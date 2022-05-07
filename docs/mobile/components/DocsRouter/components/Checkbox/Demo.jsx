import { Checkbox, CheckboxGroup, Icon } from '@wemo-ui/marrs';
import { IconStar, IconSelect } from '@wemo-ui/marrs-icons';
import DemoContainer from '../DemoContainer/Demo';

const CheckboxDemo = () => {
  return (
    <>
      <DemoContainer title="基础样式" background={false} padding>
        <CheckboxGroup defaultValue={[1, 2]}>
          <Checkbox
            value={1}
            sx={{ marginRight: '30px' }}
            label="选项 A"
            iconStyle="radio"
          />
          <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
        </CheckboxGroup>
      </DemoContainer>

      <DemoContainer title="禁用状态" background={false} padding>
        <CheckboxGroup defaultValue={[1]} disabled>
          <Checkbox value={1} sx={{ marginRight: '30px' }} label="选项 A" />
          <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
        </CheckboxGroup>
      </DemoContainer>

      <DemoContainer title="自定义样式" background={false} padding>
        <CheckboxGroup defaultValue={[1]} sx={{ marginBottom: '25px' }}>
          <Checkbox
            value={1}
            sx={{ marginRight: '30px' }}
            label="选项 A"
            iconStyle="checkbox"
          />
          <Checkbox value={2} label="选项 B" iconStyle="checkbox" />
        </CheckboxGroup>
        <CheckboxGroup
          defaultValue={[1]}
          sx={{ marginBottom: '25px' }}
          color="info"
        >
          <Checkbox value={1} sx={{ marginRight: '30px' }} label="选项 A" />
          <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
        </CheckboxGroup>
        <CheckboxGroup defaultValue={[1]} volume="large">
          <Checkbox value={1} sx={{ marginRight: '27px' }} label="选项 A" />
          <Checkbox value={2} className="demo-margin-r-10" label="选项 B" />
        </CheckboxGroup>
      </DemoContainer>

      <DemoContainer title="自定义图标" background={false} padding>
        <CheckboxGroup defaultValue={[1]} icon={<Icon icon={<IconStar />} />}>
          <Checkbox value={1} sx={{ marginRight: '30px' }} label="选项 A" />
          <Checkbox
            value={2}
            className="demo-margin-r-10"
            label="选项 B"
            iconStyle="checkbox"
            icon={<Icon icon={<IconSelect />} />}
          />
        </CheckboxGroup>
      </DemoContainer>

      <DemoContainer title="禁用文本点击" background={false} padding>
        <CheckboxGroup defaultValue={[1]}>
          <Checkbox
            value={1}
            sx={{ marginRight: '30px' }}
            label="选项 A"
            labelDisabled
          />
          <Checkbox
            value={2}
            className="demo-margin-r-10"
            label="选项 B"
            labelDisabled
          />
        </CheckboxGroup>
      </DemoContainer>

      <DemoContainer title="限制选择数量" background={false} padding>
        <CheckboxGroup defaultValue={[1]} max={2}>
          <Checkbox
            value={1}
            sx={{ marginRight: '30px' }}
            label="选项 A"
            iconStyle="radio"
          />
          <Checkbox value={2} sx={{ marginRight: '30px' }} label="选项 B" />
          <Checkbox value={3} className="demo-margin-r-10" label="选项 C" />
        </CheckboxGroup>
      </DemoContainer>
    </>
  );
};

export default CheckboxDemo;
