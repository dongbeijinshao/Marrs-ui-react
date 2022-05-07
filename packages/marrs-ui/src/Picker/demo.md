# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与弹出层组件配合使用。

### 引入

```js
import { PickerGroup, Picker ,PickerItem, PickerTree} from '@wemo-ui/marrs';
```

## 代码演示

### 基础样式

```jsx
使用 `PickerGroup` 组件包裹，子组件是 `Picker`，每一项是 `PickerItem`

import {
  Picker,
  PickerGroup,
  PickerItem
} from '@wemo-ui/marrs';

const options = [
  '小笼包子',
  '冰糖葫芦',
  '煎饼果子',
  '麻婆豆腐',
  '小炒牛肉',
  '鱼香肉丝',
  '水煮牛肉',
  '手撕包菜'
].map((label, value) => ({ label, value: 'value-' + value }));

const PickerDemo  = () => (
    <PickerGroup
        defaultValue={{
          option3: 'value-6'
        }}
        height={300}
      >
        <Picker name="option3">
          {options.map(({ label, value }) => {
            return (
              <PickerItem key={value} value={value}>
                {label}
              </PickerItem>
            );
          })}
        </Picker>
    </PickerGroup>
)
```

### 自定义多列数据

```jsx
使用 多个`Picker` 组件包裹可以自定义渲染内容

import {
  Picker,
  PickerGroup,
  PickerItem,
  Toast
} from '@wemo-ui/marrs';

const clothes = [
  { label: '短袖', value: '短袖' },
  { label: '裙子', value: '裙子' }
];

const size = [34, 35, 37, 38].map((num) => ({
  label: num,
  value: num
}));

const handlePickerChange = (value, index) => {
  // value 是值的集合
  // index 是索引的集合
  Toast.success({
    duration: 3000,
    message: `点击每列的 Picker 的value值:依次是${Object.values(value).join(
      ','
    )}`
  });
};

const PickerDemo  = () => (
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
)
```


### 多列联动数据
- 数据格式是树状结构（有联动需求，如省市区）使用 `PickerTree` 组件更方便

```jsx


import {
  PickerTree,
  Toast
} from '@wemo-ui/marrs';

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
  // value 是值的集合
  // index 是索引的集合
  Toast.success({
    duration: 3000,
    message: `当前的value值:依次是${Object.values(value).join(
      ','
    )}`
  });
};

const PickerDemo  = () => (
    <PickerTree
      value={pickerTreeValue}
      options={areaData}
      height={300}
      onChange={handelChange}
    ></PickerTree>
)
```