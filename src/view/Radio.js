import { Radio, RadioGroup } from '@wemo-ui/marrs';
import { IconStar } from '@wemo-ui/marrs-icons';
import { useState } from 'react';
import Demo from './Demo';

// 模拟change事件
// const handleChange = (e) => {
//   console.log('模拟change事件', value);
// };

// 模拟click事件
// const handleClick = (e) => {
//   console.log('模拟click事件', e);
// };
const handleGroupChange = (e) => {
  console.log('模拟group change事件', e);
};
const RadioView = () => {
  const [value, setValue] = useState(1);
  // 模拟group change事件
  const handleGroupChange1 = (e) => {
    console.log('模拟group change事件', e);
    setTimeout(() => {
      setValue(e);
    }, 1000);
  };
  return (
    <>
      <Demo title="基础样式" padding>
        <RadioGroup
          onChange={handleGroupChange1}
          value={value}
          color="success"
          row
        >
          <Radio
            // onClick={handleClick}
            value={1}
            label="单选框 d"
          />

          <Radio value={2} label="单选框 2" />
        </RadioGroup>
      </Demo>

      <Demo title="自定义icon" padding>
        <RadioGroup
          onChange={handleGroupChange}
          defaultValue={value}
          row
          classes={{ root: 'my-class-name' }}
          icon={<IconStar />}
        >
          <Radio value={1} label="单选框 1" />

          <Radio value={2} label="单选框 2" />
        </RadioGroup>
      </Demo>

      <Demo title="禁止文本点击" padding>
        <RadioGroup
          defaultValue={value}
          row
          classes={{ root: 'my-class-name' }}
        >
          <Radio labelDisabled value={1} label="单选框 1" />

          <Radio labelDisabled value={2} label="单选框 2" />
        </RadioGroup>
      </Demo>

      <Demo title="自定义大小" padding>
        <RadioGroup
          value={value}
          row
          volume="large"
          classes={{ root: 'my-class-name' }}
        >
          <Radio value={1} volume="tiny" label="单选框 1" />

          <Radio value={2} label="单选框 2" />
        </RadioGroup>
      </Demo>

      <Demo title="禁用文本" padding>
        <RadioGroup value={value} disabled color="success">
          <Radio value={1} label="单选框 1" />

          <Radio value={2} label="单选框 2" />
        </RadioGroup>
      </Demo>
    </>
  );
};

export default RadioView;
