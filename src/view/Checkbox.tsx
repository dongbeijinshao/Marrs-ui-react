import { Checkbox, CheckboxGroup } from '@wemo-ui/marrs';
import { IconGoods, IconIDCard, IconStar } from '@wemo-ui/marrs-icons';
import { useState } from 'react';
import Demo from './Demo';

// 模拟group change事件

// 模拟click事件

const Checkboxes = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState([1, 2, 3]);

  // const handleClick = (e) => {
  //   console.log('模拟click事件', e);
  //   setChecked(!checked);
  // };
  // 模拟change事件
  const handleChange = (e) => {
    console.log('模拟change事件', e);
    setChecked(e);
  };
  // 模拟change事件
  const handleClick = (e) => {
    console.log('模拟change事件', e);
    setChecked(e);
  };

  const handleGroupChange = (e) => {
    console.log('模拟group change事件', e);
    // setTimeout(() => {
    setValue(e);
    // }, 1000);
  };

  return (
    <>
      <Demo title="基础样式" padding>
        <Checkbox
          onChange={handleChange}
          onClick={handleClick}
          label="复选框"
          checked={checked}
          iconStyle="checkbox"
        />
      </Demo>

      <Demo title="自定义icon" padding>
        <Checkbox
          label="复选框"
          uncheckedIcon={<IconStar />}
          icon={<IconIDCard />}
        />
      </Demo>

      <Demo title="禁止文本点击" padding>
        <Checkbox
          label="复选框"
          labelDisabled
          iconStyle="radio"
          icon={<IconGoods />}
        />
      </Demo>

      <Demo title="自定义尺寸" padding>
        <Checkbox label="复选框" volume="large" />
      </Demo>

      <Demo title="禁止状态" padding>
        <Checkbox label="复选框" checked disabled />
      </Demo>

      <Demo title="限制最大可选数" padding>
        <CheckboxGroup
          row
          max={2}
          color="info"
          volume="large"
          value={value}
          onChange={handleGroupChange}
          className="custom-class"
        >
          <Checkbox value={1} label="复选框" classes={{ root: 'abc' }} />
          <Checkbox value={2} label="复选框" />
          <Checkbox value={3} label="复选框" />
          <Checkbox value={4} label="复选框" />
        </CheckboxGroup>
      </Demo>
    </>
  );
};

export default Checkboxes;
