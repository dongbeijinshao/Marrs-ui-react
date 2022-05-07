import {
  Picker,
  PickerGroup,
  PickerItem,
  Toast,
  Cell,
  ActionSheet,
  usePicker,
  PickerTree
} from '@wemo-ui/marrs';
import { useState, useCallback } from 'react';
import DemoContainer from '../DemoContainer/Demo';

const baseOptions = [
  '小笼包子',
  '冰糖葫芦',
  '煎饼果子',
  '麻婆豆腐',
  '小炒牛肉',
  '鱼香肉丝',
  '水煮牛肉',
  '手撕包菜'
].map((label, value) => ({ label, value: 'value-' + value }));

const clothes = [
  { label: '短袖', value: '短袖' },
  { label: '裙子', value: '裙子' }
];

const size = [34, 35, 37, 38].map((num) => ({
  label: num,
  value: num
}));

const areaData = [
  {
    value: '浙江省',
    label: '浙江省',
    children: [
      {
        value: '杭州市',
        label: '杭州市',
        children: [
          {
            value: '西湖区',
            label: '西湖区'
          }
        ]
      },
      {
        value: '宁波市',
        label: '宁波市',
        children: [
          {
            value: '鄞州区',
            label: '鄞州区',
            children: null
          }
        ]
      }
    ]
  },
  {
    value: '上海市',
    label: '上海市',
    children: [
      {
        value: '上海市',
        label: '上海市',
        children: [
          {
            value: '宝山区',
            label: '宝山区',
            children: null
          }
        ]
      }
    ]
  },
  {
    value: '北京市',
    label: '北京市',
    children: null
  }
];

const handlePickerChange = (value, index) => {
  Toast.success({
    duration: 3000,
    message: `当前的value值:依次是${Object.values(value).join(',')}`
  });
};

const PickerDemo = () => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState();
  const [currentItems, setCurrentItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState();
  const [currentContent, setCurrentContent] = useState();
  const [currentCancelButton, setCurrentCancelButton] = useState(false);
  const [description, setDescription] = useState();

  const [picker] = usePicker();

  const [pickerTreeValue, setPickerTreeValue] = useState([]);

  const handleBase = () => {
    setCurrentTitle('基础样式');
    setCurrentItems([]);
    setVisible(true);
    setCurrentCancelButton(false);
    setCurrentContent(
      <PickerGroup
        defaultValue={{
          option3: 'value-6'
        }}
        height={300}
      >
        <Picker name="option3">
          {baseOptions.map(({ label, value }) => {
            return (
              <PickerItem key={value} value={value}>
                {label}
              </PickerItem>
            );
          })}
        </Picker>
      </PickerGroup>
    );
  };

  const handleMultipleColumns = () => {
    setCurrentTitle('自定义多列');
    setCurrentItems([]);
    setVisible(true);
    setCurrentCancelButton(false);
    setCurrentContent(
      <PickerGroup
        height={300}
        onChange={handlePickerChange}
        defaultValue={{
          clothes: '裙子',
          size: 37
        }}
      >
        <Picker name="clothes">
          {clothes.map(({ label, value }) => {
            return (
              <PickerItem key={value} value={value} label={label}>
                {label}
              </PickerItem>
            );
          })}
        </Picker>

        <Picker picker={picker} name="size" defaultValue={38}>
          {size.map(({ label, value }) => {
            return (
              <PickerItem key={value} value={value} label={label}>
                {label}
              </PickerItem>
            );
          })}
        </Picker>
      </PickerGroup>
    );
  };

  const handleLinkageColumns = () => {
    setCurrentTitle('自定义多列');
    setCurrentItems([]);
    setVisible(true);
    setCurrentCancelButton(false);
    setCurrentContent(
      <PickerTree
        value={pickerTreeValue}
        options={areaData}
        height={300}
        onChange={handlePickerChange}
      ></PickerTree>
    );
  };

  const handleClose = () => {
    setVisible(false);
    setColor('primary');
    setDescription('');
  };

  return (
    <>
      <DemoContainer title="基础样式" padding>
        <Cell title="基础样式" showArrow onClick={handleBase}></Cell>
      </DemoContainer>

      <DemoContainer title="自定义多列" padding>
        <Cell
          title="自定义多列"
          showArrow
          onClick={handleMultipleColumns}
        ></Cell>
      </DemoContainer>

      <DemoContainer title="多列联动数据" padding>
        <Cell
          title="多列联动数据"
          showArrow
          onClick={handleLinkageColumns}
        ></Cell>
      </DemoContainer>

      <ActionSheet
        visible={visible}
        color={color}
        description={description}
        title={currentTitle}
        items={currentItems}
        showCancelButton={currentCancelButton}
        onClickItem={handleClose}
        onSelect
        onClose={handleClose}
      >
        {currentContent}
      </ActionSheet>
    </>
  );
};

export default PickerDemo;
