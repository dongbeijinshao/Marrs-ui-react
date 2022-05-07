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