import {
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownGroup,
  FlexBox,
  Switch
} from '@wemo-ui/marrs';
import { useRef } from 'react';
import Demo from './Demo';

import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles({
  text: { color: 'yellow' },
  item: {
    '&::after': {
      borderColor: `transparent transparent red red !important`
    }
  }
});
const options = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
];

const options1 = [
  { text: '脑白金', value: 0 },
  { text: '黄金搭档', value: 1 },
  { text: '背背佳', value: 2 }
];

const DropdownView = () => {
  const ref = useRef({});

  const handleClick = () => {
    // (ref.current! as { toggle: () => {} }).toggle();
    // console.log(ref?.current?.toggle({}));
  };
  const styles = useStyles();
  return (
    <>
      <Demo title="基础样式">
        <DropdownGroup
          color="#ff00ff" // classes={{ text: styles.text, item: styles.item }}
          onChange={(data) => {
            console.log(data);
          }}
        >
          <Dropdown value={1} options={options} />
          <Dropdown value={2} options={options1} />
        </DropdownGroup>
      </Demo>
      <Demo title="自定义菜单内容">
        <DropdownGroup>
          <Dropdown value={1} options={options} />
          <Dropdown title="自定义" ref={ref}>
            <CellGroup>
              <Cell
                title="搭配checkbox"
                rightControl={
                  <CheckboxGroup value={[0, 2]} color="success" row>
                    <Checkbox value={0} label="复选框" />
                    <Checkbox value={1} label="复选框" />
                    <Checkbox value={2} label="复选框" />
                  </CheckboxGroup>
                }
              />
              <Cell title="搭配switch" rightControl={<Switch checked />} />
              <FlexBox
                container
                style={{
                  justifyContent: 'center',
                  padding: '10px 0',
                  background: '#ffffff'
                }}
              >
                <Button onClick={handleClick}>提交</Button>
              </FlexBox>
            </CellGroup>
          </Dropdown>
        </DropdownGroup>
      </Demo>
      <Demo title="自定义选中颜色">
        <DropdownGroup color="info">
          <Dropdown value={1} options={options} />
          <Dropdown value={2} options={options1} />
        </DropdownGroup>
      </Demo>
      <Demo title="禁用菜单">
        <DropdownGroup direction>
          <Dropdown value={1} options={options} disabled />
          <Dropdown value={2} options={options1} disabled />
        </DropdownGroup>
      </Demo>
    </>
  );
};

export default DropdownView;
