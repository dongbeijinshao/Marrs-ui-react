# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。


### 引入

```js
import { ActionSheet, Cell, CellGroup, Can } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { useState } from 'react';
```

## 代码演示

### react部分

```jsx
const item1 = [{ title: '选项一' }, { title: '选项二' }, { title: '选项三' }];

const items = [
  {
    title: '标题',
    label: '副标题'
  },
  {
    title: '标题',
    label: '副标题'
  },
  {
    title: '标题',
    label: '副标题',
    icon: IconAdd
  },
  {
    title: '标题',
    label: '副标题',
    disabled: true
  }
];

 const [visible, setVisible] = useState(false);
  const [color, setColor] = useState();
  const [currentItems, setCurrentItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState();
  const [currentContent, setCurrentContent] = useState();
  const [currentCancelButton, setCurrentCancelButton] = useState(false);
  const [description, setDescription] = useState();

  const handleDes = () => {
    setColor();
    setCurrentItems(items);
    setVisible(true);
    setCurrentContent();
    setCurrentCancelButton(true);
  };

  const handleContent = () => {
    setColor();
    setCurrentTitle('标题');
    setCurrentItems(items);
    setVisible(true);
    setCurrentCancelButton(false);
    setCurrentContent(<Can sx={{ padding: 10 }}>内容</Can>);
  };

  const handleBase = () => {
    setColor();
    setCurrentItems(item1);
    setVisible(true);
    setCurrentContent();
    setCurrentCancelButton(false);
  };

  const handleCancel = () => {
    setColor();
    setCurrentItems(item1);
    setVisible(true);
    setCurrentContent();
    setCurrentCancelButton(true);
  };

  const handleClose = () => {
    setVisible(false);
    setColor();
    setDescription('');
  };
```

### 基本样式

```jsx
<CellGroup>
  <Cell title="基本用法" showArrow onClick={handleBase} />
  <Cell title="展示取消按钮" showArrow onClick={handleCancel} />
  <Cell title="展示描述信息" showArrow onClick={handleDes} />
</CellGroup>
<ActionSheet
  visible={visible}
  color={color}
  description={description}
  title="测试标题"
  items={items}
  onClickItem={handleClose}
  onSelect
  onClose={handleClose}
/>
```
### 自定义面板

```jsx
<CellGroup>
  <Cell title="自定义面板" showArrow onClick={handleContent} />
</CellGroup>
<ActionSheet
  visible={visible}
  color={color}
  description={description}
  title="测试标题"
  items={items}
  onClickItem={handleClose}
  onSelect
  onClose={handleClose}
/>
```

## API

### ActionSheetComponent


|参数|说明|类型|必须|
|--|--|--|--|
|color|组件色调|_primary \| secondary \| success \| error \| info \| warning_|否|
|visible| 是否显示动作面板 |_boolean_|否|
|title| 选项上方的描述信息 |_string_|否|
|description| 副标题 |_string_|否|
|showCancelButton| 是否显示关闭按钮 |_boolean_|否|
|cancelButtonText| 关闭按钮文案 |_string_|否|
|items|应用于该名称的样式类|_ActionSheetItem[]_|否|
|closeable| 是否显示关闭图标,如果有关闭图标，headStartBtnText，headEndBtnText 无效 |_boolean_|否|
|headStartBtnText| 头部左侧自定义模块 |_React.ReactNode_|否|
|headEndBtnText| 头部右侧自定义模块 |_React.ReactNode_|否|
|radius| 弹窗圆角 |_number_|否|

### ActionSheetAction

  > ActionSheet操作
  

|参数|说明|类型|必须|
|--|--|--|--|
|onClose| 点击关闭的回调|_React.EventHandler_|否|
|onClickItem| 点击某一项的回调|_React.EventHandler_|否|

### ActionSheetItem


|参数|说明|类型|必须|
|--|--|--|--|
|title| 标题，默认主题色 |_string_|否|
|label| 副标题 |_string_|否|
|icon|应用于该名称的样式类|_React.ReactNode_|否|
|disabled| 不可点击 |_boolean_|否|

### ActionSheetClasses


|参数|说明|类型|必须|
|--|--|--|--|
|root|应用于该名称的样式类|_string_|否|
|header|应用于该名称的样式类|_string_|否|
|footer|应用于该名称的样式类|_string_|否|
|body|应用于该名称的样式类|_string_|否|
|title|应用于该名称的样式类|_string_|否|
|item|应用于该名称的样式类|_string_|否|
|description|应用于该名称的样式类|_string_|否|
|itemLabel|应用于该名称的样式类|_string_|否|
|itemTitle|应用于该名称的样式类|_string_|否|
|backdrop|应用于该名称的样式类|_string_|否|
|popupRoot|应用于该名称的样式类|_string_|否|
